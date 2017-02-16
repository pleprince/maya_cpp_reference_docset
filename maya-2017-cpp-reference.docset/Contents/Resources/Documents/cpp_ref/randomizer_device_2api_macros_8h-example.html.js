var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>randomizerDevice/api_macros.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'randomizer_device_2api_macros_8h-example.html\', tocPrefix);\n\
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
            <h1>randomizerDevice/api_macros.h</h1>\n\
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
<div class=\"title\">randomizerDevice/api_macros.h</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// api_macros.h</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    Convenience macros for error checking and attribute creation,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Error checking</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    MCHECKERROR       - check the status and print the given error message</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    MCHECKERRORNORET  - same as above but does not return</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MCHECKERROR(STAT,MSG)       \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    if ( MS::kSuccess != STAT ) {   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        cerr &lt;&lt; MSG &lt;&lt; endl;        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">            return MS::kFailure;    \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MCHECKERRORNORET(STAT,MSG)  \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    if ( MS::kSuccess != STAT ) {   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        cerr &lt;&lt; MSG &lt;&lt; endl;        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Attribute creation</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//       MAKE_TYPED_ATTR   - creates and adds a typed attribute</span></div>\n\
<div class=\"line\"><span class=\"comment\">//       MAKE_NUMERIC_ATTR - creates and adds a numeric attribute</span></div>\n\
<div class=\"line\"><span class=\"comment\">//       ADD_ATTRIBUTE     - adds the given attribute</span></div>\n\
<div class=\"line\"><span class=\"comment\">//       ATTRIBUTE_AFFECTS - calls attributeAffects</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MAKE_TYPED_ATTR( NAME, LONGNAME, SHORTNAME, TYPE, DEFAULT )         \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">                                                                            \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    MStatus NAME##_stat;                                                    \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    MFnTypedAttribute NAME##_fn;                                            \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    NAME = NAME##_fn.create( LONGNAME, SHORTNAME, TYPE, DEFAULT );          \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    NAME##_fn.setHidden( true );                                            \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    NAME##_stat = addAttribute( NAME );                                     \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    MCHECKERROR(NAME##_stat, &quot;addAttribute error&quot;);</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MAKE_NUMERIC_ATTR( NAME, LONGNAME, SHORTNAME, TYPE, DEFAULT,        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">                            ARRAY, BUILDER, KEYABLE )                       \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">                                                                            \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    MStatus NAME##_stat;                                                    \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    MFnNumericAttribute NAME##_fn;                                          \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    NAME = NAME##_fn.create( LONGNAME, SHORTNAME, TYPE, DEFAULT );          \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    MCHECKERROR(NAME##_stat, &quot;numeric attr create error&quot;);                  \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    NAME##_fn.setArray( ARRAY );                                            \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    NAME##_fn.setUsesArrayDataBuilder( BUILDER );                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    NAME##_fn.setHidden( ARRAY );                                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    NAME##_fn.setKeyable( KEYABLE );                                        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    NAME##_stat = addAttribute( NAME );                                     \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    MCHECKERROR(NAME##_stat, &quot;addAttribute error&quot;);</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define ADD_ATTRIBUTE( ATTR )                                               \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    MStatus ATTR##_stat;                                                    \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    ATTR##_stat = addAttribute( ATTR );                                     \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    MCHECKERROR( ATTR##_stat, &quot;addAttribute: ATTR&quot; )</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define ATTRIBUTE_AFFECTS( IN, OUT )                                        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    MStatus IN##OUT##_stat;                                                 \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    IN##OUT##_stat = attributeAffects( IN, OUT );                           \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    MCHECKERROR(IN##OUT##_stat,&quot;attributeAffects:&quot; #IN &quot;-&gt;&quot; #OUT);</span></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";