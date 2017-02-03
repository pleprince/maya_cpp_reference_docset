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
    py_ref_adsk_ref_toc.initNavTree(\'functions_func_t.html\', tocPrefix);\n\
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
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions_func_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func_u.html#index_u\"><span>u</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_t\"></a>- t -</h3><ul>\n\
<li>tangent()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_curve.html#a36341e4f74fd4050a3708e44f400e89a\">OpenMaya.MFnNurbsCurve</a>\n\
</li>\n\
<li>tangentId()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_face_vertex.html#a74f575cc11bd92f24ff5bfca0a375e53\">OpenMaya.MItMeshFaceVertex</a>\n\
</li>\n\
<li>tangentIndex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_polygon.html#ad8100a09841e96bee3bd4f6288cd0314\">OpenMaya.MItMeshPolygon</a>\n\
</li>\n\
<li>tangents()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_surface.html#a0cbf3fc934c505cc66467511b9e41838\">OpenMaya.MFnNurbsSurface</a>\n\
</li>\n\
<li>tangentsLocked()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_anim_curve.html#a69ef7f9b923d816f2158277bfec9f90f\">OpenMayaAnim.MFnAnimCurve</a>\n\
</li>\n\
<li>targetBackBuffer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_present_target.html#ae17257bc1528320a00e2bd5947829b99\">OpenMayaRender.MPresentTarget</a>\n\
</li>\n\
<li>targetDescription()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_target.html#a4682a6574e34f19b57ff87b326d2b324\">OpenMayaRender.MRenderTarget</a>\n\
</li>\n\
<li>targetOverrideList()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_operation.html#a3166af62e4b240d8488061bab870c28e\">OpenMayaRender.MRenderOperation</a>\n\
</li>\n\
<li>techniqueAnnotation()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_shader_instance.html#a2bef531d6f43bb41e2efc9d123f2fed8\">OpenMayaRender.MShaderInstance</a>\n\
</li>\n\
<li>templateColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#ac4b03858fb4c2f232164d2bbf9a5f7ef\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>terminateKey()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shader_override.html#ab58a60188a4b1597dc210fe2065382c1\">OpenMayaRender.MPxShaderOverride</a>\n\
</li>\n\
<li>texCoordsPerVertex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html#ad783f5b016cb99971561d17ea3bca702\">OpenMayaUI.MPxHwShaderNode</a>\n\
</li>\n\
<li>text()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html#a9f4c69c62e0df87029ae559724131938\">OpenMayaRender.MUIDrawManager</a>\n\
</li>\n\
<li>text2d()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html#aab6f6f6db4a5a58259ca639cd96f2a06\">OpenMayaRender.MUIDrawManager</a>\n\
</li>\n\
<li>textureDescription()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_texture.html#a1ef880058676c99bfa6d12eee4ef9468\">OpenMayaRender.MTexture</a>\n\
</li>\n\
<li>textureImage()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_material.html#a2943e5e34f4ef69c2af03d23ff5241f3\">OpenMayaUI.MMaterial</a>\n\
</li>\n\
<li>textureMode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#af17227797334ae8843383206a5091ce9\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>thisMObject()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_node.html#ab4fb0c447b9223016cace2e16c488eef\">OpenMaya.MPxNode</a>\n\
</li>\n\
<li>timedAnimCurveTypeForPlug()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_anim_1_1_m_fn_anim_curve.html#ad5762a741d28d2f52741db78e1cfd9c7\">OpenMayaAnim.MFnAnimCurve</a>\n\
</li>\n\
<li>toggle()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_selection_list.html#a3a2363125d26e40f18a2edc3c5e59901\">OpenMaya.MSelectionList</a>\n\
</li>\n\
<li>toggleIndex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_fn_toggle_manip.html#a40d651b5546f017e66f9f6b9557d1b5e\">OpenMayaUI.MFnToggleManip</a>\n\
</li>\n\
<li>transform()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_dag_path.html#a252aef07d234fb4f316d4fb32a41ea8b\">OpenMaya.MDagPath</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_draw_override.html#a5f58ba045307ca8e7855feb182459b41\">OpenMayaRender.MPxDrawOverride</a>\n\
</li>\n\
<li>transformAsNormal()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_float_vector.html#a3902717ae83edb433b07af5a9a0b6593\">OpenMaya.MFloatVector</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_vector.html#a24dcd2960e93d82cd444ac91d8289f10\">OpenMaya.MVector</a>\n\
</li>\n\
<li>transformation()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_matrix_data.html#a85aa0671787af3cb815d7a78d7a5bd97\">OpenMaya.MFnMatrixData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_transform.html#a565a5067d65272827f1e9d3499b83a07\">OpenMaya.MFnTransform</a>\n\
</li>\n\
<li>transformationMatrix()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dag_node.html#a049173358da72c958a46456b915b8082\">OpenMaya.MFnDagNode</a>\n\
</li>\n\
<li>transformUsing()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_bounding_box.html#afdec83e5347327de4ae91f0469972deb\">OpenMaya.MBoundingBox</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_surface_shape.html#ae82dc2969d51d1e3b755892ad66dfe20\">OpenMaya.MPxSurfaceShape</a>\n\
</li>\n\
<li>translateBy()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_transform.html#a9be0516ec3af35c7b17eb5d0d0bfae63\">OpenMaya.MFnTransform</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#ac3db512ab84b9ed38fb1c40d5a88fc5a\">OpenMaya.MItMeshVertex</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_surface_c_v.html#abe82f71f6519ab56a3ead8998ff5a6fa\">OpenMaya.MItSurfaceCV</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_transformation_matrix.html#a2558b600d9e66cb5a5197f83ae1c7c9d\">OpenMaya.MTransformationMatrix</a>\n\
</li>\n\
<li>translation()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_transform.html#a09749cfef6dd197189cfb1013576a09b\">OpenMaya.MFnTransform</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_transformation_matrix.html#aba0345f3d145564b0e8c7b0a5cee2039\">OpenMaya.MTransformationMatrix</a>\n\
</li>\n\
<li>transparencyOptions()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html#a951ea74e72691889e0f6e64b2f225f1b\">OpenMayaUI.MPxHwShaderNode</a>\n\
</li>\n\
<li>transparencyParameter()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_surface_shading_node_override.html#a0b968e537e1233aec730b7bf3ac5bb36\">OpenMayaRender.MPxSurfaceShadingNodeOverride</a>\n\
</li>\n\
<li>transpose()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_float_matrix.html#a98a0578372d142e1c2648b304419bde0\">OpenMaya.MFloatMatrix</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_matrix.html#a952c635d8d88888917b3515f9b76e794\">OpenMaya.MMatrix</a>\n\
</li>\n\
<li>trim()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_surface.html#a9f59c13378fa84de5e4e9bcae9f2083c\">OpenMaya.MFnNurbsSurface</a>\n\
</li>\n\
<li>tweakUsing()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_surface_shape.html#ad46356669ce25542e54916a211317619\">OpenMaya.MPxSurfaceShape</a>\n\
</li>\n\
<li>twoSidedLighting()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#adb6ed182d0b8cec0099818adcd980536\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>type()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_attribute_index.html#a450e369dd2baf1b8dd6efd953944c72e\">OpenMaya.MAttributeIndex</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_data_handle.html#ad7660abe88618b0fc6c989d85c9ee109\">OpenMaya.MDataHandle</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#a051592969dc5f1c426f18558794fd54f\">OpenMaya.MFnBase</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_node.html#aa014ff9d9800aaf83fc76548d04182e2\">OpenMaya.MPxNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_item.html#a33643826522754646cd53c58b4cc8bd1\">OpenMayaRender.MRenderItem</a>\n\
</li>\n\
<li>typeId()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_data_handle.html#a1804e4d33bd6f88848bc7227ffe2ed3c\">OpenMaya.MDataHandle</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_plugin_data.html#af551d2b4924a5c6dc6fd50d2322e1316\">OpenMaya.MFnPluginData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_data.html#aff1aa32fb89c780cbbbc843c5d4ae17c\">OpenMaya.MPxData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_node.html#ad34b97709625796f508aff7dfbe5c0b2\">OpenMaya.MPxNode</a>\n\
</li>\n\
<li>typeName()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_node.html#a074db167de07228d650f072f2dc6786a\">OpenMaya.MPxNode</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></div></body>\n\
</html>\n\
";