var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MTextureEditorDrawInfo Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_texture_editor_draw_info.html\', tocPrefix);\n\
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
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MTextureEditorDrawInfo Class Reference</h1>\n\
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
<div class=\"title\">MTextureEditorDrawInfo Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_u_i.html\">OpenMayaUI - API module for user interface</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_texture_editor_draw_info.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_m_texture_editor_draw_info.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_texture_editor_draw_info.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MTextureEditorDrawInfo.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Drawing state for drawing to the UV texture window with custom shapes. </p>\n\
<p>This class is used by drawUV method of <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape_u_i.html\" title=\"drawing and selection for user defined shapes \">MPxSurfaceShapeUI</a> to specify the current UV drawing state for a user defined shape. API users must override the canDrawUV method on <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape_u_i.html\" title=\"drawing and selection for user defined shapes \">MPxSurfaceShapeUI</a> to recieve drawUV calls. The only situation where the drawing style can change is during a selection event. However, selection events are currently not passed onto the API user. Therefore, most of the functionality in this class is place holder for future work.</p>\n\
<dl class=\"section see\"><dt>See also</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape_u_i.html\" title=\"drawing and selection for user defined shapes \">MPxSurfaceShapeUI</a> </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_shape_u_i_8cpp-example.html#_a81\">apiMeshShape/apiMeshShapeUI.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_shape_u_i_8h-example.html#_a8\">apiMeshShape/apiMeshShapeUI.h</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:a5cfc7b3910bc9ef6a80d2d572cb882bc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bc\">DrawingFunction</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bca8e90c759f3bb854d9b6c48bcd154ca9f\">kDrawFunctionFirst</a> = 1, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bca5d1abe339e4ec64b4381a33ab7f693d1\">kDrawWireframe</a> = kDrawFunctionFirst, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bcab0a7afec9af80ea94ad7a85b2dee7180\">kDrawEverything</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bcaf153640d10fb82aff2d819d840826bca\">kDrawVertexForSelect</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bca268f05728289012bc5b41158205e4c25\">kDrawEdgeForSelect</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bca81492d5adb63503408694bb638a8bfa6\">kDrawFacetForSelect</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bca68f8ea0ed4ef3f13ab93d36c7eedba30\">kDrawUVForSelect</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bca60fc4b9e6ab58457ccc5fc7442bee6b4\">kDrawFunctionLast</a> = kDrawUVForSelect\n\
<br>\n\
 }<tr class=\"memdesc:a5cfc7b3910bc9ef6a80d2d572cb882bc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Draw modes.  <a href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bc\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5cfc7b3910bc9ef6a80d2d572cb882bc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a591caf964d242445f0d6d3a89da8ed56\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a591caf964d242445f0d6d3a89da8ed56\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a591caf964d242445f0d6d3a89da8ed56\">MTextureEditorDrawInfo</a> ()</td></tr>\n\
<tr class=\"memdesc:a591caf964d242445f0d6d3a89da8ed56\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor. <br></td></tr>\n\
<tr class=\"separator:a591caf964d242445f0d6d3a89da8ed56\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7878bd86552eba82261c5f4523f8fa14\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a7878bd86552eba82261c5f4523f8fa14\">MTextureEditorDrawInfo</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html\">MTextureEditorDrawInfo</a> &amp;in)</td></tr>\n\
<tr class=\"memdesc:a7878bd86552eba82261c5f4523f8fa14\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor.  <a href=\"class_m_texture_editor_draw_info.html#a7878bd86552eba82261c5f4523f8fa14\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7878bd86552eba82261c5f4523f8fa14\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af521cce561cf968463ede9158f09a9ab\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af521cce561cf968463ede9158f09a9ab\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#af521cce561cf968463ede9158f09a9ab\">~MTextureEditorDrawInfo</a> ()</td></tr>\n\
<tr class=\"memdesc:af521cce561cf968463ede9158f09a9ab\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:af521cce561cf968463ede9158f09a9ab\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae910aa6fc236eaaf70180ffb0d7ef1c7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bc\">DrawingFunction</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#ae910aa6fc236eaaf70180ffb0d7ef1c7\">drawingFunction</a> () const </td></tr>\n\
<tr class=\"memdesc:ae910aa6fc236eaaf70180ffb0d7ef1c7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Indicates the current drawing state for a drawUV method call.  <a href=\"class_m_texture_editor_draw_info.html#ae910aa6fc236eaaf70180ffb0d7ef1c7\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae910aa6fc236eaaf70180ffb0d7ef1c7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9664f29baec5d2c130c145a817e39ae6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a9664f29baec5d2c130c145a817e39ae6\">setDrawingFunction</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bc\">DrawingFunction</a> func)</td></tr>\n\
<tr class=\"memdesc:a9664f29baec5d2c130c145a817e39ae6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Sets the current drawing state.  <a href=\"class_m_texture_editor_draw_info.html#a9664f29baec5d2c130c145a817e39ae6\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9664f29baec5d2c130c145a817e39ae6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_texture_editor_draw_info.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"a5cfc7b3910bc9ef6a80d2d572cb882bc\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bc\">DrawingFunction</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Draw modes. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a5cfc7b3910bc9ef6a80d2d572cb882bca8e90c759f3bb854d9b6c48bcd154ca9f\"></a>kDrawFunctionFirst&#160;</td><td class=\"fielddoc\">\n\
<p>Lowest possible enum value. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a5cfc7b3910bc9ef6a80d2d572cb882bca5d1abe339e4ec64b4381a33ab7f693d1\"></a>kDrawWireframe&#160;</td><td class=\"fielddoc\">\n\
<p>Draw wireframe only (default) </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a5cfc7b3910bc9ef6a80d2d572cb882bcab0a7afec9af80ea94ad7a85b2dee7180\"></a>kDrawEverything&#160;</td><td class=\"fielddoc\">\n\
<p>Draw vertices, uvs, faces, and edges. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a5cfc7b3910bc9ef6a80d2d572cb882bcaf153640d10fb82aff2d819d840826bca\"></a>kDrawVertexForSelect&#160;</td><td class=\"fielddoc\">\n\
<p>Draw vertices for selection. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a5cfc7b3910bc9ef6a80d2d572cb882bca268f05728289012bc5b41158205e4c25\"></a>kDrawEdgeForSelect&#160;</td><td class=\"fielddoc\">\n\
<p>Draw edges for selection. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a5cfc7b3910bc9ef6a80d2d572cb882bca81492d5adb63503408694bb638a8bfa6\"></a>kDrawFacetForSelect&#160;</td><td class=\"fielddoc\">\n\
<p>Draw faces for selection. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a5cfc7b3910bc9ef6a80d2d572cb882bca68f8ea0ed4ef3f13ab93d36c7eedba30\"></a>kDrawUVForSelect&#160;</td><td class=\"fielddoc\">\n\
<p>Draw uvs for selection. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a5cfc7b3910bc9ef6a80d2d572cb882bca60fc4b9e6ab58457ccc5fc7442bee6b4\"></a>kDrawFunctionLast&#160;</td><td class=\"fielddoc\">\n\
<p>Highest possible enum value. </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a7878bd86552eba82261c5f4523f8fa14\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html\">MTextureEditorDrawInfo</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html\">MTextureEditorDrawInfo</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy constructor. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>texture draw info object to copy </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ae910aa6fc236eaaf70180ffb0d7ef1c7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bc\">MTextureEditorDrawInfo::DrawingFunction</a> drawingFunction </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Indicates the current drawing state for a drawUV method call. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The current drawing function. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9664f29baec5d2c130c145a817e39ae6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void setDrawingFunction </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html#a5cfc7b3910bc9ef6a80d2d572cb882bc\">MTextureEditorDrawInfo::DrawingFunction</a>&#160;</td>\n\
          <td class=\"paramname\"><em>func</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Sets the current drawing state. </p>\n\
<p>Currently the API user is unable to set these values. All drawing state values are determined internally and passed onto the API programmer.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">func</td><td>drawing function. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const char * className </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of this class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MTextureEditorDrawInfo.h</li>\n\
<li>MTextureEditorDrawInfo.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";