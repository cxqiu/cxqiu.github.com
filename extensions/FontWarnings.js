/*
 *  /MathJax/extensions/FontWarnings.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

(function(d,g){var f="1.1";var b=d.CombineConfig("FontWarnings",{messageStyle:{position:"fixed",bottom:"4em",left:"3em",width:"40em",border:"3px solid #880000","background-color":"#E0E0E0",padding:"1em","font-size":"small","white-space":"normal","border-radius":".75em","-webkit-border-radius":".75em","-moz-border-radius":".75em","-khtml-border-radius":".75em","box-shadow":"4px 4px 10px #AAAAAA","-webkit-box-shadow":"4px 4px 10px #AAAAAA","-moz-box-shadow":"4px 4px 10px #AAAAAA","-khtml-box-shadow":"4px 4px 10px #AAAAAA",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=3, OffY=3, Color='gray', Positive='true')"},Message:{webFont:[["closeBox"],"MathJax is using web-based fonts to display the mathematics ","on this page.  These take time to download, so the page would","render faster if you installed math fonts directly in your ","system's font folder.",["fonts"]],imageFonts:[["closeBox"],"MathJax is using its image fonts rather than local or web-based fonts. ","This will render slower than usual, and the mathematics may not print ","at the full resolution of your printer.",["fonts"],["webfonts"]],noFonts:[["closeBox"],"MathJax is unable to locate a font to use to display ","its mathematics, and image fonts are not available, so it ","is falling back on generic unicode characters in hopes that ","your browser will be able to display them.  Some characters ","may not show up properly, or possibly not at all.",["fonts"],["webfonts"]]},HTML:{closeBox:[["div",{style:{position:"absolute",overflow:"hidden",top:".1em",right:".1em",border:"1px outset",width:"1em",height:"1em","text-align":"center",cursor:"pointer","background-color":"#EEEEEE",color:"#606060","border-radius":".5em","-webkit-border-radius":".5em","-moz-border-radius":".5em","-khtml-border-radius":".5em"},onclick:function(){if(c.div&&c.fade===0){if(c.timer){clearTimeout(c.timer)}c.div.style.display="none"}}},[["span",{style:{position:"relative",bottom:".2em"}},["x"]]]]],webfonts:[["p"],"Most modern browsers allow for fonts to be downloaded over the web. ","Updating to a more recent version of your browser (or changing browsers) ","could improve the quality of the mathematics on this page."],fonts:[["p"],"MathJax can use either the ",["a",{href:"http://www.stixfonts.org/",target:"_blank"},"STIX fonts"]," or the ",["a",{href:"http://www.mathjax.org/help/fonts/",target:"_blank"},["MathJax TeX fonts"]],".  Download and install either one to improve your MathJax experience."],STIXfonts:[["p"],"This page is designed to use the ",["a",{href:"http://www.stixfonts.org/",target:"_blank"},"STIX fonts"],".  Download and install those fonts to improve your MathJax experience."],TeXfonts:[["p"],"This page is designed to use the ",["a",{href:"http://www.mathjax.org/help/fonts/",target:"_blank"},["MathJax TeX fonts"]],".  Download and install those fonts to improve your MathJax experience."]},removeAfter:12*1000,fadeoutSteps:10,fadeoutTime:1.5*1000});if(MathJax.Hub.Browser.isIE9&&document.documentMode>=9){delete b.messageStyle.filter}var c={div:null,fade:0};var a=function(k){if(c.div){return}var h=MathJax.OutputJax["HTML-CSS"],l=document.body;if(d.Browser.isMSIE){if(b.messageStyle.position==="fixed"){MathJax.Message.Init();l=document.getElementById("MathJax_MSIE_Frame");b.messageStyle.position="absolute"}}else{delete b.messageStyle.filter}b.messageStyle.maxWidth=(document.body.clientWidth-75)+"px";var j=0;while(j<k.length){if(k[j] instanceof Array&&b.HTML[k[j][0]]){k.splice.apply(k,[j,1].concat(b.HTML[k[j][0]]))}else{j++}}c.div=h.addElement(l,"div",{id:"MathJax_FontWarning",style:b.messageStyle},k);if(b.removeAfter){d.Register.StartupHook("End",function(){c.timer=setTimeout(e,b.removeAfter)})}g.Cookie.Set("fontWarn",{warned:true})};var e=function(){c.fade++;if(c.timer){delete c.timer}if(c.fade<b.fadeoutSteps){var h=1-c.fade/b.fadeoutSteps;c.div.style.opacity=h;c.div.style.filter="alpha(opacity="+Math.floor(100*h)+")";setTimeout(e,b.fadeoutTime/b.fadeoutSteps)}else{c.div.style.display="none"}};if(!g.Cookie.Get("fontWarn").warned){d.Startup.signal.Interest(function(k){if(k.match(/HTML-CSS Jax - /)&&!c.div){var h=MathJax.OutputJax["HTML-CSS"],l=h.config.availableFonts,j;var i=(l&&l.length);if(!i){b.HTML.fonts=[""]}else{if(l.length===1){b.HTML.fonts=b.HTML[l[0]+"fonts"]}}if(h.allowWebFonts){b.HTML.webfonts=[""]}if(k.match(/- Web-Font/)){if(i){j="webFont"}}else{if(k.match(/- using image fonts/)){j="imageFonts"}else{if(k.match(/- no valid font/)){j="noFonts"}}}if(j&&b.Message[j]){a(b.Message[j])}}})}})(MathJax.Hub,MathJax.HTML);MathJax.Ajax.loadComplete("[MathJax]/extensions/FontWarnings.js");