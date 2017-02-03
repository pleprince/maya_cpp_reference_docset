var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Class Members - Functions</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'functions_func_u.html\', tocPrefix);\n\
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
            <h1>Class Members - Functions</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow3\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/functions.html\"><span>All</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop.html\"><span>Properties</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/functions_func.html#index__\"><span>_</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_a.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_j.html#index_j\"><span>j</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_t.html#index_t\"><span>t</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions_func_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_z.html#index_z\"><span>z</span></a></li>\n\
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
<div class=\"contents\">\n\
&#160;\n\
\n\
<h3><a class=\"anchor\" id=\"index_u\"></a>- u -</h3><ul>\n\
<li>uiName()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_override.html#ad38873fb6a62421f6561e38ae1e3679d\">OpenMayaRender.MRenderOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_shader_instance.html#abc0c53ed49df4b7947697775fdda606b\">OpenMayaRender.MShaderInstance</a>\n\
</li>\n\
<li>uiToInternal()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_angle.html#a09c1fb9956e5934792668f316959225e\">OpenMaya.MAngle</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_distance.html#a48e5197eb958923bbda765c5ef9cb1aa\">OpenMaya.MDistance</a>\n\
</li>\n\
<li>uiUnit()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_angle.html#a311f2148b3dcc12a9eb7506537f79a0b\">OpenMaya.MAngle</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_distance.html#a3b37a2101fe3a64741995caa706e81f1\">OpenMaya.MDistance</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_time.html#af9afc9fcf33e78308fd75216d9b35252\">OpenMaya.MTime</a>\n\
</li>\n\
<li>uiWidget()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_shader_instance.html#a397644faaf93878e99ed03065496af8d\">OpenMayaRender.MShaderInstance</a>\n\
</li>\n\
<li>unbind()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_shader_instance.html#a8557e07a0e7f4ae95ba467bc2f4c14cc\">OpenMayaRender.MShaderInstance</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html#a72fc8fba7474239346f21d01f5cd8979\">OpenMayaUI.MPxHwShaderNode</a>\n\
</li>\n\
<li>undeleteComponents()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_surface_shape.html#a68bf76955eb9662f5d09a0a7f05afd68\">OpenMaya.MPxSurfaceShape</a>\n\
</li>\n\
<li>undoIt()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#abba728d9d3cbf35ff4713b231eba1bef\">OpenMaya.MDGModifier</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_command.html#aef9a01827b5bbd0991c281c8ab16994d\">OpenMaya.MPxCommand</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_anim_curve_change.html#a27b1ddfcd2f074dd81b6434591edbfd3\">OpenMayaAnim.MAnimCurveChange</a>\n\
</li>\n\
<li>uniformGridParams()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#a55d64ccda875871735031610ca7f69cd\">OpenMaya.MFnMesh</a>\n\
</li>\n\
<li>unitlessAnimCurveTypeForPlug()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_anim_curve.html#ab430238c981c29753f4dfa7fc9842274\">OpenMayaAnim.MFnAnimCurve</a>\n\
</li>\n\
<li>unitType()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_unit_attribute.html#a872b1ff7c2fa098f1ffb1edaa8858a21\">OpenMaya.MFnUnitAttribute</a>\n\
</li>\n\
<li>unlinkExtensionAttributeFromPlugin()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_d_g_modifier.html#a59b93b9df2974ebf6d3fcf9d0b1f75cb\">OpenMaya.MDGModifier</a>\n\
</li>\n\
<li>unload()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#ace80a1a1103f5ac8622f842ec4901d6e\">OpenMayaRender.MIndexBuffer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_vertex_buffer.html#a948a6e5347171558b77a00ad2758f55e\">OpenMayaRender.MVertexBuffer</a>\n\
</li>\n\
<li>unlockFaceVertexNormals()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#ad6654b6f924d1c878f811b3c51f6bbbe\">OpenMaya.MFnMesh</a>\n\
</li>\n\
<li>unlockVertexNormals()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#a65aafd91bab438c2ae8755b16763ae60\">OpenMaya.MFnMesh</a>\n\
</li>\n\
<li>unmap()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#a603bc4e980a938eace9d9bc3d26fa71e\">OpenMayaRender.MIndexBuffer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_vertex_buffer.html#a7c09e17c894257374c50f5a0324c3b07\">OpenMayaRender.MVertexBuffer</a>\n\
</li>\n\
<li>update()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#a11014a4bbdd7d20f9582e7545604a615\">OpenMayaRender.MIndexBuffer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html#abf0dd7970e24da9f5ba71ccc52d9cfe5\">OpenMayaRender.MPxSubSceneOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_texture.html#a58572d537d159f0e5c12534e4ea85ba2\">OpenMayaRender.MTexture</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_vertex_buffer.html#a96bc153a6dbdcdc0ce07257a1588c680\">OpenMayaRender.MVertexBuffer</a>\n\
</li>\n\
<li>updateCompleteVertexGroup()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_data.html#a02f60099dcd188f57775453d54b206e0\">OpenMaya.MPxGeometryData</a>\n\
</li>\n\
<li>updateCurve()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_curve.html#a62afe47b3bdf5800279cc0a1dafa220c\">OpenMaya.MFnNurbsCurve</a>\n\
</li>\n\
<li>updateDescription()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_target.html#acdef92f8e7f33fb8db756795595eea4b\">OpenMayaRender.MRenderTarget</a>\n\
</li>\n\
<li>updateDevice()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shader_override.html#a1677255f26ee76d97441465682b7a674\">OpenMayaRender.MPxShaderOverride</a>\n\
</li>\n\
<li>updateDG()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#a5c5cf0da1f4f0c8f296b339a6f1e6cd1\">OpenMayaRender.MPxGeometryOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shader_override.html#ad4f16efe21f8a4f548b001c2b142190b\">OpenMayaRender.MPxShaderOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#a63cf7820523d3891024e3dc3b6679253\">OpenMayaRender.MPxShadingNodeOverride</a>\n\
</li>\n\
<li>updateInstanceTransform()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html#a287307481040b67ae134d88e9866489f\">OpenMayaRender.MPxSubSceneOverride</a>\n\
</li>\n\
<li>updateParameters()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_shader_instance.html#a01ccbb2796a5ed4ae22ee7510789a46f\">OpenMayaRender.MShaderInstance</a>\n\
</li>\n\
<li>updateRenderItems()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#ad0628a86aa529c4d7090b80403aa727c\">OpenMayaRender.MPxGeometryOverride</a>\n\
</li>\n\
<li>updateSelectionGranularity()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_draw_override.html#a77de49852a7f2bcc4aec146bdcbe327c\">OpenMayaRender.MPxDrawOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#a31540bd6c022db98652447b130b58733\">OpenMayaRender.MPxGeometryOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html#a8a2dbaebc1b0e186ad56311f8d8073d0\">OpenMayaRender.MPxSubSceneOverride</a>\n\
</li>\n\
<li>updateShader()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#afda5eda704a7c3d62246c3833102d98b\">OpenMayaRender.MPxShadingNodeOverride</a>\n\
</li>\n\
<li>updateSurface()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#ae6eb746ad5a5d75143144eb933899d55\">OpenMaya.MFnMesh</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_surface.html#acf2ae698587b7e25724dc8d1d232f9b3\">OpenMaya.MFnNurbsSurface</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_edge.html#ac8b259ddb68a23eb7541a668a9441c75\">OpenMaya.MItMeshEdge</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_face_vertex.html#a8418218c9327cc1555da7cd6b047ec45\">OpenMaya.MItMeshFaceVertex</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_polygon.html#a41821db68efa941a26b39c23fbddf38a\">OpenMaya.MItMeshPolygon</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#ade875341b68a517e6314071cb1e98861\">OpenMaya.MItMeshVertex</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_surface_c_v.html#afaa298c53ed6b0a8205960e23461c37d\">OpenMaya.MItSurfaceCV</a>\n\
</li>\n\
<li>updateViewingParameters()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#a7c9ca60055eab4f43557b808c7c80b37\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>upDirection()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_camera.html#a67c510d04a08a079d452a72f2c3d1e8a\">OpenMaya.MFnCamera</a>\n\
</li>\n\
<li>useClosestPointForSelection()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_locator_node.html#a82ee082cd9fe43174477b7dac00b70e3\">OpenMayaUI.MPxLocatorNode</a>\n\
</li>\n\
<li>userChangingViewContext()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_frame_context.html#afba442118dbb0c5221dacd81fa3764fb\">OpenMayaRender.MFrameContext</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_draw_info.html#acd64e685dde3e44e5b7dbbe780a9a08b\">OpenMayaUI.MDrawInfo</a>\n\
</li>\n\
<li>userDefinedColorIndex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#abce3bc96fd14919cbd3e842713b5592f\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>userNode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#a94345ed1ea205013b0a8307050456f07\">OpenMaya.MFnDependencyNode</a>\n\
</li>\n\
<li>useSelectionAsDefault()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_syntax.html#a2cfcbbac4f687fcd7a1b9a052a576313\">OpenMaya.MSyntax</a>\n\
</li>\n\
<li>usingDefaultMaterial()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#aa7f554025e8fb3763ea739a3df9be426\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>usingMipmappedTextures()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#a163631c90262e3ad0103365bbbeff939\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>uuid()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#a86a879436ef7429c8c3719afdb6d028f\">OpenMaya.MFnDependencyNode</a>\n\
</li>\n\
<li>uvIndices()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_surface_c_v.html#a420ea4bc5c083035aa713f1992abfbea\">OpenMaya.MItSurfaceCV</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></div></body>\n\
</html>\n\
";