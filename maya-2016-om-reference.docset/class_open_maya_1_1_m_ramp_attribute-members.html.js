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
    py_ref_adsk_ref_toc.initNavTree(\'class_open_maya_1_1_m_ramp_attribute-members.html\', tocPrefix);\n\
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
<div class=\"title\">OpenMaya.MRampAttribute Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#ab66e516e9d5811037de01cbb9b09286f\">__init__</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#ab66e516e9d5811037de01cbb9b09286f\">__init__</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a7f6e8e852c28078aefc73b9979e0fc07\">addEntries</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a87f9cf0b879fcfe1e10a06638ce25c43\">addEntries</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#aec07e6000eb70b9eb0f46f8ea0f02604\">createColorRamp</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#aa7e64a28f75ebf70187b270dd155642b\">createColorRamp</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#ab4484d08adedaba80fbfa47d58055452\">createCurveRamp</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#adeeb86fc11dc689e1beedc51d3408207\">createCurveRamp</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a90d163af64be3d9d2572d4d8501567cc\">createRamp</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a90d163af64be3d9d2572d4d8501567cc\">createRamp</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#ad7ae373f9ff5a0b9b03a830fd7e7e291\">deleteEntries</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a9a62e030f0323da56c70f67125b5891e\">deleteEntries</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#af7611edca22f85a0721be0587ebb1530\">getEntries</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a8acbbae492900a3933316397016c6b3a\">getEntries</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a171d784a04230ccf44bf6544f5ca8e72\">getValueAtPosition</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a759f4700d3283e7197f343857eea0fb6\">getValueAtPosition</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#ad074cbfd16d3e612167cec974a4bc46f\">hasIndex</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#ad074cbfd16d3e612167cec974a4bc46f\">hasIndex</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a841d6971e79e79f4c7ca7a0813f449fd\">isColorRamp</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a793f552247b6c526cb804ffd24253a16\">isCurveRamp</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a0637f41bbf53ab6a2eed1c94eda971cc\">kLinear</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a63cb284bf464f516750cb44420c1df53\">kNone</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a6dc52fb921fa9054f7a8c34a16ab2b93\">kSmooth</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#aa63d9fe4684cd2119d2d42b55cc3d464\">kSpline</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#ac0402eb2734084768465a283156d92e6\">numEntries</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a386351d4755889eb12a18e71472b3c93\">numEntries</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#ad9f5053a984e4958c90864d9625091fe\">pack</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#ad9f5053a984e4958c90864d9625091fe\">pack</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#aafc38eb7860ed3d1e6e7e2368e52e3a0\">setInterpolationAtIndex</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a09c23036630a3ed4ebc0fa34a474cfa8\">setInterpolationAtIndex</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a50e55b2085662c9e0dcb4f5a66e7fcd9\">setPositionAtIndex</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#af5016d2cdc768d79ec85c392d2cf397e\">setPositionAtIndex</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a3b0dd70c4db42a1fb94669908cfea470\">setRamp</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a3b0dd70c4db42a1fb94669908cfea470\">setRamp</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a56c2f15350f77e7e9dfea4eb5ad64502\">setValueAtIndex</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a12b6cb3d6b2d7d72e79d7d665d6cfa6d\">setValueAtIndex</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a8b9316655b5cb229b164e53498100c27\">sort</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html#a8b9316655b5cb229b164e53498100c27\">sort</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./py_ref/class_open_maya_1_1_m_ramp_attribute.html\">OpenMaya.MRampAttribute</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></div></body>\n\
</html>\n\
";