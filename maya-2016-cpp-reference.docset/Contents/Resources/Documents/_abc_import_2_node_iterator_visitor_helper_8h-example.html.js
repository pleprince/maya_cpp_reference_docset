var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>AbcImport/NodeIteratorVisitorHelper.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_abc_import_2_node_iterator_visitor_helper_8h-example.html\', tocPrefix);\n\
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
            <h1>AbcImport/NodeIteratorVisitorHelper.h</h1>\n\
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
<div class=\"title\">AbcImport/NodeIteratorVisitorHelper.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-*****************************************************************************</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2009-2012,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Sony Pictures Imageworks, Inc. and</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Industrial Light &amp; Magic, a division of Lucasfilm Entertainment Company Ltd.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Redistribution and use in source and binary forms, with or without</span></div>\n\
<div class=\"line\"><span class=\"comment\">// modification, are permitted provided that the following conditions are</span></div>\n\
<div class=\"line\"><span class=\"comment\">// met:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// *       Redistributions of source code must retain the above copyright</span></div>\n\
<div class=\"line\"><span class=\"comment\">// notice, this list of conditions and the following disclaimer.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// *       Redistributions in binary form must reproduce the above</span></div>\n\
<div class=\"line\"><span class=\"comment\">// copyright notice, this list of conditions and the following disclaimer</span></div>\n\
<div class=\"line\"><span class=\"comment\">// in the documentation and/or other materials provided with the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// distribution.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// *       Neither the name of Sony Pictures Imageworks, nor</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Industrial Light &amp; Magic nor the names of their contributors may be used</span></div>\n\
<div class=\"line\"><span class=\"comment\">// to endorse or promote products derived from this software without specific</span></div>\n\
<div class=\"line\"><span class=\"comment\">// prior written permission.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS</span></div>\n\
<div class=\"line\"><span class=\"comment\">// &quot;AS IS&quot; AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT</span></div>\n\
<div class=\"line\"><span class=\"comment\">// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR</span></div>\n\
<div class=\"line\"><span class=\"comment\">// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT</span></div>\n\
<div class=\"line\"><span class=\"comment\">// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT</span></div>\n\
<div class=\"line\"><span class=\"comment\">// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY</span></div>\n\
<div class=\"line\"><span class=\"comment\">// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT</span></div>\n\
<div class=\"line\"><span class=\"comment\">// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE</span></div>\n\
<div class=\"line\"><span class=\"comment\">// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//-*****************************************************************************</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef ABCIMPORT_NODE_ITERATOR_HELPER_H_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define ABCIMPORT_NODE_ITERATOR_HELPER_H_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/Abc/IArrayProperty.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/Abc/IScalarProperty.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/Abc/IObject.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/AbcGeom/ICamera.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/AbcGeom/ICurves.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/AbcGeom/INuPatch.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/AbcGeom/IPoints.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/AbcGeom/IPolyMesh.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/AbcGeom/ISubD.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/AbcGeom/IXform.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// MTypes.h includes windows.h</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Suppress min/max macros</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(_WIN32) &amp;&amp; !defined(NOMINMAX)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #define NOMINMAX</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArrayDataHandle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericData.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;vector&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// mArray or mScalar will be valid, mObj will be valid for those situations</span></div>\n\
<div class=\"line\"><span class=\"comment\">// where the property can&#39;t be validly read, unless the object stays in scope.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">struct </span>Prop</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    Alembic::Abc::IArrayProperty mArray;</div>\n\
<div class=\"line\">    Alembic::Abc::IScalarProperty mScalar;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> addProps(Alembic::Abc::ICompoundProperty &amp; iParent, <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; iObject,</div>\n\
<div class=\"line\">              <span class=\"keywordtype\">bool</span> iUnmarkedFaceVaryingColors);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> addArrayProp(Alembic::Abc::IArrayProperty &amp; iProp, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; iParent);</div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> addScalarProp(Alembic::Abc::IScalarProperty &amp; iProp, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; iParent);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">enum</span> AddPropResult</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    INVALID = 0,</div>\n\
<div class=\"line\">    VALID_DONE = 1,</div>\n\
<div class=\"line\">    VALID_NOTDONE = 2</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Three possible return states, invalid, valid and done (attribute</span></div>\n\
<div class=\"line\"><span class=\"comment\">// already existed and has been updated), valid and not done (new</span></div>\n\
<div class=\"line\"><span class=\"comment\">// attribute needs calling method to continue).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Avoiding some duplicated code with these templated versions.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span>&lt;<span class=\"keyword\">class</span> PODTYPE&gt;</div>\n\
<div class=\"line\">AddPropResult</div>\n\
<div class=\"line\">addScalarExtentOneProp(Alembic::Abc::IScalarProperty&amp; iProp,</div>\n\
<div class=\"line\">                       Alembic::Util::uint8_t extent,</div>\n\
<div class=\"line\">                       PODTYPE defaultVal,</div>\n\
<div class=\"line\">                       <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug,</div>\n\
<div class=\"line\">                       <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; attrName,</div>\n\
<div class=\"line\">                       <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html\">MFnNumericAttribute</a>&amp; numAttr,</div>\n\
<div class=\"line\">                       <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; attrObj,</div>\n\
<div class=\"line\">                       <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFnNumericData::Type</a> type);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span> &lt;<span class=\"keyword\">class</span> PODTYPE&gt;</div>\n\
<div class=\"line\">AddPropResult</div>\n\
<div class=\"line\">addScalarExtentThreeProp(Alembic::Abc::IScalarProperty&amp; iProp,</div>\n\
<div class=\"line\">                         Alembic::Util::uint8_t extent,</div>\n\
<div class=\"line\">                         PODTYPE defaultVal,</div>\n\
<div class=\"line\">                         <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug,</div>\n\
<div class=\"line\">                         <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; attrName,</div>\n\
<div class=\"line\">                         <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html\">MFnNumericAttribute</a>&amp; numAttr,</div>\n\
<div class=\"line\">                         <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; attrObj,</div>\n\
<div class=\"line\">                         <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFnNumericData::Type</a> type1,</div>\n\
<div class=\"line\">                         <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFnNumericData::Type</a> type2,</div>\n\
<div class=\"line\">                         <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFnNumericData::Type</a> type3);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span> &lt;<span class=\"keyword\">class</span> PODTYPE&gt;</div>\n\
<div class=\"line\">AddPropResult</div>\n\
<div class=\"line\">addScalarExtentFourProp(Alembic::Abc::IScalarProperty&amp; iProp,</div>\n\
<div class=\"line\">                        Alembic::Util::uint8_t extent,</div>\n\
<div class=\"line\">                        PODTYPE defaultVal,</div>\n\
<div class=\"line\">                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug,</div>\n\
<div class=\"line\">                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; attrName,</div>\n\
<div class=\"line\">                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html\">MFnNumericAttribute</a>&amp; numAttr,</div>\n\
<div class=\"line\">                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; attrObj,</div>\n\
<div class=\"line\">                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFnNumericData::Type</a> type1,</div>\n\
<div class=\"line\">                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFnNumericData::Type</a> type2,</div>\n\
<div class=\"line\">                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFnNumericData::Type</a> type3,</div>\n\
<div class=\"line\">                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_data.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFnNumericData::Type</a> type4);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> readProp(<span class=\"keywordtype\">double</span> iFrame,</div>\n\
<div class=\"line\">              Alembic::Abc::IArrayProperty &amp; iProp,</div>\n\
<div class=\"line\">              <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> &amp; iHandle);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> readProp(<span class=\"keywordtype\">double</span> iFrame,</div>\n\
<div class=\"line\">              Alembic::Abc::IScalarProperty &amp; iProp,</div>\n\
<div class=\"line\">              <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> &amp; iHandle);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> getAnimatedProps(Alembic::Abc::ICompoundProperty &amp; iParent,</div>\n\
<div class=\"line\">    std::vector&lt;Prop&gt; &amp; oPropList, <span class=\"keywordtype\">bool</span> iUnmarkedFaceVaryingColors);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> getAnimatedArrayProp(Alembic::Abc::IArrayProperty prop,</div>\n\
<div class=\"line\">                          std::vector&lt;Prop&gt; &amp; oPropList);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> getAnimatedScalarProp(Alembic::Abc::IScalarProperty prop,</div>\n\
<div class=\"line\">                           std::vector&lt;Prop&gt; &amp; oPropList);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This class is used for connecting to sampled transform operations and</span></div>\n\
<div class=\"line\"><span class=\"comment\">// properties in order  to keep the list of names of sampled channels</span></div>\n\
<div class=\"line\"><span class=\"comment\">// associated with a particular MObject (mObject)</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SampledPair</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    SampledPair(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; iObject, std::vector&lt;std::string&gt; &amp; sN):</div>\n\
<div class=\"line\">        mObject(iObject), sampleNameList(sN)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; getObject()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> mObject;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> sampledChannelSize()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">static_cast&lt;</span><span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span><span class=\"keyword\">&gt;</span>(sampleNameList.size());</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::string getSampleElement(<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> index)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (index &lt; sampleNameList.size())</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> sampleNameList[index];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> std::string();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mObject;</div>\n\
<div class=\"line\">    std::vector&lt;std::string&gt; sampleNameList;</div>\n\
<div class=\"line\">};  <span class=\"comment\">// SampledPair</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>PolyMeshAndColors</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    Alembic::AbcGeom::IPolyMesh mMesh;</div>\n\
<div class=\"line\">    std::vector&lt; Alembic::AbcGeom::IC3fGeomParam &gt; mC3s;</div>\n\
<div class=\"line\">    std::vector&lt; Alembic::AbcGeom::IC4fGeomParam &gt; mC4s;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SubDAndColors</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    Alembic::AbcGeom::ISubD mMesh;</div>\n\
<div class=\"line\">    std::vector&lt; Alembic::AbcGeom::IC3fGeomParam &gt; mC3s;</div>\n\
<div class=\"line\">    std::vector&lt; Alembic::AbcGeom::IC4fGeomParam &gt; mC4s;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// A data class for cleaner code when copying a group of info between functions</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>WriterData</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    WriterData();</div>\n\
<div class=\"line\">    ~WriterData();</div>\n\
<div class=\"line\">    WriterData(<span class=\"keyword\">const</span> WriterData &amp; rhs);</div>\n\
<div class=\"line\">    WriterData &amp; operator=(<span class=\"keyword\">const</span> WriterData &amp; rhs);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> getFrameRange(<span class=\"keywordtype\">double</span> &amp; oMin, <span class=\"keywordtype\">double</span> &amp; oMax);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::vector&lt;MObject&gt;        mCameraObjList;</div>\n\
<div class=\"line\">    std::vector&lt;MObject&gt;        mLocObjList;</div>\n\
<div class=\"line\">    std::vector&lt;MObject&gt;        mNurbsObjList;</div>\n\
<div class=\"line\">    std::vector&lt;MObject&gt;        mNurbsCurveObjList;</div>\n\
<div class=\"line\">    std::vector&lt;MObject&gt;        mPointsObjList;</div>\n\
<div class=\"line\">    std::vector&lt;MObject&gt;        mPolyMeshObjList;</div>\n\
<div class=\"line\">    std::vector&lt;MObject&gt;        mSubDObjList;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::vector&lt;Prop&gt; mPropList;</div>\n\
<div class=\"line\">    std::vector&lt;Alembic::AbcGeom::ICamera&gt;    mCameraList;</div>\n\
<div class=\"line\">    std::vector&lt;Alembic::AbcGeom::ICurves&gt;    mCurvesList;</div>\n\
<div class=\"line\">    std::vector&lt;Alembic::AbcGeom::IXform&gt;     mLocList;</div>\n\
<div class=\"line\">    std::vector&lt;Alembic::AbcGeom::INuPatch&gt;   mNurbsList;</div>\n\
<div class=\"line\">    std::vector&lt; PolyMeshAndColors &gt;          mPolyMeshList;</div>\n\
<div class=\"line\">    std::vector&lt;Alembic::AbcGeom::IPoints&gt;    mPointsList;</div>\n\
<div class=\"line\">    std::vector&lt; SubDAndColors &gt;              mSubDList;</div>\n\
<div class=\"line\">    std::vector&lt;Alembic::AbcGeom::IXform&gt;     mXformList;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// objects that aren&#39;t animated but have animated visibility need to be</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// kept alive so the visibility can be read</span></div>\n\
<div class=\"line\">    std::vector&lt;Alembic::AbcGeom::IObject&gt;    mAnimVisStaticObjList;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// number of curves for each animated curve group</span></div>\n\
<div class=\"line\">    std::vector&lt;std::size_t&gt;    mNumCurves;</div>\n\
<div class=\"line\">    std::vector&lt;bool&gt;           mIsComplexXform;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// only needed when doing connections</span></div>\n\
<div class=\"line\">    std::vector&lt;SampledPair&gt;    mXformOpList;</div>\n\
<div class=\"line\">    std::vector&lt;SampledPair&gt;    mPropObjList;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">};  <span class=\"comment\">// WriterData</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>ArgData</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    ArgData(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> iFileName = <span class=\"stringliteral\">&quot;&quot;</span>,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span>    iDebugOn = <span class=\"keyword\">false</span>,</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> iReparentObj = <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#ae6af14e0aa2c92bdda88c81280e1d122\">MObject::kNullObj</a>,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span>    iConnect = <span class=\"keyword\">false</span>,</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> iConnectRootNodes = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;/&quot;</span>),</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span>    iCreateIfNotFound = <span class=\"keyword\">false</span>,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span>    iRemoveIfNoUpdate = <span class=\"keyword\">false</span>,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span>    iRecreateColorSets = <span class=\"keyword\">false</span>,</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> iIncludeFilterString = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;&quot;</span>),</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> iExcludeFilterString = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;&quot;</span>));</div>\n\
<div class=\"line\">    ArgData(<span class=\"keyword\">const</span> ArgData &amp; rhs);</div>\n\
<div class=\"line\">    ArgData &amp; operator=(<span class=\"keyword\">const</span> ArgData &amp; rhs);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>     mFileName;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>      mSequenceStartTime;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>      mSequenceEndTime;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        mDebugOn;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     mReparentObj;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        mRecreateColorSets;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// optional information for the &quot;connect&quot; flag</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        mConnect;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>     mConnectRootNodes;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        mCreateIfNotFound;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        mRemoveIfNoUpdate;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>     mIncludeFilterString;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>     mExcludeFilterString;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    WriterData  mData;</div>\n\
<div class=\"line\">};  <span class=\"comment\">// ArgData</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// traverse and create the corresponding maya hierarchy</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> createScene(ArgData &amp; iArgData);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Called in createScene only if there are sampled data in the scene.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This function sets up the connections to AlembicNode</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> connectAttr(ArgData &amp; iArgData);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// check the properties in iParent and grab the ones that are colors</span></div>\n\
<div class=\"line\"><span class=\"comment\">// returns whether or not any of these color properties are animated</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> getColorAttrs( Alembic::Abc::ICompoundProperty &amp; iParent,</div>\n\
<div class=\"line\">    std::vector&lt; Alembic::AbcGeom::IC3fGeomParam &gt; &amp; ioC3s,</div>\n\
<div class=\"line\">    std::vector&lt; Alembic::AbcGeom::IC4fGeomParam &gt; &amp; ioC4s,</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> iUnmarkedFaceVaryingColors);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif  // ABCIMPORT_NODE_ITERATOR_HELPER_H_</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";