var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>OpenMaya.MItSelectionList Class Reference</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"Python\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(py_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'py_ref/\'; }\n\
function py_ref_initializeToc(forceTrigger) {\n\
    py_ref_adsk_ref_toc.initResizable();\n\
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_1_1_m_it_selection_list.html\', tocPrefix);\n\
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
	  $(document).ready(py_ref_initializeToc);\n\
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
        var width = py_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { py_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>OpenMaya.MItSelectionList Class Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/namespaces.html\"><span>Modules</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
<div class=\"title\">OpenMaya.MItSelectionList Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Selecting_with_the_API_MItSelectionList.htm\">Selecting with the API &gt; MItSelectionList</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-0B85C721-C3C6-47D7-9D85-4F27B787ABB6.htm\">Maya Python API &gt; Maya Python Plug-in Learning Path &gt; Command Plug-in Basics &gt; Querying the Scene Graph</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Maya_Python_API_Using_the_Maya_Python_API.htm\">Maya Python API &gt; Maya Python API 1.0 &gt; Using the Maya Python API</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Example_Plugins_Example_C_plugin_descriptions.htm\">Example Plug-ins &gt; Example C++ plug-in descriptions</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Appendices_Appendix_D_Frequently_asked_questions.htm\">Appendices &gt; Appendix C: Frequently asked questions</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Appendices_Appendix_E_API_and_Devkit_limitations.htm\">Appendices &gt; Appendix D: API and Developer Kit limitations</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_1_1_m_it_selection_list.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_1_1_m_it_selection_list.html#pub-static-attribs\">Static Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Class for iterating over the items in an MSelection list.</pre> </div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMaya.MItSelectionList:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_1_1_m_it_selection_list.png\" usemap=\"#OpenMaya.MItSelectionList_map\" alt=\"\">\n\
  <map id=\"OpenMaya.MItSelectionList_map\" name=\"OpenMaya.MItSelectionList_map\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a7b0c083a1675789839bcfa7eb218cfef\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#a7b0c083a1675789839bcfa7eb218cfef\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a7b0c083a1675789839bcfa7eb218cfef\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a00a8198e20835623f8923631037dd0ff\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#a00a8198e20835623f8923631037dd0ff\">getComponent</a> ()</td></tr>\n\
<tr class=\"separator:a00a8198e20835623f8923631037dd0ff\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae9c049a0df1cd4fa2cf60dae0bed44df\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#ae9c049a0df1cd4fa2cf60dae0bed44df\">getDagPath</a> ()</td></tr>\n\
<tr class=\"separator:ae9c049a0df1cd4fa2cf60dae0bed44df\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab3a298e1116868369bfb3501b14034db\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#ab3a298e1116868369bfb3501b14034db\">getDependNode</a> ()</td></tr>\n\
<tr class=\"separator:ab3a298e1116868369bfb3501b14034db\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3fe0ba62f488d551264aa1be607f91e8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#a3fe0ba62f488d551264aa1be607f91e8\">getPlug</a> ()</td></tr>\n\
<tr class=\"separator:a3fe0ba62f488d551264aa1be607f91e8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab10ebd5b2cc9967d195728a6d5d10c97\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#ab10ebd5b2cc9967d195728a6d5d10c97\">getStrings</a> ()</td></tr>\n\
<tr class=\"separator:ab10ebd5b2cc9967d195728a6d5d10c97\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af4eccf3a245affcf4a27ae95cbaa8ba0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#af4eccf3a245affcf4a27ae95cbaa8ba0\">hasComponents</a> ()</td></tr>\n\
<tr class=\"separator:af4eccf3a245affcf4a27ae95cbaa8ba0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a160e4064688682d9cc1a1670d4eb4ef7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#a160e4064688682d9cc1a1670d4eb4ef7\">isDone</a> ()</td></tr>\n\
<tr class=\"separator:a160e4064688682d9cc1a1670d4eb4ef7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a079bd119cafe3fd499ec28b2c4acfc43\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#a079bd119cafe3fd499ec28b2c4acfc43\">itemType</a> ()</td></tr>\n\
<tr class=\"separator:a079bd119cafe3fd499ec28b2c4acfc43\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0eaff1cda8d51a94aac10ce5d6eb213b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#a0eaff1cda8d51a94aac10ce5d6eb213b\">next</a> ()</td></tr>\n\
<tr class=\"separator:a0eaff1cda8d51a94aac10ce5d6eb213b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0120bb3c4e99440a80a2b8611cacee50\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#a0120bb3c4e99440a80a2b8611cacee50\">reset</a> ()</td></tr>\n\
<tr class=\"separator:a0120bb3c4e99440a80a2b8611cacee50\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2085c86c2a618d7f6b465971c503c45e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#a2085c86c2a618d7f6b465971c503c45e\">setFilter</a> ()</td></tr>\n\
<tr class=\"separator:a2085c86c2a618d7f6b465971c503c45e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-attribs\"></a>\n\
Static Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a85c8e1e6ff7cb377266115cd798da741\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a85c8e1e6ff7cb377266115cd798da741\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kAnimSelectionItem</b> = 1</td></tr>\n\
<tr class=\"separator:a85c8e1e6ff7cb377266115cd798da741\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad71c553825e92e6d133f7fc7c30a09b8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ad71c553825e92e6d133f7fc7c30a09b8\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kDNselectionItem</b> = 2</td></tr>\n\
<tr class=\"separator:ad71c553825e92e6d133f7fc7c30a09b8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6777577c1ebe5a7669ca58f2e50c2b74\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a6777577c1ebe5a7669ca58f2e50c2b74\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kDagSelectionItem</b> = 0</td></tr>\n\
<tr class=\"separator:a6777577c1ebe5a7669ca58f2e50c2b74\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aec7df3770f160747529b0f5155b18286\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aec7df3770f160747529b0f5155b18286\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kPlugSelectionItem</b> = 3</td></tr>\n\
<tr class=\"separator:aec7df3770f160747529b0f5155b18286\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8406da3e4a3ad2c7cb6adb3a2be65817\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8406da3e4a3ad2c7cb6adb3a2be65817\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kUnknownItem</b> = -1</td></tr>\n\
<tr class=\"separator:a8406da3e4a3ad2c7cb6adb3a2be65817\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a7b0c083a1675789839bcfa7eb218cfef\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MItSelectionList.__init__ </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">x.__init__(...) initializes x; see help(type(x)) for signature</pre> \n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a00a8198e20835623f8923631037dd0ff\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MItSelectionList.getComponent </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">getComponent() -&gt; (MDagPath, MObject)\n\
\n\
This method retrieves the dag path and the component of the current selection item.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae9c049a0df1cd4fa2cf60dae0bed44df\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MItSelectionList.getDagPath </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">getDagPath() -&gt; MDagPath\n\
\n\
This method retrieves the dag path of the current selection item.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab3a298e1116868369bfb3501b14034db\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MItSelectionList.getDependNode </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">getDependNode() -&gt; MObject\n\
\n\
This method retrieves the dependency node of the current selection item</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3fe0ba62f488d551264aa1be607f91e8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MItSelectionList.getPlug </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">getPlug() -&gt; MPlug\n\
\n\
This method retrieves the plug of the current selection item.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab10ebd5b2cc9967d195728a6d5d10c97\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MItSelectionList.getStrings </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">getStrings() -&gt; list of strings\n\
\n\
Get the string representation of the current item in the selection list.\n\
It is possible that it will require more than one string to represent the item (the item may contain groups of CVs for example)</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af4eccf3a245affcf4a27ae95cbaa8ba0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MItSelectionList.hasComponents </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">hasComponents() -&gt; bool\n\
\n\
Returns whether or not the current selection item has components.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a160e4064688682d9cc1a1670d4eb4ef7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MItSelectionList.isDone </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">isDone() -&gt; bool\n\
\n\
Specifies whether or not there is anything more to iterator over.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a079bd119cafe3fd499ec28b2c4acfc43\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MItSelectionList.itemType </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">itemType() -&gt; int\n\
\n\
Returns the current selection item type.\n\
\n\
  kDagSelectionItem    selection item is in the DAG\n\
  kAnimSelectionItem   selection item is a keyset\n\
  kDNselectionItem     selection item is a dependency node</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0eaff1cda8d51a94aac10ce5d6eb213b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MItSelectionList.next </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">next() -&gt; self\n\
\n\
Advance to the next item. If components are selected then advance to next component.\n\
\n\
If a filter is specified then the next item will be one that matches the filter.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0120bb3c4e99440a80a2b8611cacee50\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MItSelectionList.reset </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">reset() -&gt; self\n\
\n\
Reset the iterator.\n\
If a filter has been specified then the current item will be the first selected item that matches the filter.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2085c86c2a618d7f6b465971c503c45e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MItSelectionList.setFilter </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">setFilter(filter) -&gt; self\n\
\n\
Apply a filter to the iteration.\n\
Selection items not matching the filter type will be excluded from the iteration.</pre> \n\
</div>\n\
</div>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";