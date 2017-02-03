var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Member List</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_render_1_1_m_geometry_utilities-members.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>Member List</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">OpenMayaRender.MGeometryUtilities Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html#a177ca525e74655c5d3e301849a1a9516\">acquireReferenceGeometry</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html#a69e3c934b7c97435c303c608f592eba8\">displayStatus</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\" class=\"even\"><td class=\"entry\"><b>kActive</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\"><td class=\"entry\"><b>kActiveAffected</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\" class=\"even\"><td class=\"entry\"><b>kActiveComponent</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\"><td class=\"entry\"><b>kActiveTemplate</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\" class=\"even\"><td class=\"entry\"><b>kDefaultCube</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\"><td class=\"entry\"><b>kDefaultPlane</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\" class=\"even\"><td class=\"entry\"><b>kDefaultSphere</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\"><td class=\"entry\"><b>kDormant</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\" class=\"even\"><td class=\"entry\"><b>kHilite</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\"><td class=\"entry\"><b>kIntermediateObject</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\" class=\"even\"><td class=\"entry\"><b>kInvisible</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\"><td class=\"entry\"><b>kLead</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\" class=\"even\"><td class=\"entry\"><b>kLive</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\"><td class=\"entry\"><b>kNoStatus</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr bgcolor=\"#f0f0f0\" class=\"even\"><td class=\"entry\"><b>kTemplate</b> (defined in <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a>)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html#a70db48253cd9537d53f45eb491f07731\">releaseReferenceGeometry</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html#a4ab2eef7f034435bfec001c32f86bc7a\">wireframeColor</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_geometry_utilities.html\">OpenMayaRender.MGeometryUtilities</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></div></body>\n\
</html>\n\
";