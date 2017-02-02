var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>adsk::Data Namespace Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'namespaceadsk_1_1_data.html\', tocPrefix);\n\
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
            <h1>adsk::Data Namespace Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespace&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers.html\"><span>Namespace&#160;Members</span></a></li>\n\
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
<div class=\"title\">adsk::Data Namespace Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-F0CA7A2C-EE99-4A95-9E5E-C187F000092C.htm\">What\'s New / What\'s Changed? &gt; Extension for Autodesk Maya 2013</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"namespaceadsk_1_1_data.html#namespaces\">Namespaces</a> &#124;\n\
<a href=\"namespaceadsk_1_1_data.html#nested-classes\">Classes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Namespace description</h2>\n\
<div class=\"textblock\"><p>Contains classes related to data management. </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"namespaces\"></a>\n\
Namespaces</h2></td></tr>\n\
<tr class=\"memitem:namespaceadsk_1_1_data_1_1_accessor_maya\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"> &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1_data_1_1_accessor_maya.html\">AccessorMaya</a></td></tr>\n\
<tr class=\"memdesc:namespaceadsk_1_1_data_1_1_accessor_maya\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Utility functions to read metadata from Maya files. <br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\">Accessor</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class used to read and write metadata from/to an existing file.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory.html\">AccessorFactory</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Calls the specified <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\" title=\"Class used to read and write metadata from/to an existing file. \">Accessor</a> type\'s default constructor.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory_base.html\">AccessorFactoryBase</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Base class for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\" title=\"Class used to read and write metadata from/to an existing file. \">Accessor</a> factories.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory_base.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">Associations</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class handling associations between internal and external data.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html\">AssociationsIterator</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class handling iteration over Channels in an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">Associations</a> object.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_iterator.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html\">AssociationsSerializer</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class handling the definition of the format for serialization of <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a>.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html\">Attach</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Helper class to manage attachment of metadata to other class objects.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html\">AttachDirectly</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Helper class to provide a simple implementation the the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html\" title=\"Helper class to manage attachment of metadata to other class objects. \">adsk::Data::Attach</a> interface.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html\">Channel</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class handling a named association of a data array with other data.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel_iterator.html\">ChannelIterator</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class handling iteration over Streams in a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html\" title=\"Class handling a named association of a data array with other data. \">Channel</a> object.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel_iterator.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel_serializer.html\">ChannelSerializer</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class handling the definition of the format for serialization of data Channels.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel_serializer.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.html\">CRTP_IndexType</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This CRTP (Curiously Recurring Template Pattern) class implements some shared methods which all derived classes can use, and for whom the implementations use the same pattern.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_c_r_t_p___index_type.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_handle.html\">Handle</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class handling access to specific data members of a structured type.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_handle.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index.html\">Index</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Lightweight class handling index values.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html\">IndexPair</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index.html\" title=\"Lightweight class handling index values. \">Index</a> type which uses a pair of IndexCount values for the index mapping.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html\">IndexString</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index.html\" title=\"Lightweight class handling index values. \">Index</a> type which uses a String for the index mapping.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html\">IndexType</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Complex index type for referencing metadata.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_type.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_serializer_initializer.html\">SerializerInitializer</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Helper : Instantiate to automatically (de)register a serializaton format Requires that the template parameter class has implemented the registerFormat() and deregisterFormat() methods.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_serializer_initializer.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\">Stream</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class handling a list of generic data.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_iterator.html\">StreamIterator</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class handling iteration over <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">Stream</a> members.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_iterator.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_serializer.html\">StreamSerializer</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class handling the definition of the format for serialization of data streams.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_serializer.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure.html\">Structure</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class handling the definition of the structure of a piece of data.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_iterator.html\">StructureIterator</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Helper class for iterating over structure members.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_iterator.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_iterator_impl.html\">StructureIteratorImpl</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Helper class to contain the implementation-specific information.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_iterator_impl.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer.html\">StructureSerializer</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class handling the definition of the format for serialization of data structures.  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer_debug.html\">StructureSerializerDebug</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class handling the data structure format type \"Debug\".  <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer_debug.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";