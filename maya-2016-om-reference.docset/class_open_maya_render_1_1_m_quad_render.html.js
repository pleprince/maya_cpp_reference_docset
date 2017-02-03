var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>OpenMayaRender.MQuadRender Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_render_1_1_m_quad_render.html\', tocPrefix);\n\
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
            <h1>OpenMayaRender.MQuadRender Class Reference</h1>\n\
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
<div class=\"title\">OpenMayaRender.MQuadRender Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-9DBD7E49-7A17-4CEB-89AF-A3B509AD91E2.htm\">What\'s New / What\'s Changed? &gt; Autodesk Maya 2014</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-FBDD64EE-AD07-4EA2-A07A-D792B5B5DE0C.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Rendering Overrides</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-32D46A07-2FEA-4D19-8782-DF4C5C8AAB1B.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Plug-in Entry Points &gt; Render Loop Overrides</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_render_1_1_m_quad_render.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_open_maya_render_1_1_m_quad_render.html#properties\">Properties</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Class which defines a 2d geometry quad render.\n\
\n\
Method resolution order:\n\
-   MQuadRender\n\
-   MRenderOperation\n\
-   __builtin__.object</pre> </div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMayaRender.MQuadRender:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_render_1_1_m_quad_render.png\" usemap=\"#OpenMayaRender.MQuadRender_map\" alt=\"\">\n\
  <map id=\"OpenMayaRender.MQuadRender_map\" name=\"OpenMayaRender.MQuadRender_map\">\n\
<area href=\"class_open_maya_render_1_1_m_render_operation.html\" alt=\"OpenMayaRender.MRenderOperation\" shape=\"rect\" coords=\"0,56,228,80\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a45359c72c4911cc24a43d03f01621d0c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_quad_render.html#a45359c72c4911cc24a43d03f01621d0c\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a45359c72c4911cc24a43d03f01621d0c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6a2bfd9ca4e10331f3ac0cd8fcd8ae85\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_quad_render.html#a6a2bfd9ca4e10331f3ac0cd8fcd8ae85\">blendStateOverride</a> ()</td></tr>\n\
<tr class=\"separator:a6a2bfd9ca4e10331f3ac0cd8fcd8ae85\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:adca8fe8ad671b2cca944df97a4e53549\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_quad_render.html#adca8fe8ad671b2cca944df97a4e53549\">clearOperation</a> ()</td></tr>\n\
<tr class=\"separator:adca8fe8ad671b2cca944df97a4e53549\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a85b1c00ab5f1ea2ddeccc6e60707d1c9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_quad_render.html#a85b1c00ab5f1ea2ddeccc6e60707d1c9\">depthStencilStateOverride</a> ()</td></tr>\n\
<tr class=\"separator:a85b1c00ab5f1ea2ddeccc6e60707d1c9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1db696068f77c814abc05e8297ecbb41\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_quad_render.html#a1db696068f77c814abc05e8297ecbb41\">rasterizerStateOverride</a> ()</td></tr>\n\
<tr class=\"separator:a1db696068f77c814abc05e8297ecbb41\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a59d9774cca38df1f355f0fe91baa25ae\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_quad_render.html#a59d9774cca38df1f355f0fe91baa25ae\">shader</a> ()</td></tr>\n\
<tr class=\"separator:a59d9774cca38df1f355f0fe91baa25ae\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_open_maya_render_1_1_m_render_operation\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_open_maya_render_1_1_m_render_operation\')\"><img src=\"py_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_operation.html\">OpenMayaRender.MRenderOperation</a></td></tr>\n\
<tr class=\"memitem:a09e4550ee9ebc05cf46e53751a60ed89 inherit pub_methods_class_open_maya_render_1_1_m_render_operation\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_operation.html#a09e4550ee9ebc05cf46e53751a60ed89\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a09e4550ee9ebc05cf46e53751a60ed89 inherit pub_methods_class_open_maya_render_1_1_m_render_operation\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0aecd6911c400dda48e16fad260a4ea8 inherit pub_methods_class_open_maya_render_1_1_m_render_operation\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_operation.html#a0aecd6911c400dda48e16fad260a4ea8\">enableSRGBWrite</a> ()</td></tr>\n\
<tr class=\"separator:a0aecd6911c400dda48e16fad260a4ea8 inherit pub_methods_class_open_maya_render_1_1_m_render_operation\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa72e8b9332e8afbdd56b107a10dd8df2 inherit pub_methods_class_open_maya_render_1_1_m_render_operation\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_operation.html#aa72e8b9332e8afbdd56b107a10dd8df2\">name</a> ()</td></tr>\n\
<tr class=\"separator:aa72e8b9332e8afbdd56b107a10dd8df2 inherit pub_methods_class_open_maya_render_1_1_m_render_operation\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acfca20bbfe5719c752bb61c91b80d83a inherit pub_methods_class_open_maya_render_1_1_m_render_operation\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_operation.html#acfca20bbfe5719c752bb61c91b80d83a\">operationType</a> ()</td></tr>\n\
<tr class=\"separator:acfca20bbfe5719c752bb61c91b80d83a inherit pub_methods_class_open_maya_render_1_1_m_render_operation\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3166af62e4b240d8488061bab870c28e inherit pub_methods_class_open_maya_render_1_1_m_render_operation\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_operation.html#a3166af62e4b240d8488061bab870c28e\">targetOverrideList</a> ()</td></tr>\n\
<tr class=\"separator:a3166af62e4b240d8488061bab870c28e inherit pub_methods_class_open_maya_render_1_1_m_render_operation\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4b92bf3f573b148be0f21a31553b89e0 inherit pub_methods_class_open_maya_render_1_1_m_render_operation\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_operation.html#a4b92bf3f573b148be0f21a31553b89e0\">viewportRectangleOverride</a> ()</td></tr>\n\
<tr class=\"separator:a4b92bf3f573b148be0f21a31553b89e0 inherit pub_methods_class_open_maya_render_1_1_m_render_operation\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"properties\"></a>\n\
Properties</h2></td></tr>\n\
<tr class=\"memitem:a6897265858f3d1284f8566aaa68c5ac2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_quad_render.html#a6897265858f3d1284f8566aaa68c5ac2\">mClearOperation</a></td></tr>\n\
<tr class=\"separator:a6897265858f3d1284f8566aaa68c5ac2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pub_static_attribs_class_open_maya_render_1_1_m_render_operation\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_static_attribs_class_open_maya_render_1_1_m_render_operation\')\"><img src=\"py_ref/closed.png\" alt=\"-\">&#160;Static Public Attributes inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_operation.html\">OpenMayaRender.MRenderOperation</a></td></tr>\n\
<tr class=\"memitem:aee65e02d37725e9314b6f3d648beb659 inherit pub_static_attribs_class_open_maya_render_1_1_m_render_operation\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aee65e02d37725e9314b6f3d648beb659\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kClear</b> = 0</td></tr>\n\
<tr class=\"separator:aee65e02d37725e9314b6f3d648beb659 inherit pub_static_attribs_class_open_maya_render_1_1_m_render_operation\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af94e131622c41eee5e1df676c4255439 inherit pub_static_attribs_class_open_maya_render_1_1_m_render_operation\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af94e131622c41eee5e1df676c4255439\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kHUDRender</b> = 4</td></tr>\n\
<tr class=\"separator:af94e131622c41eee5e1df676c4255439 inherit pub_static_attribs_class_open_maya_render_1_1_m_render_operation\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8591b7ae08d31af3ae0a4b7b7a5c2bed inherit pub_static_attribs_class_open_maya_render_1_1_m_render_operation\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8591b7ae08d31af3ae0a4b7b7a5c2bed\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kPresentTarget</b> = 5</td></tr>\n\
<tr class=\"separator:a8591b7ae08d31af3ae0a4b7b7a5c2bed inherit pub_static_attribs_class_open_maya_render_1_1_m_render_operation\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a43de37005f1cf73cea29d784e782eb7c inherit pub_static_attribs_class_open_maya_render_1_1_m_render_operation\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a43de37005f1cf73cea29d784e782eb7c\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kQuadRender</b> = 2</td></tr>\n\
<tr class=\"separator:a43de37005f1cf73cea29d784e782eb7c inherit pub_static_attribs_class_open_maya_render_1_1_m_render_operation\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a73dedd2054e7dfd2cb0974528d9f2933 inherit pub_static_attribs_class_open_maya_render_1_1_m_render_operation\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a73dedd2054e7dfd2cb0974528d9f2933\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kSceneRender</b> = 1</td></tr>\n\
<tr class=\"separator:a73dedd2054e7dfd2cb0974528d9f2933 inherit pub_static_attribs_class_open_maya_render_1_1_m_render_operation\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3876f3d0dc15701f1f86cdb476747b01 inherit pub_static_attribs_class_open_maya_render_1_1_m_render_operation\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a3876f3d0dc15701f1f86cdb476747b01\"></a>\n\
int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>kUserDefined</b> = 3</td></tr>\n\
<tr class=\"separator:a3876f3d0dc15701f1f86cdb476747b01 inherit pub_static_attribs_class_open_maya_render_1_1_m_render_operation\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a45359c72c4911cc24a43d03f01621d0c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MQuadRender.__init__ </td>\n\
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
<a class=\"anchor\" id=\"a6a2bfd9ca4e10331f3ac0cd8fcd8ae85\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MQuadRender.blendStateOverride </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">blendStateOverride() -&gt; MBlendState\n\
\n\
Query if a blend state override is performed by this quad operation.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"adca8fe8ad671b2cca944df97a4e53549\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MQuadRender.clearOperation </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">clearOperation() -&gt; MClearOperation\n\
\n\
Get the scene clear operation.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a85b1c00ab5f1ea2ddeccc6e60707d1c9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MQuadRender.depthStencilStateOverride </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">depthStencilStateOverride() -&gt; MDepthStencilState\n\
\n\
Query if a depth-stencil state override is performed by this quad operation.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1db696068f77c814abc05e8297ecbb41\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MQuadRender.rasterizerStateOverride </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">rasterizerStateOverride() -&gt; MRasterizerState\n\
\n\
Query if a rasterizer state override is performed by this quad operation.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a59d9774cca38df1f355f0fe91baa25ae\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MQuadRender.shader </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">shader() -&gt; MShaderInstance\n\
\n\
Get the shader to use when rendering a quad.</pre> \n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Property Documentation</h2>\n\
<a class=\"anchor\" id=\"a6897265858f3d1284f8566aaa68c5ac2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MQuadRender.mClearOperation</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\"> Clear operation</pre> \n\
</div>\n\
</div>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";