var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>sseDeformer/sseDeformer.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'sse_deformer_2sse_deformer_8cpp-example.html\', tocPrefix);\n\
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
            <h1>sseDeformer/sseDeformer.cpp</h1>\n\
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
<div class=\"title\">sseDeformer/sseDeformer.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//  File: sseDeformer.cc</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Example implementation of a deformer. This node</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      offsets vertices according to the CV&#39;s weights.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      The weights are set using the set editor or the</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      percent command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;float.h&gt;</span> <span class=\"comment\">// for FLT_MAX</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxGeometryFilter.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItGeometry.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxLocatorNode.h&gt;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMatrixAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMatrixData.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArrayDataHandle.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MVector.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MMatrix.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTimer.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagModifier.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMesh.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFloatPointArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnTypedAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMeshData.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFloatVectorArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Macros</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MCheckStatus(status,message)    \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    if( MStatus::kSuccess != status ) { \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        cerr &lt;&lt; message &lt;&lt; &quot;\\n&quot;;        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        return status;                  \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>sseDeformer : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_geometry_filter.html\">MPxGeometryFilter</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                        sseDeformer();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span>             ~sseDeformer();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*       creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// deformation function</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5cb7edfa1f67c75588bec1c38b7bf5f8\">compute</a>(<span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; dataBlock);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// local node attributes</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> sseEnabled;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     id;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     sseDeformer::id( 0x8104E );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// local attributes</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> sseDeformer::sseEnabled;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">sseDeformer::sseDeformer() {}</div>\n\
<div class=\"line\">sseDeformer::~sseDeformer() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* sseDeformer::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> sseDeformer();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> sseDeformer::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// local attribute initialization</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html\">MFnNumericAttribute</a> mSSEAttr;</div>\n\
<div class=\"line\">    sseEnabled=mSSEAttr.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>( <span class=\"stringliteral\">&quot;enableSSE&quot;</span>, <span class=\"stringliteral\">&quot;sse&quot;</span>, <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7a8cfc0ab572a96edfc9db7c02f0d025d7\">MFnNumericData::kBoolean</a>, 0, &amp;status);</div>\n\
<div class=\"line\">    mSSEAttr.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  deformation attributes</span></div>\n\
<div class=\"line\">    status = addAttribute( sseEnabled );</div>\n\
<div class=\"line\">    MCheckStatus(status, <span class=\"stringliteral\">&quot;ERROR in addAttribute\\n&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = attributeAffects( sseEnabled, outputGeom );</div>\n\
<div class=\"line\">    MCheckStatus(status, <span class=\"stringliteral\">&quot;ERROR in attributeAffects\\n&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> sseDeformer::compute(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (plug.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a18baf7e7504bc90d54dea49a7d2d924b\">attribute</a>() != outputGeom) {</div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;Ignoring requested plug\\n&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> index = plug.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a7ee0cc502aa499c01ff2e41c76ac53c7\">logicalIndex</a>();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> thisNode = this-&gt;thisMObject();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// get input value</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> inPlug(thisNode,input);</div>\n\
<div class=\"line\">    inPlug.selectAncestorLogicalIndex(index,input);</div>\n\
<div class=\"line\">    <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> hInput = data.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>(inPlug, &amp;status);</div>\n\
<div class=\"line\">    MCheckStatus(status, <span class=\"stringliteral\">&quot;ERROR getting input mesh\\n&quot;</span>);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// get the input geometry</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> inputData = hInput.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a58951af761a410e17982060cae4fdf49\">child</a>(inputGeom);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (inputData.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aa7d5edae2cc3b032294d95ff3afb17cb\">type</a>() != <a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62\">MFnData::kMesh</a>) {</div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;Incorrect input geometry type\\n&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> iSurf = inputData.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a301e7b7cdf9f9e1e206651cc6a1b67ec\">asMesh</a>() ;</div>\n\
<div class=\"line\">    <a name=\"_a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html\">MFnMesh</a> inMesh;</div>\n\
<div class=\"line\">    inMesh.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html#a6b2301b53683a8e8f56dd0b9cb088b0f\">setObject</a>( iSurf ) ;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> outputData = data.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a5e4082d6ab961bee4ec0281676bb4834\">outputValue</a>(plug);</div>\n\
<div class=\"line\">    outputData.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#ac9331e2baa99db78393811c850c0afab\">copy</a>(inputData);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (outputData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aa7d5edae2cc3b032294d95ff3afb17cb\">type</a>() != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62\">MFnData::kMesh</a>) {</div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;Incorrect output mesh type\\n&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> oSurf = outputData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a301e7b7cdf9f9e1e206651cc6a1b67ec\">asMesh</a>() ;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(oSurf.<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#ac02f2a4d7312eb91f40980adfd4e31b2\">isNull</a>()) {</div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;Output surface is NULL\\n&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html\">MFnMesh</a> outMesh;</div>\n\
<div class=\"line\">    outMesh.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html#a6b2301b53683a8e8f56dd0b9cb088b0f\">setObject</a>( oSurf ) ;</div>\n\
<div class=\"line\">    MCheckStatus(status, <span class=\"stringliteral\">&quot;ERROR setting points\\n&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// get all points at once for demo purposes. Really should get points from the current group using iterator</span></div>\n\
<div class=\"line\">    <a name=\"_a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html\">MFloatPointArray</a> pts;</div>\n\
<div class=\"line\">    outMesh.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a38510cd198de64ad9308fb265c7e338b\">getPoints</a>(pts);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> nPoints = pts.<a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> envData = data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>(envelope, &amp;status);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> env = envData.<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a43df510424a7de372dd130315d9f223c\">asFloat</a>();  </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> sseData = data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>(sseEnabled, &amp;status);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> sseEnabled = (bool) sseData.<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a69fdebf4dcdf33c1b313eb4a426e0d45\">asBool</a>();  </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// NOTE: Using MTimer and possibly other classes disables</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// autovectorization with Intel &lt;=10.1 compiler on OSX and Linux!!</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Must compile this function with -fno-exceptions on OSX and</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Linux to guarantee autovectorization is done. Use -fvec_report2</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// to check for vectorization status messages with Intel compiler.</span></div>\n\
<div class=\"line\">    <a name=\"_a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> timer; timer.<a name=\"a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac336e3fea7e0479c0496beccd27ba152\">beginTimer</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(sseEnabled) {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Innter loop will autovectorize. Around 3x faster than the</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// loop below it. It would be faster if first element was</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// guaranteed to be aligned on 16 byte boundary.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;nPoints; i++) {</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span>* ptPtr = &amp;pts[i].x;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> j=0; j&lt;4; j++) {</div>\n\
<div class=\"line\">                ptPtr[j] = env * (cosf(ptPtr[j]) * sinf(ptPtr[j]) * tanf(ptPtr[j]));</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// This inner loop will not autovectorize.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;nPoints; i++) {</div>\n\
<div class=\"line\">            <a name=\"_a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a>&amp; pt = pts[i];</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> j=0; j&lt;3; j++) {</div>\n\
<div class=\"line\">                pt[j] = env * (cosf(pt[j]) * sinf(pt[j]) * tanf(pt[j]));</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    timer.<a name=\"a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ab1cd82365475316c3b987f456df5e14c\">endTimer</a>(); </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(sseEnabled) {</div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;SSE enabled, runtime %f\\n&quot;</span>, timer.<a name=\"a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#af216bfafd4829e364522a4c93e737fe8\">elapsedTime</a>());</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;SSE disabled, runtime %f\\n&quot;</span>, timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#af216bfafd4829e364522a4c93e737fe8\">elapsedTime</a>());</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    outMesh.<a name=\"a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a739dfbdbe4935389ac2d3e72d8c1f7dd\">setPoints</a>(pts);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// standard initialization procedures</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result;</div>\n\
<div class=\"line\">    <a name=\"_a37\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;1.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\">    result = plugin.registerNode( <span class=\"stringliteral\">&quot;sseDeformer&quot;</span>, sseDeformer::id, sseDeformer::creator, </div>\n\
<div class=\"line\">                                  sseDeformer::initialize, <a name=\"a38\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a1d1cfd8ffb84e947f82999c682b666a7a397b2fe312ffa55c207f8f9b12f616d3\">MPxNode::kDeformerNode</a> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\">    result = plugin.deregisterNode( sseDeformer::id );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";