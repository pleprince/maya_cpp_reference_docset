var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>hwUnlitShader/NodeMonitor.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'hw_unlit_shader_2_node_monitor_8cpp-example.html\', tocPrefix);\n\
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
            <h1>hwUnlitShader/NodeMonitor.cpp</h1>\n\
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
<div class=\"title\">hwUnlitShader/NodeMonitor.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (C) 1995 - 2006 Autodesk, Inc. and/or its licensors.  All </span></div>\n\
<div class=\"line\"><span class=\"comment\">// rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The coded instructions, statements, computer programs, and/or related </span></div>\n\
<div class=\"line\"><span class=\"comment\">// material (collectively the &quot;Data&quot;) in these files contain unpublished </span></div>\n\
<div class=\"line\"><span class=\"comment\">// information proprietary to Autodesk, Inc. (&quot;Autodesk&quot;) and/or its </span></div>\n\
<div class=\"line\"><span class=\"comment\">// licensors, which is protected by U.S. and Canadian federal copyright </span></div>\n\
<div class=\"line\"><span class=\"comment\">// law and by international treaties.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The Data is provided for use exclusively by You. You have the right </span></div>\n\
<div class=\"line\"><span class=\"comment\">// to use, modify, and incorporate this Data into other products for </span></div>\n\
<div class=\"line\"><span class=\"comment\">// purposes authorized by the Autodesk software license agreement, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// without fee.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The copyright notices in the Software and this entire statement, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// including the above license grant, this restriction and the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// following disclaimer, must be included in all copies of the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Software, in whole or in part, and all derivative works of </span></div>\n\
<div class=\"line\"><span class=\"comment\">// the Software, unless such copies or derivative works are solely </span></div>\n\
<div class=\"line\"><span class=\"comment\">// in the form of machine-executable object code generated by a </span></div>\n\
<div class=\"line\"><span class=\"comment\">// source language processor.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// AUTODESK DOES NOT MAKE AND HEREBY DISCLAIMS ANY EXPRESS OR IMPLIED </span></div>\n\
<div class=\"line\"><span class=\"comment\">// WARRANTIES INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF </span></div>\n\
<div class=\"line\"><span class=\"comment\">// NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR </span></div>\n\
<div class=\"line\"><span class=\"comment\">// PURPOSE, OR ARISING FROM A COURSE OF DEALING, USAGE, OR </span></div>\n\
<div class=\"line\"><span class=\"comment\">// TRADE PRACTICE. IN NO EVENT WILL AUTODESK AND/OR ITS LICENSORS </span></div>\n\
<div class=\"line\"><span class=\"comment\">// BE LIABLE FOR ANY LOST REVENUES, DATA, OR PROFITS, OR SPECIAL, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES, EVEN IF AUTODESK </span></div>\n\
<div class=\"line\"><span class=\"comment\">// AND/OR ITS LICENSORS HAS BEEN ADVISED OF THE POSSIBILITY </span></div>\n\
<div class=\"line\"><span class=\"comment\">// OR PROBABILITY OF SUCH DAMAGES.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// NodeMonitor.cpp</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: This class monitors a given node. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// TODO: Take care of renamed nodes.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// AUTHOR: Christian Laforte</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;assert.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;NodeMonitor.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> getObjFromName(<a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> name, <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&amp; stat)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> list;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Attempt to add the given name to the selection list,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// then get the corresponding dependency node handle.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!list.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a23929aeafb29672f2652128eac9c4dec\">add</a>(name) ||</div>\n\
<div class=\"line\">        !list.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a72d8cd9c78fd234dcf68cd2fb70bc432\">getDependNode</a>(0, obj))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Failed.</span></div>\n\
<div class=\"line\">        stat = <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af8c5f748892ec74b32719c8fba7767e1\">MStatus::kInvalidParameter</a>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> obj;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Successful.</span></div>\n\
<div class=\"line\">    stat = <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> obj;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// If a problem occurs, this function returns an empty string.</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> getNameFromObj(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> nodeName;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// If this object is a MFnDagNode, we should store the dag name.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Otherwise, use the MFnDependencyNode name.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (obj.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af0af77f14f96d1134fb8e8e60dc7e420\">hasFn</a>(<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a7f6b3e140a92b64ca6c088012cca49af\">MFn::kDagNode</a>))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html\">MFnDagNode</a> dagNode(obj);</div>\n\
<div class=\"line\">        nodeName = dagNode.fullPathName();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (obj.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af0af77f14f96d1134fb8e8e60dc7e420\">hasFn</a>(<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a2feeef9d7a0ae8bba1f9da9ed24e819b\">MFn::kDependencyNode</a>))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> node(obj);</div>\n\
<div class=\"line\">        nodeName = node.name();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> nodeName;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-----------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Public interface:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//-----------------------------------------------------------</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">NodeMonitor::NodeMonitor(NodeMonitorManager* manager <span class=\"comment\">/* = NULL */</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    fNodeName = <span class=\"stringliteral\">&quot;&quot;</span>;</div>\n\
<div class=\"line\">    fIsDirty = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    fRenamedCallbackId = 0;</div>\n\
<div class=\"line\">    fDirtyCallbackId = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fManager = manager;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">NodeMonitor::~NodeMonitor()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    stopWatching();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> NodeMonitor::watch(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> nodeName)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// if already watching another object, release the callbacks.</span></div>\n\
<div class=\"line\">    stopWatching();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fNodeName = nodeName;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> attachCallbacks();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> NodeMonitor::watch(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> nodeObj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> newNodeName = getNameFromObj(nodeObj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// If already watching another object, release the callbacks.</span></div>\n\
<div class=\"line\">    stopWatching();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the name of the given object... since an MObject is not</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// persistent. We&#39;ll use the name of the object to attach/re-attach</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// callbacks when necessary.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (newNodeName == <span class=\"stringliteral\">&quot;&quot;</span>)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// This is bad. We&#39;ve been given an invalid node object.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// return false to indicate that an error occured.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fNodeName = newNodeName;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> attachCallbacks();   </div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> NodeMonitor::stopWatching()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fNodeName != <span class=\"stringliteral\">&quot;&quot;</span>)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Clean up the callbacks</span></div>\n\
<div class=\"line\">        detachCallbacks();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        fNodeName = <span class=\"stringliteral\">&quot;&quot;</span>;</div>\n\
<div class=\"line\">        fIsDirty = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> NodeMonitor::dirty()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fIsDirty;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> NodeMonitor::cleanIt()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (dirty())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// We have to re-attach the callback.</span></div>\n\
<div class=\"line\">        attachCallbacks();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fIsDirty = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Private interface:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> NodeMonitor::attachCallbacks()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Make sure that there are no callbacks currently enabled.</span></div>\n\
<div class=\"line\">    detachCallbacks();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> node = getObjFromName(fNodeName, stat);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!stat)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        detachCallbacks();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fIsDirty = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fDirtyCallbackId = <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_node_message.html#a449a233d8c1f0d263a4ffd1f8dbe17b6\">MNodeMessage::addNodeDirtyCallback</a>(node, watchedObjectDirtyCallback, <span class=\"keyword\">this</span>, &amp;stat );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (stat)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        fRenamedCallbackId = <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_node_message.html#a2003e7c6eb622a71ccd0a99581d63451\">MNodeMessage::addNameChangedCallback</a> (node, watchedObjectRenamedCallback, <span class=\"keyword\">this</span>, &amp;stat); </div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// If an error occured, detach any valid callback.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!stat)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        detachCallbacks();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> NodeMonitor::detachCallbacks()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fDirtyCallbackId)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        stat = <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_message.html#a50fe995add3ce133b8b56551abb4ed09\">MMessage::removeCallback</a>(fDirtyCallbackId);</div>\n\
<div class=\"line\">        assert(stat);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fRenamedCallbackId)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        stat = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_message.html#a50fe995add3ce133b8b56551abb4ed09\">MMessage::removeCallback</a>(fRenamedCallbackId);</div>\n\
<div class=\"line\">        assert(stat);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fRenamedCallbackId = 0;</div>\n\
<div class=\"line\">    fDirtyCallbackId = 0;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> NodeMonitor::callbackOccured()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    fIsDirty = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Detach the callback so that we don&#39;t get called needlessly. We&#39;ll</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// re-attach when the dirty bit is read back.</span></div>\n\
<div class=\"line\">    detachCallbacks();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Callback functions. Those are called, respectively, when a node is dirty (has changed substantially),</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or when a node is renamed.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*static*/</span> <span class=\"keywordtype\">void</span> NodeMonitor::watchedObjectDirtyCallback(<span class=\"keywordtype\">void</span>* clientData)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    NodeMonitor* pMon = (NodeMonitor*) clientData;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    pMon-&gt;callbackOccured();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*static*/</span> <span class=\"keywordtype\">void</span> NodeMonitor::watchedObjectRenamedCallback(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; node, <span class=\"keywordtype\">void</span>* clientData)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    NodeMonitor* pMon = (NodeMonitor*) clientData;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the new name of the node, and use it from now on.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> oldName = pMon-&gt;fNodeName;</div>\n\
<div class=\"line\">    pMon-&gt;fNodeName = getNameFromObj(node);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Call the manager, if there&#39;s one.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (pMon-&gt;fManager != NULL)</div>\n\
<div class=\"line\">        pMon-&gt;fManager-&gt;onNodeRenamed(node, oldName, pMon-&gt;fNodeName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    pMon-&gt;callbackOccured();</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";