var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>hwDecalBumpShader_NV20/MTextureCache.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'hw_decal_bump_shader__n_v20_2_m_texture_cache_8h-example.html\', tocPrefix);\n\
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
            <h1>hwDecalBumpShader_NV20/MTextureCache.h</h1>\n\
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
<div class=\"title\">hwDecalBumpShader_NV20/MTextureCache.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef MAYA_API_MTextureCache</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MAYA_API_MTextureCache</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (C) 1995 - 2006 Autodesk, Inc. and/or its licensors.  All </span></div>\n\
<div class=\"line\"><span class=\"comment\">// rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The coded instructions, statements, computer programs, and/or related </span></div>\n\
<div class=\"line\"><span class=\"comment\">// material (collectively the &quot;Data&quot;) in these files contain unpublished </span></div>\n\
<div class=\"line\"><span class=\"comment\">// information proprietary to Autodesk, Inc. (&quot;Autodesk&quot;) and/or its </span></div>\n\
<div class=\"line\"><span class=\"comment\">// licensors, which is protected by U.S. and Canadian federal copyright </span></div>\n\
<div class=\"line\"><span class=\"comment\">// law and by international treaties.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The Data is provided for use exclusively by You. You have the right </span></div>\n\
<div class=\"line\"><span class=\"comment\">// to use, modify, and incorporate this Data into other products for </span></div>\n\
<div class=\"line\"><span class=\"comment\">// purposes authorized by the Autodesk software license agreement, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// without fee.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The copyright notices in the Software and this entire statement, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// including the above license grant, this restriction and the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// following disclaimer, must be included in all copies of the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Software, in whole or in part, and all derivative works of </span></div>\n\
<div class=\"line\"><span class=\"comment\">// the Software, unless such copies or derivative works are solely </span></div>\n\
<div class=\"line\"><span class=\"comment\">// in the form of machine-executable object code generated by a </span></div>\n\
<div class=\"line\"><span class=\"comment\">// source language processor.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// AUTODESK DOES NOT MAKE AND HEREBY DISCLAIMS ANY EXPRESS OR IMPLIED </span></div>\n\
<div class=\"line\"><span class=\"comment\">// WARRANTIES INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF </span></div>\n\
<div class=\"line\"><span class=\"comment\">// NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR </span></div>\n\
<div class=\"line\"><span class=\"comment\">// PURPOSE, OR ARISING FROM A COURSE OF DEALING, USAGE, OR </span></div>\n\
<div class=\"line\"><span class=\"comment\">// TRADE PRACTICE. IN NO EVENT WILL AUTODESK AND/OR ITS LICENSORS </span></div>\n\
<div class=\"line\"><span class=\"comment\">// BE LIABLE FOR ANY LOST REVENUES, DATA, OR PROFITS, OR SPECIAL, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES, EVEN IF AUTODESK </span></div>\n\
<div class=\"line\"><span class=\"comment\">// AND/OR ITS LICENSORS HAS BEEN ADVISED OF THE POSSIBILITY </span></div>\n\
<div class=\"line\"><span class=\"comment\">// OR PROBABILITY OF SUCH DAMAGES.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// MTextureCache.h</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: Texture cache, used to temporarily store textures.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              Eventually, this class will likely end up in the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//              Maya API.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              This class is not currently thread-safe.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// AUTHOR: Christian Laforte</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef WIN32</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#pragma warning( disable : 4786 )       // Disable stupid STL warnings.</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;map&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;algorithm&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MTexture.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;NodeMonitor.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>MTextureCache;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>MTextureCacheElement</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">friend</span> <span class=\"keyword\">class </span>MTextureCache;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    MTextureCacheElement()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        lastAccessedTimestamp = -1; </div>\n\
<div class=\"line\">        m_texture = NULL; </div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    ~MTextureCacheElement();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    MTexture* texture() { <span class=\"keywordflow\">return</span> m_texture; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    MTexture* m_texture;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> lastAccessedTimestamp;     <span class=\"comment\">// can be used to track when the texture was last used.</span></div>\n\
<div class=\"line\">    NodeMonitor fMonitor;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This class implements a singleton node with reference counting.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The refcount starts with a value equal to 0. Everytime instance()</span></div>\n\
<div class=\"line\"><span class=\"comment\">// gets called, the refcount is incremented by one. Everytime</span></div>\n\
<div class=\"line\"><span class=\"comment\">// release() gets called, the refcount is decremented by one,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// and if following that the refcount value is 0, the texture cache</span></div>\n\
<div class=\"line\"><span class=\"comment\">// singleton is destroyed.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>MTextureCache : <span class=\"keyword\">public</span> NodeMonitorManager</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    MTextureCache()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        m_currentTimestamp = 0;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    ~MTextureCache();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> MTextureCache* instance()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!m_instance)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            m_instance = <span class=\"keyword\">new</span> MTextureCache;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        refcount++;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> m_instance;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> release()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        refcount--;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (refcount == 0 &amp;&amp; m_instance)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">delete</span> m_instance;</div>\n\
<div class=\"line\">            m_instance = NULL;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">int</span> getReferenceCount()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> refcount;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Return a reference to the texture. There&#39;s no reference counting yet.</span></div>\n\
<div class=\"line\">    MTexture* texture(<a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> textureObj, </div>\n\
<div class=\"line\">                 MTexture::Type type = MTexture::RGBA, </div>\n\
<div class=\"line\">                 <span class=\"keywordtype\">bool</span> mipmapped = <span class=\"keyword\">true</span>,</div>\n\
<div class=\"line\">                 GLenum target = GL_TEXTURE_2D);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Returns true if the texture was found and bound; returns false otherwise.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> bind(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> textureObj, </div>\n\
<div class=\"line\">              MTexture::Type type = MTexture::RGBA, </div>\n\
<div class=\"line\">              <span class=\"keywordtype\">bool</span> mipmapped = <span class=\"keyword\">true</span>,</div>\n\
<div class=\"line\">              GLenum target = GL_TEXTURE_2D);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> incrementTimestamp(<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> increment=1);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Called by a node monitor when the watched node is renamed.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> onNodeRenamed(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; node, <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> oldName, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> newName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">int</span> refcount;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::map&lt;std::string, MTextureCacheElement*&gt; m_textureTable;</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::map&lt;std::string, MTextureCacheElement*&gt; string_to_cacheElement_map;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> m_currentTimestamp;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> MTextureCache* m_instance;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif // MAYA_API_MTextureCache</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";