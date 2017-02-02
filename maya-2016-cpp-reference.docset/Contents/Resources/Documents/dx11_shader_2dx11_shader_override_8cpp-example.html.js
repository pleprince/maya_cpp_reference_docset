var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>dx11Shader/dx11ShaderOverride.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'dx11_shader_2dx11_shader_override_8cpp-example.html\', tocPrefix);\n\
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
            <h1>dx11Shader/dx11ShaderOverride.cpp</h1>\n\
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
<div class=\"title\">dx11Shader/dx11ShaderOverride.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if _MSC_VER &gt;= 1700</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#pragma warning( disable: 4005 )</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;dx11ShaderOverride.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDrawContext.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">bool</span> DO_CUSTOM_DRAW = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">bool</span> PRINT_DEBUG_INFO = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html\">MHWRender::MPxShaderOverride</a>* dx11ShaderOverride::Creator(<span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> dx11ShaderOverride(obj);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">dx11ShaderOverride::dx11ShaderOverride(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; obj)</div>\n\
<div class=\"line\">: <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html\">MHWRender</a>::MPxShaderOverride(obj)</div>\n\
<div class=\"line\">, fShaderNode(NULL)</div>\n\
<div class=\"line\">, fGeometryVersionId(0)</div>\n\
<div class=\"line\">, fBBoxExtraScale(1.0f)</div>\n\
<div class=\"line\">, fStates()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Get an early peek to the shader node, so we can have the scale value,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// before the shader can be discarded by the clipping.</span></div>\n\
<div class=\"line\">    dx11ShaderNode* shaderNode = (dx11ShaderNode*)<a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#aa23ddc899bfdca52a5b703c3e7a66adb\">MPxHardwareShader::getHardwareShaderPtr</a>(const_cast&lt;MObject&amp;&gt;(obj));</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(shaderNode)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        fBBoxExtraScale = shaderNode-&gt;boundingBoxExtraScale();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">dx11ShaderOverride::~dx11ShaderOverride()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> dx11ShaderOverride::initialize(<span class=\"keyword\">const</span> MInitContext&amp; initContext,MInitFeedback&amp; initFeedback)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the hardware shader node from the MObject</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// -----------------------------------------------</span></div>\n\
<div class=\"line\">    fShaderNode = NULL;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (initContext.shader != <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#ae6af14e0aa2c92bdda88c81280e1d122\">MObject::kNullObj</a>) {</div>\n\
<div class=\"line\">        MInitContext* nonConst = <span class=\"keyword\">const_cast&lt;</span>MInitContext*<span class=\"keyword\">&gt;</span>(&amp;initContext);</div>\n\
<div class=\"line\">        fShaderNode =(dx11ShaderNode*)<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#aa23ddc899bfdca52a5b703c3e7a66adb\">MPxHardwareShader::getHardwareShaderPtr</a>(nonConst-&gt;shader);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Add geometry requirements based on</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// -----------------------------------------------</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fShaderNode)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> count           = fShaderNode-&gt;techniqueCount();</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> activeTechnique = fShaderNode-&gt;activeTechnique();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (activeTechnique &gt;= 0 &amp;&amp; activeTechnique &lt; count)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// add requirements</span></div>\n\
<div class=\"line\">            addGeometryRequirements(*fShaderNode-&gt;vertexBufferDescLists());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Trying to send the signature anyhow in order not to have the assert</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// (maybe not necessary because for custom draw we create the input</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// layout manually)</span></div>\n\
<div class=\"line\">            dx11ShaderDX11EffectTechnique* technique = fShaderNode-&gt;technique();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (technique)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"keywordtype\">int</span> passCount = fShaderNode-&gt;techniquePassCount();</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (passCount &gt; 0)</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <span class=\"comment\">// Take signature from first pass (assume all equal)</span></div>\n\
<div class=\"line\">                    dx11ShaderDX11Pass* dxPass = technique-&gt;GetPassByIndex(0);</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">if</span> (dxPass)</div>\n\
<div class=\"line\">                    {</div>\n\
<div class=\"line\">                        D3DX11_PASS_DESC descPass;</div>\n\
<div class=\"line\">                        dxPass-&gt;GetDesc(&amp;descPass);</div>\n\
<div class=\"line\">                        addShaderSignature( descPass.pIAInputSignature, descPass.IAInputSignatureSize);</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// custom primitive types can be used by shader overrides.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// This code is a simple example to show the mechanics of how that works.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// Here we declare a custom custom indexing requirements.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// The customPrimitiveGeneratorName will be used to look up a registered</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// MPxPrimitiveGenerator that will handle the generation of the index buffer.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// The example primitive generator is registered at startup by this plugin.</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> customPrimitiveGeneratorName = fShaderNode-&gt;techniqueIndexBufferType();</div>\n\
<div class=\"line\">        <span class=\"comment\">// Always set the custom indexing requirement, even it the name is empty;</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// That will clear any custom name that was previously set (may happen during reload).</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//if (customPrimitiveGeneratorName.length() &gt; 0)</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer_descriptor.html\">MHWRender::MIndexBufferDescriptor</a> indexingRequirement</div>\n\
<div class=\"line\">                (MHWRender::MIndexBufferDescriptor::kCustom, customPrimitiveGeneratorName, <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a08260379b97fd733e30ea92e891ede1eaa2c70dd76c8172a9298334473c914304\">MHWRender::MGeometry::kTriangles</a>);</div>\n\
<div class=\"line\">            addIndexingRequirement(indexingRequirement);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Sync version ids</span></div>\n\
<div class=\"line\">        fGeometryVersionId = fShaderNode-&gt;geometryVersionId();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Build key string, note that if any attribute on the node changes that</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// would affect the value of this string, then we must trigger rebuild of</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the shader</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> result = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;Autodesk Maya dx11ShaderOverride, nodeName=&quot;</span>);</div>\n\
<div class=\"line\">    result += fShaderNode ? fShaderNode-&gt;name() : <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;null&quot;</span>);</div>\n\
<div class=\"line\">    result += <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;, effectFileName=&quot;</span>);</div>\n\
<div class=\"line\">    result += fShaderNode ? fShaderNode-&gt;effectName() : <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;null&quot;</span>);</div>\n\
<div class=\"line\">    result += <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;, technique=&quot;</span>);</div>\n\
<div class=\"line\">    result += fShaderNode ? fShaderNode-&gt;activeTechniqueName() : <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;null&quot;</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fShaderNode &amp;&amp; fShaderNode-&gt;techniqueIsSelectable()) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// adding &quot;selectable=true&quot; is required to have shader instance selectable</span></div>\n\
<div class=\"line\">        result += <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;, selectable=true&quot;</span>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> dx11ShaderOverride::updateDG(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> <span class=\"keywordtype\">object</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> dx11ShaderOverride::updateDevice()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> dx11ShaderOverride::endUpdate()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> dx11ShaderOverride::handlesDraw(<a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html\">MHWRender::MDrawContext</a>&amp; context)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (fShaderNode &amp;&amp; fShaderNode-&gt;techniqueHandlesContext(context));</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> dx11ShaderOverride::activateKey(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html\">MHWRender::MDrawContext</a>&amp; context, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; <span class=\"comment\">/*key*/</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fShaderNode) {</div>\n\
<div class=\"line\">        <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a>* theRenderer = <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (theRenderer)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            dx11ShaderDX11Device* dxDevice = (dx11ShaderDX11Device*)theRenderer-&gt;<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a637ec8cc3cc0e631f1d134f6891f89f0\">GPUDeviceHandle</a>();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (dxDevice)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                ID3D11DeviceContext* dxContext = NULL;</div>\n\
<div class=\"line\">                dxDevice-&gt;GetImmediateContext(&amp;dxContext);</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (dxContext)</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    fShaderNode-&gt;backupStates(dxContext, fStates);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    dxContext-&gt;VSSetShader(NULL, NULL, 0);</div>\n\
<div class=\"line\">                    dxContext-&gt;PSSetShader(NULL, NULL, 0);</div>\n\
<div class=\"line\">                    dxContext-&gt;GSSetShader(NULL, NULL, 0);</div>\n\
<div class=\"line\">                    dxContext-&gt;HSSetShader(NULL, NULL, 0);</div>\n\
<div class=\"line\">                    dxContext-&gt;DSSetShader(NULL, NULL, 0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    dxContext-&gt;Release();</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        fShaderNode-&gt;updateShaderBasedGeoChanges();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> dx11ShaderOverride::draw(</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html\">MHWRender::MDrawContext</a>&amp; context,</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item_list.html\">MHWRender::MRenderItemList</a>&amp; renderItemList)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Get effect wrapper</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fShaderNode) <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Sample code to debug pass information</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">bool</span> debugPassInformation = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (debugPassInformation)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html\">MHWRender::MPassContext</a> &amp; passCtx = context.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html#ad3f9422688a9ffbe815c374ece46c1ea\">getPassContext</a>();</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; passId = passCtx.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#ae90d4b4c8175e81800d8eb16ee126e1f\">passIdentifier</a>();</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> &amp; passSem = passCtx.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a9737189d5cfffd795336d711a678d627\">passSemantics</a>();</div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;dx11 shader drawing in pass[%s], semantic[&quot;</span>, passId.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>());</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i=0; i&lt;passSem.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); i++)</div>\n\
<div class=\"line\">            printf(<span class=\"stringliteral\">&quot; %s&quot;</span>, passSem[i].asChar());</div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;\\n&quot;</span>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fShaderNode-&gt;render(context, renderItemList);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> dx11ShaderOverride::terminateKey(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html\">MHWRender::MDrawContext</a>&amp; context, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; <span class=\"comment\">/*key*/</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fShaderNode) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a>* theRenderer = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (theRenderer)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            dx11ShaderDX11Device* dxDevice = (dx11ShaderDX11Device*)theRenderer-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a637ec8cc3cc0e631f1d134f6891f89f0\">GPUDeviceHandle</a>();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (dxDevice)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                ID3D11DeviceContext* dxContext = NULL;</div>\n\
<div class=\"line\">                dxDevice-&gt;GetImmediateContext(&amp;dxContext);</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (dxContext)</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    fShaderNode-&gt;restoreStates(dxContext, fStates);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    dxContext-&gt;VSSetShader(NULL, NULL, 0);</div>\n\
<div class=\"line\">                    dxContext-&gt;PSSetShader(NULL, NULL, 0);</div>\n\
<div class=\"line\">                    dxContext-&gt;GSSetShader(NULL, NULL, 0);</div>\n\
<div class=\"line\">                    dxContext-&gt;HSSetShader(NULL, NULL, 0);</div>\n\
<div class=\"line\">                    dxContext-&gt;DSSetShader(NULL, NULL, 0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    dxContext-&gt;Release();</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49\">MHWRender::DrawAPI</a> dx11ShaderOverride::supportedDrawAPIs()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49a90bc0a1678af7ac4d1e62e2e954be4e5\">MHWRender::kDirectX11</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> dx11ShaderOverride::isTransparent()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (fShaderNode &amp;&amp; fShaderNode-&gt;techniqueIsTransparent());</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> dx11ShaderOverride::supportsAdvancedTransparency()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (fShaderNode &amp;&amp; fShaderNode-&gt;techniqueSupportsAdvancedTransparency());</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> dx11ShaderOverride::overridesDrawState()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (fShaderNode &amp;&amp; fShaderNode-&gt;techniqueOverridesDrawState());</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> dx11ShaderOverride::rebuildAlways()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> !fShaderNode || fShaderNode-&gt;rebuildAlways(fGeometryVersionId);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">double</span> dx11ShaderOverride::boundingBoxExtraScale()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fShaderNode ? fShaderNode-&gt;boundingBoxExtraScale() : fBBoxExtraScale;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> dx11ShaderOverride::overridesNonMaterialItems()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fShaderNode ? fShaderNode-&gt;techniqueOverridesNonMaterialItems() : <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";