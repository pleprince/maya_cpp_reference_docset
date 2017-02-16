var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MHwTextureManager Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_hw_texture_manager.html\', tocPrefix);\n\
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
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MHwTextureManager Class Reference</h1>\n\
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
<div class=\"title\">MHwTextureManager Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_hw_texture_manager.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MHwTextureManager.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p><b>This method is obsolete. </b></p>\n\
<dl class=\"deprecated\"><dt><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/deprecated.html#_deprecated000136\">Deprecated:</a></b></dt><dd>Use <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_manager.html\" title=\"Class which manages texture. \">MHWRender::MTextureManager</a> instead.</dd></dl>\n\
<p>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_hw_texture_manager.html\" title=\"This method is obsolete. \">MHwTextureManager</a> provides an interface for loading and using hardware textures. </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a1135feb4729cedcfc70935c196fd0448\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_hw_texture_manager.html#a1135feb4729cedcfc70935c196fd0448\">glBind</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;fileTextureObject, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a9b0c9320a802a00a718bcab75ba40550\">MImageFileInfo::MHwTextureType</a> &amp;targetType, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8379c23d2cc542a5a3527cb90645c61c\">MImageFileInfo::MImageType</a> imageType=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8379c23d2cc542a5a3527cb90645c61ca8d9d0dddd2b1ba38521a5fa4776b62d2\">MImageFileInfo::kImageTypeUnknown</a>)</td></tr>\n\
<tr class=\"memdesc:a1135feb4729cedcfc70935c196fd0448\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Bind the contents of a file texture node to the currently active OpenGL texture unit.  <a href=\"class_m_hw_texture_manager.html#a1135feb4729cedcfc70935c196fd0448\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1135feb4729cedcfc70935c196fd0448\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7d6190c34bb8fd8c3d04639a99a02b72\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_hw_texture_manager.html#a7d6190c34bb8fd8c3d04639a99a02b72\">glBind</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;fileTextureConnection, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a9b0c9320a802a00a718bcab75ba40550\">MImageFileInfo::MHwTextureType</a> &amp;targetType, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8379c23d2cc542a5a3527cb90645c61c\">MImageFileInfo::MImageType</a> imageType=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8379c23d2cc542a5a3527cb90645c61ca8d9d0dddd2b1ba38521a5fa4776b62d2\">MImageFileInfo::kImageTypeUnknown</a>)</td></tr>\n\
<tr class=\"memdesc:a7d6190c34bb8fd8c3d04639a99a02b72\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Bind the contents of a specific file texture node attribute (e.g.  <a href=\"class_m_hw_texture_manager.html#a7d6190c34bb8fd8c3d04639a99a02b72\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7d6190c34bb8fd8c3d04639a99a02b72\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abfd129c5e53f17a99f86cf49fbe4348a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_hw_texture_manager.html#abfd129c5e53f17a99f86cf49fbe4348a\">registerTextureFile</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;fileName, MHwTextureFileHandle &amp;hTexture)</td></tr>\n\
<tr class=\"memdesc:abfd129c5e53f17a99f86cf49fbe4348a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Register a named texture file.  <a href=\"class_m_hw_texture_manager.html#abfd129c5e53f17a99f86cf49fbe4348a\">More...</a><br></td></tr>\n\
<tr class=\"separator:abfd129c5e53f17a99f86cf49fbe4348a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6cf770812e14cb68bc24b8561b97e325\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_hw_texture_manager.html#a6cf770812e14cb68bc24b8561b97e325\">deregisterTextureFile</a> (const MHwTextureFileHandle &amp;hTexture)</td></tr>\n\
<tr class=\"memdesc:a6cf770812e14cb68bc24b8561b97e325\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Deregisters the given handle to a texture entry in the manager.  <a href=\"class_m_hw_texture_manager.html#a6cf770812e14cb68bc24b8561b97e325\">More...</a><br></td></tr>\n\
<tr class=\"separator:a6cf770812e14cb68bc24b8561b97e325\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4fb6fd8c7367bd758ae9c759a93cbe3b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_hw_texture_manager.html#a4fb6fd8c7367bd758ae9c759a93cbe3b\">textureFile</a> (const MHwTextureFileHandle &amp;hTexture, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;fileName)</td></tr>\n\
<tr class=\"memdesc:a4fb6fd8c7367bd758ae9c759a93cbe3b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Return the file name associated with a given texture file handle.  <a href=\"class_m_hw_texture_manager.html#a4fb6fd8c7367bd758ae9c759a93cbe3b\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4fb6fd8c7367bd758ae9c759a93cbe3b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad06b8e4607128f8d0a6eff08406ef1db\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_hw_texture_manager.html#ad06b8e4607128f8d0a6eff08406ef1db\">glBind</a> (const MHwTextureFileHandle &amp;hTexture, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a9b0c9320a802a00a718bcab75ba40550\">MImageFileInfo::MHwTextureType</a> &amp;targetType, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8379c23d2cc542a5a3527cb90645c61c\">MImageFileInfo::MImageType</a> imageType=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8379c23d2cc542a5a3527cb90645c61ca8d9d0dddd2b1ba38521a5fa4776b62d2\">MImageFileInfo::kImageTypeUnknown</a>)</td></tr>\n\
<tr class=\"memdesc:ad06b8e4607128f8d0a6eff08406ef1db\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Bind the contents of a specific file to the currently active OpenGL texture unit.  <a href=\"class_m_hw_texture_manager.html#ad06b8e4607128f8d0a6eff08406ef1db\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad06b8e4607128f8d0a6eff08406ef1db\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_hw_texture_manager.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_hw_texture_manager.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a1135feb4729cedcfc70935c196fd0448\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> glBind </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>fileTextureObject</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a9b0c9320a802a00a718bcab75ba40550\">MImageFileInfo::MHwTextureType</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>targetType</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8379c23d2cc542a5a3527cb90645c61c\">MImageFileInfo::MImageType</a>&#160;</td>\n\
          <td class=\"paramname\"><em>imageType</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8379c23d2cc542a5a3527cb90645c61ca8d9d0dddd2b1ba38521a5fa4776b62d2\">MImageFileInfo::kImageTypeUnknown</a></code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Bind the contents of a file texture node to the currently active OpenGL texture unit. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">fileTextureObject</td><td>the file texture node to bind </td></tr>\n\
    <tr><td class=\"paramdir\">[in,out]</td><td class=\"paramname\">targetType</td><td>the target type of the texture (e.g. 2D, cube map, etc). If the initial value of this argument is anything other than kHwTextureUnknown, this parameter acts as an input to specify the type you require, and the call will fail if the texture can not be bound to this type. If the initial value of this argument is kHwTextureUnknown, this parameter acts as a return value to let you know what type of texture has been bound. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">imageType</td><td>the type of information you are expecting in the texture (e.g. color, normal, etc). If specified, this argument may be used to tune mipmap generation.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a> if the texture cannot be bound, or is incompatible with the specified parameters </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a> otherwise </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_shader_node_8cpp-example.html#a96\">cgFx/cgfxShaderNode.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_shader_8cpp-example.html#a169\">hlslShader/hlslShader.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_open_g_l_viewport_renderer_2_open_g_l_viewport_renderer_8cpp-example.html#a54\">OpenGLViewportRenderer/OpenGLViewportRenderer.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7d6190c34bb8fd8c3d04639a99a02b72\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> glBind </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>fileTextureConnection</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a9b0c9320a802a00a718bcab75ba40550\">MImageFileInfo::MHwTextureType</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>targetType</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8379c23d2cc542a5a3527cb90645c61c\">MImageFileInfo::MImageType</a>&#160;</td>\n\
          <td class=\"paramname\"><em>imageType</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8379c23d2cc542a5a3527cb90645c61ca8d9d0dddd2b1ba38521a5fa4776b62d2\">MImageFileInfo::kImageTypeUnknown</a></code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Bind the contents of a specific file texture node attribute (e.g. </p>\n\
<p>color, alpha) to the currently active OpenGL texture unit. As part of this operation, the texture target will also be enabled (i.e. there is no need to call glEnable( targetType) before or after calling this method).</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">fileTextureConnection</td><td>the file texture node to bind </td></tr>\n\
    <tr><td class=\"paramdir\">[in,out]</td><td class=\"paramname\">targetType</td><td>the target type of the texture (e.g. 2D, cube map, etc). If the initial value of this argument is anything other than kHwTextureUnknown, this parameter acts as an input to specify the type you require, and the call will fail if the texture can not be bound to this type. If the initial value of this argument is kHwTextureUnknown, this parameter acts as a return value to let you know what type of texture has been bound. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">imageType</td><td>the type of information you are expecting in the texture (e.g. color, normal, etc). If specified, this argument may be used to tune mipmap generation.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a> if the texture cannot be bound, or is incompatible with the specified parameters </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a> otherwise </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"abfd129c5e53f17a99f86cf49fbe4348a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> registerTextureFile </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>fileName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">MHwTextureFileHandle &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>hTexture</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Register a named texture file. </p>\n\
