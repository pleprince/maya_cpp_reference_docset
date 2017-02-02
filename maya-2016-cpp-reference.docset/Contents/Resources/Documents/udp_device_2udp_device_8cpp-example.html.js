var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>udpDevice/udpDevice.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'udp_device_2udp_device_8cpp-example.html\', tocPrefix);\n\
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
            <h1>udpDevice/udpDevice.cpp</h1>\n\
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
<div class=\"title\">udpDevice/udpDevice.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2011 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// A simple client device node that uses UDP to transfer data.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Sample only runs on Linux.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Run Maya and execute the MEL code below.  In a shell,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// run the Python code and enter 3 numbers to update the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// cube&#39;s translate. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">// MEL:</span></div>\n\
<div class=\"line\"><span class=\"comment\">loadPlugin udpDevice;</span></div>\n\
<div class=\"line\"><span class=\"comment\">string $node = `createNode udpDevice`;</span></div>\n\
<div class=\"line\"><span class=\"comment\">string $cube[] = `polyCube`;</span></div>\n\
<div class=\"line\"><span class=\"comment\">connectAttr ( $node + &quot;.outputTranslate&quot; ) ( $cube[0] + &quot;.translate&quot; );</span></div>\n\
<div class=\"line\"><span class=\"comment\">setAttr ( $node + &quot;.live&quot; ) 1;</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\"># Python: run from a Linux command line as a Python script</span></div>\n\
<div class=\"line\"><span class=\"comment\">import socket</span></div>\n\
<div class=\"line\"><span class=\"comment\">clientSocket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)</span></div>\n\
<div class=\"line\"><span class=\"comment\">while True:</span></div>\n\
<div class=\"line\"><span class=\"comment\">    data = raw_input(&quot;Type 3 numbers for translate(. to exit): &quot;)</span></div>\n\
<div class=\"line\"><span class=\"comment\">    if data &lt;&gt; &#39;.&#39;:</span></div>\n\
<div class=\"line\"><span class=\"comment\">        clientSocket.sendto(data, (&quot;localhost&quot;,7555))</span></div>\n\
<div class=\"line\"><span class=\"comment\">    else:</span></div>\n\
<div class=\"line\"><span class=\"comment\">        break</span></div>\n\
<div class=\"line\"><span class=\"comment\">clientSocket.close()</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef LINUX</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;sys/types.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;sys/socket.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;netinet/in.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;arpa/inet.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdio.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;unistd.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;errno.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdlib.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;api_macros.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxClientDeviceNode.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>udpDeviceNode : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_client_device_node.html\">MPxClientDeviceNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                udpDeviceNode();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span>         ~udpDeviceNode();</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span>        <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5c13a6c88a839b5356861d1d09e820d9\">postConstructor</a>();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5cb7edfa1f67c75588bec1c38b7bf5f8\">compute</a>( <span class=\"keyword\">const</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data );</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span>        <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a42dd3fa0dc5fff7ae9ce9bf8f987d3fd\">threadHandler</a>( <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* serverName, <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* deviceName );</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span>        <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a026d4619d3e629e2c526787e945564b0\">threadShutdownHandler</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*        creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>      initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>      outputTranslate;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>      outputTranslateX;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>      outputTranslateY;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>      outputTranslateZ;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>      id;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> udpDeviceNode::id( 0x00081052 );</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> udpDeviceNode::outputTranslate;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> udpDeviceNode::outputTranslateX;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> udpDeviceNode::outputTranslateY;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> udpDeviceNode::outputTranslateZ;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">udpDeviceNode::udpDeviceNode() </div>\n\
<div class=\"line\">{}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">udpDeviceNode::~udpDeviceNode()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    destroyMemoryPools();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> udpDeviceNode::postConstructor()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> attrArray;</div>\n\
<div class=\"line\">    attrArray.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html#a3694392863ba632bca5d76cbbf190ef5\">append</a>( udpDeviceNode::outputTranslate );</div>\n\
<div class=\"line\">    setRefreshOutputAttributes( attrArray );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// we&#39;ll be reading one character line of size 1024</span></div>\n\
<div class=\"line\">    createMemoryPools( 1, 1024, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">char</span>));</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> udpDeviceNode::threadHandler( <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* serverName, <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* deviceName )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    setDone( <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( serverName != NULL &amp;&amp; deviceName != NULL )</div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;udpThreadHandler: %s %s\\n&quot;</span>,serverName,deviceName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef LINUX</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> sock;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> bytesRead;</div>\n\
<div class=\"line\">    socklen_t addressLength;</div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>sockaddr_in serverAddress , clientAddress;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    serverAddress.sin_family = AF_INET;</div>\n\
<div class=\"line\">    serverAddress.sin_port = htons(7555);</div>\n\
<div class=\"line\">    serverAddress.sin_addr.s_addr = INADDR_ANY;</div>\n\
<div class=\"line\">    bzero(&amp;(serverAddress.sin_zero),8);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    addressLength = <span class=\"keyword\">sizeof</span>(<span class=\"keyword\">struct </span>sockaddr);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ((sock = socket(AF_INET, SOCK_DGRAM, 0)) == -1) </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (bind(sock,(<span class=\"keyword\">struct</span> sockaddr *)&amp;serverAddress,</div>\n\
<div class=\"line\">        <span class=\"keyword\">sizeof</span>(<span class=\"keyword\">struct</span> sockaddr)) == -1)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_char_buffer.html\">MCharBuffer</a> buffer;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> receiveBuffer[1024];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">while</span> ( !isDone() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( ! isLive() )</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// select() modifies its parameters so reset everytime</span></div>\n\
<div class=\"line\">        fd_set read_set;</div>\n\
<div class=\"line\">        FD_ZERO( &amp;read_set );</div>\n\
<div class=\"line\">        FD_SET( sock, &amp;read_set );</div>\n\
<div class=\"line\">        <span class=\"keyword\">struct </span>timeval tv;</div>\n\
<div class=\"line\">        tv.tv_sec = 0;</div>\n\
<div class=\"line\">        tv.tv_usec = 500000; <span class=\"comment\">// 1/2 second</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( select( sock+1, &amp;read_set, NULL, NULL, &amp;tv ) == -1 )</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( ! FD_ISSET( sock, &amp;read_set ) )</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        receiveBuffer[0] = 0;</div>\n\
<div class=\"line\">        bytesRead = recvfrom(sock,receiveBuffer,1024,0,</div>\n\
<div class=\"line\">            (<span class=\"keyword\">struct</span> sockaddr *)&amp;clientAddress, &amp;addressLength);</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *receivedFromServer = inet_ntoa(clientAddress.sin_addr);</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">short</span> receivedFromPort = ntohs(clientAddress.sin_port);</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( NULL == receivedFromServer )</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;(%s , %d) connection : %s \\n&quot;</span>,receivedFromServer,receivedFromPort, receiveBuffer);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Simple test to make sure we are getting data from the right server</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// printf(&quot;%s %s\\n&quot;,serverName, receivedFromServer);</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( 0 != strcmp( serverName, receivedFromServer ) )</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the storage once we have data from the server</span></div>\n\
<div class=\"line\">        status = acquireDataStorage(buffer);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( ! status )</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        beginThreadLoop();</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            receiveBuffer[bytesRead] = <span class=\"charliteral\">&#39;\\0&#39;</span>;</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">double</span>* doubleData = <span class=\"keyword\">reinterpret_cast&lt;</span><span class=\"keywordtype\">double</span>*<span class=\"keyword\">&gt;</span>(buffer.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_char_buffer.html#a46b13c2b5fe2372863ff84b811d1e480\">ptr</a>());</div>\n\
<div class=\"line\">            doubleData[0] = 0.0 ; doubleData[1] = 0.0; doubleData[2] = 0.0;</div>\n\
<div class=\"line\">            <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> sa;</div>\n\
<div class=\"line\">            <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> s( receiveBuffer );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( s.split( <span class=\"charliteral\">&#39; &#39;</span>, sa ) )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> ( sa.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>() == 3 )</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <span class=\"keywordtype\">int</span> i = 0;</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">for</span> ( i = 0; i &lt; 3; i++ )</div>\n\
<div class=\"line\">                    {</div>\n\
<div class=\"line\">                        doubleData[i] = ( sa[i].isDouble() ? sa[i].asDouble() : 0.0 );</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                }   </div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            pushThreadData( buffer );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        endThreadLoop();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Close the socket</span></div>\n\
<div class=\"line\">    close( sock );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif // LINUX</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    setDone( <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> udpDeviceNode::threadShutdownHandler()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    setDone( <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* udpDeviceNode::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> udpDeviceNode;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> udpDeviceNode::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html\">MFnNumericAttribute</a> numAttr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    outputTranslateX = numAttr.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>(<span class=\"stringliteral\">&quot;outputTranslateX&quot;</span>, <span class=\"stringliteral\">&quot;otx&quot;</span>, <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7acd70f5d2b5e8c1bb8e83b0482a33e518\">MFnNumericData::kDouble</a>, 0.0, &amp;status);</div>\n\
<div class=\"line\">    MCHECKERROR(status, <span class=\"stringliteral\">&quot;create outputTranslateX&quot;</span>);</div>\n\
<div class=\"line\">    outputTranslateY = numAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>(<span class=\"stringliteral\">&quot;outputTranslateY&quot;</span>, <span class=\"stringliteral\">&quot;oty&quot;</span>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7acd70f5d2b5e8c1bb8e83b0482a33e518\">MFnNumericData::kDouble</a>, 0.0, &amp;status);</div>\n\
<div class=\"line\">    MCHECKERROR(status, <span class=\"stringliteral\">&quot;create outputTranslateY&quot;</span>);</div>\n\
<div class=\"line\">    outputTranslateZ = numAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>(<span class=\"stringliteral\">&quot;outputTranslateZ&quot;</span>, <span class=\"stringliteral\">&quot;otz&quot;</span>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7acd70f5d2b5e8c1bb8e83b0482a33e518\">MFnNumericData::kDouble</a>, 0.0, &amp;status);</div>\n\
<div class=\"line\">    MCHECKERROR(status, <span class=\"stringliteral\">&quot;create outputTranslateZ&quot;</span>);</div>\n\
<div class=\"line\">    outputTranslate = numAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>(<span class=\"stringliteral\">&quot;outputTranslate&quot;</span>, <span class=\"stringliteral\">&quot;ot&quot;</span>, outputTranslateX, outputTranslateY, </div>\n\
<div class=\"line\">                                     outputTranslateZ, &amp;status);</div>\n\
<div class=\"line\">    MCHECKERROR(status, <span class=\"stringliteral\">&quot;create outputTranslate&quot;</span>);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    ADD_ATTRIBUTE(outputTranslate);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ATTRIBUTE_AFFECTS( live, outputTranslate);</div>\n\
<div class=\"line\">    ATTRIBUTE_AFFECTS( frameRate, outputTranslate);</div>\n\
<div class=\"line\">    ATTRIBUTE_AFFECTS( serverName, outputTranslate);</div>\n\
<div class=\"line\">    ATTRIBUTE_AFFECTS( deviceName, outputTranslate);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> udpDeviceNode::compute( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; block )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( plug == outputTranslate || plug == outputTranslateX ||</div>\n\
<div class=\"line\">        plug == outputTranslateY || plug == outputTranslateZ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_char_buffer.html\">MCharBuffer</a> buffer;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( popThreadData(buffer) )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">double</span>* doubleData = <span class=\"keyword\">reinterpret_cast&lt;</span><span class=\"keywordtype\">double</span>*<span class=\"keyword\">&gt;</span>(buffer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_char_buffer.html#a46b13c2b5fe2372863ff84b811d1e480\">ptr</a>());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a name=\"_a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> outputTranslateHandle = block.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a5e4082d6ab961bee4ec0281676bb4834\">outputValue</a>( outputTranslate, &amp;status );</div>\n\
<div class=\"line\">            MCHECKERROR(status, <span class=\"stringliteral\">&quot;Error in block.outputValue for outputTranslate&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            double3&amp; outputTranslate = outputTranslateHandle.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a077d60a4a74d54e7a892d3c6ed115cc1\">asDouble3</a>();</div>\n\
<div class=\"line\">            outputTranslate[0] = doubleData[0];</div>\n\
<div class=\"line\">            outputTranslate[1] = doubleData[1];</div>\n\
<div class=\"line\">            outputTranslate[2] = doubleData[2];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            block.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#aceb46f1065ef1cd730c4ab15d61466cc\">setClean</a>( plug );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            releaseDataStorage(buffer);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> <a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> ( <a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a7f858db05022c8bc860d685e13bab6ae\">MS::kUnknownParameter</a> );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a name=\"_a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin(obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerNode( <span class=\"stringliteral\">&quot;udpDevice&quot;</span>, </div>\n\
<div class=\"line\">                                  udpDeviceNode::id,</div>\n\
<div class=\"line\">                                  udpDeviceNode::creator,</div>\n\
<div class=\"line\">                                  udpDeviceNode::initialize,</div>\n\
<div class=\"line\">                                  <a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a1d1cfd8ffb84e947f82999c682b666a7abfb3e7ca3785d7f64dedb0223af01ea2\">MPxNode::kClientDeviceNode</a> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( !status ) {</div>\n\
<div class=\"line\">        status.<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;failed to registerNode udpDeviceNode&quot;</span>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin(obj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterNode( udpDeviceNode::id );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( !status ) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;failed to deregisterNode udpDeviceNode&quot;</span>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";