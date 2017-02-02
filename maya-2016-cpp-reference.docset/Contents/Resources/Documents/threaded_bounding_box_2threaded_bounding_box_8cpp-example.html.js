var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>threadedBoundingBox/threadedBoundingBox.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'threaded_bounding_box_2threaded_bounding_box_8cpp-example.html\', tocPrefix);\n\
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
            <h1>threadedBoundingBox/threadedBoundingBox.cpp</h1>\n\
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
<div class=\"title\">threadedBoundingBox/threadedBoundingBox.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 1995,2006,2008 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// threadedBoundingBox.cpp</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plugin demonstrates the hazards of false sharing in</span></div>\n\
<div class=\"line\"><span class=\"comment\">// multithreaded code. The plugin computes the min X element of the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// bounding box of a selected mesh. The element is computed two ways:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   - Allocating an array of elements, one per thread, and building up</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   one value in each thread.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   - Allocating an array of elements, more than one per thread, and</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   building up one value in each thread. Extra intermediate array</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   elements are allocated to ensure that each value used by a thread</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   is on a separate cache line.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   In both cases, the values computed in each thread are finally</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   merged into a single min X value.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The observed result is that the second computation is significantly</span></div>\n\
<div class=\"line\"><span class=\"comment\">// faster than the first, at the cost of a small amount of extra</span></div>\n\
<div class=\"line\"><span class=\"comment\">// memory usage. What is happening is that in the first case most (if</span></div>\n\
<div class=\"line\"><span class=\"comment\">// not all) of the points being accumulated are on the same cache</span></div>\n\
<div class=\"line\"><span class=\"comment\">// line, which causes the array of points to ping pong between</span></div>\n\
<div class=\"line\"><span class=\"comment\">// processor caches as elements are computed by different threads</span></div>\n\
<div class=\"line\"><span class=\"comment\">// running on different cores and written into the array. This</span></div>\n\
<div class=\"line\"><span class=\"comment\">// degrades performance significantly (around 30x slower on a dual</span></div>\n\
<div class=\"line\"><span class=\"comment\">// quad core Clovertown system.)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Note that cache lines in current processors are usually 64 bytes,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// but may grow in future. To get the exact value we call an API</span></div>\n\
<div class=\"line\"><span class=\"comment\">// method that returns the cache line size for the current processor</span></div>\n\
<div class=\"line\"><span class=\"comment\">// on which Maya is being run.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;float.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;limits.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef _OPENMP</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;omp.h&gt;</span>    <span class=\"comment\">// OpenMP header for omp_get_max_threads</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSimple.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMesh.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTimer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFloatPointArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MThreadUtils.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517\">DeclareSimpleCommand</a>( threadedBoundingBox, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;1.0&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">float</span> computeMinX(<span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html\">MFloatPointArray</a>&amp; vertexArray, <span class=\"keywordtype\">bool</span> padding)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// compute minimum X value using multiple evaluators, one per thread.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> floatSize = <span class=\"keyword\">sizeof</span>(float); <span class=\"comment\">// 4 bytes per float value</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> cacheLineSize = <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_thread_utils.html#aa1dfdf0913670708cae93b9b20aa4b11\">MThreadUtils::getCacheLineSize</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// spacing is the number of float values that must be adjacent in</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// memory to ensure one cache line is filled. We add an extra two</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// to ensure separation regardless of alignment.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> spacing = 1;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(padding) {</div>\n\
<div class=\"line\">        spacing = 2+(cacheLineSize/floatSize);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// NOTE - omp_get_num_threads() only returns &gt;1 inside threaded code!</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Use omp_get_max_threads() to get actual number of active threads.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> numThreads = 1;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef _OPENMP</span></div>\n\
<div class=\"line\">    numThreads = omp_get_max_threads();</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// allocate one or more boxes per thread, depending on the spacing computed above.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span>* pointArray = <span class=\"keyword\">new</span> <span class=\"keywordtype\">float</span>[numThreads*spacing];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> nb = vertexArray.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>();</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> nbStep = nb / numThreads;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef _OPENMP</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#pragma omp parallel for</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;numThreads; i++) {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span>&amp; minX = pointArray[i*spacing];</div>\n\
<div class=\"line\">        minX = FLT_MAX;</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> n1 = i*nbStep;</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> n2 = (i&lt;(numThreads-1)) ? (i+1)*nbStep : nb;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>  (<span class=\"keywordtype\">int</span> n=n1; n&lt;n2; n++) {</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a>&amp; p = vertexArray[n];</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>(p.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point.html#ad0da36b2558901e21e7a30f6c227a45e\">x</a> &lt; minX) minX = p.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point.html#ad0da36b2558901e21e7a30f6c227a45e\">x</a>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> finalMinX = FLT_MAX;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// accumulate separate boxes</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;numThreads; i++) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(pointArray[i*spacing] &lt; finalMinX) finalMinX = pointArray[i*spacing];</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// clean up temporary boxes</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">delete</span> [] pointArray;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> finalMinX;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> threadedBoundingBox::doIt( <span class=\"keyword\">const</span> <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Implements the MEL threadedBoundingBox command.  This command computes a</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      bounding box for the currently selected mesh objects.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//      It is a demonstration of the problems of false sharing.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Arguments:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      args - the argument list that was passes to the command from MEL.  This</span></div>\n\
<div class=\"line\"><span class=\"comment\">//             command takes no arguments.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Return Value:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      MS::kSuccess - command succeeded</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      MS::kFailure - command failed (returning this value will cause the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//                     MEL script that is being run to terminate unless the</span></div>\n\
<div class=\"line\"><span class=\"comment\">//                     error is caught using a &quot;catch&quot; statement.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> curSel;</div>\n\
<div class=\"line\">    <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>( curSel );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// iterate through the selection list, and find bounding boxes for any selected</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// polygons.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> numSelected = curSel.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> s = 0; s &lt; numSelected; s++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// get the selected item, figure out if it&#39;s a polymesh or not</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> dagPath;</div>\n\
<div class=\"line\">        curSel.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a16dda1a34d5f10be257d8421ac6deabd\">getDagPath</a>( s, dagPath );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( dagPath.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a658d9664035ff84ffefa217c0e45cc88\">extendToShape</a>() != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// selection does not correspond to a DAG shape</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            cout&lt;&lt;<span class=\"stringliteral\">&quot; Error - object is not a polymesh&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\">            stat = <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> node = dagPath.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#ad1aa507eb8e63e89e8d46a0abc18aa8c\">node</a>();</div>\n\
<div class=\"line\">        <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> fnNode( node );</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html\">MFnMesh</a> fnMesh( node, &amp;stat );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( stat != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            cout&lt;&lt;<span class=\"stringliteral\">&quot; Error - unable to create MFnMesh object&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Retrieve the list of vertices on the polymesh.</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html\">MFloatPointArray</a> vertexArray;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// get the vertices</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        stat = fnMesh.getPoints(vertexArray );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( stat != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> ) {</div>\n\
<div class=\"line\">            cout&lt;&lt;<span class=\"stringliteral\">&quot; Error - unable to retrieve vertices&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> minX1 = 0.0f;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> minX2 = 0.0f;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        cout&lt;&lt;<span class=\"stringliteral\">&quot;    Poly has &quot;</span>&lt;&lt; vertexArray.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>()&lt;&lt;<span class=\"stringliteral\">&quot; vertices&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> padding = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> numIterations = 100;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> timer; </div>\n\
<div class=\"line\">        timer.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac336e3fea7e0479c0496beccd27ba152\">beginTimer</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;numIterations; i++) {</div>\n\
<div class=\"line\">            minX1 = computeMinX(vertexArray, padding);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        timer.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ab1cd82365475316c3b987f456df5e14c\">endTimer</a>(); </div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;Runtime without padding %f\\n&quot;</span>, timer.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#af216bfafd4829e364522a4c93e737fe8\">elapsedTime</a>());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        padding = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">        timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac336e3fea7e0479c0496beccd27ba152\">beginTimer</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;numIterations; i++) {</div>\n\
<div class=\"line\">            minX2 = computeMinX(vertexArray, padding);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ab1cd82365475316c3b987f456df5e14c\">endTimer</a>(); </div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;Runtime with padding %f\\n&quot;</span>, timer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#af216bfafd4829e364522a4c93e737fe8\">elapsedTime</a>());</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(fabs(minX1-minX2)&lt;1e-10) {</div>\n\
<div class=\"line\">            cout &lt;&lt; <span class=\"stringliteral\">&quot;Boxes match&quot;</span> &lt;&lt; endl;</div>\n\
<div class=\"line\">        } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">            cout &lt;&lt; <span class=\"stringliteral\">&quot;Boxes do not match&quot;</span> &lt;&lt; endl;</div>\n\
<div class=\"line\">            stat = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    setResult( <span class=\"stringliteral\">&quot;threadedBoundingBox completed.&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";