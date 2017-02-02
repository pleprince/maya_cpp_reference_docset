var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MRenderData Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_render_data.html\', tocPrefix);\n\
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
            <h1>MRenderData Class Reference</h1>\n\
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
<div class=\"title\">MRenderData Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Example_Plugins_Example_C_plugin_descriptions.htm\">Example Plug-ins &gt; Example C++ plug-in descriptions</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_render_data.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_render_data.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MRenderData.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Access Rendering Data. </p>\n\
<p>The rendered image and depth map can be changed following the software render by instanciating a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_callback.html\" title=\"Rendering Callbacks. \">MRenderCallback</a> and overriding renderCallback() or postProcessCallback(). When these methods are invoked, a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html\" title=\"Access Rendering Data. \">MRenderData</a> is passed as an argument; the rgbaArr and depthArr can then be changed by this API. Methods and data are provided to assist in transforming back and forth from world space to image space. Paint Effects and Fur are two examples which use this mechanism to change the rendered image. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/render_access_node_2render_access_node_8cpp-example.html#_a5\">renderAccessNode/renderAccessNode.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ac7bb5fa56a4651fa8246a6dee056ca50\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac7bb5fa56a4651fa8246a6dee056ca50\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#ac7bb5fa56a4651fa8246a6dee056ca50\">MRenderData</a> ()</td></tr>\n\
<tr class=\"memdesc:ac7bb5fa56a4651fa8246a6dee056ca50\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default class Constructor. <br></td></tr>\n\
<tr class=\"separator:ac7bb5fa56a4651fa8246a6dee056ca50\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3bd0ef731d8219ea96fa3e5054776d2d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a3bd0ef731d8219ea96fa3e5054776d2d\">worldToScreen</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;worldPoint, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;screenPoint) const </td></tr>\n\
<tr class=\"memdesc:a3bd0ef731d8219ea96fa3e5054776d2d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Converts world space point to screen space.  <a href=\"class_m_render_data.html#a3bd0ef731d8219ea96fa3e5054776d2d\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3bd0ef731d8219ea96fa3e5054776d2d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a26845a210c6f39c653de0c90bb129fa4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a26845a210c6f39c653de0c90bb129fa4\">screenToWorld</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;screenPoint, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;worldPoint) const </td></tr>\n\
<tr class=\"memdesc:a26845a210c6f39c653de0c90bb129fa4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Converts screen space point to world space.  <a href=\"class_m_render_data.html#a26845a210c6f39c653de0c90bb129fa4\">More...</a><br></td></tr>\n\
<tr class=\"separator:a26845a210c6f39c653de0c90bb129fa4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a35bef8d4568a5e59f4a5b01ca78d8378\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a35bef8d4568a5e59f4a5b01ca78d8378\"></a>\n\
bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a35bef8d4568a5e59f4a5b01ca78d8378\">perspective</a></td></tr>\n\
<tr class=\"memdesc:a35bef8d4568a5e59f4a5b01ca78d8378\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">set if the camera has a perspective projection <br></td></tr>\n\
<tr class=\"separator:a35bef8d4568a5e59f4a5b01ca78d8378\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aabad222674160ca9c561204912620c91\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aabad222674160ca9c561204912620c91\"></a>\n\
unsigned short&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#aabad222674160ca9c561204912620c91\">resX</a></td></tr>\n\
<tr class=\"memdesc:aabad222674160ca9c561204912620c91\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">the x resolution of the rendered image <br></td></tr>\n\
<tr class=\"separator:aabad222674160ca9c561204912620c91\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7a2723fa8ab8196850aded6554929d2d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a7a2723fa8ab8196850aded6554929d2d\"></a>\n\
unsigned short&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a7a2723fa8ab8196850aded6554929d2d\">resY</a></td></tr>\n\
<tr class=\"memdesc:a7a2723fa8ab8196850aded6554929d2d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">the y resolution of the rendered image <br></td></tr>\n\
<tr class=\"separator:a7a2723fa8ab8196850aded6554929d2d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a299c8b9e48715447723c1b7a216dc6dc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a299c8b9e48715447723c1b7a216dc6dc\"></a>\n\
unsigned short&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a299c8b9e48715447723c1b7a216dc6dc\">left</a></td></tr>\n\
<tr class=\"memdesc:a299c8b9e48715447723c1b7a216dc6dc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">the left (low) render region dimension <br></td></tr>\n\
<tr class=\"separator:a299c8b9e48715447723c1b7a216dc6dc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3f825dbb2d4445439c74c7651096d965\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a3f825dbb2d4445439c74c7651096d965\"></a>\n\
unsigned short&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a3f825dbb2d4445439c74c7651096d965\">bottom</a></td></tr>\n\
<tr class=\"memdesc:a3f825dbb2d4445439c74c7651096d965\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">the bottom (low) render region dimension <br></td></tr>\n\
<tr class=\"separator:a3f825dbb2d4445439c74c7651096d965\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aff8907081e42db096b302372a40a194b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aff8907081e42db096b302372a40a194b\"></a>\n\
unsigned short&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#aff8907081e42db096b302372a40a194b\">right</a></td></tr>\n\
<tr class=\"memdesc:aff8907081e42db096b302372a40a194b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">the right (high) render region dimension <br></td></tr>\n\
<tr class=\"separator:aff8907081e42db096b302372a40a194b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5c1244c5c185fad943dea5b4ffb5cef5\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a5c1244c5c185fad943dea5b4ffb5cef5\"></a>\n\
unsigned short&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a5c1244c5c185fad943dea5b4ffb5cef5\">top</a></td></tr>\n\
<tr class=\"memdesc:a5c1244c5c185fad943dea5b4ffb5cef5\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">the top (high) render region dimension <br></td></tr>\n\
<tr class=\"separator:a5c1244c5c185fad943dea5b4ffb5cef5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aeaefe825e8a4f2b67a2fe9af6cb29b2d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aeaefe825e8a4f2b67a2fe9af6cb29b2d\"></a>\n\
unsigned short&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#aeaefe825e8a4f2b67a2fe9af6cb29b2d\">bytesPerChannel</a></td></tr>\n\
<tr class=\"memdesc:aeaefe825e8a4f2b67a2fe9af6cb29b2d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">number of bytes per channel of the rgbaArr <br></td></tr>\n\
<tr class=\"separator:aeaefe825e8a4f2b67a2fe9af6cb29b2d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2afa86830ddc83842c281b520b1fc74c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a2afa86830ddc83842c281b520b1fc74c\"></a>\n\
unsigned short&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a2afa86830ddc83842c281b520b1fc74c\">xsize</a></td></tr>\n\
<tr class=\"memdesc:a2afa86830ddc83842c281b520b1fc74c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">the actual x resolution of rgbaArr and depthArr <br></td></tr>\n\
<tr class=\"separator:a2afa86830ddc83842c281b520b1fc74c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a79c30b4dfbd6e13e8e7943c2b9dfc14e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a79c30b4dfbd6e13e8e7943c2b9dfc14e\"></a>\n\
unsigned short&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a79c30b4dfbd6e13e8e7943c2b9dfc14e\">ysize</a></td></tr>\n\
<tr class=\"memdesc:a79c30b4dfbd6e13e8e7943c2b9dfc14e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">the actual y resolution of rgbaArr and depthArr <br></td></tr>\n\
<tr class=\"separator:a79c30b4dfbd6e13e8e7943c2b9dfc14e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afd56aefc29d998e78202b0b4b212821e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"afd56aefc29d998e78202b0b4b212821e\"></a>\n\
float&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#afd56aefc29d998e78202b0b4b212821e\">fieldOfView</a></td></tr>\n\
<tr class=\"memdesc:afd56aefc29d998e78202b0b4b212821e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">camera horizontal field of view in radians <br></td></tr>\n\
<tr class=\"separator:afd56aefc29d998e78202b0b4b212821e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5c2c11f6d7929bafc3926f68dd5c00f3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a5c2c11f6d7929bafc3926f68dd5c00f3\"></a>\n\
float&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a5c2c11f6d7929bafc3926f68dd5c00f3\">aspectRatio</a></td></tr>\n\
<tr class=\"memdesc:a5c2c11f6d7929bafc3926f68dd5c00f3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">camera pixel aspect ratio <br></td></tr>\n\
<tr class=\"separator:a5c2c11f6d7929bafc3926f68dd5c00f3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a21558e8894f04d9bca508a172220a436\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a21558e8894f04d9bca508a172220a436\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_vector.html\">MFloatVector</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a21558e8894f04d9bca508a172220a436\">viewDirection</a></td></tr>\n\
<tr class=\"memdesc:a21558e8894f04d9bca508a172220a436\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">view direction of the camera (object space) <br></td></tr>\n\
<tr class=\"separator:a21558e8894f04d9bca508a172220a436\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a53ed838da98aa03f70ce2a6f12fd323c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a53ed838da98aa03f70ce2a6f12fd323c\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a53ed838da98aa03f70ce2a6f12fd323c\">eyePoint</a></td></tr>\n\
<tr class=\"memdesc:a53ed838da98aa03f70ce2a6f12fd323c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">position of the camera (object space) <br></td></tr>\n\
<tr class=\"separator:a53ed838da98aa03f70ce2a6f12fd323c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac016c599b4f999770c062a938591a514\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac016c599b4f999770c062a938591a514\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_matrix.html\">MFloatMatrix</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#ac016c599b4f999770c062a938591a514\">worldToEyeMatrix</a></td></tr>\n\
<tr class=\"memdesc:ac016c599b4f999770c062a938591a514\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">camera matrix to transform to eye space <br></td></tr>\n\
<tr class=\"separator:ac016c599b4f999770c062a938591a514\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3eba2629fe6535882e5749c4bca06cb2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a3eba2629fe6535882e5749c4bca06cb2\">rgbaArr</a></td></tr>\n\
<tr class=\"memdesc:a3eba2629fe6535882e5749c4bca06cb2\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">this is a 1d array representing the output image buffer.  <a href=\"class_m_render_data.html#a3eba2629fe6535882e5749c4bca06cb2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3eba2629fe6535882e5749c4bca06cb2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae26474579cb309fc89af5630094db687\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">float *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#ae26474579cb309fc89af5630094db687\">depthArr</a></td></tr>\n\
<tr class=\"memdesc:ae26474579cb309fc89af5630094db687\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">this is a 1d array representing the output depth buffer.  <a href=\"class_m_render_data.html#ae26474579cb309fc89af5630094db687\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae26474579cb309fc89af5630094db687\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a3bd0ef731d8219ea96fa3e5054776d2d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void worldToScreen </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>inPoint</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>outPoint</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Converts world space point to screen space. </p>\n\
<p>Screen depth is stored in outPoint.z.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">inPoint</td><td>The original point in world space </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">outPoint</td><td>The converted point in screen space </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/render_access_node_2render_access_node_8cpp-example.html#a38\">renderAccessNode/renderAccessNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a26845a210c6f39c653de0c90bb129fa4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void screenToWorld </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>inPoint</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>outPoint</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Converts screen space point to world space. </p>\n\
<p>Screen depth is stored in inPoint.z.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">inPoint</td><td>The original point in screen space </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">outPoint</td><td>The converted point in world space </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/render_access_node_2render_access_node_8cpp-example.html#a39\">renderAccessNode/renderAccessNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a3eba2629fe6535882e5749c4bca06cb2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned char* rgbaArr</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>this is a 1d array representing the output image buffer. </p>\n\
<p>It is of size: resX * resY * 4 * bytesPerChannel. The array is indexed as [(resX * x + y) * 4 * bytesPerChannel], where (x,y) is the current pixel coordinates. The \"4\" multiplier is used for storing RGBA information, in the order of a,b,g,r (on OSX) or b,g,r,a (on Windows and Linux). </p>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/render_access_node_2render_access_node_8cpp-example.html#a36\">renderAccessNode/renderAccessNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae26474579cb309fc89af5630094db687\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">float* depthArr</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>this is a 1d array representing the output depth buffer. </p>\n\
<p>It is of size: resX * resY, where each depth value is a single precision floating point vlue. It is indexed as [resX * x + y], where (x,y) is the current pixel coordinates. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example4\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example4-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example4-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/render_access_node_2render_access_node_8cpp-example.html#a37\">renderAccessNode/renderAccessNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MRenderData.h</li>\n\
<li>MRenderData.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";