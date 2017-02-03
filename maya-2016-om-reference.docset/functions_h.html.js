var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Class Members</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'functions_h.html\', tocPrefix);\n\
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
            <h1>Class Members</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions.html\"><span>All</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_prop.html\"><span>Properties</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/functions.html#index__\"><span>_</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_a.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_g.html#index_g\"><span>g</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/functions_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_j.html#index_j\"><span>j</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions_z.html#index_z\"><span>z</span></a></li>\n\
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
<div class=\"textblock\">Here is a list of all documented class members with links to the class documentation for each member:</div>\n\
\n\
<h3><a class=\"anchor\" id=\"index_h\"></a>- h -</h3><ul>\n\
<li>handlesDraw()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shader_override.html#ab19e6d0087a56207a9a1dedb88efd8a8\">OpenMayaRender.MPxShaderOverride</a>\n\
</li>\n\
<li>handleSize()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_fn_manip3_d.html#af3dc69f5b1bf620b9cafd65c1886d947\">OpenMayaUI.MFnManip3D</a>\n\
</li>\n\
<li>has()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component_list_data.html#aeb7035d4fa8064e61eda621ce2248c5b\">OpenMaya.MFnComponentListData</a>\n\
</li>\n\
<li>hasActiveComponents()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_surface_shape.html#a81085aca29e3fc0c71bc4bb5b44d533b\">OpenMaya.MPxSurfaceShape</a>\n\
</li>\n\
<li>hasAlpha()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_texture.html#afa762f43eb09e7f709b9e4e96f044adf\">OpenMayaRender.MTexture</a>\n\
</li>\n\
<li>hasAlphaChannels()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#aca81848c9384d1c772d5458d38c5fa2f\">OpenMaya.MFnMesh</a>\n\
</li>\n\
<li>hasAttribute()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#a72ed1f64e98068ed1b8bb6848d379860\">OpenMaya.MFnDependencyNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_node_class.html#acb9697b210b41417677dc8291c1c33c4\">OpenMaya.MNodeClass</a>\n\
</li>\n\
<li>hasBlindData()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#a3e0a71175ac4931f0868b2b9cf98d39b\">OpenMaya.MFnMesh</a>\n\
</li>\n\
<li>hasCategory()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#aefb3cc0d2d18841a3c51e098b9718f09\">OpenMaya.MFnAttribute</a>\n\
</li>\n\
<li>hasChild()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dag_node.html#a2486ea4f27752e9a73fcb05d07ecc569\">OpenMaya.MFnDagNode</a>\n\
</li>\n\
<li>hasColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_face_vertex.html#a68cca684075d255d1b29c83b2f634afc\">OpenMaya.MItMeshFaceVertex</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_polygon.html#afdc03ad5ea3a607ce7429b28ee5b5a24\">OpenMaya.MItMeshPolygon</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_vertex.html#a25842337a6c8c2479a7f2992cc6ae6d4\">OpenMaya.MItMeshVertex</a>\n\
</li>\n\
<li>hasColorChannels()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_mesh.html#a65b11ce29721629a463940ef7ff307ea\">OpenMaya.MFnMesh</a>\n\
</li>\n\
<li>hasComponents()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_selection_list.html#af4eccf3a245affcf4a27ae95cbaa8ba0\">OpenMaya.MItSelectionList</a>\n\
</li>\n\
<li>hasCustomResourceHandle()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#a80dc731c0ffb5f9fa06027b0d55f4ef6\">OpenMayaRender.MIndexBuffer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_vertex_buffer.html#ac0f71dd007a3374a80a93801901e4b12\">OpenMayaRender.MVertexBuffer</a>\n\
</li>\n\
<li>hasFn()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_dag_path.html#a903368243c19cd633c04dac5b9b872ef\">OpenMaya.MDagPath</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_object.html#a5affad7c61e40a3e6973ab49cd2cca72\">OpenMaya.MObject</a>\n\
</li>\n\
<li>hasFragment()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_fragment_manager.html#a883b0a4ca6844bbd48813c22bb46ca80\">OpenMayaRender.MFragmentManager</a>\n\
</li>\n\
<li>hashCode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_object_handle.html#aceb1062cba97083f66dc3d8e3a1e8123\">OpenMaya.MObjectHandle</a>\n\
</li>\n\
<li>hasHistoryOnCreate\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_curve.html#a5085271a6082d14ee2b1fb618c702fad\">OpenMaya.MFnNurbsCurve</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_nurbs_surface.html#a8a87fc97378b2463064bc7cdd6ea1055\">OpenMaya.MFnNurbsSurface</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_surface_c_v.html#a78d91fe6f3732e93b2cc0c7e99cc62ac\">OpenMaya.MItSurfaceCV</a>\n\
</li>\n\
<li>hasIndex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#ad074cbfd16d3e612167cec974a4bc46f\">OpenMaya.MRampAttribute</a>\n\
</li>\n\
<li>hasItem()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_selection_list.html#a3ce9e16505dc0144ec11813c3bdf9b29\">OpenMaya.MSelectionList</a>\n\
</li>\n\
<li>hasItemPartly()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_selection_list.html#aaad9c3f5a6e4c71ae5f2885f30c49d05\">OpenMaya.MSelectionList</a>\n\
</li>\n\
<li>hasLowerBound()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_attribute_index.html#a76db8657df178042f46aaa4d521e14f4\">OpenMaya.MAttributeIndex</a>\n\
</li>\n\
<li>hasMax()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html#a0a249b04ad992de5267dc1c31af2366d\">OpenMaya.MFnNumericAttribute</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_unit_attribute.html#af4e17b1a704d6fade31849d64c1b8020\">OpenMaya.MFnUnitAttribute</a>\n\
</li>\n\
<li>hasMin()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html#ad9b452b2406bcdd6748ef8be6ac5afbc\">OpenMaya.MFnNumericAttribute</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_unit_attribute.html#a82c26e32c9b540f1d5beead6a09311b7\">OpenMaya.MFnUnitAttribute</a>\n\
</li>\n\
<li>hasNormals()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#acbdcfe985a4c652c09a83facca3ec6c6\">OpenMaya.MPxGeometryIterator</a>\n\
</li>\n\
<li>hasObj()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#a79ca8b86b89ddce2e4c0b67101cdc9d7\">OpenMaya.MFnBase</a>\n\
</li>\n\
<li>hasObjectGroup()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_geometry_data.html#afaaf624bf35c0f9a0aacdf1b4daf5cf6\">OpenMaya.MFnGeometryData</a>\n\
</li>\n\
<li>hasParent()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dag_node.html#a3513c9481575311dac9f9c03381fa5eb\">OpenMaya.MFnDagNode</a>\n\
</li>\n\
<li>hasPoints()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_geometry_iterator.html#a08e59acf6efe538afaa048e71314c226\">OpenMaya.MPxGeometryIterator</a>\n\
</li>\n\
<li>hasRange()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_attribute_index.html#aa10c79e9b1041b1a03105d1e9e95acfa\">OpenMaya.MAttributeIndex</a>\n\
</li>\n\
<li>hasSamePerspective()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_camera.html#a22f6647c06972e51ea21970c043cd6d9\">OpenMaya.MFnCamera</a>\n\
</li>\n\
<li>hasShaderOverride()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_pass_context.html#ac598f9c15ce9c64c8ddf125aec6c03ea\">OpenMayaRender.MPassContext</a>\n\
</li>\n\
<li>hasSoftMax()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html#a63a24a4786e7d5228f98a67fab42bdd5\">OpenMaya.MFnNumericAttribute</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_unit_attribute.html#a66618ace4508763c48225b010b1c9fc1\">OpenMaya.MFnUnitAttribute</a>\n\
</li>\n\
<li>hasSoftMin()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html#a5b7cfc1d719cfaa78b6869b802eff144\">OpenMaya.MFnNumericAttribute</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_unit_attribute.html#a10a8417d20fea5cc113ad7724af0fcc8\">OpenMaya.MFnUnitAttribute</a>\n\
</li>\n\
<li>hasSyntax()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_command.html#a94388e358753ede76423b8625e44a8b2\">OpenMaya.MPxCommand</a>\n\
</li>\n\
<li>hasTransparency()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_px_hw_shader_node.html#a1e24e904f9d9d7fc1483d5a9e86efb25\">OpenMayaUI.MPxHwShaderNode</a>\n\
</li>\n\
<li>hasTransparentAlpha()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_texture.html#a9c7fe1d9d4b2042cb177d77852a27467\">OpenMayaRender.MTexture</a>\n\
</li>\n\
<li>hasUIDrawables()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_h_u_d_render.html#a9251a30e4349792d8f94a53644fb9404\">OpenMayaRender.MHUDRender</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_draw_override.html#a9231cf79a4bd19b0d48c2ddeb5fc9bd3\">OpenMayaRender.MPxDrawOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_geometry_override.html#ae1227c25d2451986e91394d24950f1ea\">OpenMayaRender.MPxGeometryOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_scene_render.html#aaa703fd63ebc73551aa49326d319762a\">OpenMayaRender.MSceneRender</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_user_render_operation.html#a3e0c0d28a163379dd7fed7d70835d9e1\">OpenMayaRender.MUserRenderOperation</a>\n\
</li>\n\
<li>hasUniqueName()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_dependency_node.html#accf9b6d5596f957b82367e827b623d92\">OpenMaya.MFnDependencyNode</a>\n\
</li>\n\
<li>hasUpperBound()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_attribute_index.html#a3547685c3e78e302128fd2c2bf45f652\">OpenMaya.MAttributeIndex</a>\n\
</li>\n\
<li>hasUVs()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_face_vertex.html#a5da2a286330bb81f8042f3238df43445\">OpenMaya.MItMeshFaceVertex</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_polygon.html#adf4c885bc88878751755a65f83dc81d6\">OpenMaya.MItMeshPolygon</a>\n\
</li>\n\
<li>hasValidRange()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_attribute_index.html#abfbda5298cff9e5b9aae63f61654a014\">OpenMaya.MAttributeIndex</a>\n\
</li>\n\
<li>hasValidTriangulation()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_it_mesh_polygon.html#a4d9b27d154482f055bcd51931a380a7f\">OpenMaya.MItMeshPolygon</a>\n\
</li>\n\
<li>hasWeights\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_component.html#ae6b2be21846bd98cd49da8d1a0937b89\">OpenMaya.MFnComponent</a>\n\
</li>\n\
<li>hasZeroAlpha()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_texture.html#a1af93570947682c19524631455cb8345\">OpenMayaRender.MTexture</a>\n\
</li>\n\
<li>haveDepth()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_image.html#a4adc6202f525eb57f130d4dbc2b90116\">OpenMaya.MImage</a>\n\
</li>\n\
<li>height\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_bounding_box.html#ae8bce46b16b3aca0402334b7a6348060\">OpenMaya.MBoundingBox</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_render_target_description.html#a90b3e0d6c674279e9945c365063e4cc3\">OpenMayaRender.MRenderTargetDescription</a>\n\
</li>\n\
<li>hidden\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#ac62847e8f885c4f2c032b3ba08080a68\">OpenMaya.MFnAttribute</a>\n\
</li>\n\
<li>highestPriority\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m_select_info.html#a450caaad875c78cf069ec31e0bf2cfeb\">OpenMayaUI.MSelectInfo</a>\n\
</li>\n\
<li>hiliteColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_u_i_1_1_m3d_view.html#a81bc673337d68843bfaf9148647277c9\">OpenMayaUI.M3dView</a>\n\
</li>\n\
<li>historyOn\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_px_command.html#ae4171c0ced7b9a6e8dce6d81a7dfeb9b\">OpenMaya.MPxCommand</a>\n\
</li>\n\
<li>homogenize()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_float_matrix.html#a38192ed95beb799888ac66c4ff7d4198\">OpenMaya.MFloatMatrix</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_float_point.html#a2d33f5078161a9956a7f45f8a518ba5f\">OpenMaya.MFloatPoint</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_matrix.html#a9ecfef14595cf059378870a3cce5a3de\">OpenMaya.MMatrix</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_point.html#a7af530a277bacbfc5700859909010ecf\">OpenMaya.MPoint</a>\n\
</li>\n\
<li>horizontalFieldOfView()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_camera.html#a3b6bec0b98542dbf3f565edd5eb6df8f\">OpenMaya.MFnCamera</a>\n\
</li>\n\
<li>horizontalFilmAperture\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_camera.html#a71e1a0da3e385a3afb263aed6a8a9f54\">OpenMaya.MFnCamera</a>\n\
</li>\n\
<li>horizontalFilmOffset\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_camera.html#a1c22de75543cc951a84a9d1244a35a06\">OpenMaya.MFnCamera</a>\n\
</li>\n\
<li>horizontalPan\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_camera.html#a2a3889ef442dde379252e3c7a15f402f\">OpenMaya.MFnCamera</a>\n\
</li>\n\
<li>horizontalRollPivot\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_camera.html#a9f0758f261c73bdfd8ceacbaaa944c7b\">OpenMaya.MFnCamera</a>\n\
</li>\n\
<li>horizontalShake\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_camera.html#a9a46b7809d9e3790f5358d32c92a5ce6\">OpenMaya.MFnCamera</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></div></body>\n\
</html>\n\
";