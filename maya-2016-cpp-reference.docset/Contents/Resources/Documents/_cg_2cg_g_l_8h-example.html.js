var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Cg/cgGL.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_cg_2cg_g_l_8h-example.html\', tocPrefix);\n\
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
            <h1>Cg/cgGL.h</h1>\n\
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
<div class=\"title\">Cg/cgGL.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">/*</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * Copyright (c) 2002-2012, NVIDIA Corporation.</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * NVIDIA Corporation(&quot;NVIDIA&quot;) supplies this software to you in consideration</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * of your agreement to the following terms, and your use, installation,</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * modification or redistribution of this NVIDIA software constitutes</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * acceptance of these terms.  If you do not agree with these terms, please do</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * not use, install, modify or redistribute this NVIDIA software.</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * In consideration of your agreement to abide by the following terms, and</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * subject to these terms, NVIDIA grants you a personal, non-exclusive license,</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * under NVIDIA&#39;s copyrights in this original NVIDIA software (the &quot;NVIDIA</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * Software&quot;), to use, reproduce, modify and redistribute the NVIDIA</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * Software, with or without modifications, in source and/or binary forms;</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * provided that if you redistribute the NVIDIA Software, you must retain the</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * copyright notice of NVIDIA, this notice and the following text and</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * disclaimers in all such redistributions of the NVIDIA Software. Neither the</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * name, trademarks, service marks nor logos of NVIDIA Corporation may be used</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * to endorse or promote products derived from the NVIDIA Software without</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * specific prior written permission from NVIDIA.  Except as expressly stated</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * in this notice, no other rights or licenses express or implied, are granted</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * by NVIDIA herein, including but not limited to any patent rights that may be</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * infringed by your derivative works or by other works in which the NVIDIA</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * Software may be incorporated. No hardware is licensed hereunder.</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * THE NVIDIA SOFTWARE IS BEING PROVIDED ON AN &quot;AS IS&quot; BASIS, WITHOUT</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * WITHOUT LIMITATION, WARRANTIES OR CONDITIONS OF TITLE, NON-INFRINGEMENT,</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR ITS USE AND OPERATION</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * EITHER ALONE OR IN COMBINATION WITH OTHER PRODUCTS.</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * IN NO EVENT SHALL NVIDIA BE LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL,</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * EXEMPLARY, CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, LOST</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * PROFITS; PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * PROFITS; OR BUSINESS INTERRUPTION) OR ARISING IN ANY WAY OUT OF THE USE,</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * REPRODUCTION, MODIFICATION AND/OR DISTRIBUTION OF THE NVIDIA SOFTWARE,</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * HOWEVER CAUSED AND WHETHER UNDER THEORY OF CONTRACT, TORT (INCLUDING</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * NEGLIGENCE), STRICT LIABILITY OR OTHERWISE, EVEN IF NVIDIA HAS BEEN ADVISED</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * OF THE POSSIBILITY OF SUCH DAMAGE.</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *</span></div>\n\
<div class=\"line\"><span class=\"comment\"> */</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef _cggl_h</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _cggl_h</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">/*** CGGL Run-Time Library API                                         ***/</span></div>\n\
<div class=\"line\"><span class=\"comment\">/*************************************************************************/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Cg/cg.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef _WIN32</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># ifndef APIENTRY </span><span class=\"comment\">/* From Win32&#39;s &lt;windef.h&gt; */</span><span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  define CGGL_APIENTRY_DEFINED</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  if (_MSC_VER &gt;= 800) || defined(_STDCALL_SUPPORTED) || defined(__BORLANDC__) || defined(__LCC__)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#   define APIENTRY    __stdcall</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#   define APIENTRY</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  endif</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># endif</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># ifndef WINGDIAPI </span><span class=\"comment\">/* From Win32&#39;s &lt;wingdi.h&gt; and &lt;winnt.h&gt; */</span><span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  define CGGL_WINGDIAPI_DEFINED</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  define WINGDIAPI __declspec(dllimport)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># endif</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif </span><span class=\"comment\">/* _WIN32 */</span><span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/* Set up CGGL_API for Win32 dllexport or gcc visibility. */</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef CGGL_API</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># ifdef CGGL_EXPORTS</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  ifdef _WIN32</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#   define CGGL_API __declspec(dllexport)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  elif defined(__GNUC__) &amp;&amp; __GNUC__&gt;=4</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#   define CGGL_API __attribute__ ((visibility(&quot;default&quot;)))</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  elif defined(__SUNPRO_C) || defined(__SUNPRO_CC)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#   define CGGL_API __global</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#   define CGGL_API</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  endif</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  define CGGL_API</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># endif</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef CGGLENTRY</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># ifdef _WIN32</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  define CGGLENTRY __cdecl</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  define CGGLENTRY</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># endif</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/* Use CGGL_NO_OPENGL to avoid including OpenGL headers. */</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef CGGL_NO_OPENGL</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># ifdef __APPLE__</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  include &lt;OpenGL/gl.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#  include &lt;GL/gl.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># endif</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">/*** Data types and enumerants                                         ***/</span></div>\n\
<div class=\"line\"><span class=\"comment\">/*************************************************************************/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> <span class=\"keyword\">enum</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">  CG_GL_MATRIX_IDENTITY             = 0,</div>\n\
<div class=\"line\">  CG_GL_MATRIX_TRANSPOSE            = 1,</div>\n\
<div class=\"line\">  CG_GL_MATRIX_INVERSE              = 2,</div>\n\
<div class=\"line\">  CG_GL_MATRIX_INVERSE_TRANSPOSE    = 3,</div>\n\
<div class=\"line\">  CG_GL_MODELVIEW_MATRIX            = 4,</div>\n\
<div class=\"line\">  CG_GL_PROJECTION_MATRIX           = 5,</div>\n\
<div class=\"line\">  CG_GL_TEXTURE_MATRIX              = 6,</div>\n\
<div class=\"line\">  CG_GL_MODELVIEW_PROJECTION_MATRIX = 7,</div>\n\
<div class=\"line\">  CG_GL_VERTEX                      = 8,</div>\n\
<div class=\"line\">  CG_GL_FRAGMENT                    = 9,</div>\n\
<div class=\"line\">  CG_GL_GEOMETRY                    = 10,</div>\n\
<div class=\"line\">  CG_GL_TESSELLATION_CONTROL        = 11,</div>\n\
<div class=\"line\">  CG_GL_TESSELLATION_EVALUATION     = 12</div>\n\
<div class=\"line\">} CGGLenum;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> <span class=\"keyword\">enum</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">  CG_GL_GLSL_DEFAULT = 0,</div>\n\
<div class=\"line\">  CG_GL_GLSL_100     = 1,</div>\n\
<div class=\"line\">  CG_GL_GLSL_110     = 2,</div>\n\
<div class=\"line\">  CG_GL_GLSL_120     = 3</div>\n\
<div class=\"line\">} CGGLglslversion;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef __cplusplus</span></div>\n\
<div class=\"line\"><span class=\"keyword\">extern</span> <span class=\"stringliteral\">&quot;C&quot;</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">/*** Functions                                                         ***/</span></div>\n\
<div class=\"line\"><span class=\"comment\">/*************************************************************************/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef CGGL_EXPLICIT</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">CGGL_API CGbool CGGLENTRY cgGLIsProfileSupported(CGprofile profile);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLEnableProfile(CGprofile profile);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLDisableProfile(CGprofile profile);</div>\n\
<div class=\"line\">CGGL_API CGprofile CGGLENTRY cgGLGetLatestProfile(CGGLenum profile_type);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetOptimalOptions(CGprofile profile);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">char</span> <span class=\"keyword\">const</span> ** CGGLENTRY cgGLGetOptimalOptions(CGprofile profile);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLLoadProgram(CGprogram program);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLUnloadProgram(CGprogram program);</div>\n\
<div class=\"line\">CGGL_API CGbool CGGLENTRY cgGLIsProgramLoaded(CGprogram program);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLBindProgram(CGprogram program);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLUnbindProgram(CGprofile profile);</div>\n\
<div class=\"line\">CGGL_API GLuint CGGLENTRY cgGLGetProgramID(CGprogram program);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter1f(CGparameter param, <span class=\"keywordtype\">float</span> x);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter2f(CGparameter param, <span class=\"keywordtype\">float</span> x, <span class=\"keywordtype\">float</span> y);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter3f(CGparameter param, <span class=\"keywordtype\">float</span> x, <span class=\"keywordtype\">float</span> y, <span class=\"keywordtype\">float</span> z);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter4f(CGparameter param, <span class=\"keywordtype\">float</span> x, <span class=\"keywordtype\">float</span> y, <span class=\"keywordtype\">float</span> z, <span class=\"keywordtype\">float</span> w);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter1fv(CGparameter param, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter2fv(CGparameter param, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter3fv(CGparameter param, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter4fv(CGparameter param, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter1d(CGparameter param, <span class=\"keywordtype\">double</span> x);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter2d(CGparameter param, <span class=\"keywordtype\">double</span> x, <span class=\"keywordtype\">double</span> y);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter3d(CGparameter param, <span class=\"keywordtype\">double</span> x, <span class=\"keywordtype\">double</span> y, <span class=\"keywordtype\">double</span> z);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter4d(CGparameter param, <span class=\"keywordtype\">double</span> x, <span class=\"keywordtype\">double</span> y, <span class=\"keywordtype\">double</span> z, <span class=\"keywordtype\">double</span> w);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter1dv(CGparameter param, <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter2dv(CGparameter param, <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter3dv(CGparameter param, <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameter4dv(CGparameter param, <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameter1f(CGparameter param, <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameter2f(CGparameter param, <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameter3f(CGparameter param, <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameter4f(CGparameter param, <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameter1d(CGparameter param, <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameter2d(CGparameter param, <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameter3d(CGparameter param, <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameter4d(CGparameter param, <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameterArray1f(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameterArray2f(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameterArray3f(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameterArray4f(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameterArray1d(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameterArray2d(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameterArray3d(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameterArray4d(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameterArray1f(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameterArray2f(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameterArray3f(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameterArray4f(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keywordtype\">float</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameterArray1d(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameterArray2d(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameterArray3d(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetParameterArray4d(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keywordtype\">double</span> *v);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetParameterPointer(CGparameter param, GLint fsize, GLenum type, GLsizei stride, <span class=\"keyword\">const</span> GLvoid *pointer);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLEnableClientState(CGparameter param);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLDisableClientState(CGparameter param);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetMatrixParameterdr(CGparameter param, <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> *matrix);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetMatrixParameterfr(CGparameter param, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *matrix);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetMatrixParameterdc(CGparameter param, <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> *matrix);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetMatrixParameterfc(CGparameter param, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *matrix);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetMatrixParameterdr(CGparameter param, <span class=\"keywordtype\">double</span> *matrix);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetMatrixParameterfr(CGparameter param, <span class=\"keywordtype\">float</span> *matrix);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetMatrixParameterdc(CGparameter param, <span class=\"keywordtype\">double</span> *matrix);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetMatrixParameterfc(CGparameter param, <span class=\"keywordtype\">float</span> *matrix);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetStateMatrixParameter(CGparameter param, CGGLenum matrix, CGGLenum transform);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetMatrixParameterArrayfc(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *matrices);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetMatrixParameterArrayfr(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *matrices);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetMatrixParameterArraydc(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> *matrices);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetMatrixParameterArraydr(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> *matrices);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetMatrixParameterArrayfc(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keywordtype\">float</span> *matrices);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetMatrixParameterArrayfr(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keywordtype\">float</span> *matrices);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetMatrixParameterArraydc(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keywordtype\">double</span> *matrices);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLGetMatrixParameterArraydr(CGparameter param, <span class=\"keywordtype\">long</span> offset, <span class=\"keywordtype\">long</span> nelements, <span class=\"keywordtype\">double</span> *matrices);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetTextureParameter(CGparameter param, GLuint texobj);</div>\n\
<div class=\"line\">CGGL_API GLuint CGGLENTRY cgGLGetTextureParameter(CGparameter param);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLEnableTextureParameter(CGparameter param);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLDisableTextureParameter(CGparameter param);</div>\n\
<div class=\"line\">CGGL_API GLenum CGGLENTRY cgGLGetTextureEnum(CGparameter param);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetManageTextureParameters(CGcontext ctx, CGbool flag);</div>\n\
<div class=\"line\">CGGL_API CGbool CGGLENTRY cgGLGetManageTextureParameters(CGcontext ctx);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetupSampler(CGparameter param, GLuint texobj);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLRegisterStates(CGcontext ctx);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLEnableProgramProfiles(CGprogram program);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLDisableProgramProfiles(CGprogram program);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetDebugMode(CGbool debug);</div>\n\
<div class=\"line\">CGGL_API CGbuffer CGGLENTRY cgGLCreateBuffer(CGcontext context, <span class=\"keywordtype\">int</span> size, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span> *data, GLenum bufferUsage);</div>\n\
<div class=\"line\">CGGL_API GLuint CGGLENTRY cgGLGetBufferObject(CGbuffer buffer);</div>\n\
<div class=\"line\">CGGL_API CGbuffer CGGLENTRY cgGLCreateBufferFromObject(CGcontext context, GLuint obj, CGbool manageObject);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetContextOptimalOptions(CGcontext context, CGprofile profile);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">char</span> <span class=\"keyword\">const</span> ** CGGLENTRY cgGLGetContextOptimalOptions(CGcontext context, CGprofile profile);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keywordtype\">void</span> CGGLENTRY cgGLSetContextGLSLVersion(CGcontext context, CGGLglslversion version);</div>\n\
<div class=\"line\">CGGL_API CGGLglslversion CGGLENTRY cgGLGetContextGLSLVersion(CGcontext context);</div>\n\
<div class=\"line\">CGGL_API <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> * CGGLENTRY cgGLGetGLSLVersionString(CGGLglslversion version);</div>\n\
<div class=\"line\">CGGL_API CGGLglslversion CGGLENTRY cgGLGetGLSLVersion(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *version_string);</div>\n\
<div class=\"line\">CGGL_API CGGLglslversion CGGLENTRY cgGLDetectGLSLVersion(<span class=\"keywordtype\">void</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef __cplusplus</span></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef CGGL_APIENTRY_DEFINED</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># undef CGGL_APIENTRY_DEFINED</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># undef APIENTRY</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef CGGL_WINGDIAPI_DEFINED</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># undef CGGL_WINGDIAPI_DEFINED</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\"># undef WINGDIAPI</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";