<p>Returns a handle to a texture entry in the texture manager. The caller is responsible for calling the associated deregisterTextureFile to avoid leaking memory.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">fileName</td><td>the texture file to register </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">hTexture</td><td>the output handle to a texture entry representing the given file.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a> if the fileName was invalid. </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a> otherwise. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6cf770812e14cb68bc24b8561b97e325\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> deregisterTextureFile </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const MHwTextureFileHandle &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>hTexture</em></td><td>)</td>\n\
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
<p>Deregisters the given handle to a texture entry in the manager. </p>\n\
<p>If there are no other handles to this texture entry, the texture resource will be freed.</p>\n\
<p>This method assumes that a context is already set. Failing to have a valid current context when invoking this method will cause a memory leak.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">hTexture</td><td>the texture handle to release</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a> if the texture handle was invalid. </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a> otherwise </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4fb6fd8c7367bd758ae9c759a93cbe3b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> textureFile </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const MHwTextureFileHandle &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>hTexture</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>fileName</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Return the file name associated with a given texture file handle. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">hTexture</td><td>the texture handle to query </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">fileName</td><td>the output file name</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a> if the texture handle was invalid. </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a> otherwise </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad06b8e4607128f8d0a6eff08406ef1db\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> glBind </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const MHwTextureFileHandle &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>hTexture</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a9b0c9320a802a00a718bcab75ba40550\">MImageFileInfo::MHwTextureType</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>targetType</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8379c23d2cc542a5a3527cb90645c61c\">MImageFileInfo::MImageType</a>&#160;</td>\n\
          <td class=\"paramname\"><em>imageType</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8379c23d2cc542a5a3527cb90645c61ca8d9d0dddd2b1ba38521a5fa4776b62d2\">MImageFileInfo::kImageTypeUnknown</a></code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Bind the contents of a specific file to the currently active OpenGL texture unit. </p>\n\
<p>As part of this operation, the texture target will also be enabled (i.e. there is no need to call glEnable( targetType) before or after calling this method).</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">hTexture</td><td>the texture file handle to load </td></tr>\n\
    <tr><td class=\"paramdir\">[in,out]</td><td class=\"paramname\">targetType</td><td>the target type of the texture (e.g. 2D, cube map, etc). If the initial value of this argument is anything other than kHwTextureUnknown, this parameter acts as an input to specify the type you require, and the call will fail if the texture can not be bound to this type. If the initial value of this argument is kHwTextureUnknown, this parameter acts as a return value to let you know what type of texture has been bound. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">imageType</td><td>the type of information you are expecting in the texture (e.g. color, normal, etc). If specified, this argument may be used to tune mipmap generation.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a> if the texture cannot be bound, or is incompatible with the specified parameters </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a> otherwise </li>\n\
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
<dl class=\"section return\"><dt>Returns</dt><dd>The name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MHwTextureManager.h</li>\n\
<li>MHwTextureManager.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";