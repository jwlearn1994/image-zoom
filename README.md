# ImageZoom

練習製作簡單的圖片放大預覽功能套件

## Usage

預設設定使用，在需要此功能的圖片 img 外包裹一層div(以下稱wrapper)，並將該 wrapper id 給套件初始化。

```html
<div id="image-box">
  <img src="example.jpg"/>
</div>
```

```js
new ImageZoom('image-box');
```

此用法預設會直接在 wrapper 內展示放大圖。

技術說明：

自動淡出 img 標籤，同時設置 wrapper 的 backgroundImage、Size、Position。


## Custom Usage

- ResultID

也可以指定輸出放大圖的 id 位置，注意！套件不會幫您設置對象寬高，請自行設定對象的 CSS。

```html
<div id="image-box">
  <img src="example.jpg"/>
</div>
<div id="result"></div>
```

```js
new ImageZoom('image-box', {
  resultID: 'result'
});
```

- lenClass

若您需要客製化的 len，可以將該 len 的 className 傳給套件。

```js
new ImageZoom('image-box', {
  lenClass: '.mylen'
});
```

以下是預設的 lenClass 的 CSS 設置

```css
#[wrapperID]:hover .image-zoom-len {
  opacity:.5;
}

.image-zoom-len {
  position: absolute;
  top: 0;
  width: 50px;
  height: 50px;
  background: #ddd;
  opacity: 0;
  transition: opacity .3s;
}
```