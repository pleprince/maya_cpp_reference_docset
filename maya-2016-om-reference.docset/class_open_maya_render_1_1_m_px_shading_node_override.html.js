var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>OpenMayaRender.MPxShadingNodeOverride Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_render_1_1_m_px_shading_node_override.html\', tocPrefix);\n\
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
            <h1>OpenMayaRender.MPxShadingNodeOverride Class Reference</h1>\n\
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
<div class=\"title\">OpenMayaRender.MPxShadingNodeOverride Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-9DBD7E49-7A17-4CEB-89AF-A3B509AD91E2.htm\">What\'s New / What\'s Changed? &gt; Autodesk Maya 2014</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Writing_a_Hardware_Shading_Node_Hardware_Shading_node_plugin_examples.htm\">Writing a Hardware Shading Node &gt; Hardware shading node plug-in examples</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-9496C634-9C18-49D4-A18C-D16600F73848.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Scene Overrides</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-24BAA64A-DAEA-43DB-8FF0-5625F371AE67.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Framework Classes</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-7E935B18-FFBB-4DD3-82EA-A2175CF7795C.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Transition Guide</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-9A5432D0-FA89-4E64-8277-22DC81680B20.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Developer Kit Samples</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-875A58DF-3075-4836-991E-4482B25AEBDB.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Shader Instances</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-585F5656-4069-4D82-B9BB-3D1AB2D0DFE6.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Plug-in Entry Points &gt; Shading Node Overrides</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_render_1_1_m_px_shading_node_override.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Base class for user defined shading node overrides.</pre> </div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMayaRender.MPxShadingNodeOverride:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_render_1_1_m_px_shading_node_override.png\" usemap=\"#OpenMayaRender.MPxShadingNodeOverride_map\" alt=\"\">\n\
  <map id=\"OpenMayaRender.MPxShadingNodeOverride_map\" name=\"OpenMayaRender.MPxShadingNodeOverride_map\">\n\
<area href=\"class_open_maya_render_1_1_m_px_surface_shading_node_override.html\" alt=\"OpenMayaRender.MPxSurfaceShadingNodeOverride\" shape=\"rect\" coords=\"0,112,317,136\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a7a2c7e045d42630cea6536c64d7b3216\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#a7a2c7e045d42630cea6536c64d7b3216\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:a7a2c7e045d42630cea6536c64d7b3216\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af8c31f4bc2d5783f892e631f26a8f050\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#af8c31f4bc2d5783f892e631f26a8f050\">allowConnections</a> ()</td></tr>\n\
<tr class=\"separator:af8c31f4bc2d5783f892e631f26a8f050\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2b5c789f35707c13da958eac40e28085\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#a2b5c789f35707c13da958eac40e28085\">fragmentName</a> ()</td></tr>\n\
<tr class=\"separator:a2b5c789f35707c13da958eac40e28085\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aef88a1b1231f165be36c1e70b913498a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#aef88a1b1231f165be36c1e70b913498a\">getCustomMappings</a> ()</td></tr>\n\
<tr class=\"separator:aef88a1b1231f165be36c1e70b913498a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af7445d9c09e48ba06fa0ddc322059633\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#af7445d9c09e48ba06fa0ddc322059633\">outputForConnection</a> ()</td></tr>\n\
<tr class=\"separator:af7445d9c09e48ba06fa0ddc322059633\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acd56771ec55c901f4b53b8e07e3819b5\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#acd56771ec55c901f4b53b8e07e3819b5\">supportedDrawAPIs</a> ()</td></tr>\n\
<tr class=\"separator:acd56771ec55c901f4b53b8e07e3819b5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a63cf7820523d3891024e3dc3b6679253\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#a63cf7820523d3891024e3dc3b6679253\">updateDG</a> ()</td></tr>\n\
<tr class=\"separator:a63cf7820523d3891024e3dc3b6679253\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afda5eda704a7c3d62246c3833102d98b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#afda5eda704a7c3d62246c3833102d98b\">updateShader</a> ()</td></tr>\n\
<tr class=\"separator:afda5eda704a7c3d62246c3833102d98b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a34c22dd505b0c1a1dafa6457e2549015\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_render_1_1_m_px_shading_node_override.html#a34c22dd505b0c1a1dafa6457e2549015\">valueChangeRequiresFragmentRebuild</a> ()</td></tr>\n\
<tr class=\"separator:a34c22dd505b0c1a1dafa6457e2549015\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a7a2c7e045d42630cea6536c64d7b3216\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MPxShadingNodeOverride.__init__ </td>\n\
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
<a class=\"anchor\" id=\"af8c31f4bc2d5783f892e631f26a8f050\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MPxShadingNodeOverride.allowConnections </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">allowConnections() -&gt; bool\n\
\n\
Returns True if connections should be allowed to parameters of the fragment that do not have custom mappings that\n\
specifically prevent connections.\n\
\n\
An override may prevent Maya from connecting fragments to specific parameters of the fragment for this\n\
override by providing custom attribute parameter mappings. It is also possible to prevent connections to all\n\
parameters on the fragment by overriding this method to return False.\n\
In that case, the fragment for this override will become a final fragment, and nothing will be connected to it.\n\
This is equivalent to creating an attribute parameter mapping for every parameter on the fragment and setting\n\
the allowConnection flag on each mapping to False.\n\
\n\
This method is called once only, just after creation of the override.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2b5c789f35707c13da958eac40e28085\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MPxShadingNodeOverride.fragmentName </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">fragmentName() -&gt; string\n\
\n\
Override this method to return the name of the fragment or fragment graph to use for rendering the shading node associated with this override. This fragment will be automatically connected to the other fragments for the other nodes in the shading network to produce a complete shading effect.\n\
\n\
A fragment with the returned name must already exist in the fragment manager for rendering to succeed. If the fragment does not exist, the associated node will not contribute to shading.\n\
\n\
The parameter values for the fragment will be automatically populated from the attribute values on the node wherever the name and type of a parameter on the fragment match the name and type of an attribute on the node.\n\
\n\
The fragment will only be connected to the other fragments in the graph if the output parameter of the fragment has the same name as the output attribute of the node that is connected to the rest of the shading network. To support multiple output attributes of a node, the fragment should return a \"struct\" type parameter. The names of the members of the struct should match the names of the output attributes for which support is desired. The fragment must compute all output attributes on every execution.\n\
\n\
Returns the name of the fragment to use</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aef88a1b1231f165be36c1e70b913498a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MPxShadingNodeOverride.getCustomMappings </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">getCustomMappings(mappings) -&gt; self\n\
\n\
Maya will automatically match parameters on the shade fragment specified by this override with attributes on the\n\
associated Maya node as long as the names and types match. In order to specify custom attribute parameter mappings,\n\
override this method.\n\
\n\
This method will be called before Maya performs its automatic matching so it can be used to prevent that process by\n\
defining mappings for parameters that would normally be mapped automatically.\n\
Such mappings will take precedence over automatic mappings.\n\
\n\
It is an error to provide more than one mapping per fragment parameter.\n\
Only the first such mapping will be used.\n\
\n\
The same attribute may be used for multiple parameters.\n\
\n\
By default, this method defines no custom mappings.\n\
\n\
* mappings [OUT] (MAttributeParameterMappingList) - An attribute parameter mapping list; fill with any desired custom mappings.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af7445d9c09e48ba06fa0ddc322059633\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MPxShadingNodeOverride.outputForConnection </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">outputForConnection(sourcePlug, destinationPlug) -&gt; string\n\
\n\
Returns the name of an output parameter on the fragment for the override.\n\
\n\
When Maya attempts to connect the fragment for this override to the fragment for another node in the shading network,\n\
it will call this method to get the name of the output on the fragment to use for the connection.\n\
By default, this will simply return the name of the output attribute on the node for the override that is driving the connection.\n\
Override this method to specify that a different output of the fragment should be used instead.\n\
This method may also be overridden to get information about how and where the fragment is being connected.\n\
\n\
If the output of the fragment is of \"struct\" type, this method should return the name of one of the members of the struct.\n\
\n\
This method is called after getCustomMappings().\n\
\n\
If the name returned does not match the name of any output parameter (or struct member in the case of struct output) on the\n\
fragment for this override then the fragment will not be connected to the overall shading effect.\n\
\n\
* sourcePlug (MPlug) - The plug on the node for this override which is the source of the connection.\n\
           By default the name of the attribute for this plug is returned.\n\
* destinationPlug (MPlug) - The plug on the node which is the destination of the connection.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acd56771ec55c901f4b53b8e07e3819b5\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MPxShadingNodeOverride.supportedDrawAPIs </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">supportedDrawAPIs() -&gt; DrawAPI\n\
\n\
Returns the draw API supported by this override.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a63cf7820523d3891024e3dc3b6679253\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MPxShadingNodeOverride.updateDG </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">updateDG() -&gt; self\n\
\n\
This method is called every time Maya needs to update the parameter values on the final shading effect of which the fragment\n\
produced by this override is a part. In this method implementations should query and cache any values needed for setting\n\
parameters on the final shading effect in updateShader().</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afda5eda704a7c3d62246c3833102d98b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MPxShadingNodeOverride.updateShader </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">updateShader(shader, mappings) -&gt; self\n\
\n\
This method is called every time Maya needs to update the parameter values on the final shading effect of which the fragment\n\
produced by this override is a part. Implementations may use the information from the mappings list to set parameter values on\n\
the shader. The list contains all parameter mappings for the override, both automatic and custom. Although it is possible to set\n\
the value for any parameter on the shader it is an error to do so for parameters which are not defined by the fragment for this\n\
override and doing so may result in unpredictable behaviour.\n\
\n\
The default implementation does nothing. Note that values for parameters with valid attribute parameter mappings will be set\n\
automatically. This method need only be overridden if custom behaviour is required.\n\
\n\
For performance, consider caching the resolved parameter names of parameters needing update the first time this method is called.\n\
This will avoid searching the mappings list and then retrieving the resolved name from the mapping on each update. Resolved names\n\
are guaranteed to remain constant until the next time fragmentName() is called. Const pointers to individual mappings may also be\n\
cached in this way and are valid for the same duration.\n\
Do not attempt to cache mappings created in the getCustomMappings() method.\n\
\n\
It is an error to attempt to access the Maya dependency graph from within updateShader().\n\
Any attempt to do so will result in instability. Required data should be retrieved and cached in updateDG().\n\
\n\
* shader (MShaderInstance) - The shader instance.\n\
* mappings (MAttributeParameterMappingList) - The attribute parameter mappings for this override.</pre> \n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a34c22dd505b0c1a1dafa6457e2549015\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMayaRender.MPxShadingNodeOverride.valueChangeRequiresFragmentRebuild </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">valueChangeRequiresFragmentRebuild(plug) -&gt; bool\n\
\n\
Returns True if a change in attribute values should cause a rebuild of the complete shading effect.\n\
\n\
This method will be called by Maya when it detects changes in the attribute values of nodes in the shading network.\n\
If this method returns True, Maya will assume that the change means that a new configuration of the total fragment graph\n\
is necessary and it will trigger a rebuild of the complete shading effect. This will cause fragmentName() to be invoked\n\
again at which point a different fragment name could be returned.\n\
\n\
For example, if a texture node has multiple modes, each implemented with a different fragment, then a change to the active\n\
mode would require the shading effect to be rebuilt in order to switch which fragment is used.\n\
\n\
The plug parameter passed in is Maya\'s best attempt at informing the implementation of what changed. However due to the\n\
nature of the change management system a single source plug cannot always be determined in which case the plug may be NULL.\n\
\n\
The default implementation returns False.\n\
\n\
* plug (MPlug) - The plug that changed, may be None.</pre> \n\
</div>\n\
</div>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";