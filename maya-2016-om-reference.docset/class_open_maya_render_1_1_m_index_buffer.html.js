var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>OpenMayaRender.MIndexBuffer Class Reference</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"Python\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"py_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(py_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'py_ref/\'; }\n\
function py_ref_initializeToc(forceTrigger) {\n\
    py_ref_adsk_ref_toc.initResizable();\n\
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_render_1_1_m_index_buffer.html\', tocPrefix);\n\
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
	  $(document).ready(py_ref_initializeToc);\n\
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
        var width = py_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { py_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>OpenMayaRender.MIndexBuffer Class Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/namespaces.html\"><span>Modules</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
<div class=\"title\">OpenMayaRender.MIndexBuffer Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-DBDCB848-B0A5-4256-912C-6FCE25D12984.htm\">What\'s New / What\'s Changed? &gt; Autodesk Maya 2015</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-F0CA7A2C-EE99-4A95-9E5E-C187F000092C.htm\">What\'s New / What\'s Changed? &gt; Extension for Autodesk Maya 2013</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-C16CA3BB-5BCA-473F-9025-8676AB3EF914.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Data Classes</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-148A1EF1-B350-416F-A800-C47DA90D1369.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Geometric Data (MGeometry)</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-99836B89-9F16-4AA1-AB47-92A45F3CEEA2.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Plug-in Entry Points &gt; Geometry Overrides</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-0F59EAA2-849E-4BAB-843B-6262B256D80F.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Customizing Geometric Data for Shaders</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_render_1_1_m_index_buffer.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Index buffer for use with MGeometry.</pre> </div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMayaRender.MIndexBuffer:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_render_1_1_m_index_buffer.png\" usemap=\"#OpenMayaRender.MIndexBuffer_map\" alt=\"\">\n\
  <map id=\"OpenMayaRender.MIndexBuffer_map\" name=\"OpenMayaRender.MIndexBuffer_map\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a642f53c968b63842f82a6623255c8332\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#a642f53c968b63842f82a6623255c8332\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a642f53c968b63842f82a6623255c8332\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acc175f9711ac98b91ccffc6f68b32aa4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#acc175f9711ac98b91ccffc6f68b32aa4\">acquire</a> ()</td></tr>\n\
<tr class=\"separator:acc175f9711ac98b91ccffc6f68b32aa4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad93c948c6d47bba6c30be825083bcdfd\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#ad93c948c6d47bba6c30be825083bcdfd\">commit</a> ()</td></tr>\n\
<tr class=\"separator:ad93c948c6d47bba6c30be825083bcdfd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6cbe464416eb3b97c32b6080f1670dc0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#a6cbe464416eb3b97c32b6080f1670dc0\">dataType</a> ()</td></tr>\n\
<tr class=\"separator:a6cbe464416eb3b97c32b6080f1670dc0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a80dc731c0ffb5f9fa06027b0d55f4ef6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#a80dc731c0ffb5f9fa06027b0d55f4ef6\">hasCustomResourceHandle</a> ()</td></tr>\n\
<tr class=\"separator:a80dc731c0ffb5f9fa06027b0d55f4ef6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a48ebccde7738ad2c3e1562ab4da88cbf\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#a48ebccde7738ad2c3e1562ab4da88cbf\">map</a> ()</td></tr>\n\
<tr class=\"separator:a48ebccde7738ad2c3e1562ab4da88cbf\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aeb3ee6cbbdadb4d5bc79ffb615dfa373\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#aeb3ee6cbbdadb4d5bc79ffb615dfa373\">resourceHandle</a> ()</td></tr>\n\
<tr class=\"separator:aeb3ee6cbbdadb4d5bc79ffb615dfa373\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaabd4e6d446098f32c4828ccd826f5a3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#aaabd4e6d446098f32c4828ccd826f5a3\">setResourceHandle</a> ()</td></tr>\n\
<tr class=\"separator:aaabd4e6d446098f32c4828ccd826f5a3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae367b712b17bee34c0a072eef618adda\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#ae367b712b17bee34c0a072eef618adda\">size</a> ()</td></tr>\n\
<tr class=\"separator:ae367b712b17bee34c0a072eef618adda\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ace80a1a1103f5ac8622f842ec4901d6e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#ace80a1a1103f5ac8622f842ec4901d6e\">unload</a> ()</td></tr>\n\
<tr class=\"separator:ace80a1a1103f5ac8622f842ec4901d6e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a603bc4e980a938eace9d9bc3d26fa71e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#a603bc4e980a938eace9d9bc3d26fa71e\">unmap</a> ()</td></tr>\n\
<tr class=\"separator:a603bc4e980a938eace9d9bc3d26fa71e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a11014a4bbdd7d20f9582e7545604a615\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_index_buffer.html#a11014a4bbdd7d20f9582e7545604a615\">update</a> ()</td></tr>\n\
<tr class=\"separator:a11014a4bbdd7d20f9582e7545604a615\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a642f53c968b63842f82a6623255c8332\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MIndexBuffer.__init__ </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">x.__init__(...) initializes x; see help(type(x)) for signature</pre> \n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"acc175f9711ac98b91ccffc6f68b32aa4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MIndexBuffer.acquire </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">acquire(size, writeOnly) -&gt; long\n\
\n\
Get a pointer to memory for the buffer.\n\
\n\
* size (int) - The size of the buffer to acquire.\n\
* writeOnly (bool) - Specified if the returned memory should be uninitialized or filled with actual buffer content.\n\
         When the current buffer content is not needed, it is preferable to set the writeOnly flag to true for better performance.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad93c948c6d47bba6c30be825083bcdfd\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MIndexBuffer.commit </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">commit(long) -&gt; self\n\
\n\
Commit the data stored in the memory given by acquire() to the buffer.\n\
If this method is not called, the acquired buffer will not be used in drawing.\n\
The pointer must be the same pointer returned from acquire().</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6cbe464416eb3b97c32b6080f1670dc0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MIndexBuffer.dataType </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">dataType() -&gt; int\n\
\n\
Get the data type of the buffer.\n\
See MGeometry.dataTypeString() for a list of valid data types.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a80dc731c0ffb5f9fa06027b0d55f4ef6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MIndexBuffer.hasCustomResourceHandle </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">hasCustomResourceHandle() -&gt; bool\n\
\n\
Returns true if this index buffer is using a custom resource handle set\n\
by the plugin using MIndexBuffer.setResourceHandle(long, int).</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a48ebccde7738ad2c3e1562ab4da88cbf\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MIndexBuffer.map </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">map() -&gt; long\n\
\n\
Get a read-only pointer to the existing content of the buffer.\n\
Writing new content in this memory block is not supported and can lead to unexpected behavior.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aeb3ee6cbbdadb4d5bc79ffb615dfa373\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MIndexBuffer.resourceHandle </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">resourceHandle() -&gt; long\n\
\n\
Returns a long containing a C++ \'float\' pointer which points to the graphics device dependent handle to the vertex indexing data.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aaabd4e6d446098f32c4828ccd826f5a3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MIndexBuffer.setResourceHandle </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">setResourceHandle(long, int) -&gt; selfset the graphics-device-dependent hardware buffer resource handle.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae367b712b17bee34c0a072eef618adda\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MIndexBuffer.size </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">size() -&gt; int\n\
\n\
Get the size of the buffer in units of dataType(). Returns 0 if unallocated.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ace80a1a1103f5ac8622f842ec4901d6e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MIndexBuffer.unload </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">unload() -&gt; self\n\
\n\
If the buffer is resident in GPU memory, calling this method will move it to system memory and free the GPU memory.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a603bc4e980a938eace9d9bc3d26fa71e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MIndexBuffer.unmap </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">unmap() -&gt; self\n\
\n\
Release the data exposed by map(). If this method is not called, the buffer will not be recycled.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a11014a4bbdd7d20f9582e7545604a615\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MIndexBuffer.update </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">update(buffer, destOffset, numIndices, truncateIfSmaller) -&gt; self\n\
\n\
Set a portion (or all) of the contents of the MIndexBuffer using the data in the provided software buffer.\n\
The internal hardware buffer will be allocated or reallocated to fit if required, according to the vertex size from the descriptor.\n\
\n\
* buffer (long) - The input data buffer, starting with the first vertex to copy.\n\
* destOffset (int) - The offset (in indices) from the beginning of the buffer to start writing to.\n\
* numIndices (int) - The number of indices to copy.\n\
* truncateIfSmaller (bool) - If true and offset+numVerts is less than the pre-existing size of the buffer,\n\
                 then the buffer contents will be truncated to the new size. Truncating the buffer size\n\
                 will not cause a reallocation and will not lose data before the destOffset.</pre> \n\
</div>\n\
</div>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";