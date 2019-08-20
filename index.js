"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).ImageZoom=t()}(void 0,function(){return function(e,t){var a=this;a.wrapper=document.getElementById(e),a.image=a.wrapper.querySelector("img"),a.result=null,a.opts=Object.assign({resultID:void 0,lenClass:"image-zoom-len"},t);var o="#".concat(e,"{position:relative;cursor:grabbing;}#").concat(e," .image-zoom-len{position:absolute;top:0;width:50px;height:50px;background:#ddd;opacity:0;transition:opacity .3s;}#").concat(e,":hover .image-zoom-len{opacity:.5;}");a.opts.resultID?a.result=document.getElementById(a.opts.resultID):(a.result=a.wrapper,o+="#".concat(e,":hover img{opacity:0;}#").concat(e," img{transition:opacity .5s;}")),function(e){var t=document.createElement("style");t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)}(o);var n,i,s=(n=a.opts.lenClass,(i=document.createElement("div")).setAttribute("class",n),a.image.parentNode.appendChild(i),i),r=a.image.offsetWidth/s.offsetWidth,p=a.image.offsetHeight/s.offsetHeight;a.result.style.backgroundImage="url(".concat(a.image.src,")"),a.result.style.backgroundSize="".concat(a.image.width*r,"px ").concat(a.image.height*p,"px"),a.wrapper.addEventListener("mousemove",function(e){e.preventDefault();var t=a.image,o=function(e,t){var o,n=0,i=0;return t=t||window.event,o=e.getBoundingClientRect(),n=t.pageX-o.left,i=t.pageY-o.top,{x:n-=window.pageXOffset,y:i-=window.pageYOffset}}(t,e),n=o.x-s.offsetWidth/2,i=o.y-s.offsetHeight/2;n>t.width-s.offsetWidth&&(n=t.width-s.offsetWidth),n<0||(i>t.height-s.offsetHeight&&(i=t.height-s.offsetHeight),i<0||(s.style.left=n+"px",s.style.top=i+"px",a.result.style.backgroundPosition="-"+n*r+"px -"+i*p+"px"))})}});