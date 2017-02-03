var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>OpenMayaRender.MRenderOverride Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_render_1_1_m_render_override.html\', tocPrefix);\n\
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
            <h1>OpenMayaRender.MRenderOverride Class Reference</h1>\n\
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
<div class=\"title\">OpenMayaRender.MRenderOverride Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-6644CF46-6648-45B8-A3D8-76EDD7712571.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-DBDCB848-B0A5-4256-912C-6FCE25D12984.htm\">What\'s New / What\'s Changed? &gt; Autodesk Maya 2015</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-9DBD7E49-7A17-4CEB-89AF-A3B509AD91E2.htm\">What\'s New / What\'s Changed? &gt; Autodesk Maya 2014</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-F0CA7A2C-EE99-4A95-9E5E-C187F000092C.htm\">What\'s New / What\'s Changed? &gt; Extension for Autodesk Maya 2013</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-FBDD64EE-AD07-4EA2-A07A-D792B5B5DE0C.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Rendering Overrides</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-7E935B18-FFBB-4DD3-82EA-A2175CF7795C.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Transition Guide</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-9A5432D0-FA89-4E64-8277-22DC81680B20.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Developer Kit Samples</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-463B61EA-ABBB-4237-BC78-5073DA1390F4.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Texture creation and texture manager</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-9B9CDD21-F3AD-4B79-B610-AAA42D4C6599.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Frame and draw contexts</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-32D46A07-2FEA-4D19-8782-DF4C5C8AAB1B.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Plug-in Entry Points &gt; Render Loop Overrides</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-D1853655-D22D-4B1C-8CBD-528CD1903B0E.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Lighting Interfaces</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_render_1_1_m_render_override.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Class which defines a 2d geometry quad render.</pre> </div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMayaRender.MRenderOverride:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_render_1_1_m_render_override.png\" usemap=\"#OpenMayaRender.MRenderOverride_map\" alt=\"\">\n\
  <map id=\"OpenMayaRender.MRenderOverride_map\" name=\"OpenMayaRender.MRenderOverride_map\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a8236aedce92d323b879c7435d3f1acb1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#a8236aedce92d323b879c7435d3f1acb1\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a8236aedce92d323b879c7435d3f1acb1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab7a17d6ceb19167f12fa0cede95a3039\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#ab7a17d6ceb19167f12fa0cede95a3039\">cleanup</a> ()</td></tr>\n\
<tr class=\"separator:ab7a17d6ceb19167f12fa0cede95a3039\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a771acea12d94d64780f6a25d87e7786e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#a771acea12d94d64780f6a25d87e7786e\">name</a> ()</td></tr>\n\
<tr class=\"separator:a771acea12d94d64780f6a25d87e7786e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa727aeb5624e4eb69ad659fc35d6be15\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#aa727aeb5624e4eb69ad659fc35d6be15\">nextRenderOperation</a> ()</td></tr>\n\
<tr class=\"separator:aa727aeb5624e4eb69ad659fc35d6be15\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6b2215a434690099f48de664e40dec48\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#a6b2215a434690099f48de664e40dec48\">renderOperation</a> ()</td></tr>\n\
<tr class=\"separator:a6b2215a434690099f48de664e40dec48\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aafa1bdf70c0e23993b38a51bc81d556b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#aafa1bdf70c0e23993b38a51bc81d556b\">setup</a> ()</td></tr>\n\
<tr class=\"separator:aafa1bdf70c0e23993b38a51bc81d556b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a20ef900cbdcb8453731e690be719bb07\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#a20ef900cbdcb8453731e690be719bb07\">startOperationIterator</a> ()</td></tr>\n\
<tr class=\"separator:a20ef900cbdcb8453731e690be719bb07\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af5f12730e7fbf41a9f4353827216ad0c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#af5f12730e7fbf41a9f4353827216ad0c\">supportedDrawAPIs</a> ()</td></tr>\n\
<tr class=\"separator:af5f12730e7fbf41a9f4353827216ad0c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad38873fb6a62421f6561e38ae1e3679d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#ad38873fb6a62421f6561e38ae1e3679d\">uiName</a> ()</td></tr>\n\
<tr class=\"separator:ad38873fb6a62421f6561e38ae1e3679d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a8236aedce92d323b879c7435d3f1acb1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MRenderOverride.__init__ </td>\n\
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
<a class=\"anchor\" id=\"ab7a17d6ceb19167f12fa0cede95a3039\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MRenderOverride.cleanup </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">cleanup() -&gt; self\n\
\n\
Perform any cleanup required following the execution of render operations.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a771acea12d94d64780f6a25d87e7786e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MRenderOverride.name </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">name() -&gt; string\n\
\n\
Returns the name of the override.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa727aeb5624e4eb69ad659fc35d6be15\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MRenderOverride.nextRenderOperation </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">nextRenderOperation() -&gt; bool\n\
\n\
Iterate to the next operation. If there are no more operations then this method should return false.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6b2215a434690099f48de664e40dec48\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MRenderOverride.renderOperation </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">renderOperation() -&gt; MRenderOperation\n\
\n\
Return the current operation being iterated over.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aafa1bdf70c0e23993b38a51bc81d556b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MRenderOverride.setup </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">setup(destination) -&gt; self\n\
\n\
Perform any setup required before render operations are to be executed.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a20ef900cbdcb8453731e690be719bb07\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MRenderOverride.startOperationIterator </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">startOperationIterator() -&gt; bool\n\
\n\
Query if there are any operations to iterate over.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af5f12730e7fbf41a9f4353827216ad0c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MRenderOverride.supportedDrawAPIs </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">supportedDrawAPIs() -&gt; int\n\
\n\
Returns the draw APIs supported by this override.\n\
See MRenderer.drawAPI() description for the list of draw APIs.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad38873fb6a62421f6561e38ae1e3679d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MRenderOverride.uiName </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">uiName() -&gt; string\n\
\n\
Returns the user interface name for the override.</pre> \n\
</div>\n\
</div>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";