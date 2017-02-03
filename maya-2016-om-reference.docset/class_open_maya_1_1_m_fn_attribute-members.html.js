var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Member List</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_1_1_m_fn_attribute-members.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>Member List</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">OpenMaya.MFnAttribute Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#ae7e24c2c9620d2afb17bb0cec65093cd\">__init__</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#aa9bd87f3132ab65f8b409225354c8f13\">accepts</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a0fd7d896dd9430539027ac6ebec9b31e\">addToCategory</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a131d275bfa6b1987d9946a555ac8ce49\">affectsAppearance</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a823b0eb88218533e47a836b5f334cf42\">affectsWorldSpace</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a824cfeeaeaa3b7f2dd4332ada992e1db\">array</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#aca98c441e4c49f52b5a77d0e98cba79e\">cached</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a5d602a291fd22d884bd56e554fbe2291\">channelBox</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#aca27048c0bd4dcbad86993630ccf592f\">connectable</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a592913e9a1cb56ce3f648c7e4e306d2d\">disconnectBehavior</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a5f5e05a837b91c7bdf65b6fe32f3e496\">dynamic</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#af7837b9a1c0630dd6f51155333415c3d\">extension</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#ac7be56ff36cc65287984c68f9b237940\">getAddAttrCmd</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#aefb3cc0d2d18841a3c51e098b9718f09\">hasCategory</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#a79ca8b86b89ddce2e4c0b67101cdc9d7\">hasObj</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html\">OpenMaya.MFnBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#ac62847e8f885c4f2c032b3ba08080a68\">hidden</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a4af92f5caa3ad1f0735241ed47e24057\">indeterminant</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a6e4f8bcc8b69ff0bd326386553d6a8e8\">indexMatters</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#aff6333df3592b0d2c498bd7491c59822\">internal</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a82618fae341abd0723754247f4e40cba\">kDelete</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a426fdd97a3195a9207111980f950a610\">keyable</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a0fd5da3d30fd089db53e33c5c451b8d8\">kNothing</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#aa06461f4b68f5a9c2bfad22516429ba1\">kReset</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#aa243bf623a8d84cf9aab9ff5c66eb83f\">name</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#ada417d6cc86134609917ea4671c02596\">object</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html\">OpenMaya.MFnBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a4474043e685711da11c1a5311f897a07\">parent</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a30b6bf689842a1bad6564c7f4c7648ca\">readable</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#ae28f4fb52a0683afe8c0865e3af687f8\">renderSource</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#aefa79efc4610723d5623e0ee7e90632c\">setNiceNameOverride</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#af1795cba5c81a4ee10680210b71630c6\">setObject</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html\">OpenMaya.MFnBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#ad08317a0b4cbd9f7a2426d77a2c93b8b\">shortName</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a5cef49750d639de2ea255df869ce05b3\">storable</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html#a051592969dc5f1c426f18558794fd54f\">type</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_base.html\">OpenMaya.MFnBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a738a1798d4fccbbb078cf7a15e8b4880\">usedAsColor</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a9430a860064b0dc38c22397e733c14a6\">usedAsFilename</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a693a4638bfc2a8112b0341f77674a164\">usesArrayDataBuilder</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a80b0e7d50f04d59676bdd1f8e22a18be\">worldSpace</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html#a1a726a957560b6c387b1d441f25a789b\">writable</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_fn_attribute.html\">OpenMaya.MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></div></body>\n\
</html>\n\
";