var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>hwPhongShader/hwPhongShader.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'hw_phong_shader_2hw_phong_shader_8h-example.html\', tocPrefix);\n\
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
            <h1>hwPhongShader/hwPhongShader.h</h1>\n\
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
<div class=\"title\">hwPhongShader/hwPhongShader.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _hwPhongShader</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _hwPhongShader</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
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
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// NOTE: PLEASE READ THE README.TXT FILE FOR INSTRUCTIONS ON</span></div>\n\
<div class=\"line\"><span class=\"comment\">// COMPILING AND USAGE REQUIREMENTS.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Simple node that implements Phong shading for the special</span></div>\n\
<div class=\"line\"><span class=\"comment\">// case when the light is at the eye. We use a simple</span></div>\n\
<div class=\"line\"><span class=\"comment\">// spherical reflection environment map to compute the Phong</span></div>\n\
<div class=\"line\"><span class=\"comment\">// highlight</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxHwShaderNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// For swatch rendering</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MHardwareRenderer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGeometryData.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>hwPhongShader : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html\">MPxHwShaderNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    hwPhongShader();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span>         ~hwPhongShader();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            releaseEverything();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5cb7edfa1f67c75588bec1c38b7bf5f8\">compute</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp;, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; );</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span>    <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5c13a6c88a839b5356861d1d09e820d9\">postConstructor</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Internally cached attribute handling routines</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a765069394bb461e3480ada2c67efd7bf\">getInternalValueInContext</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp;,</div>\n\
<div class=\"line\">                                              <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a>&amp;,</div>\n\
<div class=\"line\">                                              <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_d_g_context.html\">MDGContext</a>&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a67f0c9bc691a04b63023ed4b61f10e46\">setInternalValueInContext</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp;,</div>\n\
<div class=\"line\">                                              <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a>&amp;,</div>\n\
<div class=\"line\">                                              <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_d_g_context.html\">MDGContext</a>&amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Interactive overrides</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a4b373289ba4ef6bf66387e2b540cdc05\">bind</a>( <span class=\"keyword\">const</span> <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a>&amp; request,</div>\n\
<div class=\"line\">                              <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a>&amp; view );</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a1add8314dc908073f9126b81dc187ce7\">unbind</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a>&amp; request,</div>\n\
<div class=\"line\">                                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a>&amp; view );</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#acd6773ef64b27965c09ed584830bf8f3\">geometry</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a>&amp; request,</div>\n\
<div class=\"line\">                                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a>&amp; view,</div>\n\
<div class=\"line\">                                <span class=\"keywordtype\">int</span> prim,</div>\n\
<div class=\"line\">                                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> writable,</div>\n\
<div class=\"line\">                                <span class=\"keywordtype\">int</span> indexCount,</div>\n\
<div class=\"line\">                                <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> * indexArray,</div>\n\
<div class=\"line\">                                <span class=\"keywordtype\">int</span> vertexCount,</div>\n\
<div class=\"line\">                                <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> * vertexIDs,</div>\n\
<div class=\"line\">                                <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> * vertexArray,</div>\n\
<div class=\"line\">                                <span class=\"keywordtype\">int</span> normalCount,</div>\n\
<div class=\"line\">                                <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> ** normalArrays,</div>\n\
<div class=\"line\">                                <span class=\"keywordtype\">int</span> colorCount,</div>\n\
<div class=\"line\">                                <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> ** colorArrays,</div>\n\
<div class=\"line\">                                <span class=\"keywordtype\">int</span> texCoordCount,</div>\n\
<div class=\"line\">                                <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> ** texCoordArrays);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Batch overrides</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#aa39f824f610a30172f5bb7a130c35069\">glBind</a>(<span class=\"keyword\">const</span> <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; shapePath);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#ab94ce2a19c9ce026e7b0825b5397975e\">glUnbind</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; shapePath);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a495a60eaa1df3815d5565e79e08c90ac\">glGeometry</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; shapePath,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> prim,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> writable,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> indexCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> * indexArray,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> vertexCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> * vertexIDs,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> * vertexArray,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> normalCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> ** normalArrays,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> colorCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> ** colorArrays,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> texCoordCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> ** texCoordArrays);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         draw(</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> prim,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> writable,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> indexCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> * indexArray,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> vertexCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> * vertexIDs,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> * vertexArray,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> normalCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> ** normalArrays,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> colorCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> ** colorArrays,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">int</span> texCoordCount,</div>\n\
<div class=\"line\">                              <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> ** texCoordArrays);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            drawDefaultGeometry();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Overridden to draw an image for swatch rendering.</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span>    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a765f8d7c0499e87180ff884b6967550e\">renderSwatchImage</a>( <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html\">MImage</a> &amp; image );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            drawTheSwatch( <a name=\"_a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a>* pGeomData,</div>\n\
<div class=\"line\">                                   <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>* pIndexing,</div>\n\
<div class=\"line\">                                   <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>  numberOfData,</div>\n\
<div class=\"line\">                                   <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>  indexCount );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">int</span>     <a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#af3550674237dc92887354c8c1aab7367\">normalsPerVertex</a>();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">int</span>     <a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a4ad8d328c883db5ee4e4141840c76394\">texCoordsPerVertex</a>();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">int</span>     <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a113794c8b72392d371b6f7b193d80cda\">getTexCoordSetNames</a>(<a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>&amp; names);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span>    <a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a48045e919e9cafe71b7883de1c4875de\">hasTransparency</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span> *  creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector.html\">MFloatVector</a>    Phong ( <span class=\"keywordtype\">double</span> cos_a );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            init_Phong_texture ( <span class=\"keywordtype\">void</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>    PhongTextureId()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> phong_map_id; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span>           Transparency()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> mTransparency; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> float3 *  Ambient()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> &amp;mAmbientColor; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> float3 *  Diffuse()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> &amp;mDiffuseColor; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> float3 *  Specular()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> &amp;mSpecularColor; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> float3 *  Shininess()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> &amp;mShininess; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setTransparency(<span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> fTransparency);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setAmbient(<span class=\"keyword\">const</span> float3 &amp;fAmbient);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setDiffuse(<span class=\"keyword\">const</span> float3 &amp;fDiffuse);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setSpecular(<span class=\"keyword\">const</span> float3 &amp;fSpecular);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setShininess(<span class=\"keyword\">const</span> float3 &amp;fShininess);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            printGlError( <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *call );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            attributesChangedVP2() { <span class=\"keywordflow\">return</span> mAttributesChangedVP2; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            markAttributesChangedVP2() { mAttributesChangedVP2 = <span class=\"keyword\">true</span>; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            markAttributesCleanVP2() { mAttributesChangedVP2 = <span class=\"keyword\">false</span>; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> id;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> attachSceneCallbacks();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> detachSceneCallbacks();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> releaseCallback(<span class=\"keywordtype\">void</span>* clientData);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Attributes</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aColor;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aDiffuseColor;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aSpecularColor;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aShininessX;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aShininessY;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aShininessZ;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aShininess;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aTransparency;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aGeometryShape;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Internal data</span></div>\n\
<div class=\"line\">    GLuint          phong_map_id;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>          cameraPosWS;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    float3          mAmbientColor;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span>           mTransparency;</div>\n\
<div class=\"line\">    float3          mDiffuseColor;</div>\n\
<div class=\"line\">    float3          mSpecularColor;</div>\n\
<div class=\"line\">    float3          mShininess;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>    mGeometryShape;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            mAttributesChanged; <span class=\"comment\">// Keep track if any attributes changed</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            mAttributesChangedVP2; <span class=\"comment\">// Keep track if any attributes changed for VP2</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Callbacks that we monitor so we can release OpenGL-dependant</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// resources before their context gets destroyed.</span></div>\n\
<div class=\"line\">    MCallbackId fBeforeNewCB;</div>\n\
<div class=\"line\">    MCallbackId fBeforeOpenCB;</div>\n\
<div class=\"line\">    MCallbackId fBeforeRemoveReferenceCB;</div>\n\
<div class=\"line\">    MCallbackId fMayaExitingCB;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif </span><span class=\"comment\">/* _hwPhongShader */</span><span class=\"preprocessor\"></span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";