var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Footprint Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_debug_1_1_footprint.html\', tocPrefix);\n\
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
            <h1>Footprint Class Reference</h1>\n\
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
<div class=\"title\">Footprint Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classadsk_1_1_debug_1_1_footprint.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"classadsk_1_1_debug_1_1_footprint.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"classadsk_1_1_debug_1_1_footprint.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;adskDebugFootprint.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Class implementing the gathering of data footprint information. </p>\n\
<p>It\'s always useful to know how much space your data occupies and how spread out it is. This class provides a simple method to gather that information for reporting and analysis. It\'s set up to accumulate data of interest recursively from a set of root objects.</p>\n\
<p>This base implementation just collects total sizes. More complex implementations could gather size bucketing information, avoid collecting duplicates, track memory fragmentation, etc.</p>\n\
<p>By putting it into a hierarchy you can choose how efficient the collection will be by the footprint object type you instantiate. </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a746d7cc6209b5f8a80176a65a69a2c19\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a746d7cc6209b5f8a80176a65a69a2c19\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html#a746d7cc6209b5f8a80176a65a69a2c19\">Footprint</a> ()</td></tr>\n\
<tr class=\"memdesc:a746d7cc6209b5f8a80176a65a69a2c19\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor - does nothing. <br></td></tr>\n\
<tr class=\"separator:a746d7cc6209b5f8a80176a65a69a2c19\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a040bdd82fcdcedb9743b54c5339f0842\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a040bdd82fcdcedb9743b54c5339f0842\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html#a040bdd82fcdcedb9743b54c5339f0842\">~Footprint</a> ()</td></tr>\n\
<tr class=\"memdesc:a040bdd82fcdcedb9743b54c5339f0842\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default destructor - does nothing. <br></td></tr>\n\
<tr class=\"separator:a040bdd82fcdcedb9743b54c5339f0842\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa336224e78d40b92430ceb60bf81315e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">size_t&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html#aa336224e78d40b92430ceb60bf81315e\">totalSize</a> () const </td></tr>\n\
<tr class=\"memdesc:aa336224e78d40b92430ceb60bf81315e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Return the total size of objects collected for.  <a href=\"classadsk_1_1_debug_1_1_footprint.html#aa336224e78d40b92430ceb60bf81315e\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa336224e78d40b92430ceb60bf81315e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0775f84550450b84ec10b74f53da807a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">size_t&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html#a0775f84550450b84ec10b74f53da807a\">totalFragments</a> () const </td></tr>\n\
<tr class=\"memdesc:a0775f84550450b84ec10b74f53da807a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Return the total number of objects collected for.  <a href=\"classadsk_1_1_debug_1_1_footprint.html#a0775f84550450b84ec10b74f53da807a\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0775f84550450b84ec10b74f53da807a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac8bb3912a3ce86b15842e79d0b421204\"></a>\n\
virtual void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html#ac8bb3912a3ce86b15842e79d0b421204\">clear</a> ()</td></tr>\n\
<tr class=\"memdesc:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Clear out current footprint information. <br></td></tr>\n\
<tr class=\"separator:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab751819a96ef6ec089ae93bcd3a583c0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html#ab751819a96ef6ec089ae93bcd3a583c0\">addMember</a> (const void *where, size_t howBig)</td></tr>\n\
<tr class=\"memdesc:ab751819a96ef6ec089ae93bcd3a583c0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Use to add members of an object (e.g. strlen of a char*)  <a href=\"classadsk_1_1_debug_1_1_footprint.html#ab751819a96ef6ec089ae93bcd3a583c0\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab751819a96ef6ec089ae93bcd3a583c0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a87b8af7721dada3f5e50a62718a3d5de\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html#a87b8af7721dada3f5e50a62718a3d5de\">addObject</a> (const void *where, size_t howBig)</td></tr>\n\
<tr class=\"memdesc:a87b8af7721dada3f5e50a62718a3d5de\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Use to add real objects (e.g. \"this\" in a class)  <a href=\"classadsk_1_1_debug_1_1_footprint.html#a87b8af7721dada3f5e50a62718a3d5de\">More...</a><br></td></tr>\n\
<tr class=\"separator:a87b8af7721dada3f5e50a62718a3d5de\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a7c83af65a2e813eee6f972325b60c47c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html#a7c83af65a2e813eee6f972325b60c47c\">Debug</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\">Footprint</a> *me, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\">Print</a> &amp;request)</td></tr>\n\
<tr class=\"memdesc:a7c83af65a2e813eee6f972325b60c47c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Answer a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\" title=\"Class implementing debug printing operation. \">Print</a> request for a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\" title=\"Class implementing the gathering of data footprint information. \">Footprint</a> object.  <a href=\"classadsk_1_1_debug_1_1_footprint.html#a7c83af65a2e813eee6f972325b60c47c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7c83af65a2e813eee6f972325b60c47c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2198ea55c8ecc56b8d355b2c939142d7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html#a2198ea55c8ecc56b8d355b2c939142d7\">Debug</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\">Footprint</a> *me, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\">Footprint</a> &amp;request)</td></tr>\n\
<tr class=\"memdesc:a2198ea55c8ecc56b8d355b2c939142d7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Answer a footprint request for a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\" title=\"Class implementing the gathering of data footprint information. \">Footprint</a> object.  <a href=\"classadsk_1_1_debug_1_1_footprint.html#a2198ea55c8ecc56b8d355b2c939142d7\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2198ea55c8ecc56b8d355b2c939142d7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:ad9e5f4b618014b4a68f25c5fcd0a4648\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ad9e5f4b618014b4a68f25c5fcd0a4648\"></a>\n\
bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html#ad9e5f4b618014b4a68f25c5fcd0a4648\">fSkipObject</a></td></tr>\n\
<tr class=\"memdesc:ad9e5f4b618014b4a68f25c5fcd0a4648\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_count.html\" title=\"Class implementing debug object counting operation. \">Count</a> of objects in distinct locations. <br></td></tr>\n\
<tr class=\"separator:ad9e5f4b618014b4a68f25c5fcd0a4648\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"aa336224e78d40b92430ceb60bf81315e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">size_t totalSize </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Return the total size of objects collected for. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Number of bytes reported for objects so far </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0775f84550450b84ec10b74f53da807a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">size_t totalFragments </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Return the total number of objects collected for. </p>\n\
<p>This count is useful for determining a rough estimate of fragmentation. The more objects there are the greater the possibility of fragmentation.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Number of objects so far </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab751819a96ef6ec089ae93bcd3a583c0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void addMember </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const void *&#160;</td>\n\
          <td class=\"paramname\"><em>obj</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">size_t&#160;</td>\n\
          <td class=\"paramname\"><em>howBig</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Use to add members of an object (e.g. strlen of a char*) </p>\n\
<p>Add a new object to the footprint statistics.</p>\n\
<p>Don\'t use this for real class objects, only native types. e.g. for a char* member in a class you\'d use addMember(me-&gt;myStr, strlen(me-&gt;myStr))</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">obj</td><td>Pointer to the object being collected </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">howBig</td><td>Number of bytes the object occupies (including padding) </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a87b8af7721dada3f5e50a62718a3d5de\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void addObject </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const void *&#160;</td>\n\
          <td class=\"paramname\"><em>where</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">size_t&#160;</td>\n\
          <td class=\"paramname\"><em>howBig</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Use to add real objects (e.g. \"this\" in a class) </p>\n\
<p>Add a class object to the footprint statistics.</p>\n\
<p>Use this version when adding real class objects. See the ParentFootprint macro in adskFootprint.h for information on collecting footprint information in a class hierarchy using this method.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">where</td><td>Pointer to the class object being added </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">howBig</td><td>Size of the class object </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7c83af65a2e813eee6f972325b60c47c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool Debug </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\">Footprint</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>me</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\">Print</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>request</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Answer a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\" title=\"Class implementing debug printing operation. \">Print</a> request for a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\" title=\"Class implementing the gathering of data footprint information. \">Footprint</a> object. </p>\n\
<p>Use the request object to dump all information on the \"me\" <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\" title=\"Class implementing the gathering of data footprint information. \">Footprint</a>, or all static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\" title=\"Class implementing the gathering of data footprint information. \">Footprint</a> information if \"me\" is NULL.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">me</td><td>Pointer to object to debug, NULL means class static </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">request</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\" title=\"Class implementing debug printing operation. \">Print</a> request object</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the request was successfully processed. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2198ea55c8ecc56b8d355b2c939142d7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool Debug </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\">Footprint</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>me</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\">Footprint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>request</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Answer a footprint request for a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\" title=\"Class implementing the gathering of data footprint information. \">Footprint</a> object. </p>\n\
<p>Populate the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\" title=\"Class implementing the gathering of data footprint information. \">Footprint</a> request with the information on all data stored within this class if \"me\" is NULL, otherwise the information stored in the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\" title=\"Class implementing the gathering of data footprint information. \">Footprint</a> object pointed at by \"me\".</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">me</td><td>Pointer to object to footprint, NULL means class static </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">request</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\" title=\"Class implementing the gathering of data footprint information. \">Footprint</a> object to populate</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the request was successfully processed. The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\" title=\"Class implementing the gathering of data footprint information. \">Footprint</a> object will have all information added to it. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>adskDebugFootprint.h</li>\n\
<li>adskDebugFootprint.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";