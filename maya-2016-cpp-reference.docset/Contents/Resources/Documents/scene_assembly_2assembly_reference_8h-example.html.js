var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>sceneAssembly/assemblyReference.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'scene_assembly_2assembly_reference_8h-example.html\', tocPrefix);\n\
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
            <h1>sceneAssembly/assemblyReference.h</h1>\n\
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
<div class=\"title\">sceneAssembly/assemblyReference.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _assemblyReference_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _assemblyReference_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// AssemblyReference</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Autodesk reference implementation scene assembly reference node.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Assembly references use assembly definitions to provide them with</span></div>\n\
<div class=\"line\"><span class=\"comment\">// their list of representations, and representation attributes.  This</span></div>\n\
<div class=\"line\"><span class=\"comment\">// allows a single assembly definition to be used by many assembly</span></div>\n\
<div class=\"line\"><span class=\"comment\">// reference nodes, with a change in representations in the assembly</span></div>\n\
<div class=\"line\"><span class=\"comment\">// definition being reflected in all assembly references that refer to</span></div>\n\
<div class=\"line\"><span class=\"comment\">// it.  Fundamentally, multiple assembly references of the same</span></div>\n\
<div class=\"line\"><span class=\"comment\">// assembly definition can be thought of logically &quot;instancing&quot; the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// assembly definition multiple times (though this mechanism is </span></div>\n\
<div class=\"line\"><span class=\"comment\">// different from Maya DAG instancing).  See AssemblyDefinition for</span></div>\n\
<div class=\"line\"><span class=\"comment\">// more details.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Assembly references cannot add or remove representations from the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// list given to them by their assembly definition.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// When an assembly definition file path is set onto an assembly reference,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the assembly reference will automatically call its own postLoad() method</span></div>\n\
<div class=\"line\"><span class=\"comment\">// to initialize itself.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;assemblyDefinition.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;assemblyDefinitionFileCache.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a>;</div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>assemblyReferenceInitialRep;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>AssemblyReference : <span class=\"keyword\">public</span> AssemblyDefinition</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">/*----- static member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>* creator();</div>\n\
<div class=\"line\">   <span class=\"keyword\">static</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initialize();</div>\n\
<div class=\"line\">   <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> id;</div>\n\
<div class=\"line\">   <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> typeName;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\">      </div>\n\
<div class=\"line\">   AssemblyReference();</div>\n\
<div class=\"line\">   ~AssemblyReference();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// See base class.  Only getExternalContent is overridden: no need to</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// override setExternalContent as it already does the right thing, which is</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// to assume keys are plug names.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> getExternalContent( <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_external_content_info_table.html\">MExternalContentInfoTable</a>&amp; table ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">   <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> setExternalContent(</div>\n\
<div class=\"line\">      <span class=\"keyword\">const</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html\">MExternalContentLocationTable</a>&amp; table</div>\n\
<div class=\"line\">   );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// Returns failure: can&#39;t create representations through an</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// assembly reference.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> createRepresentation(</div>\n\
<div class=\"line\">      <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; input,</div>\n\
<div class=\"line\">      <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; type,</div>\n\
<div class=\"line\">      <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; representation,</div>\n\
<div class=\"line\">      <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_modifier.html\">MDagModifier</a>*  undoRedo,</div>\n\
<div class=\"line\">      <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>*       status</div>\n\
<div class=\"line\">   );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// Representation creation query for existing assemblies.  Since</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// assembly references cannot create representations, returns an</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// empty array.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">virtual</span> <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> repTypes() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// MPxAssembly overrides.  The representation namespace is stored in</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// our representation namespace attribute.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>   getRepNamespace() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">   <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span>      updateRepNamespace(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; repNamespace);</div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">   <span class=\"comment\">// Returns failure: can&#39;t delete representations through an</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// assembly reference.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>      deleteRepresentation(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; representation);</div>\n\
<div class=\"line\">   <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>      deleteAllRepresentations();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span>         supportsEdits() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">/*----- types and enumerations ----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"keyword\">typedef</span> AssemblyDefinition BaseNode;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\">      </div>\n\
<div class=\"line\">   <span class=\"comment\">// Listen to writes to our definition file attribute.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> setInternalValueInContext(</div>\n\
<div class=\"line\">      <span class=\"keyword\">const</span> <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <span class=\"keyword\">const</span> <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a>&amp; dataHandle, <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_d_g_context.html\">MDGContext</a>&amp; ctx);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// Invoked when an assembly reference node is duplicated. </span></div>\n\
<div class=\"line\">   <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> copyInternalData(<a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a>* srcNode);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// Called to perform any processing before the assembly is saved.</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// The beforeSave() in this class saves the state of the active </span></div>\n\
<div class=\"line\">   <span class=\"comment\">// representations for all subassemblies in an attribute on the </span></div>\n\
<div class=\"line\">   <span class=\"comment\">// assembly node (these will be read back and used as the initial </span></div>\n\
<div class=\"line\">   <span class=\"comment\">// representation when the assembly is next loaded)</span></div>\n\
<div class=\"line\">   <span class=\"keywordtype\">void</span> beforeSave();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// Called to initialize node with file path of assembly definition file.</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// The postLoad() initialization in this class does the following:</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// 1) Clear the existing representation list of the assembly reference.</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// 2) Import the assembly definition file as a member of the assembly</span></div>\n\
<div class=\"line\">   <span class=\"comment\">//    reference, and look for an assembly definition inside it.  If there</span></div>\n\
<div class=\"line\">   <span class=\"comment\">//    is none, or more than one, an error is reported.</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// 3) Copy the list of representations from the assembly definition</span></div>\n\
<div class=\"line\">   <span class=\"comment\">//    node to the assembly reference.</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// 4) Delete the assembly definition node.</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// 5) Activate the initial representation</span></div>\n\
<div class=\"line\">   <span class=\"keywordtype\">void</span> postLoad();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// Called on top level assemblies, to determine the initial representation </span></div>\n\
<div class=\"line\">   <span class=\"comment\">// for the assembly specified</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>      getInitialRep(<span class=\"keyword\">const</span> <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;assembly, <span class=\"keywordtype\">bool</span>&amp; hasInitialRep, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>* status = NULL) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// Return the name of the default icon for the node.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>      getDefaultIcon() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// Return the name of the definition file for this assembly reference.</span></div>\n\
<div class=\"line\">   <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> getDefinitionFile() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// Error handler when assembly definition error occurs.  Display</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// the error string corresponding to the argument id, and clear the</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// container.</span></div>\n\
<div class=\"line\">   <span class=\"keywordtype\">void</span> definitionError(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a>&amp; <span class=\"keywordtype\">id</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// Prohibited and unimplemented.</span></div>\n\
<div class=\"line\">   AssemblyReference(<span class=\"keyword\">const</span> AssemblyReference&amp; obj);</div>\n\
<div class=\"line\">   <span class=\"keyword\">const</span> AssemblyReference&amp; operator=(<span class=\"keyword\">const</span> AssemblyReference&amp; obj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">/*----- static data members -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// File path to assembly definition file.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> aDefnFile;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// String attribute for the assembly&#39;s representation namespace.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> aRepNamespace;</div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">      <span class=\"comment\">// Array of compound attributes describing the representations.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> aRepresentations;</div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">   <span class=\"comment\">// Representation name.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> aRepName;</div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">   <span class=\"comment\">// String attribute for the representation label.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> aRepLabel;</div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">   <span class=\"comment\">// String attribute for the representation type.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> aRepType;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// String attribute for the representation data.</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> aRepData;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// String attribute for the assembly&#39;s initial representation configuration</span></div>\n\
<div class=\"line\">   <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> aInitialRep;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">/*----- data members -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// Definition file transiently set in setInternalValueInContext().</span></div>\n\
<div class=\"line\">   <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>           fDefnFile;</div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">   <span class=\"comment\">// Use the definition file from the plug attribute if true, otherwise</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// use definition file from fDefnFile. </span></div>\n\
<div class=\"line\">   <span class=\"keywordtype\">bool</span>              fUseDefnFileAttrib;    </div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">   <span class=\"comment\">// Pointer to an entry in the assembly definition file cache. This</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// keeps the entry alive in case another assembly reference node</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// refers to the same definition file.</span></div>\n\
<div class=\"line\">   AssemblyDefinitionFileCache::EntryPtr fDefnFileCacheEntry;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// Initial representation information, transiently set in postLoad</span></div>\n\
<div class=\"line\">   assemblyReferenceInitialRep *fInitialRep;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Used to tell if we&#39;re in the process of updating the rep namespace.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Used to distinguish between cases where the NS change was initiated</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// by Maya or via the NS editor (so fUpdatingRepNamespace == true)</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// and when the repNamespace attribute was edited directly </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// (fUpdatingRepNamespace == false).</span></div>\n\
<div class=\"line\">   <span class=\"keywordtype\">bool</span>             fUpdatingRepNamespace;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";