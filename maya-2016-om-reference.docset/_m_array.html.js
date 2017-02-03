var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Working with M*Array Classes</title>\n\
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
    py_ref_adsk_ref_toc.initNavTree(\'_m_array.html\', tocPrefix);\n\
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
            <h1>Working with M*Array Classes</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./py_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/namespaces.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./py_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li class=\"current\"><a href=\"#!/url=./py_ref/pages.html\"><span>Related&#160;Pages</span></a></li>\n\
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
<div class=\"title\">Working with M*Array Classes </div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><p>Most of Maya\'s array classes provide a common interface with the only difference being the type of the underlying array elements: integer, float, MPoint, etc. This page describes that common interface.</p>\n\
<p>The array classes which use this common interface implement their Python type objects using the MPyMArray_Type template class, which takes the following template parameters:</p>\n\
<ul>\n\
<li>The type of the Maya array class (e.g. MIntArray, MPointArray). We refer to this as <em>ArrayType</em> throughout this document.</li>\n\
<li>The C++ type of the array elements (e.g. int, MPoint). We refer to this as <em>ElementType</em> throughout this document.</li>\n\
<li>A boolean indicating whether reference semantics should be used.</li>\n\
</ul>\n\
<h2>Reference Semantics </h2>\n\
<p>Reference semantics mean that indexing into the array returns a reference to an array element rather than a copy of its value. For example, let\'s say that you do the following:</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"keyword\">import</span> maya.api.OpenMaya <span class=\"keyword\">as</span> om</div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;array = om.MPointArray()</div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;array.append(om.MPoint(1, 2, 3))</div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;p = array[0]</div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;p.x = -5</div>\n\
</div><!-- fragment --><p>Under value semantics \'p\' would contain a copy of the value in \'array[0]\'. Changing one would have no effect on the other, so we would end up with \'p\' containing (-5, 2, 3) and \'array[0]\' containing (1, 2, 3).</p>\n\
<p>Under reference semantics \'p\' and \'array[0]\' would refer to the same element so they would both end up with the point (-5, 2, 3).</p>\n\
<p>In the Maya Python 2.0 API, arrays of simple types like int and float use value semantics, while arrays of class types like MPoint and MColor use reference semantics.</p>\n\
<p>This is in keeping with the way that Python handles function parameters: parameters of simple type are passed by value while parameters of class types are passed by reference. More importantly, passing class type objects by reference can hugely improve performance. For example, imagine that you need to increment the X coordinate of all the points in an array. Using value semantics you\'d have to copy the data twice:</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"keywordflow\">for</span> i <span class=\"keywordflow\">in</span> range(len(array)):</div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;    p = array[i]</div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;    p.x += 1</div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;    array[i] = p</div>\n\
</div><!-- fragment --><p>Using reference semantics you can avoid the copies altogether:</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"keywordflow\">for</span> p <span class=\"keywordflow\">in</span> array;</div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;    p.x += 1</div>\n\
</div><!-- fragment --><p>Without reference semantics those extra copies could easily double or triple the amount of CPU time required to process the array, which could prove crippling when dealing with complex geometries involving arrays of hundreds of thousands of points.</p>\n\
<p>Unfortunately, there is a significant price to be paid for using reference semantics. Maya\'s array types do not provide reference counting for individual elements. This means that a Python script which holds a reference to an array element may suddenly find that reference invalid if the corresponding array element is destroyed. For example, the following could cause Maya to crash or otherwise become unstable because it is attempting to increment the \'x\' member of an MPoint instance which no longer exists:</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;p = array[0]</div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;array.clear()</div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;p.x += 1</div>\n\
</div><!-- fragment --><p>It is up to the API user to ensure that the array is not destroyed, resized or overwritten while zie holds references to one or ore of its elements.</p>\n\
<p>Note that the same caveats apply to the C++ API and the Python 1.0 API as they also use reference semantics for arrays of class-type objects, so at least the danger is a familiar one for developers.</p>\n\
<h2>Constructors </h2>\n\
<table class=\"ruled\">\n\
<tr>\n\
<th>Signature </th><th>Parameters </th><th>Description </th></tr>\n\
<tr>\n\
<td>ArrayType() </td><td>&#160; </td><td><p class=\"starttd\">Default constructor. Returns a new, empty ArrayType object. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
<tr>\n\
<td>ArrayType(src) </td><td>src - ArrayType </td><td><p class=\"starttd\">Copy constructor. Returns a new ArrayType object containing copies of of the elements from <b>src</b>. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
<tr>\n\
<td>ArrayType(size, value) </td><td>size - Int <br>\n\
value - ElementType </td><td><p class=\"starttd\">Returns a new ArrayType object with <b>size</b> elements, all set to <b>value</b>. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
<tr>\n\
<td>ArrayType(seq) </td><td>seq - sequence whose elements are convertible to ElementType </td><td><p class=\"starttd\">Returns a new ArrayType object containing copies of the elements from <b>seq</b>. Raises a TypeError exception if any of the elements of <b>seq</b> cannot be converted to ElementType. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
</table>\n\
<h2>Object Methods </h2>\n\
<table class=\"ruled\">\n\
<tr>\n\
<th>Signature </th><th>Parameters </th><th>Returns </th><th>Description </th></tr>\n\
<tr>\n\
<td>append(value) </td><td>value - ElementType </td><td>New reference to self. </td><td><p class=\"starttd\">Appends <b>value</b> to the end of the array as a new element. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
<tr>\n\
<td>copy(src) </td><td>src - ArrayType or sequence of items convertible to ElementType </td><td>New reference to self. </td><td><p class=\"starttd\">Removes all existing elements and adds copies of the elements from <b>src</b>. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
<tr>\n\
<td>clear() </td><td>&#160; </td><td>New reference to self. </td><td><p class=\"starttd\">Removes all existing elements. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
<tr>\n\
<td>insert(value, index) </td><td>value - ElementType <br>\n\
index - Int </td><td>New reference to self. </td><td><p class=\"starttd\">Inserts <b>value</b> into the array element at <b>index</b>, after first shifting that and any elements which follow it down the array to make room. Raises a ValueError if there are not at least <b>index</b> elements in the array before insertion, or if <b>index</b> is negative. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
<tr>\n\
<td>remove(index) </td><td>index - Int </td><td>New reference to self. </td><td><p class=\"starttd\">Removes the array element at <b>index</b> then shifts any elements which follow it up to close the gap. Raises a ValueError if <b>index</b> is out of range. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
<tr>\n\
<td>setLength(newSize) </td><td>newSize - Int </td><td>New reference to self. </td><td><p class=\"starttd\">Sets the length of the array to <b>newSize</b> elements. If the new size is less than the old then the elements from <b>newSize</b> onward will be destroyed. If the new size is greater than the old then new elements will have undefined values which should not be used without first being initialized. Raises a ValueError if <b>newSize</b> is negative. </p>\n\
<p class=\"endtd\">\n\
</td></tr>\n\
</table>\n\
<h2>Sequence Support </h2>\n\
<p>All sequence operations are supported, including slices.</p>\n\
<p>For arrays using reference semantics indexing returns what is effectively a borrowed reference to the array element rather than a copy of its value. See the discussion of Reference Semantics above for more details. </p>\n\
</div></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";