var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>gpuCache/CacheReader.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'gpu_cache_2_cache_reader_8h-example.html\', tocPrefix);\n\
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
            <h1>gpuCache/CacheReader.h</h1>\n\
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
<div class=\"title\">gpuCache/CacheReader.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _CacheReader_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _CacheReader_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk </span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic </span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Includes</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheGeometry.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheMaterial.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFileObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;map&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;boost/shared_ptr.hpp&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;boost/make_shared.hpp&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;boost/unordered_map.hpp&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Forward Declarations</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>CacheReader;</div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>CacheFileEntry;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS GlobalReaderCache</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>GlobalReaderCache</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> GlobalReaderCache&amp; theCache();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">int</span> maxNumOpenFiles();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// A CacheReaderProxy represents a request to a reader</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>CacheReaderProxy</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">        <span class=\"keyword\">typedef</span> boost::shared_ptr&lt;CacheReaderProxy&gt; Ptr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        ~CacheReaderProxy();</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file() { <span class=\"keywordflow\">return</span> fFile; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">        GPUCACHE_DECLARE_MAKE_SHARED_FRIEND_1;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        CacheReaderProxy(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a> fFile;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// A CacheReaderHolder represents the ownership of a reader</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// as long as the CacheReaderHolder is held by the user, the reader</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// will not be closed.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>CacheReaderHolder</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">        CacheReaderHolder(boost::shared_ptr&lt;CacheReaderProxy&gt; proxy);</div>\n\
<div class=\"line\">        ~CacheReaderHolder();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        boost::shared_ptr&lt;CacheReader&gt; getCacheReader();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">        boost::shared_ptr&lt;CacheReaderProxy&gt; fProxy;</div>\n\
<div class=\"line\">        boost::shared_ptr&lt;CacheReader&gt;      fReader;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    boost::shared_ptr&lt;CacheReaderProxy&gt; getCacheReaderProxy(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// ASync (Background) read methods.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// We allow gpuCache nodes to load the cache file in a single TBB thread.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Schedule an async read. This function will return immediately.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> scheduleRead(<span class=\"keyword\">const</span> CacheFileEntry*  entry, </div>\n\
<div class=\"line\">                      <span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;         geometryPath,</div>\n\
<div class=\"line\">                      CacheReaderProxy::Ptr&amp; proxy);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Pull the hierarchy data.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> pullHierarchy(<span class=\"keyword\">const</span> CacheFileEntry*            entry, </div>\n\
<div class=\"line\">                       GPUCache::SubNode::Ptr&amp;          geometry,</div>\n\
<div class=\"line\">                       <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;                         validatedGeometryPath,</div>\n\
<div class=\"line\">                       GPUCache::MaterialGraphMap::Ptr&amp; materials);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Pull the shape data.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> pullShape(<span class=\"keyword\">const</span> CacheFileEntry*   entry, </div>\n\
<div class=\"line\">                   GPUCache::SubNode::Ptr&amp; geometry);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Hint which shape should be read first.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> hintShapeReadOrder(<span class=\"keyword\">const</span> GPUCache::SubNode&amp; subNode);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Cancel the async read.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> cancelRead(<span class=\"keyword\">const</span> CacheFileEntry* entry);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Wait for the async read.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> waitForRead(<span class=\"keyword\">const</span> CacheFileEntry* entry);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Check if the worker thread is being interrupted.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> isInterrupted();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Temporarily pause the async read.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// We assume that the reader can only be accessed from one thread at a time.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// When this method is returned, the worker thread is paused so that the main thread</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// can call reader methods without being blocked.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> pauseRead();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Resume the paused worker thread.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> resumeRead();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Check if the worker thread is paused. (called by the worker thread)</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> isPaused();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Block the worker thread until notified. (called by the worker thread)</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> pauseUntilNotified();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span>CacheReader;</div>\n\
<div class=\"line\">    <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span>CacheReaderProxy;</div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>Impl;</div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>Scheduler;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Prohibited and not implemented.</span></div>\n\
<div class=\"line\">    GlobalReaderCache(<span class=\"keyword\">const</span> GlobalReaderCache&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> GlobalReaderCache&amp; operator= (<span class=\"keyword\">const</span> GlobalReaderCache&amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Increase/Decrease the reference count for the file.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// If the reference count is 0, the cache reader is deleted.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> increaseFileRef(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> decreaseFileRef(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Acquire/Release the ownership of the reader.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// If the ownership count is 0, the cache reader may be closed.</span></div>\n\
<div class=\"line\">    boost::shared_ptr&lt;CacheReader&gt; acquireOwnership(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> releaseOwnership(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    GlobalReaderCache();</div>\n\
<div class=\"line\">    ~GlobalReaderCache();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    boost::shared_ptr&lt;Impl&gt;      fImpl;</div>\n\
<div class=\"line\">    boost::shared_ptr&lt;Scheduler&gt; fScheduler;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS CacheReader</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>CacheReader</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> boost::shared_ptr&lt;CacheReader&gt; CreateFunction(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> registerReader(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; impl, CreateFunction* func);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Returns true if the cache file could be properly opened.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> valid() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Returns true if the geometry path points to a valid object in the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// cache file.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// If the geometry path is invalid, validateGeomPath will be set</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// to the closest valid path. Otherwise, validateGeomPath will set</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// be set to the same value as geomPath. </span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> validateGeomPath(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; geomPath, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; validatedGeomPath) <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Read all the hierarchy of geometric objects located below the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// object identified by the specified geometry path.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> GPUCache::SubNode::Ptr readScene(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; geomPath, <span class=\"keywordtype\">bool</span> needUVs) = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Read the hierarchy below the object identified by the specified geometry path.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// This method will not fill array buffers. Shapes are marked as bounding box place holder.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// The shape paths below are returned.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> GPUCache::SubNode::Ptr readHierarchy(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; geomPath, <span class=\"keywordtype\">bool</span> needUVs) = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Read the shape identified by the specified geometry path.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> GPUCache::SubNode::Ptr readShape(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; geomPath, <span class=\"keywordtype\">bool</span> needUVs) = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Read the materials inside the Alembic archive.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> GPUCache::MaterialGraphMap::Ptr readMaterials() = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Read the animation time range of the Alembic archive.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Returns false if the range is not available.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> readAnimTimeRange(GPUCache::TimeInterval&amp; range) = 0;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    CacheReader() {}</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~CacheReader() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span>GlobalReaderCache::Impl;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> boost::shared_ptr&lt;CacheReader&gt; create(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; impl,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_file_object.html\">MFileObject</a>&amp; file);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Prohibited and not implemented.</span></div>\n\
<div class=\"line\">    CacheReader(<span class=\"keyword\">const</span> CacheReader&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> CacheReader&amp; operator=(<span class=\"keyword\">const</span> CacheReader&amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> std::map&lt;std::string,CreateFunction*&gt; fsRegistry;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS CacheReaderInterruptException</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>CacheReaderInterruptException : <span class=\"keyword\">public</span> std::exception</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    CacheReaderInterruptException(<span class=\"keyword\">const</span> std::string&amp; str) <span class=\"keywordflow\">throw</span>()</div>\n\
<div class=\"line\">        : fWhat(str)</div>\n\
<div class=\"line\">    {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~CacheReaderInterruptException() throw()</div>\n\
<div class=\"line\">    {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* what() <span class=\"keyword\">const</span> throw()</div>\n\
<div class=\"line\">    { <span class=\"keywordflow\">return</span> fWhat.c_str(); }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    std::string fWhat;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS CacheFileEntry</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>CacheFileEntry</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// Pointer to a mutable CacheFileEntry</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> boost::shared_ptr&lt;CacheFileEntry&gt;       MPtr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> BackgroundReadingState {</div>\n\
<div class=\"line\">        kReadingHierarchyInProgress,</div>\n\
<div class=\"line\">        kReadingShapesInProgress,</div>\n\
<div class=\"line\">        kReadingDone</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ~CacheFileEntry();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> MPtr create( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; fileName )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> boost::make_shared&lt;CacheFileEntry&gt;(fileName);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    CacheFileEntry&amp; operator=( <span class=\"keyword\">const</span> CacheFileEntry&amp; rhs );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>                                  fCacheFileName;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>                                  fResolvedCacheFileName;</div>\n\
<div class=\"line\">    GPUCache::SubNode::Ptr                   fCachedGeometry;</div>\n\
<div class=\"line\">    GPUCache::MaterialGraphMap::Ptr          fCachedMaterial;</div>\n\
<div class=\"line\">    GlobalReaderCache::CacheReaderProxy::Ptr fCacheReaderProxy;</div>\n\
<div class=\"line\">    BackgroundReadingState                   fReadState;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">class</span> T&gt; <span class=\"keyword\">friend</span> <span class=\"keywordtype\">void</span> boost::checked_delete(T * x);</div>\n\
<div class=\"line\">    GPUCACHE_DECLARE_MAKE_SHARED_FRIEND_1;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Private constructors to force usage of the create method.</span></div>\n\
<div class=\"line\">    CacheFileEntry();</div>\n\
<div class=\"line\">    CacheFileEntry( <span class=\"keyword\">const</span> CacheFileEntry&amp; rhs );</div>\n\
<div class=\"line\">    CacheFileEntry( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; fileName );</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS CacheFileRegistry</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>CacheFileRegistry</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> boost::unordered_map&lt;MString, CacheFileEntry::MPtr, GPUCache::MStringHash&gt; Map;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ~CacheFileRegistry();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> CacheFileRegistry&amp; theCache();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                    getAll(std::vector&lt;CacheFileEntry::MPtr&gt;&amp; entries) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    CacheFileEntry::MPtr    find(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; key);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                    insert(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; key, <span class=\"keyword\">const</span> CacheFileEntry::MPtr&amp; file);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                    <span class=\"keyword\">remove</span>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; key);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                    cleanUp(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; key);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">size_t</span>                  size() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                    clear();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    CacheFileRegistry();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> CacheFileRegistry fsSingleton;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> Map fMap;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";