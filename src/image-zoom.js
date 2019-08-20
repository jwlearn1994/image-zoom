/*!
 * Image-Zoom.js v1.0.0
 * (c) 2019 Johnny Wang
 * Released under the MIT License.
 */
(function (global, factory){
  // Nodejs 環境
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  // AMD 環境
  typeof define === 'function' && define.amd ? define(factory) :
  // Browser 環境
  (global = global || self, global.ImageZoom = factory());
}(this, function() { 'use strict';


  /*  */


  // W3school Zoom Image
  const getCursorPos = function(target, e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = target.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }

  const setStyle = function(e) {
    var t = document.createElement("style");

    t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t);
  };


  /*  */


  const ZoomImage = function(wrapperID, options) {
    const self = this;
    self.wrapper = document.getElementById(wrapperID);
    self.image = self.wrapper.querySelector('img');
    self.result = null;
    self.opts = Object.assign({
      resultID: undefined,
      lenClass: 'image-zoom-len'
    }, options);


    // Set Style(初始化 CSS)
    let styles = `#${wrapperID}{position:relative;cursor:grabbing;}#${wrapperID} .image-zoom-len{position:absolute;top:0;width:50px;height:50px;background:#ddd;opacity:0;transition:opacity .3s;}#${wrapperID}:hover .image-zoom-len{opacity:.5;}`;


    // Set result target(設置放大圖位置，未指定時預設為圖片的 wrapper 自身)
    if (self.opts.resultID) {
      self.result = document.getElementById(self.opts.resultID);
    } else {
      self.result = self.wrapper;
      styles += `#${wrapperID}:hover img{opacity:0;}#${wrapperID} img{transition:opacity .5s;}`;
    }
    setStyle(styles);


    // Create Len(初始化 len)
    const createLen = className => {
      let len = document.createElement('div');
      len.setAttribute('class', className);
      self.image.parentNode.appendChild(len);
      return len;
    };

    const len = createLen(self.opts.lenClass);


    // Ratio(放大比例)
    const ratio = {
      x: self.image.offsetWidth / len.offsetWidth,
      y: self.image.offsetHeight / len.offsetHeight
    };
    
    // Set result's backgroundImage with Ratio(設置放大圖、尺寸)
    self.result.style.backgroundImage = `url(${self.image.src})`;
    self.result.style.backgroundSize = `${self.image.width * ratio.x}px ${self.image.height * ratio.y}px`;
    

    // Wrapper mousemove event(設置滑鼠移動事件)
    self.wrapper.addEventListener('mousemove', function(e){
      e.preventDefault();
      const image = self.image;
      const pos = getCursorPos(image, e);
      let x = pos.x - len.offsetWidth / 2;
      let y = pos.y - len.offsetHeight / 2;
      
      // Fix out of range
      if (x > image.width - len.offsetWidth) {x = image.width - len.offsetWidth;}
      if (x < 0) return;
      if (y > image.height - len.offsetHeight) {y = image.height - len.offsetHeight;}
      if (y < 0) return;
      
      // Set Position
      len.style.left = x + 'px';
      len.style.top = y + 'px';
      self.result.style.backgroundPosition = "-" + (x * ratio.x) + "px -" + (y * ratio.y) + "px";
    })

  }

  return ZoomImage;

}));
