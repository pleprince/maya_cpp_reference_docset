var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>nodeMessageCmd/nodeMessageCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'node_message_cmd_2node_message_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>nodeMessageCmd/nodeMessageCmd.cpp</h1>\n\
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
<div class=\"title\">nodeMessageCmd/nodeMessageCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// nodeMessageCmd.cc</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     Sample plug-in that demonstrates how to register/de-register</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     a callback with the MNodeMessage class.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     This plug-in will register a new command in maya called</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     &quot;nodeMessage&quot; which adds a callback for the all nodes on</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     the active selection list. A message is printed to stdout </span></div>\n\
<div class=\"line\"><span class=\"comment\">//     whenever a connection is made or broken for those nodes.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIntArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MNodeMessage.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MCallbackIdArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This table will keep track of the registered callbacks</span></div>\n\
<div class=\"line\"><span class=\"comment\">// so they can be removed when the plug-ins is unloaded.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_callback_id_array.html\">MCallbackIdArray</a> callbackIds;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Callback function</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    Prints out plug information when connections are made or broken.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    See MNodeMessage.h for all of the available AttributeMessage types.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> userCB( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_node_message.html#a2f710b68ff75e657f3be4b17a9dbe1e7\">MNodeMessage::AttributeMessage</a> msg, <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp; plug,</div>\n\
<div class=\"line\">             <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp; otherPlug, <span class=\"keywordtype\">void</span>* )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( msg &amp; <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_node_message.html#a2f710b68ff75e657f3be4b17a9dbe1e7ac6e3b13a568648320a5874a5a3426c6f\">MNodeMessage::kConnectionMade</a> ) {</div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;Connection made &quot;</span>;</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( msg &amp; <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_node_message.html#a2f710b68ff75e657f3be4b17a9dbe1e7a03593b1898a65ccdeb57195bedf5fc20\">MNodeMessage::kConnectionBroken</a> ) {</div>\n\
<div class=\"line\">        cout &lt;&lt; <span class=\"stringliteral\">&quot;Connection broken &quot;</span>;</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    cout &lt;&lt; plug.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aeefa96f5abd664721e49ad9d96aa8b83\">info</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( msg &amp; <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_node_message.html#a2f710b68ff75e657f3be4b17a9dbe1e7a63d7d975ffe9517c61e6af59ce047768\">MNodeMessage::kOtherPlugSet</a> ) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( msg &amp; <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_node_message.html#a2f710b68ff75e657f3be4b17a9dbe1e7ac3d6fa0ef46c74d104d40414440500f7\">MNodeMessage::kIncomingDirection</a> ) {</div>\n\
<div class=\"line\">                cout &lt;&lt; <span class=\"stringliteral\">&quot;  &lt;--  &quot;</span> &lt;&lt; otherPlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aeefa96f5abd664721e49ad9d96aa8b83\">info</a>();</div>\n\
<div class=\"line\">        } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">                cout &lt;&lt; <span class=\"stringliteral\">&quot;  --&gt;  &quot;</span> &lt;&lt; otherPlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aeefa96f5abd664721e49ad9d96aa8b83\">info</a>();</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    cout &lt;&lt; endl;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Command class declaration</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>nodeMessageCmd : <span class=\"keyword\">public</span> <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    nodeMessageCmd() {};</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span>         ~nodeMessageCmd(); </div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>( <span class=\"keyword\">const</span> <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args );</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator();</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Command class implementation</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">nodeMessageCmd::~nodeMessageCmd() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* nodeMessageCmd::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> nodeMessageCmd();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> nodeMessageCmd::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Takes the  nodes that are on the active selection list and adds an</span></div>\n\
<div class=\"line\"><span class=\"comment\">// attriubte changed callback to each one.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         stat;</div>\n\
<div class=\"line\">    <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>         node;</div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a>  list;</div>\n\
<div class=\"line\">    MCallbackId     id;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Register node callbacks for all nodes on the active list.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>( list );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i=0; i&lt;list.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>(); i++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        list.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a72d8cd9c78fd234dcf68cd2fb70bc432\">getDependNode</a>( i, node );</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"keywordtype\">id</span> = <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_node_message.html#a92573fa0091e7c9de4412b467e928810\">MNodeMessage::addAttributeChangedCallback</a>( node,</div>\n\
<div class=\"line\">                                                        userCB,</div>\n\
<div class=\"line\">                                                        NULL,</div>\n\
<div class=\"line\">                                                        &amp;stat);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// If the callback was successfully added then add the</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// callback id to our callback table so it can be removed</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// when the plugin is unloaded.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( stat ) {</div>\n\
<div class=\"line\">            callbackIds.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_callback_id_array.html#a21e9b777b17a3dfd715d96599376ecfa\">append</a>( <span class=\"keywordtype\">id</span> );</div>\n\
<div class=\"line\">        } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">            cout &lt;&lt; <span class=\"stringliteral\">&quot;MNodeMessage.addCallback failed\\n&quot;</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Plugin registration</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> plugin.registerCommand( <span class=\"stringliteral\">&quot;nodeMessage&quot;</span>, nodeMessageCmd::creator );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Remove all callbacks</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i=0; i&lt;callbackIds.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_callback_id_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); i++ ) {</div>\n\
<div class=\"line\">        <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_message.html#a50fe995add3ce133b8b56551abb4ed09\">MMessage::removeCallback</a>( (MCallbackId)callbackIds[i] );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> plugin.deregisterCommand( <span class=\"stringliteral\">&quot;nodeMessage&quot;</span> );</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";