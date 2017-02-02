var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MDrawRequestQueue Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_draw_request_queue.html\', tocPrefix);\n\
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
            <h1>MDrawRequestQueue Class Reference</h1>\n\
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
<div class=\"title\">MDrawRequestQueue Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_u_i.html\">OpenMayaUI - API module for user interface</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Shapes_Drawing_and_refresh.htm\">Shapes &gt; Drawing and refresh</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_draw_request_queue.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_draw_request_queue.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MDrawRequestQueue.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p><b>This method is obsolete. </b></p>\n\
<dl class=\"deprecated\"><dt><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/deprecated.html#_deprecated000043\">Deprecated:</a></b></dt><dd>Use <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\" title=\"A single renderable entity. \">MHWRender::MRenderItem</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html\" title=\"Base for user-defined classes to prepare geometry for drawing. \">MHWRender::MPxGeometryOverride</a> instead for Viewport 2.0 support.</dd></dl>\n\
<p>This class defines a simple interface for a collection of <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\" title=\"This method is obsolete. \">MDrawRequest</a> objects.</p>\n\
<p>An <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request_queue.html\" title=\"This method is obsolete. \">MDrawRequestQueue</a> object is passed to the getDrawRequests method of a user defined shape\'s UI class (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape_u_i.html\" title=\"drawing and selection for user defined shapes \">MPxSurfaceShapeUI</a>). This queue keeps track of all the things that need to get draw when a refresh of the view occurs.</p>\n\
<p>Maya will call the getDrawRequest methods of all the visible DAG objects before a refresh happens. Then as the refresh happens, each draw request will be processed and the corresponding draw method for each DAG object will get called. For user defined shapes <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape_u_i.html#adb2bed7a0e37f8760ff6e48bce677443\" title=\"This method is obsolete. \">MPxSurfaceShapeUI::draw</a> will get called. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_shape_u_i_8cpp-example.html#_a1\">apiMeshShape/apiMeshShapeUI.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_shape_u_i_8h-example.html#_a3\">apiMeshShape/apiMeshShapeUI.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_simple_shape_2api_simple_shape_u_i_8cpp-example.html#_a1\">apiSimpleShape/apiSimpleShapeUI.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_simple_shape_2api_simple_shape_u_i_8h-example.html#_a3\">apiSimpleShape/apiSimpleShapeUI.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_shape_node_8cpp-example.html#_a84\">gpuCache/gpuCacheShapeNode.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_shape_node_8h-example.html#_a20\">gpuCache/gpuCacheShapeNode.h</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/quadric_shape_2quadric_shape_8cpp-example.html#_a17\">quadricShape/quadricShape.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ad7cb553e786c37adf658a9e1b69d7d33\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ad7cb553e786c37adf658a9e1b69d7d33\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request_queue.html#ad7cb553e786c37adf658a9e1b69d7d33\">MDrawRequestQueue</a> ()</td></tr>\n\
<tr class=\"memdesc:ad7cb553e786c37adf658a9e1b69d7d33\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor. <br></td></tr>\n\
<tr class=\"separator:ad7cb553e786c37adf658a9e1b69d7d33\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a824470facbadeac064e5ade997bf51e6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a824470facbadeac064e5ade997bf51e6\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request_queue.html#a824470facbadeac064e5ade997bf51e6\">~MDrawRequestQueue</a> ()</td></tr>\n\
<tr class=\"memdesc:a824470facbadeac064e5ade997bf51e6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a824470facbadeac064e5ade997bf51e6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a479432127ee77145cc19d6a2d1590821\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request_queue.html#a479432127ee77145cc19d6a2d1590821\">isEmpty</a> () const </td></tr>\n\
<tr class=\"memdesc:a479432127ee77145cc19d6a2d1590821\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns true if the queu is empty.  <a href=\"class_m_draw_request_queue.html#a479432127ee77145cc19d6a2d1590821\">More...</a><br></td></tr>\n\
<tr class=\"separator:a479432127ee77145cc19d6a2d1590821\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a94a649d06791f74a76864a980e41ed63\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request_queue.html#a94a649d06791f74a76864a980e41ed63\">add</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:a94a649d06791f74a76864a980e41ed63\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Adds a draw request to the draw queue.  <a href=\"class_m_draw_request_queue.html#a94a649d06791f74a76864a980e41ed63\">More...</a><br></td></tr>\n\
<tr class=\"separator:a94a649d06791f74a76864a980e41ed63\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae5a4da57d8ceea6c2602b16f8e0066d5\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request_queue.html#ae5a4da57d8ceea6c2602b16f8e0066d5\">remove</a> ()</td></tr>\n\
<tr class=\"memdesc:ae5a4da57d8ceea6c2602b16f8e0066d5\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Removes a draw request from the draw queue.  <a href=\"class_m_draw_request_queue.html#ae5a4da57d8ceea6c2602b16f8e0066d5\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae5a4da57d8ceea6c2602b16f8e0066d5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5e030da3275cae22439088e2d0f359ae\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a5e030da3275cae22439088e2d0f359ae\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request_queue.html#a5e030da3275cae22439088e2d0f359ae\">MDrawRequestQueue</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request_queue.html\">MDrawRequestQueue</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:a5e030da3275cae22439088e2d0f359ae\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy Constructor. <br></td></tr>\n\
<tr class=\"separator:a5e030da3275cae22439088e2d0f359ae\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7cbde921a777d059c006e77a84462e10\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a7cbde921a777d059c006e77a84462e10\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request_queue.html\">MDrawRequestQueue</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request_queue.html#a7cbde921a777d059c006e77a84462e10\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request_queue.html\">MDrawRequestQueue</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:a7cbde921a777d059c006e77a84462e10\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Assignment operator. <br></td></tr>\n\
<tr class=\"separator:a7cbde921a777d059c006e77a84462e10\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request_queue.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_draw_request_queue.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a479432127ee77145cc19d6a2d1590821\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool isEmpty </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns true if the queu is empty. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>true</b> the draw queue is empty </li>\n\
<li><b>false</b> the draw queue is not empty </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a94a649d06791f74a76864a980e41ed63\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void add </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>request</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Adds a draw request to the draw queue. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">request</td><td>the draw request to add </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_shape_u_i_8cpp-example.html#a20\">apiMeshShape/apiMeshShapeUI.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_simple_shape_2api_simple_shape_u_i_8cpp-example.html#a19\">apiSimpleShape/apiSimpleShapeUI.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_shape_node_8cpp-example.html#a98\">gpuCache/gpuCacheShapeNode.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/quadric_shape_2quadric_shape_8cpp-example.html#a48\">quadricShape/quadricShape.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae5a4da57d8ceea6c2602b16f8e0066d5\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a> remove </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Removes a draw request from the draw queue. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The draw request that was removed </dd></dl>\n\
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
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MDrawRequestQueue.h</li>\n\
<li>MDrawRequestQueue.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";