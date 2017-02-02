var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MMutexLock Class Reference</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_mutex_lock.html\', tocPrefix);\n\
    dQuery(document).trigger(\'toc_initialized\');\n\
}\n\
if (tocSystemNeedsToBeLoaded)\n\
{\n\
	yepnope([{\n\
	load:[tocPrefix + \'json3.min.js\', tocPrefix + \'jquery.js\', tocPrefix + \'ref-toc-controller.js\', tocPrefix + \'dynsections.js\'],\n\
	complete: function() {\n\
	  if (typeof(dQuery) == \'undefined\')\n\
	  {\n\
	    dQuery = jQuery.noConflict(true);\n\
	  }\n\
	  else { jQuery.noConflict(true); }\n\
	  $(document).ready(cpp_ref_initializeToc);\n\
	}\n\
 	}])\n\
}\n\
if (!weAreIn21) { // if in AKN...\n\
$(window).load( function() {\n\
    setTimeout( function() {\n\
        var content = $(\'body > div\').not(\'#body-content\');     // take any divs under body that are not id=body-content\n\
        content.each( function() { \n\
            $(this).css( { \'padding-left\': $(this).css(\'margin-left\') } );       // and if they have any padding-left already, move it to margin-left.\n\
        } );\n\
        var width = cpp_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MMutexLock Class Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
</div><!-- top -->\n\
<div id=\"side-nav\" class=\"ui-resizable side-nav-resizable\">\n\
  <div id=\"nav-tree\">\n\
    <div id=\"nav-tree-contents\">\n\
      <div id=\"nav-sync\" class=\"sync\"></div>\n\
    </div>\n\
  </div>\n\
  <div id=\"splitbar\" style=\"-moz-user-select:none;\" class=\"ui-resizable-handle\">\n\
  </div>\n\
</div>\n\
\n\
<div id=\"doc-content\">\n\
<div class=\"header\">\n\
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MMutexLock Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-2BEF58D3-6162-4235-A6CE-3D8B0742A0AE.htm\">Multithreading plug-ins &gt; Threading and Maya</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-8678AAA7-0A59-423F-A6BA-D4B98F2A00E9.htm\">Multithreading plug-ins &gt; API Classes and plug-ins</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Technical_Notes_Threading_and_Maya_API.htm\">Technical Notes &gt; Threading and Maya API</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_mutex_lock.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MMutexLock.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Methods for managing locks on threads created with <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_thread_pool.html\" title=\"Methods for creating and managing a thread pool. \">MThreadPool</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_thread_async.html\" title=\"Methods for creating threads. \">MThreadAsync</a>. </p>\n\
<p>Mutex lock class to be used with threads created by <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_thread_pool.html\" title=\"Methods for creating and managing a thread pool. \">MThreadPool</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_thread_async.html\" title=\"Methods for creating threads. \">MThreadAsync</a>. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cv_color_shader_2cv_color_shader_8cpp-example.html#_a11\">cvColorShader/cvColorShader.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/threading_lock_tests_2threading_lock_tests_8cpp-example.html#_a1\">threadingLockTests/threadingLockTests.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/thread_test_with_locks_cmd_2thread_test_with_locks_cmd_8cpp-example.html#_a2\">threadTestWithLocksCmd/threadTestWithLocksCmd.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a59c125ecb3ed37ed8bc7a246ac7ad6af\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_mutex_lock.html#a59c125ecb3ed37ed8bc7a246ac7ad6af\">MMutexLock</a> ()</td></tr>\n\
<tr class=\"memdesc:a59c125ecb3ed37ed8bc7a246ac7ad6af\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Create new mutex object.  <a href=\"class_m_mutex_lock.html#a59c125ecb3ed37ed8bc7a246ac7ad6af\">More...</a><br></td></tr>\n\
<tr class=\"separator:a59c125ecb3ed37ed8bc7a246ac7ad6af\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0d7c113eaed1419bc943cb454e45a65b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_mutex_lock.html#a0d7c113eaed1419bc943cb454e45a65b\">~MMutexLock</a> ()</td></tr>\n\
<tr class=\"memdesc:a0d7c113eaed1419bc943cb454e45a65b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Calling the destructor on a locked mutex does not unlock the mutex.  <a href=\"class_m_mutex_lock.html#a0d7c113eaed1419bc943cb454e45a65b\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0d7c113eaed1419bc943cb454e45a65b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa81aed607133209dade63a226818224d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_mutex_lock.html#aa81aed607133209dade63a226818224d\">lock</a> ()</td></tr>\n\
<tr class=\"memdesc:aa81aed607133209dade63a226818224d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Create a lock.  <a href=\"class_m_mutex_lock.html#aa81aed607133209dade63a226818224d\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa81aed607133209dade63a226818224d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9278be8203e1c42e2619179882ae4403\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a9278be8203e1c42e2619179882ae4403\"></a>\n\
void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_mutex_lock.html#a9278be8203e1c42e2619179882ae4403\">unlock</a> ()</td></tr>\n\
<tr class=\"memdesc:a9278be8203e1c42e2619179882ae4403\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Release the current lock on a mutex. <br></td></tr>\n\
<tr class=\"separator:a9278be8203e1c42e2619179882ae4403\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac1aa74f9e66d65b9dccf7a2e92921192\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_mutex_lock.html#ac1aa74f9e66d65b9dccf7a2e92921192\">tryLock</a> ()</td></tr>\n\
<tr class=\"memdesc:ac1aa74f9e66d65b9dccf7a2e92921192\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Attempt to lock the mutex.  <a href=\"class_m_mutex_lock.html#ac1aa74f9e66d65b9dccf7a2e92921192\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac1aa74f9e66d65b9dccf7a2e92921192\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a59c125ecb3ed37ed8bc7a246ac7ad6af\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_mutex_lock.html\">MMutexLock</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Create new mutex object. </p>\n\
<p>The object is created unlocked. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0d7c113eaed1419bc943cb454e45a65b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">~<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_mutex_lock.html\">MMutexLock</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Calling the destructor on a locked mutex does not unlock the mutex. </p>\n\
<p>That must be done by calling <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_mutex_lock.html#a9278be8203e1c42e2619179882ae4403\" title=\"Release the current lock on a mutex. \">unlock()</a> before calling the destructor. </p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"aa81aed607133209dade63a226818224d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void lock </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Create a lock. </p>\n\
<p>If the mutex is available it is locked immediately. If it is already locked by another thread, this function waits until the other thread has unlocked it, then creates the lock. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/threading_lock_tests_2threading_lock_tests_8cpp-example.html#a2\">threadingLockTests/threadingLockTests.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac1aa74f9e66d65b9dccf7a2e92921192\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool tryLock </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Attempt to lock the mutex. </p>\n\
<p>If the mutex is already locked by another thread, the function returns right away.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>true</b> lock was obtained </li>\n\
<li><b>false</b> lock was not obtained </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MMutexLock.h</li>\n\
<li>MMutexLock.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";