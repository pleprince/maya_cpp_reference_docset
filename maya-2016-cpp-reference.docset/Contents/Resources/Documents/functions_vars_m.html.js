var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Class Members - Variables</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_vars_m.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>Class Members - Variables</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow3\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>All</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func.html\"><span>Functions</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_eval.html\"><span>Enumerator</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_rela.html\"><span>Related&#160;Functions</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_l.html#index_l\"><span>l</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_z.html#index_z\"><span>z</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_m\"></a>- m -</h3><ul>\n\
<li>mApplyPerVertex\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#ab7ae16244611046b8e6857bb0b63cedd\">MPxFieldNode</a>\n\
</li>\n\
<li>matrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_matrix.html#a4c4b82dea48da571f143f122bf90ea48\">MFloatMatrix</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_matrix.html#a527b102f4eb0951cf4f391f828d3ca34\">MMatrix</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a03ffd0b722e887108a542da8a5936146\">MPxLocatorNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_skin_cluster.html#a03ffd0b722e887108a542da8a5936146\">MPxSkinCluster</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a03ffd0b722e887108a542da8a5936146\">MPxSurfaceShape</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a03ffd0b722e887108a542da8a5936146\">MPxTransform</a>\n\
</li>\n\
<li>mAttenuation\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#a8ceae52cfd0b7dee8a2caf1fecdafb9a\">MPxFieldNode</a>\n\
</li>\n\
<li>maxAnisotropy\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sampler_state_desc.html#af66b5967697ff854e1907de159daea13\">MSamplerStateDesc</a>\n\
</li>\n\
<li>maxLOD\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sampler_state_desc.html#ad63b1a492e238f91644a11ab2808c416\">MSamplerStateDesc</a>\n\
</li>\n\
<li>maxRotLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ad40c3b9869648d2fae18211920875002\">MPxTransform</a>\n\
</li>\n\
<li>maxRotLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a47617fdaa3801f3f286a8c9dc1737671\">MPxTransform</a>\n\
</li>\n\
<li>maxRotXLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ab0e7614cafb5374b664ca4093f430dc2\">MPxTransform</a>\n\
</li>\n\
<li>maxRotXLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a8dc5bb65f23bd464d1863944f14cbbaa\">MPxTransform</a>\n\
</li>\n\
<li>maxRotYLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#aa9b97e95a325fe8a1e21456a7636a452\">MPxTransform</a>\n\
</li>\n\
<li>maxRotYLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a5e34003bef9a4e01192ce7e3f2875e5c\">MPxTransform</a>\n\
</li>\n\
<li>maxRotZLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#aea0e822c7d7ab46f12b9e401a8eff182\">MPxTransform</a>\n\
</li>\n\
<li>maxRotZLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ad72ea1f830ce55f64256241cbf25728a\">MPxTransform</a>\n\
</li>\n\
<li>maxScaleLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ae1864ca6c87d74149af49da5d7d8f838\">MPxTransform</a>\n\
</li>\n\
<li>maxScaleLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a8332d3e2f331b1e3abf087606c096c48\">MPxTransform</a>\n\
</li>\n\
<li>maxScaleXLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a20b65f5a1045bf9cc044a1da636c1713\">MPxTransform</a>\n\
</li>\n\
<li>maxScaleXLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a04df785a75fe17692f48db967ab1b9b0\">MPxTransform</a>\n\
</li>\n\
<li>maxScaleYLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#aeedc7254c87a9f679448e18ab38ee2b5\">MPxTransform</a>\n\
</li>\n\
<li>maxScaleYLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a90a55dc21f770de07a1c6ae0bbf4e82d\">MPxTransform</a>\n\
</li>\n\
<li>maxScaleZLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ac0771aa5b44efb10a97c081b46001d8f\">MPxTransform</a>\n\
</li>\n\
<li>maxScaleZLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ad2e79a38f10762e720e3c3e95df07e12\">MPxTransform</a>\n\
</li>\n\
<li>maxShadingSamples\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a2527e5cdefc5e5d1a9b1671ed3881661\">MPxImagePlane</a>\n\
</li>\n\
<li>maxThreads\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_job_params.html#a4e005bacfd5d41c925cc162dd570ec97\">MPxRenderer::JobParams</a>\n\
</li>\n\
<li>maxTransLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a61d305fd49eb17f5224dd9450f632846\">MPxTransform</a>\n\
</li>\n\
<li>maxTransLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a0f0546bd4e3de91ef70a0733ec1eb3fe\">MPxTransform</a>\n\
</li>\n\
<li>maxTransXLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ab229225465eac92253a6c58965fac3c6\">MPxTransform</a>\n\
</li>\n\
<li>maxTransXLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a31f500849af1709e4e8b77bed4bf343b\">MPxTransform</a>\n\
</li>\n\
<li>maxTransYLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ab713f412938384167d177da437807de6\">MPxTransform</a>\n\
</li>\n\
<li>maxTransYLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ab0c167971a1c294ac96c8d090abdef3d\">MPxTransform</a>\n\
</li>\n\
<li>maxTransZLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a6efb0be2d339f70e3c0dc2805fafeafb\">MPxTransform</a>\n\
</li>\n\
<li>maxTransZLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a571d084f00c1c25ab2cc6fdce2417577\">MPxTransform</a>\n\
</li>\n\
<li>mCameraPath\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_camera_override.html#aa8ef6e269c1a19a025fd1baa85c6b02c\">MCameraOverride</a>\n\
</li>\n\
<li>mClearColor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html#ad3b7062800795e922d8332fb8aa03148\">MClearOperation</a>\n\
</li>\n\
<li>mClearColor2\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html#aca823308fb888db496762794ce8fab5e\">MClearOperation</a>\n\
</li>\n\
<li>mClearDepth\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html#ad34c03f3f435a59575c48bbda59e07a9\">MClearOperation</a>\n\
</li>\n\
<li>mClearGradient\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html#a1e6d1bb4da21665d53f6f2ea9cbfbaa3\">MClearOperation</a>\n\
</li>\n\
<li>mClearMask\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html#a45b5ce8da8fc0c09f8c685dd5d411378\">MClearOperation</a>\n\
</li>\n\
<li>mClearOperation\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_quad_render.html#a6aec65d0f813d123fe1610fb992a8963\">MQuadRender</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_scene_render.html#a6aec65d0f813d123fe1610fb992a8963\">MSceneRender</a>\n\
</li>\n\
<li>mClearStencil\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html#aa634f5e940b6c2ad9809eed6d7c468b1\">MClearOperation</a>\n\
</li>\n\
<li>mControlPoints\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a10a14055fb8b34f1faf2aa86d9c221fc\">MPxSurfaceShape</a>\n\
</li>\n\
<li>mControlValueX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#aed752553d559512251dd0e36df04c8af\">MPxSurfaceShape</a>\n\
</li>\n\
<li>mControlValueY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a6b7e0f78480dcda45ebfd4d607c94098\">MPxSurfaceShape</a>\n\
</li>\n\
<li>mControlValueZ\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a6b22bb6eed20d3e999daa03ece5593de\">MPxSurfaceShape</a>\n\
</li>\n\
<li>mCurrentTime\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a6b99ae8d82feed6756446398dcde28ca\">MPxEmitterNode</a>\n\
</li>\n\
<li>mDefinition\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_shader_compile_macro.html#ae4356ad73e0955ac933ebd876772b5d1\">MShaderCompileMacro</a>\n\
</li>\n\
<li>mDeltaTime\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a469d948130468eb4511f4201df0fe345\">MPxEmitterNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#a469d948130468eb4511f4201df0fe345\">MPxFieldNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_spring_node.html#a469d948130468eb4511f4201df0fe345\">MPxSpringNode</a>\n\
</li>\n\
<li>mDirection\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#ac115aaf14c9e5a5c60c436e2232097ed\">MPxEmitterNode</a>\n\
</li>\n\
<li>mDirectionX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a83a9bcd358502be6a84c9d3020b189b6\">MPxEmitterNode</a>\n\
</li>\n\
<li>mDirectionY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a6e716306d52deddc141f67ab48f739d1\">MPxEmitterNode</a>\n\
</li>\n\
<li>mDirectionZ\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a73f23eed90289431fc2e40d4a136f5c3\">MPxEmitterNode</a>\n\
</li>\n\
<li>memberWireframeColor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_object_set.html#aea9c9ed587a9e011a1441e4def33782e\">MPxObjectSet</a>\n\
</li>\n\
<li>mEmissionFunction\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_fluid_emitter_node.html#a54654b967feab5187b5f936fa1b43753\">MPxFluidEmitterNode</a>\n\
</li>\n\
<li>mEmitFluidColor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_fluid_emitter_node.html#ac329992a36e79d6d37ce5064791cf5b5\">MPxFluidEmitterNode</a>\n\
</li>\n\
<li>mEmitterType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a76cf67ce99f020dc477587cb91efbc50\">MPxEmitterNode</a>\n\
</li>\n\
<li>mEnd1Weight\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_spring_node.html#a4e50600fa0ccae800fc243b830a46e3d\">MPxSpringNode</a>\n\
</li>\n\
<li>mEnd2Weight\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_spring_node.html#af329f5b88b4d9fc97dd03b7dddd509fe\">MPxSpringNode</a>\n\
</li>\n\
<li>message\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_node.html#ac4a5de65a3a8f057ea39cd749d38971e\">MPxNode</a>\n\
</li>\n\
<li>mFarClippingPlane\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_camera_override.html#a9d8abcbb95c15bcb7e9ff1dd357f7b56\">MCameraOverride</a>\n\
</li>\n\
<li>mFluidColor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_fluid_emitter_node.html#a30c99d6b4f6859b6c6a897d8ba30b513\">MPxFluidEmitterNode</a>\n\
</li>\n\
<li>mFluidColorB\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_fluid_emitter_node.html#afac9608ddb602576a070ffac37122bab\">MPxFluidEmitterNode</a>\n\
</li>\n\
<li>mFluidColorG\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_fluid_emitter_node.html#a4d060cca96e93c73f58879807bfbfe50\">MPxFluidEmitterNode</a>\n\
</li>\n\
<li>mFluidColorR\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_fluid_emitter_node.html#a947339a5af5caf57cc0baaf183343a55\">MPxFluidEmitterNode</a>\n\
</li>\n\
<li>mFluidDensityEmission\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_fluid_emitter_node.html#a2fc48945e7fb8c01aa83888b8dc1e4e3\">MPxFluidEmitterNode</a>\n\
</li>\n\
<li>mFluidDropoff\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_fluid_emitter_node.html#a59914cec0a4ec738d4eb7462122617bd\">MPxFluidEmitterNode</a>\n\
</li>\n\
<li>mFluidFuelEmission\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_fluid_emitter_node.html#acda4ff121f4a3276aa865cf0625524d0\">MPxFluidEmitterNode</a>\n\
</li>\n\
<li>mFluidHeatEmission\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_fluid_emitter_node.html#ab2c8d0f74790682fcb5f21521c3d880b\">MPxFluidEmitterNode</a>\n\
</li>\n\
<li>mFluidJitter\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_fluid_emitter_node.html#af2bf90f346df2f4e0d03108abd7ddbb4\">MPxFluidEmitterNode</a>\n\
</li>\n\
<li>mHiddenCameraList\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_camera_override.html#a0f66dadcb83e1c21eb5f0d91f9b25f3f\">MCameraOverride</a>\n\
</li>\n\
<li>midDistMaps\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#ab7651480485642a70586c1efbb63b4e9\">MRenderShadowData</a>\n\
</li>\n\
<li>mInheritFactor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#abd1e38127aba2dc47fbee08ac1328955\">MPxEmitterNode</a>\n\
</li>\n\
<li>minLOD\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sampler_state_desc.html#a3fac86a5d9783d090e70a4053380dfac\">MSamplerStateDesc</a>\n\
</li>\n\
<li>mInputData\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#aacab81bdfca3ff76d774f4e037363f64\">MPxFieldNode</a>\n\
</li>\n\
<li>mInputForce\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#ac3ab200507ad80061f8f6c671839e5fb\">MPxFieldNode</a>\n\
</li>\n\
<li>mInputMass\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#a14fc69e105f565626baf765aa4d36e0f\">MPxFieldNode</a>\n\
</li>\n\
<li>mInputPositions\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#a1075ceb9b1c91500cd17b1903d66595a\">MPxFieldNode</a>\n\
</li>\n\
<li>mInputPPData\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#a8cfc24f378b3d9a9b02d9e08000bfc71\">MPxFieldNode</a>\n\
</li>\n\
<li>mInputVelocities\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#ac59a0e1315a5dd2887a69dd6e67cc5c1\">MPxFieldNode</a>\n\
</li>\n\
<li>minRotLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a3f5c0b036a3e8f944f5df2c95ea6c1c2\">MPxTransform</a>\n\
</li>\n\
<li>minRotLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a4fbda7c51cac9b94650d39b364214df1\">MPxTransform</a>\n\
</li>\n\
<li>minRotXLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a82e5800143a4959ff39b9237a7be75bf\">MPxTransform</a>\n\
</li>\n\
<li>minRotXLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a50754714dd3750e757fa6848d92e7077\">MPxTransform</a>\n\
</li>\n\
<li>minRotYLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a81ae3372ce72be2f48d3ee43c95c9295\">MPxTransform</a>\n\
</li>\n\
<li>minRotYLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a388da4f966ad36672576ea369bd56502\">MPxTransform</a>\n\
</li>\n\
<li>minRotZLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#acd73d2d0e2b213c97a531bc0166e7906\">MPxTransform</a>\n\
</li>\n\
<li>minRotZLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ae308831f8d060232c995e547dccefb98\">MPxTransform</a>\n\
</li>\n\
<li>minScaleLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a6164e960ef78e61d59d00b548bcd16cd\">MPxTransform</a>\n\
</li>\n\
<li>minScaleLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a6e8be82b82294297412da0b417a60c75\">MPxTransform</a>\n\
</li>\n\
<li>minScaleXLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ab66f110d96aa444d4a9900be37574022\">MPxTransform</a>\n\
</li>\n\
<li>minScaleXLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#aab27902194950254a01941e9761d9755\">MPxTransform</a>\n\
</li>\n\
<li>minScaleYLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a2a04b796c2138e8432693482132a730e\">MPxTransform</a>\n\
</li>\n\
<li>minScaleYLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a6c628e48d6f558dde2a99022a089917d\">MPxTransform</a>\n\
</li>\n\
<li>minScaleZLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#adc3c3da0d13580bb33a68460e61ebbe0\">MPxTransform</a>\n\
</li>\n\
<li>minScaleZLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ab653f2189892b66d01e89a240a5fae5e\">MPxTransform</a>\n\
</li>\n\
<li>minTransLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#aff2f06f3a8bda861260650f4b706b3f9\">MPxTransform</a>\n\
</li>\n\
<li>minTransLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#aaf9c81ca963cb7f670efd0757059bfb7\">MPxTransform</a>\n\
</li>\n\
<li>minTransXLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a01742fe99a1a678820d1209cf2502362\">MPxTransform</a>\n\
</li>\n\
<li>minTransXLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#af07d4cae059a891ac2799863754ada11\">MPxTransform</a>\n\
</li>\n\
<li>minTransYLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a35e3a325b511c73ee30e71b7f3a8748f\">MPxTransform</a>\n\
</li>\n\
<li>minTransYLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a15e17a07b392d800cfc64bc8e3775297\">MPxTransform</a>\n\
</li>\n\
<li>minTransZLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ab30a0a4fadb92e7cb88071dd6e66379e\">MPxTransform</a>\n\
</li>\n\
<li>minTransZLimitEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ace9706766c9bc5dcc5eac9836b5d0a58\">MPxTransform</a>\n\
</li>\n\
<li>mipLODBias\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sampler_state_desc.html#a9ceccd089a265adf827322c9ff629dfc\">MSamplerStateDesc</a>\n\
</li>\n\
<li>mIsFull\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a092cd8e068462ff02f2b8113a7ccf74e\">MPxEmitterNode</a>\n\
</li>\n\
<li>mMagnitude\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#afe884c9a01dcde94c896b185f6da7655\">MPxFieldNode</a>\n\
</li>\n\
<li>mMaxDistance\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a02cb12bfd842265866dff23c78b6f695\">MPxEmitterNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#a02cb12bfd842265866dff23c78b6f695\">MPxFieldNode</a>\n\
</li>\n\
<li>mMinDistance\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#aa947e8c241f603f1031772c9b6b5f105\">MPxEmitterNode</a>\n\
</li>\n\
<li>mName\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a186d657a8873bbd4e87f10cb8401119d\">MRenderOperation</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_shader_compile_macro.html#a186d657a8873bbd4e87f10cb8401119d\">MShaderCompileMacro</a>\n\
</li>\n\
<li>mNearClippingPlane\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_camera_override.html#a99ce0e1b95508a25488fe3c06fdd9376\">MCameraOverride</a>\n\
</li>\n\
<li>mOperationType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a0854dcda45fe1e51a1897bc82cb963fb\">MRenderOperation</a>\n\
</li>\n\
<li>mOutput\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#afdc93fb0b49aa2df15de8d5b081308a0\">MPxEmitterNode</a>\n\
</li>\n\
<li>mOutputForce\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#a93da3feab5000cc3d9b9fa4b66b67c22\">MPxFieldNode</a>\n\
</li>\n\
<li>mOwnerCentroid\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a8e65d2a33c8fda5648ea5f53d06745c3\">MPxEmitterNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#a8e65d2a33c8fda5648ea5f53d06745c3\">MPxFieldNode</a>\n\
</li>\n\
<li>mOwnerCentroidX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a5777225dea2f3df616e7050b8f2acb2e\">MPxEmitterNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#a5777225dea2f3df616e7050b8f2acb2e\">MPxFieldNode</a>\n\
</li>\n\
<li>mOwnerCentroidY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a33d7325a4149ddd84829ec0fbb840564\">MPxEmitterNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#a33d7325a4149ddd84829ec0fbb840564\">MPxFieldNode</a>\n\
</li>\n\
<li>mOwnerCentroidZ\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a661f70dd6cbb27ff5984b1db8b02df37\">MPxEmitterNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#a661f70dd6cbb27ff5984b1db8b02df37\">MPxFieldNode</a>\n\
</li>\n\
<li>mOwnerPosData\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a768659689c7f579e66efd4eaae9d17c7\">MPxEmitterNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#a768659689c7f579e66efd4eaae9d17c7\">MPxFieldNode</a>\n\
</li>\n\
<li>mOwnerPPData\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#ab891e2b67a2d8e3bfa0095bd56e79722\">MPxFieldNode</a>\n\
</li>\n\
<li>mOwnerVelData\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#afa5e9e8cc2fad6ffb2c44d526918320c\">MPxEmitterNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#afa5e9e8cc2fad6ffb2c44d526918320c\">MPxFieldNode</a>\n\
</li>\n\
<li>mPresentDepth\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_present_target.html#ac757254207ad2bc8b8bbac40cbca7fbb\">MPresentTarget</a>\n\
</li>\n\
<li>mProjectionMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_camera_override.html#abce8b6497e7c65622ad27d1355bbcea0\">MCameraOverride</a>\n\
</li>\n\
<li>mRandState\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a023161c01cff75f58a57521cb540f521\">MPxEmitterNode</a>\n\
</li>\n\
<li>mRate\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a4cc76c3647b5c50dc146571c21be27e8\">MPxEmitterNode</a>\n\
</li>\n\
<li>mSeed\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a2ba8cf969551a15719dd42af73ac5948\">MPxEmitterNode</a>\n\
</li>\n\
<li>MSetupFlags\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html#a816af0aa5c543958899c00485e0264d2\">MGeometryList</a>\n\
</li>\n\
<li>mSpeed\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a34ba1b289c76df0869fa7acaedd15787\">MPxEmitterNode</a>\n\
</li>\n\
<li>mStartTime\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a42dd91f663e87fd97addc020e2175e3b\">MPxEmitterNode</a>\n\
</li>\n\
<li>mSweptGeometry\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#aa4962b64147fedc5ab3b091b5daabf67\">MPxEmitterNode</a>\n\
</li>\n\
<li>mTargetBackBuffer\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_present_target.html#adbe1257dff6dd42dd1818eaa1b85d589\">MPresentTarget</a>\n\
</li>\n\
<li>mTurbulence\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_fluid_emitter_node.html#ae4e4388627917301d80d1fb7751fa433\">MPxFluidEmitterNode</a>\n\
</li>\n\
<li>multiSampleEnable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_rasterizer_state_desc.html#a0014b3f735f6f94469377ca0ce55c199\">MRasterizerStateDesc</a>\n\
</li>\n\
<li>multiSampleMask\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html#afae6333af8929bff85129e351052930d\">MBlendStateDesc</a>\n\
</li>\n\
<li>mUseFarClippingPlane\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_camera_override.html#ada73e2b0f60e3ec7646d30258f2f2545\">MCameraOverride</a>\n\
</li>\n\
<li>mUseHiddenCameraList\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_camera_override.html#ab7bf3417256c31717bcc5f1d00b72d56\">MCameraOverride</a>\n\
</li>\n\
<li>mUseMaxDistance\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#af14c9c0337d6a42491cf817763a6d1a1\">MPxFieldNode</a>\n\
</li>\n\
<li>mUseNearClippingPlane\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_camera_override.html#a1d5f5ed53ba37d142fd78e11434e231c\">MCameraOverride</a>\n\
</li>\n\
<li>mUseProjectionMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_camera_override.html#a0ea8f20109941ec5e65cf2d46f40b6ed\">MCameraOverride</a>\n\
</li>\n\
<li>mUseViewMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_camera_override.html#ad40b2c5b942b68753dcf3a87eb0ef8fa\">MCameraOverride</a>\n\
</li>\n\
<li>mViewMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_camera_override.html#ab6d3fa1e01b16127fc497182ded4fede\">MCameraOverride</a>\n\
</li>\n\
<li>mWorldMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a940ea09af958c3cea80605cafaf25b38\">MPxEmitterNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_field_node.html#a940ea09af958c3cea80605cafaf25b38\">MPxFieldNode</a>\n\
</li>\n\
<li>myRegistration\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a06013a942d7abc4c27da4257b6d9438e\">IndexPair</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a06013a942d7abc4c27da4257b6d9438e\">IndexString</a>\n\
</li>\n\
<li>myTypeName\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a951db9ffca1d19fccf8ed3dd88f86327\">IndexPair</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a951db9ffca1d19fccf8ed3dd88f86327\">IndexString</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></div></body>\n\
</html>\n\
";