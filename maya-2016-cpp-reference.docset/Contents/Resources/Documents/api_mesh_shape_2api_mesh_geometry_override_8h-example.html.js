var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>apiMeshShape/apiMeshGeometryOverride.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'api_mesh_shape_2api_mesh_geometry_override_8h-example.html\', tocPrefix);\n\
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
            <h1>apiMeshShape/apiMeshGeometryOverride.h</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
<div class=\"title\">apiMeshShape/apiMeshGeometryOverride.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// apiMeshGeometryOverride.h</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Handles vertex data preparation for drawing the user defined shape in</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Viewport 2.0.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxGeometryOverride.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIntArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStateManager.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTextureManager.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;set&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>apiMesh;</div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>apiMeshGeom;</div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html\">MHWRender</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>MIndexBuffer;</div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>MVertexBuffer;</div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>MVertexBufferDescriptor;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>apiMeshGeometryOverride : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html\">MHWRender::MPxGeometryOverride</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> MPxGeometryOverride* Creator(<span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; obj)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> apiMeshGeometryOverride(obj);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~apiMeshGeometryOverride();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49\">MHWRender::DrawAPI</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a0a36b8ef8730fa92f11c853752cc1e0e\">supportedDrawAPIs</a>() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a66874f312bfb87c0159dfbfacafbc3fd\">updateDG</a>();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#abad8e8b1f0e06eea32e2be8f97200941\">updateRenderItems</a>(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path,</div>\n\
<div class=\"line\">        <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; list);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a5589a8d9a584d441a0fca635a969456c\">populateGeometry</a>(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html\">MHWRender::MGeometryRequirements</a>&amp; requirements,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; renderItems,</div>\n\
<div class=\"line\">        <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MHWRender::MGeometry</a>&amp; data);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#aa4c938a24a336e5ca1c28372bc6972d7\">cleanUp</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a35db327011e850bc4f290c65fdc8d8fd\">updateSelectionGranularity</a>(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path,</div>\n\
<div class=\"line\">        <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_selection_context.html\">MHWRender::MSelectionContext</a>&amp; selectionContext);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> registerComponentConverters();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> deregisterComponentConverters();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> printShader(<a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a>* shader);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setSolidColor(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a>* shaderInstance, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *value);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setSolidPointSize(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a>* shaderInstance, <span class=\"keywordtype\">float</span> value);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setLineWidth(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a>* shaderInstance, <span class=\"keywordtype\">float</span> lineWidth);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> enableActiveComponentDisplay(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp;path) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Render item handling methods</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateDormantAndTemplateWireframeItems(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; list, <span class=\"keyword\">const</span> <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateActiveWireframeItem(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; list, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateWireframeModeFaceCenterItem(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; list, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateShadedModeFaceCenterItem(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; list, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateDormantVerticesItem(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; list, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateActiveVerticesItem(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; list, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateVertexNumericItems(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; list, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateAffectedComponentItems(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; list, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateSelectionComponentItems(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; list, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateProxyShadedItem(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; path, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; list, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Data stream (geometry requirements) handling</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateGeometryRequirements(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html\">MHWRender::MGeometryRequirements</a>&amp; requirements,</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MHWRender::MGeometry</a>&amp; data,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> activeVertexCount,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> totalVerts,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> debugPopulateGeometry);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> cloneVertexBuffer(</div>\n\
<div class=\"line\">        <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MHWRender::MVertexBuffer</a>* srcBuffer,</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MHWRender::MGeometry</a>&amp; data,</div>\n\
<div class=\"line\">        <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer_descriptor.html\">MHWRender::MVertexBufferDescriptor</a>&amp; desc,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> bufferSize,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> debugPopulateGeometry);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Indexing for render item handling methods</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateIndexingForWireframeItems(<a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html\">MHWRender::MIndexBuffer</a>* wireIndexBuffer,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MHWRender::MRenderItem</a>* item,</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MHWRender::MGeometry</a>&amp; data,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> totalVerts);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateIndexingForDormantVertices(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MHWRender::MRenderItem</a>* item, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MHWRender::MGeometry</a>&amp; data, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> numTriangles);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateIndexingForFaceCenters(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MHWRender::MRenderItem</a>* item, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MHWRender::MGeometry</a>&amp; data, <span class=\"keywordtype\">bool</span> debugPopulateGeometry);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateIndexingForVertices(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MHWRender::MRenderItem</a>* item, </div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MHWRender::MGeometry</a>&amp; data,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> numTriangles,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> activeVertexCount,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> debugPopulateGeometry);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateIndexingForEdges(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MHWRender::MRenderItem</a>* item,</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MHWRender::MGeometry</a>&amp; data, </div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> totalVerts,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> fromSelection);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateIndexingForFaces(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MHWRender::MRenderItem</a>* item,</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MHWRender::MGeometry</a>&amp; data, </div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> numTriangles,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> fromSelection);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> updateIndexingForShadedTriangles(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MHWRender::MRenderItem</a>* item,</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\">MHWRender::MGeometry</a>&amp; data, </div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> numTriangles);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    apiMeshGeometryOverride(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; obj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    apiMesh* fMesh;</div>\n\
<div class=\"line\">    apiMeshGeom* fMeshGeom;</div>\n\
<div class=\"line\">    <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a> fActiveVertices;</div>\n\
<div class=\"line\">    std::set&lt;int&gt; fActiveVerticesSet;</div>\n\
<div class=\"line\">    std::set&lt;int&gt; fActiveEdgesSet;</div>\n\
<div class=\"line\">    std::set&lt;int&gt; fActiveFacesSet;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fCastsShadows;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fReceivesShadows;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Render item names</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a name=\"_a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sWireframeItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sShadedTemplateItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sSelectedWireframeItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sVertexItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sActiveVertexItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sVertexIdItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sVertexPositionItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sShadedModeFaceCenterItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sWireframeModeFaceCenterItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sShadedProxyItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sAffectedEdgeItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sAffectedFaceItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sEdgeSelectionItemName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sFaceSelectionItemName;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Stream names used for filling in different data</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// for different streams required for different render items,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// and toggle to choose whether to use name streams</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sActiveVertexStreamName;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fDrawSharedActiveVertices;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fDrawActiveVerticesWithRamp;</div>\n\
<div class=\"line\">    <a name=\"_a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture.html\">MHWRender::MTexture</a> *fColorRemapTexture;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sampler_state.html\">MHWRender::MSamplerState</a>* fLinearSampler;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//Vertex stream for face centers which is calculated from faces.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sFaceCenterStreamName;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fDrawFaceCenters;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Custom color option</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fUseCustomColors;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Proxy shader. Fallback shader to use when no shader is assigned</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// if set to &lt; 0 then will use a fragment shader</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> fProxyShader;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Test overrides on shaded mode render items</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fInternalItems_NoShadowCast;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fInternalItems_NoShadowReceive;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fInternalItems_NoPostEffects;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fExternalItems_NoShadowCast;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fExternalItems_NoShadowReceive;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fExternalItems_NoPostEffects;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fExternalItemsNonTri_NoShadowCast;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fExternalItemsNonTri_NoShadowReceive;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fExternalItemsNonTri_NoPostEffects;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";