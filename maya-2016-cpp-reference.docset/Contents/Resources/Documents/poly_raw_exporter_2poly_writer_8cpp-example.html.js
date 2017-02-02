var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>polyRawExporter/polyWriter.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'poly_raw_exporter_2poly_writer_8cpp-example.html\', tocPrefix);\n\
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
            <h1>polyRawExporter/polyWriter.cpp</h1>\n\
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
<div class=\"title\">polyRawExporter/polyWriter.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//polyWriter.cpp</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//General Includes</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnSet.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItDependencyGraph.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//Iterator Includes</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItMeshPolygon.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//Header File</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;polyWriter.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">polyWriter::polyWriter(<a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> dagPath, <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&amp; status)</div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  Constructor - creates the MDagPath and MFnMesh objects necessary</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          for extracting the data</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  dagPath - the dagPath where the mesh is located=</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          status - will be set to MStatus::kSuccess if the creation of the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//          MFnMesh is successful; MStatus::kFailure otherwise</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    fDagPath = <span class=\"keyword\">new</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>(dagPath);</div>\n\
<div class=\"line\">    fMesh = <span class=\"keyword\">new</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html\">MFnMesh</a>(*fDagPath, &amp;status);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">polyWriter::~polyWriter()</div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  Destructor - deletes all constructor created objects</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL != fDagPath) <span class=\"keyword\">delete</span> fDagPath;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (NULL != fMesh) <span class=\"keyword\">delete</span> fMesh;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> polyWriter::extractGeometry() </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  extracts the main geometry (vertices, vertex colours, vertex normals) </span></div>\n\
<div class=\"line\"><span class=\"comment\">//          of this polygonal mesh.  </span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  MStatus::kSuccess if the method succeeds</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          MStatus::kFailure if the method fails</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == fMesh-&gt;getPoints(fVertexArray, <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8a45a60f04ac9114f0d6e865a6285f40b2\">MSpace::kWorld</a>)) {</div>\n\
<div class=\"line\">        <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MFnMesh::getPoints&quot;</span>); </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == fMesh-&gt;getFaceVertexColors(fColorArray)) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MFnMesh::getFaceVertexColors&quot;</span>); </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == fMesh-&gt;getNormals(fNormalArray, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8a45a60f04ac9114f0d6e865a6285f40b2\">MSpace::kWorld</a>)) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MFnMesh::getNormals&quot;</span>); </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == fMesh-&gt;getCurrentUVSetName(fCurrentUVSetName)) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MFnMesh::getCurrentUVSetName&quot;</span>); </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == fMesh-&gt;getTangents(fTangentArray, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8a45a60f04ac9114f0d6e865a6285f40b2\">MSpace::kWorld</a>, &amp;fCurrentUVSetName)) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MFnMesh::getTangents&quot;</span>); </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == fMesh-&gt;getBinormals(fBinormalArray, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8a45a60f04ac9114f0d6e865a6285f40b2\">MSpace::kWorld</a>, &amp;fCurrentUVSetName)) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MFnMesh::getBinormals&quot;</span>); </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//Have to make the path include the shape below it so that</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//we can determine if the underlying shape node is instanced.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//By default, dag paths only include transform nodes.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    fDagPath-&gt;extendToShape();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//If the shape is instanced then we need to determine which</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//instance this path refers to.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> instanceNum = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fDagPath-&gt;isInstanced())</div>\n\
<div class=\"line\">        instanceNum = fDagPath-&gt;instanceNumber();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//Get the connected sets and members - these will be used to determine texturing of different</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//faces</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fMesh-&gt;getConnectedSetsAndMembers(instanceNum, fPolygonSets, fPolygonComponents, <span class=\"keyword\">true</span>)) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MFnMesh::getConnectedSetsAndMembers&quot;</span>); </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> polyWriter::outputTabs(ostream&amp; os, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> tabCount) </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  outputs tab spacing</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  os - an output stream to write to</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          tabCount - the number of tabs to print</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  MStatus::kSuccess if the method succeeds</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          MStatus::kFailure if the method fails</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (i = 0; i &lt; tabCount; i++) {</div>\n\
<div class=\"line\">        os &lt;&lt; <span class=\"stringliteral\">&quot;\\t&quot;</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> polyWriter::findShader(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; setNode) </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  finds the shading node for the given shading group set node</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  setNode - the shading group set node</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  the shader node for setNode if found;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          MObject::kNullObj otherwise</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> fnNode(setNode);</div>\n\
<div class=\"line\">    <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> shaderPlug = fnNode.findPlug(<span class=\"stringliteral\">&quot;surfaceShader&quot;</span>);</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!shaderPlug.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a1c18142e8f09680711f472aa2ddf8ac6\">isNull</a>()) {         </div>\n\
<div class=\"line\">        <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a> connectedPlugs;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//get all the plugs that are connected as the destination of this </span></div>\n\
<div class=\"line\">        <span class=\"comment\">//surfaceShader plug so we can find the surface shaderNode</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">        shaderPlug.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a3727c18c58fc5ba8be5fb2582b5d06f1\">connectedTo</a>(connectedPlugs, <span class=\"keyword\">true</span>, <span class=\"keyword\">false</span>, &amp;status);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == status) {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MPlug::connectedTo&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#ae6af14e0aa2c92bdda88c81280e1d122\">MObject::kNullObj</a>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (1 != connectedPlugs.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>()) {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;Error getting shader for: &quot;</span> + fMesh-&gt;partialPathName());</div>\n\
<div class=\"line\">        } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> connectedPlugs[0].node();</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#ae6af14e0aa2c92bdda88c81280e1d122\">MObject::kNullObj</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> polyWriter::outputSets(ostream&amp; os)</div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  outputs this mesh&#39;s sets and each sets face components, and any </span></div>\n\
<div class=\"line\"><span class=\"comment\">//          associated texture</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  os - an output stream to write to</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  MStatus::kSuccess if set information was outputted</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          MStatus::kFailure otherwise</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//if there is more than one set, the last set simply consists of all </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//polygons, so we won&#39;t include it</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> setCount = fPolygonSets.length();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (setCount &gt; 1) {</div>\n\
<div class=\"line\">        setCount--;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a> faces;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (i = 0; i &lt; setCount; i++ ) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> set = fPolygonSets[i];</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> comp = fPolygonComponents[i];</div>\n\
<div class=\"line\">        <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_set.html\">MFnSet</a> fnSet(set, &amp;status);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a> == status) {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MFnSet::MFnSet&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//Make sure the set is a polygonal set.  If not, continue.</span></div>\n\
<div class=\"line\">        <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html\">MItMeshPolygon</a> itMeshPolygon(*fDagPath, comp, &amp;status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ((<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a> == status)) {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MItMeshPolygon::MItMeshPolygon&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//add the current set&#39;s face indices to the faces array</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        faces.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html#a8c66dfa06f3736b2a214c5aed58bd216\">setLength</a>(itMeshPolygon.count());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> j = 0;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (itMeshPolygon.reset(); !itMeshPolygon.isDone(); itMeshPolygon.next()) {</div>\n\
<div class=\"line\">            faces[j++] = itMeshPolygon.index();</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//Find the texture that is applied to this set.  First, get the</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//shading node connected to the set.  Then, if there is an input</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//attribute called &quot;color&quot;, search upstream from it for a texture</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//file node.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> shaderNode = findShader(set);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#ae6af14e0aa2c92bdda88c81280e1d122\">MObject::kNullObj</a> == shaderNode) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> colorPlug = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a>(shaderNode).<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;color&quot;</span>, &amp;status);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a> == status) {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MFnDependencyNode::findPlug&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html\">MItDependencyGraph</a> itDG(colorPlug, <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7ac3bee92500cdc3a4ccbec4cb35e91f2a\">MFn::kFileTexture</a>,</div>\n\
<div class=\"line\">                                <a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a224b9163917ac32fc95a60d8c1eec3aaa8a1fab0ce1da9f8eb804389091ba08a9\">MItDependencyGraph::kUpstream</a>, </div>\n\
<div class=\"line\">                                <a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a5d3b8e489d2892096e6d65b9d9b72b65a8ad4d0a286855b50181b12df48942291\">MItDependencyGraph::kBreadthFirst</a>,</div>\n\
<div class=\"line\">                                <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_graph.html#a221b779e6bb7b8d40677d7642bfefac5a328f00ae2a12674d627e8080cc5f80a4\">MItDependencyGraph::kNodeLevel</a>, </div>\n\
<div class=\"line\">                                &amp;status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a> == status) {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(<span class=\"stringliteral\">&quot;MItDependencyGraph::MItDependencyGraph&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//disable automatic pruning so that we can locate a specific plug </span></div>\n\
<div class=\"line\">        itDG.disablePruningOnFilter();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//If no texture file node was found, pass in an empty string as the texture filename </span></div>\n\
<div class=\"line\">        <span class=\"comment\">//so that color information is outputted instead</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> textureName(<span class=\"stringliteral\">&quot;&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (itDG.isDone()) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == outputSingleSet(os, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(fnSet.name()), faces, textureName)) {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        <span class=\"comment\">//otherwise retrieve the filename and pass it in to output texture information</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> textureNode = itDG.thisNode();</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> filenamePlug = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a>(textureNode).<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;fileTextureName&quot;</span>);</div>\n\
<div class=\"line\">            filenamePlug.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a64f7093bfde5c5eb9d89b32635b772aa\">getValue</a>(textureName);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a> == outputSingleSet(os, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(fnSet.name()), faces, textureName)) {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";