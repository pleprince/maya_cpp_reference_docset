var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MDepthStencilState Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_depth_stencil_state.html\', tocPrefix);\n\
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
            <h1>MDepthStencilState Class Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MDepthStencilState Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-9DBD7E49-7A17-4CEB-89AF-A3B509AD91E2.htm\">What\'s New / What\'s Changed? &gt; Autodesk Maya 2014</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-4BAA1E05-8DF0-4F60-97D6-924603BAE94B.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; State and State Manager</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-32D46A07-2FEA-4D19-8782-DF4C5C8AAB1B.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Plug-in Entry Points &gt; Render Loop Overrides</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_depth_stencil_state.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_depth_stencil_state.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_depth_stencil_state.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MStateManager.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Container class for an acquired complete GPU depth stencil state. </p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html\" title=\"Container class for an acquired complete GPU depth stencil state. \">MDepthStencilState</a> wraps an acquired composite GPU depth stencil state. This depth stencil state can be used to set the current GPU depth stencil state using MStateManager::setDepthStencilState(myDepthState).</p>\n\
<p>Instances of <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html\" title=\"Container class for an acquired complete GPU depth stencil state. \">MDepthStencilState</a> cannot be created or modified by users. You can read the descriptor for an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html\" title=\"Container class for an acquired complete GPU depth stencil state. \">MDepthStencilState</a> using <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ac5a414a0128220e29fc65b34ea56176e\" title=\"Get the depth stencil state descriptor that was used to create the state object. \">MDepthStencilState::desc()</a>, but you cannot set or alter the descriptor directly.</p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html\" title=\"Container class for an acquired complete GPU depth stencil state. \">MDepthStencilState</a> can only be obtained via <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_state_manager.html#a4fae5c76bc6698abb77b9ffec01bc21a\" title=\"Acquires an immutable unique DepthStencil state matching the DepthStencil state descriptor and return...\">MStateManager::acquireDepthStencilState()</a>. To use <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_state_manager.html#a4fae5c76bc6698abb77b9ffec01bc21a\" title=\"Acquires an immutable unique DepthStencil state matching the DepthStencil state descriptor and return...\">MStateManager::acquireDepthStencilState()</a>, create and fill an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html\" title=\"Descriptor for a complete depth-stencil state. \">MDepthStencilStateDesc</a> instance with the requested state and pass it to <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_state_manager.html#a4fae5c76bc6698abb77b9ffec01bc21a\" title=\"Acquires an immutable unique DepthStencil state matching the DepthStencil state descriptor and return...\">MStateManager::acquireDepthStencilState()</a> which will return the cached unique depth stencil state of that description. If the unique depth stencil state did not previously exist in the cache, it is created.</p>\n\
<p>The information included in the depth stencil state includes depth buffer enable, depth buffer write enable, stencil enable, and separate stencil operations for front faces and back faces.</p>\n\
<p>The advantages of using this class rather than setting depth stencil states explicitly are:</p>\n\
<p>1. Since the states are cached internally, state setting is much faster than setting individual states. 2. Since state is set through the Maya viewport API, Maya can maintain accurate knowledge of the current GPU state, even in the presence of arbitrary plug-ins. This also speeds state setup by reducing redundant state setting and OGL queries. 3. The information is device aware, meaning that it will return the correct results based on the current active device. For example it will return the appropriate values for DirectX versus an OpenGL device. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8h-example.html#_a3\">cgFx/cgfxPassStateSetter.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_shader_node_8h-example.html#_a54\">cgFx/cgfxShaderNode.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_draw_override_8cpp-example.html#_a17\">gpuCache/gpuCacheDrawOverride.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/square_scale_manip_2square_scale_manip_8cpp-example.html#_a35\">squareScaleManip/squareScaleManip.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_image_blit_override_2view_image_blit_override_8cpp-example.html#_a43\">viewImageBlitOverride/viewImageBlitOverride.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_image_blit_override_2view_image_blit_override_8h-example.html#_a11\">viewImageBlitOverride/viewImageBlitOverride.h</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:ac692ecc1ffb4255c8c8628a3ce6f7a4b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ac692ecc1ffb4255c8c8628a3ce6f7a4b\">StencilOperation</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ac692ecc1ffb4255c8c8628a3ce6f7a4ba1c419d4127f34e025391e3be28779a80\">kKeepStencil</a> = 1, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ac692ecc1ffb4255c8c8628a3ce6f7a4bafd5ded57e821c89e665b7ee42c5c905b\">kZeroStencil</a> = 2, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ac692ecc1ffb4255c8c8628a3ce6f7a4ba9bb9f07791eb653d137901ff566fb449\">kReplaceStencil</a> = 3, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ac692ecc1ffb4255c8c8628a3ce6f7a4bad3fcf905c6830f76e8b2266e0ff98cb9\">kIncrementStencilSat</a> = 4, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ac692ecc1ffb4255c8c8628a3ce6f7a4ba890cd6ddfbe2dc903942415c52b7e9a8\">kDecrementStencilSat</a> = 5, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ac692ecc1ffb4255c8c8628a3ce6f7a4bab0ba9493e8b95f1504bbda54b64e2e83\">kInvertStencil</a> = 6, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ac692ecc1ffb4255c8c8628a3ce6f7a4ba3ddc278f01ffa165c5c165658b85f838\">kIncrementStencil</a> = 7, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ac692ecc1ffb4255c8c8628a3ce6f7a4ba1bb09404e956f05eb02ad3686c51f17f\">kDecrementStencil</a> = 8\n\
<br>\n\
 }<tr class=\"memdesc:ac692ecc1ffb4255c8c8628a3ce6f7a4b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Describes the choices for stencil buffer operations.  <a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ac692ecc1ffb4255c8c8628a3ce6f7a4b\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac692ecc1ffb4255c8c8628a3ce6f7a4b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ac5a414a0128220e29fc65b34ea56176e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html\">MDepthStencilStateDesc</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ac5a414a0128220e29fc65b34ea56176e\">desc</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:ac5a414a0128220e29fc65b34ea56176e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the depth stencil state descriptor that was used to create the state object.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state.html#ac5a414a0128220e29fc65b34ea56176e\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac5a414a0128220e29fc65b34ea56176e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad7bcab0d1707ef0da22fc72ada62c40e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ad7bcab0d1707ef0da22fc72ada62c40e\">resourceHandle</a> () const </td></tr>\n\
<tr class=\"memdesc:ad7bcab0d1707ef0da22fc72ada62c40e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method allows access to the draw API dependent handle for a depth-stencil state.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state.html#ad7bcab0d1707ef0da22fc72ada62c40e\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad7bcab0d1707ef0da22fc72ada62c40e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_h_w_render_1_1_m_depth_stencil_state.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"ac692ecc1ffb4255c8c8628a3ce6f7a4b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html#ac692ecc1ffb4255c8c8628a3ce6f7a4b\">StencilOperation</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Describes the choices for stencil buffer operations. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ac692ecc1ffb4255c8c8628a3ce6f7a4ba1c419d4127f34e025391e3be28779a80\"></a>kKeepStencil&#160;</td><td class=\"fielddoc\">\n\
<p>Do not update the entry in the stencil buffer. </p>\n\
<p>This is the default value </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ac692ecc1ffb4255c8c8628a3ce6f7a4bafd5ded57e821c89e665b7ee42c5c905b\"></a>kZeroStencil&#160;</td><td class=\"fielddoc\">\n\
<p>Set the stencil-buffer entry to 0. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ac692ecc1ffb4255c8c8628a3ce6f7a4ba9bb9f07791eb653d137901ff566fb449\"></a>kReplaceStencil&#160;</td><td class=\"fielddoc\">\n\
<p>Replace the stencil-buffer entry with a reference value. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ac692ecc1ffb4255c8c8628a3ce6f7a4bad3fcf905c6830f76e8b2266e0ff98cb9\"></a>kIncrementStencilSat&#160;</td><td class=\"fielddoc\">\n\
<p>Increment the stencil buffer entry, clamping to the maximum value. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ac692ecc1ffb4255c8c8628a3ce6f7a4ba890cd6ddfbe2dc903942415c52b7e9a8\"></a>kDecrementStencilSat&#160;</td><td class=\"fielddoc\">\n\
<p>Decrement the stencil buffer entry, clamping to zero. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ac692ecc1ffb4255c8c8628a3ce6f7a4bab0ba9493e8b95f1504bbda54b64e2e83\"></a>kInvertStencil&#160;</td><td class=\"fielddoc\">\n\
<p>Invert the bits in the stencil-buffer entry. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ac692ecc1ffb4255c8c8628a3ce6f7a4ba3ddc278f01ffa165c5c165658b85f838\"></a>kIncrementStencil&#160;</td><td class=\"fielddoc\">\n\
<p>Increment the stencil buffer entry, wrapping to zero if the new value exceeds the maximum value. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ac692ecc1ffb4255c8c8628a3ce6f7a4ba1bb09404e956f05eb02ad3686c51f17f\"></a>kDecrementStencil&#160;</td><td class=\"fielddoc\">\n\
<p>Decrement the stencil buffer entry, wrapping to the maximum value if the new value is less than zero. </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ac5a414a0128220e29fc65b34ea56176e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state_desc.html\">MDepthStencilStateDesc</a> &amp; desc </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the depth stencil state descriptor that was used to create the state object. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A reference to the depth stencil state descriptor</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> operation successful </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> operation failed </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const char * className </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of this class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad7bcab0d1707ef0da22fc72ada62c40e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void * resourceHandle </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method allows access to the draw API dependent handle for a depth-stencil state. </p>\n\
<p>This handle is owned by the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html\" title=\"Container class for an acquired complete GPU depth stencil state. \">MDepthStencilState</a> and is provided to allow access to use as a read-only object.</p>\n\
<p><b>Modifications should never be performed on this handle.</b></p>\n\
<p>Any modifications may result in unpredictable stability as the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_depth_stencil_state.html\" title=\"Container class for an acquired complete GPU depth stencil state. \">MDepthStencilState</a> no longer has knowledge of it\'s contents.</p>\n\
<p>For OpenGL, such a handle does not exist and a NULL pointer will be returned.</p>\n\
<p>For DirectX 10 and higher, a pointer to a Direct3D state will be returned.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A pointer (handle) to the state if successful, otherwise NULL. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MStateManager.h</li>\n\
<li>MStateManager.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";