var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>identityNode/identityNode.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'identity_node_2identity_node_8cpp-example.html\', tocPrefix);\n\
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
            <h1>identityNode/identityNode.cpp</h1>\n\
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
<div class=\"title\">identityNode/identityNode.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//  File: identityNode.cpp</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Empty implementation of a deformer. This node</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      performs no deformation and is basically an empty</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      shell that can be used to create actual deformers.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Use this script to create a simple example with the identity node.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      loadPlugin identityNode;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      polyTorus -r 1 -sr 0.5 -tw 0 -sx 50 -sy 50 -ax 0 1 0 -cuv 1 -ch 1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      deformer -type &quot;identity&quot;;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      setKeyframe -v 0 -at weightList[0].weights[0] -t 1 identity1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      setKeyframe -v 1 -at weightList[0].weights[0] -t 60 identity1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      select -cl;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxDeformerNode.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItGeometry.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxGPUDeformer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGPUDeformerRegistry.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MOpenCLInfo.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;clew/clew_cl.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>identityNode : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_deformer_node.html\">MPxDeformerNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*   creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Deformation function</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_geometry_filter.html#a30d9732c7497ec1c8c7e431eaa5d61b6\">deform</a>(<a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp;    block,</div>\n\
<div class=\"line\">                           <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html\">MItGeometry</a>&amp;   iter,</div>\n\
<div class=\"line\">                           <span class=\"keyword\">const</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a>&amp; mat,</div>\n\
<div class=\"line\">                           <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> multiIndex);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> id;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> identityNode::id( 0x8000d );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* identityNode::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> identityNode();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> identityNode::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a></div>\n\
<div class=\"line\">identityNode::deform( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; block,</div>\n\
<div class=\"line\">                      <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html\">MItGeometry</a>&amp; iter,</div>\n\
<div class=\"line\">                      <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a>&amp; <span class=\"comment\">/*m*/</span>,</div>\n\
<div class=\"line\">                      <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> multiIndex)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Method: deform</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:   &quot;Deforms&quot; the point with an identity transformation</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Arguments:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   block      : the datablock of the node</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   iter       : an iterator for the geometry to be deformed</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   m          : matrix to transform the point into world space</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   multiIndex : the index of the geometry that we are deforming</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> returnStatus;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Iterate through each point in the geometry.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( ; !iter.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html#a8b6dbf6fbab6f4e7bf50a309124cbf4c\">isDone</a>(); iter.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html#a73616f002814b8abe6d921db72d7a496\">next</a>()) {</div>\n\
<div class=\"line\">        <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> pt = iter.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html#a5880c110ed81dd4da0289ccdca5c1592\">position</a>();</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Perform some calculation on pt.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// ...</span></div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Set the final position.</span></div>\n\
<div class=\"line\">        iter.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html#aab29469f67fee14833472410a17de18f\">setPosition</a>(pt);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> returnStatus;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// The GPU override implementation of the identityNode</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>identityGPUDeformer : <span class=\"keyword\">public</span> <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html\">MGPUDeformerRegistrationInfo</a>* getGPUDeformerInfo();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">bool</span> validateNode(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; block, <span class=\"keyword\">const</span> <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a>&amp;, <span class=\"keyword\">const</span> <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>* messages);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Virtual methods from MPxGPUDeformer</span></div>\n\
<div class=\"line\">    identityGPUDeformer();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~identityGPUDeformer();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Implementation of MPxGPUDeformer.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> MPxGPUDeformer::DeformerStatus <a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#aeb97b4186f7b3334a902bf6c10c07710\">evaluate</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp;, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a>&amp;, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>, <span class=\"keyword\">const</span> <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_mem.html\">MAutoCLMem</a>, <span class=\"keyword\">const</span> <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_event.html\">MAutoCLEvent</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_mem.html\">MAutoCLMem</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_event.html\">MAutoCLEvent</a>&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a74a45d2648335936561898c390281a6a\">terminate</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// Kernel</span></div>\n\
<div class=\"line\">    <a name=\"_a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> fKernel;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">size_t</span> fLocalWorkSize;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">size_t</span> fGlobalWorkSize;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// registration information for the identity GPU deformer.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>identityGPUDeformerInfo : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html\">MGPUDeformerRegistrationInfo</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    identityGPUDeformerInfo(){}</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~identityGPUDeformerInfo(){}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a>* <a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#a26e31eff6d70283f14e2a572c36ae9d3\">createGPUDeformer</a>()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> identityGPUDeformer();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#ade618d8180c93be8b7b3f06bf8811085\">validateNode</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; block, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a>&amp; evaluationNode, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>* messages)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> identityGPUDeformer::validateNode(block, evaluationNode, plug, messages);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html\">MGPUDeformerRegistrationInfo</a>* identityGPUDeformer::getGPUDeformerInfo()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> identityGPUDeformerInfo theOne;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> &amp;theOne;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">identityGPUDeformer::identityGPUDeformer()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">identityGPUDeformer::~identityGPUDeformer()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    terminate();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> identityGPUDeformer::validateNode(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; block, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a>&amp; evaluationNode, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>* messages)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Support everything.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">MPxGPUDeformer::DeformerStatus identityGPUDeformer::evaluate(</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; block,</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a>&amp; evaluationNode,</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug,</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> numElements,</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_mem.html\">MAutoCLMem</a> inputBuffer,</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_event.html\">MAutoCLEvent</a> inputEvent,</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_mem.html\">MAutoCLMem</a> outputBuffer,</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_event.html\">MAutoCLEvent</a>&amp; outputEvent</div>\n\
<div class=\"line\">    )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    cl_int err = CL_SUCCESS;    </div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Setup OpenCL kernel.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !fKernel.get() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get and compile the kernel.</span></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* mayaLocation = getenv( <span class=\"stringliteral\">&quot;MAYA_LOCATION&quot;</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> openCLKernelFile( mayaLocation );</div>\n\
<div class=\"line\">        openCLKernelFile +=<span class=\"stringliteral\">&quot;/devkit/plug-ins/identityNode/identity.cl&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> openCLKernelName(<span class=\"stringliteral\">&quot;identity&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> kernel = <a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_open_c_l_info.html#a9b9a0680620c0ecac7dd1b07159ee72f\">MOpenCLInfo::getOpenCLKernel</a>( openCLKernelFile, openCLKernelName );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( kernel.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#ac02f2a4d7312eb91f40980adfd4e31b2\">isNull</a>() )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MPxGPUDeformer::kDeformerFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        fKernel = kernel;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Figure out a good work group size for our kernel.</span></div>\n\
<div class=\"line\">        fLocalWorkSize = 0;</div>\n\
<div class=\"line\">        fGlobalWorkSize = 0;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">size_t</span> retSize = 0;</div>\n\
<div class=\"line\">        err = clGetKernelWorkGroupInfo(</div>\n\
<div class=\"line\">            fKernel.get(),</div>\n\
<div class=\"line\">            <a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_open_c_l_info.html#a7861622490349f1240dfbe76c21e3e0a\">MOpenCLInfo::getOpenCLDeviceId</a>(),</div>\n\
<div class=\"line\">            CL_KERNEL_WORK_GROUP_SIZE,</div>\n\
<div class=\"line\">            <span class=\"keyword\">sizeof</span>(size_t),</div>\n\
<div class=\"line\">            &amp;fLocalWorkSize,</div>\n\
<div class=\"line\">            &amp;retSize</div>\n\
<div class=\"line\">            );</div>\n\
<div class=\"line\">        <a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_open_c_l_info.html#a753d7277906776cd710b3723d74f8b64\">MOpenCLInfo::checkCLErrorStatus</a>(err);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( err != CL_SUCCESS || retSize == 0 || fLocalWorkSize == 0)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MPxGPUDeformer::kDeformerFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Global work size must be a multiple of local work size.</span></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">size_t</span> remain = numElements % fLocalWorkSize;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( remain )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            fGlobalWorkSize = numElements + ( fLocalWorkSize - remain );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            fGlobalWorkSize = numElements;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set all of our kernel parameters.  Input buffer and output buffer may be changing every frame</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// so always set them.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> parameterId = 0;</div>\n\
<div class=\"line\">    err = clSetKernelArg(fKernel.get(), parameterId++, <span class=\"keyword\">sizeof</span>(cl_mem), (<span class=\"keywordtype\">void</span>*)outputBuffer.getReadOnlyRef());</div>\n\
<div class=\"line\">    <a name=\"_a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_open_c_l_info.html\">MOpenCLInfo</a>::checkCLErrorStatus(err);</div>\n\
<div class=\"line\">    err = clSetKernelArg(fKernel.get(), parameterId++, sizeof(cl_mem), (<span class=\"keywordtype\">void</span>*)inputBuffer.getReadOnlyRef());</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_open_c_l_info.html\">MOpenCLInfo</a>::checkCLErrorStatus(err);</div>\n\
<div class=\"line\">    err = clSetKernelArg(fKernel.get(), parameterId++, sizeof(cl_uint), (<span class=\"keywordtype\">void</span>*)&amp;numElements);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_open_c_l_info.html\">MOpenCLInfo</a>::checkCLErrorStatus(err);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set up our input events.  The input event could be NULL, in that case we need to pass</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// slightly different parameters into clEnqueueNDRangeKernel.</span></div>\n\
<div class=\"line\">    cl_event events[ 1 ] = { 0 };</div>\n\
<div class=\"line\">    cl_uint eventCount = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( inputEvent.<a name=\"a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_event.html#a9ae83b577cfbaa81ee19053c78dedccd\">get</a>() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        events[ eventCount++ ] = inputEvent.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_event.html#a9ae83b577cfbaa81ee19053c78dedccd\">get</a>();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Run the kernel</span></div>\n\
<div class=\"line\">    err = clEnqueueNDRangeKernel(</div>\n\
<div class=\"line\">        <a name=\"a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_open_c_l_info.html#a55019cf878ada98ae7af00f642060ade\">MOpenCLInfo::getOpenCLCommandQueue</a>() ,</div>\n\
<div class=\"line\">        fKernel.get() ,</div>\n\
<div class=\"line\">        1 ,</div>\n\
<div class=\"line\">        NULL ,</div>\n\
<div class=\"line\">        &amp;fGlobalWorkSize ,</div>\n\
<div class=\"line\">        &amp;fLocalWorkSize ,</div>\n\
<div class=\"line\">        eventCount ,</div>\n\
<div class=\"line\">        events ,</div>\n\
<div class=\"line\">        outputEvent.<a name=\"a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_event.html#a5622645d1b16ac4ab77c233dcea5c5be\">getReferenceForAssignment</a>()</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_open_c_l_info.html#a753d7277906776cd710b3723d74f8b64\">MOpenCLInfo::checkCLErrorStatus</a>(err);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( err != CL_SUCCESS )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MPxGPUDeformer::kDeformerFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MPxGPUDeformer::kDeformerSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> identityGPUDeformer::terminate()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_open_c_l_info.html#a08df219d94dcf2dc03724eff7d5c6483\">MOpenCLInfo::releaseOpenCLKernel</a>(fKernel);</div>\n\
<div class=\"line\">    fKernel.reset();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// standard initialization procedures</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a name=\"_a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\">    result = plugin.registerNode(</div>\n\
<div class=\"line\">        <span class=\"stringliteral\">&quot;identity&quot;</span> ,</div>\n\
<div class=\"line\">        identityNode::id ,</div>\n\
<div class=\"line\">        &amp;identityNode::creator ,</div>\n\
<div class=\"line\">        &amp;identityNode::initialize ,</div>\n\
<div class=\"line\">        <a name=\"a37\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a1d1cfd8ffb84e947f82999c682b666a7a397b2fe312ffa55c207f8f9b12f616d3\">MPxNode::kDeformerNode</a></div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> nodeClassName(<span class=\"stringliteral\">&quot;identity&quot;</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> registrantId(<span class=\"stringliteral\">&quot;mayaPluginExample&quot;</span>);</div>\n\
<div class=\"line\">    <a name=\"a38\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registry.html#adea377dddd00bec03a6cdf70360f567f\">MGPUDeformerRegistry::registerGPUDeformerCreator</a>(</div>\n\
<div class=\"line\">        nodeClassName,</div>\n\
<div class=\"line\">        registrantId,</div>\n\
<div class=\"line\">        identityGPUDeformer::getGPUDeformerInfo()</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> nodeClassName(<span class=\"stringliteral\">&quot;identity&quot;</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> registrantId(<span class=\"stringliteral\">&quot;mayaPluginExample&quot;</span>);</div>\n\
<div class=\"line\">    <a name=\"a39\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registry.html#aa290ea8dc9cb67e1056f132b8e441d5f\">MGPUDeformerRegistry::deregisterGPUDeformerCreator</a>(</div>\n\
<div class=\"line\">        nodeClassName,</div>\n\
<div class=\"line\">        registrantId</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\">    result = plugin.deregisterNode( identityNode::id );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";