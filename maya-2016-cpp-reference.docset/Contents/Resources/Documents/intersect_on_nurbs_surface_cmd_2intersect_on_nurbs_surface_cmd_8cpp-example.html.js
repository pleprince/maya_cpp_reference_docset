var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>intersectOnNurbsSurfaceCmd/intersectOnNurbsSurfaceCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'intersect_on_nurbs_surface_cmd_2intersect_on_nurbs_surface_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>intersectOnNurbsSurfaceCmd/intersectOnNurbsSurfaceCmd.cpp</h1>\n\
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
<div class=\"title\">intersectOnNurbsSurfaceCmd/intersectOnNurbsSurfaceCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      A command which exercises the various NURBS intersect methods</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  available in the API. The command expects all data it needs to work</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  with to be on the selection list.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Usage:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Before calling this command, the selection list needs to have</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      the following nodes selected in order:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      o  A NURBS surface, such as nurbsPlaneShape1. The surface may</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         be transformed in the DAG, if desired.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      o  The transform node of a locator. The user should place the</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         locator at the point in 3-space for which they want to find</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         the intersect on the NURBS surface.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      When invoked with the above items in order on the selection list,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      the command proceeds to calculate the intersect on the NURBS</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      surface, moving &quot;locator2&quot; to the computed intersect to allow</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      the user to visually see what intersect was calculated.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Example:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      1. Compile and load this plug-in into Maya.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      2. Create a NURBS surface, such as a NURBS plane. Move some CVs</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         to obtain a wavy surface.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      3. Create two locators, locator1 and locator2, (both should be</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         children of the world because the plug-in translates locator2</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         to the calculated closest intersect value for display purposes).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      4. Position the first locator somewhere in 3D space over the</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         surface.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      5. Position the second locator so that the line that passes through</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         both locators intersects the NURBS surface. Note that the second</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         locator will be automatically moved to the closest intersect on the</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         surface by the command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      5. Select the two objects:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              MEL&gt; select nurbsPlaneShape1 locator1 locator2;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      6. Invoke this command:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              MEL&gt; intersectOnNurbsSurface;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      7. You should see locator2 move to the point on the NURBS</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         surface which is closest to locator1.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      8. Move locator1 and locator2 to different positions and invoke this</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         command again. You should see locator2 move to the correct</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         closest intersect each time.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      9. Try rotating, scaling and translating the NURBS surface&#39;s</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         transform node and you should see the intersect being</span></div>\n\
<div class=\"line\"><span class=\"comment\">//         correctly computed.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// MAYA HEADERS</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MNurbsIntersector.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MMatrix.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDagNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnTransform.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MVector.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNurbsSurface.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;intersectOnNurbsSurfaceCmd.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// CONSTRUCTOR:</span></div>\n\
<div class=\"line\">intersectOnNurbsSurfaceCmd::intersectOnNurbsSurfaceCmd()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DESTRUCTOR:</span></div>\n\
<div class=\"line\">intersectOnNurbsSurfaceCmd::~intersectOnNurbsSurfaceCmd()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// FOR CREATING AN INSTANCE OF THIS COMMAND:</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* intersectOnNurbsSurfaceCmd::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">   <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> intersectOnNurbsSurfaceCmd;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// MAKE THIS COMMAND NOT UNDOABLE:</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> intersectOnNurbsSurfaceCmd::isUndoable()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">   <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> intersectOnNurbsSurfaceCmd::doIt(<span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args)</div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// See the command usage at the top of this file for details</span></div>\n\
<div class=\"line\"><span class=\"comment\">// on how to use this command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> debug = <span class=\"keyword\">false</span>; </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> treeBased = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;intersectOnNurbsSurfaceCmd::doIt\\n&quot;</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> list;</div>\n\
<div class=\"line\">    stat = <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>(list);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(!stat) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;getActiveSelectionList FAILED\\n&quot;</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>( stat );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> path;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> nurbsObject;</div>\n\
<div class=\"line\">    stat = list.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a72d8cd9c78fd234dcf68cd2fb70bc432\">getDependNode</a>(0,nurbsObject);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(!stat)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;getDependNode FAILED\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html\">MFnDagNode</a> nodeFn(nurbsObject);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// don&#39;t use the transform, use the shape</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(nodeFn.childCount() &gt; 0) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> child = nodeFn.child(0);</div>\n\
<div class=\"line\">        nodeFn.setObject(child);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    list.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a16dda1a34d5f10be257d8421ac6deabd\">getDagPath</a>(0,path);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;Working with: &quot;</span> &lt;&lt; path.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a6e9ba8c60415451d03d26e01accaca81\">partialPathName</a>() &lt;&lt; endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> mat = path.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a63405f44451dc83c36ac538c4470b67c\">inclusiveMatrixInverse</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; mat &lt;&lt; endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> loc1Object;</div>\n\
<div class=\"line\">    stat = list.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a72d8cd9c78fd234dcf68cd2fb70bc432\">getDependNode</a>(1, loc1Object); <span class=\"comment\">// use the transform, not the shape</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(!stat) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;FAILED grabbing locator1\\n&quot;</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>( stat );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> loc2Object;</div>\n\
<div class=\"line\">    stat = list.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a72d8cd9c78fd234dcf68cd2fb70bc432\">getDependNode</a>(2, loc2Object); <span class=\"comment\">// use the transform, not the shape</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(!stat) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;FAILED grabbing locator2\\n&quot;</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>( stat );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_transform.html\">MFnTransform</a> loc1Fn(loc1Object);</div>\n\
<div class=\"line\">    <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> t = loc1Fn.getTranslation(<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8ad74f4c7c6562dc3f8339a8bba2d28dd0\">MSpace::kObject</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_transform.html\">MFnTransform</a> loc2Fn(loc2Object);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> t2 = loc2Fn.getTranslation(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8ad74f4c7c6562dc3f8339a8bba2d28dd0\">MSpace::kObject</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> ray = t2 - t;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> pt(t[0], t[1], t[2]);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;test point: &quot;</span> &lt;&lt; pt &lt;&lt; endl;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;transformed:&quot;</span> &lt;&lt; pt * mat &lt;&lt; endl;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> resultPoint;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> u=0, v=0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( treeBased ) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Use the tree-based NURBS intersect algorithm.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// The idea is to call create() once, then reuse for later calls</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// to getIntersect(). In our example, we&#39;ll just do one</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// getIntersect() call.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;tree-based NURBS intersect (MNurbsIntersector)\\n&quot;</span>;</div>\n\
<div class=\"line\">        <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html\">MNurbsIntersector</a> nurbIntersect;</div>\n\
<div class=\"line\">        stat = nurbIntersect.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html#ab2282fca7c906658df21fddb46f8227c\">create</a>(nurbsObject, mat);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(!stat) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;MNurbsIntersector::create FAILED\\n&quot;</span>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span>( stat );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        stat = nurbIntersect.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html#a55cad560ace6d38618ffaa64d9aad4c7\">getIntersect</a>(pt, ray, u, v, resultPoint, kMFnNurbsEpsilon);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(!stat) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;MNurbsIntersector::getIntersect FAILED!\\n&quot;</span>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span>( stat );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Use the non-tree NURBS intersect algorithm from MFnNurbsSurface.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_surface.html\">MFnNurbsSurface</a> ns( nurbsObject );</div>\n\
<div class=\"line\">        pt *= mat;  <span class=\"comment\">// Need to transform into object space ourselves</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> result = ns.intersect(pt, ray, u, v, resultPoint, kMFnNurbsEpsilon, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8ad74f4c7c6562dc3f8339a8bba2d28dd0\">MSpace::kObject</a>, <span class=\"keyword\">false</span>, NULL, <span class=\"keyword\">false</span>, NULL, &amp;stat );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(!result || !stat) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;MFnNurbsSurface::intersect FAILED!\\n&quot;</span>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>(stat) {</div>\n\
<div class=\"line\">                stat = <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span>( stat );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// As a check, grab the world space point that corresponds to the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// UVs returned from getIntersect.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;result UV: &quot;</span> &lt;&lt; u &lt;&lt; <span class=\"stringliteral\">&quot;, &quot;</span> &lt;&lt; v &lt;&lt; endl;</div>\n\
<div class=\"line\">    <a name=\"_a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> cmd = <span class=\"stringliteral\">&quot;pointOnSurface -u &quot;</span>;</div>\n\
<div class=\"line\">    cmd += u;</div>\n\
<div class=\"line\">    cmd += <span class=\"stringliteral\">&quot; -v &quot;</span>;</div>\n\
<div class=\"line\">    cmd += v;</div>\n\
<div class=\"line\">    cmd += <span class=\"stringliteral\">&quot; &quot;</span>;</div>\n\
<div class=\"line\">    cmd += path.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a6e9ba8c60415451d03d26e01accaca81\">partialPathName</a>();</div>\n\
<div class=\"line\">    <a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html\">MDoubleArray</a> arr;</div>\n\
<div class=\"line\">    <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a09e405631e7cf680f8ac9d934ad73434\">MGlobal::executeCommand</a>(cmd, arr); </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;check results:  result UV corresponds to world point: &quot;</span> &lt;&lt; arr &lt;&lt; endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> worldResultPoint = resultPoint * path.<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a229ff721947ec3ded47b5a071a7311ec\">inclusiveMatrix</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;local space result point: &quot;</span> &lt;&lt; resultPoint &lt;&lt; endl;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(debug) cout &lt;&lt; <span class=\"stringliteral\">&quot;world space result point: &quot;</span> &lt;&lt; worldResultPoint &lt;&lt; endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( fabs( arr[0] - worldResultPoint.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a> ) &gt; 0.0001</div>\n\
<div class=\"line\">            || fabs( arr[1] - worldResultPoint.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a> ) &gt; 0.0001</div>\n\
<div class=\"line\">            || fabs( arr[2] - worldResultPoint.<a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a> ) &gt; 0.0001 ) {</div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;check results: pointOnSurface does not match world point: &quot;</span> &lt;&lt; arr &lt;&lt; endl;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a> );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Move the second locator to the returned world-space point</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// This should always be on the nurbs surface.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Note: we are assuming with both locators that they are children of</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the world.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    stat = loc2Fn.setTranslation(worldResultPoint, <a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8adafa274206df602835f0f22ae887e126\">MSpace::kTransform</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// UNDO THE COMMAND</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> intersectOnNurbsSurfaceCmd::undoIt()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <span class=\"comment\">// undo not implemented</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The following routines are used to register/unregister</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the command we are creating within Maya</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;8.5&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerCommand( <span class=\"stringliteral\">&quot;intersectOnNurbsSurface&quot;</span>,</div>\n\
<div class=\"line\">            intersectOnNurbsSurfaceCmd::creator );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a name=\"a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterCommand( <span class=\"stringliteral\">&quot;intersectOnNurbsSurface&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";