var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>StreamSerializer Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_data_1_1_stream_serializer.html\', tocPrefix);\n\
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
            <h1>StreamSerializer Class Reference</h1>\n\
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
<div class=\"title\">StreamSerializer Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classadsk_1_1_data_1_1_stream_serializer.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;adskDataStreamSerializer.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Class handling the definition of the format for serialization of data streams. </p>\n\
<p>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> class manages stream definitions. They are persisted using a serialization format implemented through the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_serializer.html\" title=\"Class handling the definition of the format for serialization of data streams. \">adsk::Data::StreamSerializer</a> hierarchy. The base class defines the interface and manages the list of available stream serialization formats. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_metadata_sample_2export_metadata_cmd_8cpp-example.html#_a10\">MetadataSample/exportMetadataCmd.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_metadata_x_m_l_2stream_serializer_x_m_l_8cpp-example.html#_a0\">MetadataXML/streamSerializerXML.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_metadata_x_m_l_2stream_serializer_x_m_l_8h-example.html#_a0\">MetadataXML/streamSerializerXML.h</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a90e97e65175a216322792f1be5ad4504\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a90e97e65175a216322792f1be5ad4504\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_serializer.html#a90e97e65175a216322792f1be5ad4504\">StreamSerializer</a> ()</td></tr>\n\
<tr class=\"memdesc:a90e97e65175a216322792f1be5ad4504\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor, does nothing. <br></td></tr>\n\
<tr class=\"separator:a90e97e65175a216322792f1be5ad4504\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af1d1bce581a6d4dfcb1ec42c2cd8e59a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af1d1bce581a6d4dfcb1ec42c2cd8e59a\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_serializer.html#af1d1bce581a6d4dfcb1ec42c2cd8e59a\">~StreamSerializer</a> ()</td></tr>\n\
<tr class=\"memdesc:af1d1bce581a6d4dfcb1ec42c2cd8e59a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default destructor, does nothing. <br></td></tr>\n\
<tr class=\"separator:af1d1bce581a6d4dfcb1ec42c2cd8e59a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aceb1f2ccf16418ac4b2d5b9ed6abaa10\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\">Stream</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_serializer.html#aceb1f2ccf16418ac4b2d5b9ed6abaa10\">read</a> (std::istream &amp;cSrc, std::string &amp;errors) const  =0</td></tr>\n\
<tr class=\"memdesc:aceb1f2ccf16418ac4b2d5b9ed6abaa10\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Implement this to parse the serialized form of an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> object.  <a href=\"classadsk_1_1_data_1_1_stream_serializer.html#aceb1f2ccf16418ac4b2d5b9ed6abaa10\">More...</a><br></td></tr>\n\
<tr class=\"separator:aceb1f2ccf16418ac4b2d5b9ed6abaa10\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0ffb777d548869421e676f0f86ac5996\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_serializer.html#a0ffb777d548869421e676f0f86ac5996\">write</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\">Stream</a> &amp;dataToWrite, std::ostream &amp;cDst, std::string &amp;errors) const  =0</td></tr>\n\
<tr class=\"memdesc:a0ffb777d548869421e676f0f86ac5996\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Implement this to output the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> definition in your serialization format.  <a href=\"classadsk_1_1_data_1_1_stream_serializer.html#a0ffb777d548869421e676f0f86ac5996\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0ffb777d548869421e676f0f86ac5996\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a093c45f6d5cfb70297875c9e67da5b3b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_serializer.html#a093c45f6d5cfb70297875c9e67da5b3b\">getFormatDescription</a> (std::ostream &amp;info) const  =0</td></tr>\n\
<tr class=\"memdesc:a093c45f6d5cfb70297875c9e67da5b3b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Implement this to provide a description of your <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> serialization format.  <a href=\"classadsk_1_1_data_1_1_stream_serializer.html#a093c45f6d5cfb70297875c9e67da5b3b\">More...</a><br></td></tr>\n\
<tr class=\"separator:a093c45f6d5cfb70297875c9e67da5b3b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"aceb1f2ccf16418ac4b2d5b9ed6abaa10\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\">Stream</a> * read </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::istream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>cSrc</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">std::string &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>errors</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implement this to parse the serialized form of an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> object. </p>\n\
<p>Given an input stream containing your serialization of an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> object parse the data and create the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> object it describes.</p>\n\
<p>If there are any problems the detailed error information should be returned in the errors string.</p>\n\
<p>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> parsing should also recursively populate any data within the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a>. This method should be capable of understanding any data which your <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_serializer.html#a0ffb777d548869421e676f0f86ac5996\" title=\"Implement this to output the adsk::Data::Stream definition in your serialization format. \">adsk::Data::StreamSerializer::write</a> method can provide.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">cSrc</td><td>Input stream containing serialization of the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">errors</td><td>String containing description of parse errors</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Pointer to the newly created <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> object </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0ffb777d548869421e676f0f86ac5996\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">int write </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\">Stream</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>dataToWrite</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">std::ostream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>cDst</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">std::string &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>errors</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implement this to output the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> definition in your serialization format. </p>\n\
<p>Given an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> object and an output stream as destination write out enough information so that you can recreate the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> from data in the output stream using your <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_serializer.html#aceb1f2ccf16418ac4b2d5b9ed6abaa10\" title=\"Implement this to parse the serialized form of an adsk::Data::Stream object. \">adsk::Data::StreamSerializer::read()</a> method.</p>\n\
<p>This serialization should include all data values within the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> obejct.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">dataToWrite</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> to be serialized </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">cDst</td><td>stream to which the object is to be serialized </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">errors</td><td>String containing description of write errors</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>number of errors found during write (0 means success) </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a093c45f6d5cfb70297875c9e67da5b3b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void getFormatDescription </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::ostream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>info</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implement this to provide a description of your <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">adsk::Data::Stream</a> serialization format. </p>\n\
<p>Output a textual description of your serialization format into the given stream.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">info</td><td>stream in which to output your serialization format description </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>adskDataStreamSerializer.h</li>\n\
<li>adskDataStreamSerializer.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";