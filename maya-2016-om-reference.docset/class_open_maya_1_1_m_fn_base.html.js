var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>OpenMaya.MFnBase Class Reference</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_1_1_m_fn_base.html\', tocPrefix);\n\
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
            <h1>OpenMaya.MFnBase Class Reference</h1>\n\
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
<div class=\"title\">OpenMaya.MFnBase Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Selecting_with_the_API_MSelectionList.htm\">Selecting with the API &gt; MSelectionList</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Selecting_with_the_API_setObject_method.htm\">Selecting with the API &gt; setObject() method</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-CC5EDDD2-4331-4CF8-863F-9DDDA90A343D.htm\">Maya Python API &gt; Maya Python Plug-in Learning Path &gt; Command Plug-in Basics &gt; Creating and Manipulating Objects</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Appendices_Appendix_D_Frequently_asked_questions.htm\">Appendices &gt; Appendix C: Frequently asked questions</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_open_maya_1_1_m_fn_base.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><pre class=\"fragment\">Base class for function sets.</pre><hr>\n\
 <p>Base class for function sets. </p>\n\
<p>&#160;</p>\n\
<hr>\n\
 </div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"py_ref/closed.png\" alt=\"+\"> Inheritance diagram for OpenMaya.MFnBase:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"py_ref/class_open_maya_1_1_m_fn_base.png\" usemap=\"#OpenMaya.MFnBase_map\" alt=\"\">\n\
  <map id=\"OpenMaya.MFnBase_map\" name=\"OpenMaya.MFnBase_map\">\n\
<area href=\"class_open_maya_1_1_m_fn_attribute.html\" alt=\"OpenMaya.MFnAttribute\" shape=\"rect\" coords=\"0,112,252,136\">\n\
<area href=\"class_open_maya_1_1_m_fn_component.html\" alt=\"OpenMaya.MFnComponent\" shape=\"rect\" coords=\"524,112,776,136\">\n\
<area href=\"class_open_maya_1_1_m_fn_data.html\" alt=\"OpenMaya.MFnData\" shape=\"rect\" coords=\"1048,112,1300,136\">\n\
<area href=\"class_open_maya_1_1_m_fn_dependency_node.html\" alt=\"OpenMaya.MFnDependencyNode\" shape=\"rect\" coords=\"1572,112,1824,136\">\n\
<area href=\"class_open_maya_1_1_m_fn_plugin.html\" alt=\"OpenMaya.MFnPlugin\" shape=\"rect\" coords=\"1834,112,2086,136\">\n\
<area href=\"class_open_maya_1_1_m_fn_compound_attribute.html\" alt=\"OpenMaya.MFnCompoundAttribute\" shape=\"rect\" coords=\"262,168,514,192\">\n\
<area href=\"class_open_maya_1_1_m_fn_enum_attribute.html\" alt=\"OpenMaya.MFnEnumAttribute\" shape=\"rect\" coords=\"262,224,514,248\">\n\
<area href=\"class_open_maya_1_1_m_fn_generic_attribute.html\" alt=\"OpenMaya.MFnGenericAttribute\" shape=\"rect\" coords=\"262,280,514,304\">\n\
<area href=\"class_open_maya_1_1_m_fn_light_data_attribute.html\" alt=\"OpenMaya.MFnLightDataAttribute\" shape=\"rect\" coords=\"262,336,514,360\">\n\
<area href=\"class_open_maya_1_1_m_fn_matrix_attribute.html\" alt=\"OpenMaya.MFnMatrixAttribute\" shape=\"rect\" coords=\"262,392,514,416\">\n\
<area href=\"class_open_maya_1_1_m_fn_message_attribute.html\" alt=\"OpenMaya.MFnMessageAttribute\" shape=\"rect\" coords=\"262,448,514,472\">\n\
<area href=\"class_open_maya_1_1_m_fn_numeric_attribute.html\" alt=\"OpenMaya.MFnNumericAttribute\" shape=\"rect\" coords=\"262,504,514,528\">\n\
<area href=\"class_open_maya_1_1_m_fn_typed_attribute.html\" alt=\"OpenMaya.MFnTypedAttribute\" shape=\"rect\" coords=\"262,560,514,584\">\n\
<area href=\"class_open_maya_1_1_m_fn_unit_attribute.html\" alt=\"OpenMaya.MFnUnitAttribute\" shape=\"rect\" coords=\"262,616,514,640\">\n\
<area href=\"class_open_maya_1_1_m_fn_double_indexed_component.html\" alt=\"OpenMaya.MFnDoubleIndexedComponent\" shape=\"rect\" coords=\"786,168,1038,192\">\n\
<area href=\"class_open_maya_1_1_m_fn_single_indexed_component.html\" alt=\"OpenMaya.MFnSingleIndexedComponent\" shape=\"rect\" coords=\"786,224,1038,248\">\n\
<area href=\"class_open_maya_1_1_m_fn_triple_indexed_component.html\" alt=\"OpenMaya.MFnTripleIndexedComponent\" shape=\"rect\" coords=\"786,280,1038,304\">\n\
<area href=\"class_open_maya_1_1_m_fn_component_list_data.html\" alt=\"OpenMaya.MFnComponentListData\" shape=\"rect\" coords=\"1310,168,1562,192\">\n\
<area href=\"class_open_maya_1_1_m_fn_double_array_data.html\" alt=\"OpenMaya.MFnDoubleArrayData\" shape=\"rect\" coords=\"1310,224,1562,248\">\n\
<area href=\"class_open_maya_1_1_m_fn_geometry_data.html\" alt=\"OpenMaya.MFnGeometryData\" shape=\"rect\" coords=\"1310,280,1562,304\">\n\
<area href=\"class_open_maya_1_1_m_fn_int_array_data.html\" alt=\"OpenMaya.MFnIntArrayData\" shape=\"rect\" coords=\"1310,336,1562,360\">\n\
<area href=\"class_open_maya_1_1_m_fn_matrix_array_data.html\" alt=\"OpenMaya.MFnMatrixArrayData\" shape=\"rect\" coords=\"1310,392,1562,416\">\n\
<area href=\"class_open_maya_1_1_m_fn_matrix_data.html\" alt=\"OpenMaya.MFnMatrixData\" shape=\"rect\" coords=\"1310,448,1562,472\">\n\
<area href=\"class_open_maya_1_1_m_fn_numeric_data.html\" alt=\"OpenMaya.MFnNumericData\" shape=\"rect\" coords=\"1310,504,1562,528\">\n\
<area href=\"class_open_maya_1_1_m_fn_plugin_data.html\" alt=\"OpenMaya.MFnPluginData\" shape=\"rect\" coords=\"1310,560,1562,584\">\n\
<area href=\"class_open_maya_1_1_m_fn_point_array_data.html\" alt=\"OpenMaya.MFnPointArrayData\" shape=\"rect\" coords=\"1310,616,1562,640\">\n\
<area href=\"class_open_maya_1_1_m_fn_string_array_data.html\" alt=\"OpenMaya.MFnStringArrayData\" shape=\"rect\" coords=\"1310,672,1562,696\">\n\
<area href=\"class_open_maya_1_1_m_fn_string_data.html\" alt=\"OpenMaya.MFnStringData\" shape=\"rect\" coords=\"1310,728,1562,752\">\n\
<area href=\"class_open_maya_1_1_m_fn_u_int64_array_data.html\" alt=\"OpenMaya.MFnUInt64ArrayData\" shape=\"rect\" coords=\"1310,784,1562,808\">\n\
<area href=\"class_open_maya_1_1_m_fn_vector_array_data.html\" alt=\"OpenMaya.MFnVectorArrayData\" shape=\"rect\" coords=\"1310,840,1562,864\">\n\
<area href=\"class_open_maya_1_1_m_fn_dag_node.html\" alt=\"OpenMaya.MFnDagNode\" shape=\"rect\" coords=\"1834,168,2086,192\">\n\
<area href=\"class_open_maya_anim_1_1_m_fn_anim_curve.html\" alt=\"OpenMayaAnim.MFnAnimCurve\" shape=\"rect\" coords=\"1834,224,2086,248\">\n\
<area href=\"class_open_maya_anim_1_1_m_fn_geometry_filter.html\" alt=\"OpenMayaAnim.MFnGeometryFilter\" shape=\"rect\" coords=\"1834,280,2086,304\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aa697f80265a5af3e131282ff458418a0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#aa697f80265a5af3e131282ff458418a0\">__init__</a> ()</td></tr>\n\
<tr class=\"separator:aa697f80265a5af3e131282ff458418a0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a79ca8b86b89ddce2e4c0b67101cdc9d7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#a79ca8b86b89ddce2e4c0b67101cdc9d7\">hasObj</a> ()</td></tr>\n\
<tr class=\"separator:a79ca8b86b89ddce2e4c0b67101cdc9d7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ada417d6cc86134609917ea4671c02596\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#ada417d6cc86134609917ea4671c02596\">object</a> ()</td></tr>\n\
<tr class=\"separator:ada417d6cc86134609917ea4671c02596\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af1795cba5c81a4ee10680210b71630c6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#af1795cba5c81a4ee10680210b71630c6\">setObject</a> ()</td></tr>\n\
<tr class=\"separator:af1795cba5c81a4ee10680210b71630c6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a051592969dc5f1c426f18558794fd54f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"></td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#a051592969dc5f1c426f18558794fd54f\">type</a> ()</td></tr>\n\
<tr class=\"separator:a051592969dc5f1c426f18558794fd54f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"aa697f80265a5af3e131282ff458418a0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MFnBase.__init__ </td>\n\
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
<a class=\"anchor\" id=\"a79ca8b86b89ddce2e4c0b67101cdc9d7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MFnBase.hasObj </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">Returns True if the function set is compatible with the specified Maya object.</pre><table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Signature:</b> </td><td valign=\"top\">hasObj(type)  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Parameters:</b> </td><td valign=\"top\">type - <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn.html\">MFn</a> Type constant  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Returns:</b> </td><td valign=\"top\">bool  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">True if the function set is compatible with the specified <b>type</b> of Maya object.  </td></tr>\n\
</table>\n\
<table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Signature:</b> </td><td valign=\"top\">hasObj(object)  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Parameters:</b> </td><td valign=\"top\">object - <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_object.html\">MObject</a>  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Returns:</b> </td><td valign=\"top\">bool  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">True if the function set is compatible with the specified Maya <b>object</b>.  </td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ada417d6cc86134609917ea4671c02596\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MFnBase.object </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">Returns a reference to the object to which the function set is currently attached, or MObject.kNullObj if none.</pre><table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Signature:</b> </td><td valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#ada417d6cc86134609917ea4671c02596\">object()</a>  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Parameters:</b> </td><td valign=\"top\">&#160;  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Returns:</b> </td><td valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_object.html\">MObject</a>  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">Returns a reference to the object to which the function set is currently attached, or <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_object.html#a2baa477add2b66070b5c71bfff4619f1\">MObject.kNullObj</a> if none.  </td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af1795cba5c81a4ee10680210b71630c6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MFnBase.setObject </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">Attaches the function set to the specified Maya object.</pre><table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Signature:</b> </td><td valign=\"top\">setObject(object)  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Parameters:</b> </td><td valign=\"top\">object - <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_object.html\">MObject</a>  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Returns:</b> </td><td valign=\"top\">Reference to self.  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">Attaches the function set to the specified Maya <b>object</b>.  </td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a051592969dc5f1c426f18558794fd54f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OpenMaya.MFnBase.type </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<pre class=\"fragment\">Returns the type of the function set.</pre><table border=\"0\">\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Signature:</b> </td><td valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#a051592969dc5f1c426f18558794fd54f\">type()</a>  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Parameters:</b> </td><td valign=\"top\">&#160;  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Returns:</b> </td><td valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn.html\">MFn</a> Type constant  </td></tr>\n\
<tr>\n\
<td align=\"right\" valign=\"top\" style=\"padding-right:5px\"><b>Description:</b> </td><td valign=\"top\">Returns the type of the function set.  </td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";