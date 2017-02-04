#!/usr/bin/env python
"""
This module is a script that cleans up the default HTML Maya Doxygen
documentation to be usable as standalone.
"""
import logging
import multiprocessing
import os
import shutil
from bs4 import BeautifulSoup


def chunk(l, n):
    return [l[i:i+n] for i in range(0, len(l), n)]


def format_file(all_files, docs_path, output_path):
    """
    This function formats the ``list`` of HTML documentation files given and
    writes the output files to a subdirectory.
    """
    logger = logging.getLogger(__name__)
    for i, f in enumerate(all_files):
        if os.path.splitext(f)[-1] != '.html':
            continue

        html = open(os.path.join(docs_path, f)).read()
        soup = BeautifulSoup(html, 'html.parser')
        for link in soup.find_all('a'):
            href = link.get('href')
            if href and '#!/url=./cpp_ref/' in href:
                new_href = href.replace('#!/url=./cpp_ref/', './')
                link['href'] = new_href

        # Also insert anchors in order for table of contents to work
        for td in soup.find_all('td'):
            if td.get('class') and 'memname' in td.get('class') and td.a:
                member_name = td.contents[-1]
                if member_name and len(member_name) > 2:
                    member_name = member_name.split(' ')[-2]
                    new_tag = soup.new_tag('a')
                    new_tag['name'] = '//apple_ref/cpp/Function/{0}'.format(member_name)
                    new_tag['class'] = 'dashAnchor'
                    td.insert(0, new_tag)

        with open(os.path.join(output_path, f), 'w') as of:
            of.write(str(soup))

    logger.debug('Job complete!')


def main():
    """This is the main entry point of the program."""

    logger = logging.getLogger(__name__)
    docs_path = os.path.join(os.path.dirname(
                            os.path.dirname(os.path.abspath(__file__))
                        ),
                          'maya-2016-cpp-reference.docset',
                          'Contents',
                          'Resources',
                          'Documents')

    if not os.path.isdir(docs_path):
        raise IOError('The directory: {0} does not exist!'
                .format(docs_path))

    logger.info('Formatting documentation...')

    output_path = os.path.join(docs_path, 'output')
    if os.path.isdir(output_path):
        logger.info('Removing existing directory...')
        shutil.rmtree(output_path)
    os.makedirs(output_path)

    all_files = os.listdir(docs_path)
    logger.debug('Total number of files to process: {0}'.format(len(all_files)))
    jobs = []
    for s in chunk(all_files, 500):
        job = multiprocessing.Process(target=format_file, args=(s, docs_path, output_path))
        jobs.append(job)

    logger.debug('Num. of jobs scheduled: {0}'.format(len(jobs)))
    [j.start() for j in jobs]
    logger.info('Jobs submitted, please wait for them to complete!')


if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    main()
