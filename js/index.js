new App({
  canvas: document.querySelector('#canvas'),
  colorPalette: new ColorPalette({
    element: document.querySelector('#color-palette'),
    colors: [
      { r: 255, g: 255, b: 255 },
      { r: 0, g: 0, b: 0 },
      { r: 255, g: 0, b: 0 },
      { r: 0, g: 255, b: 0 },
      { r: 0, g: 0, b: 255 }
    ]
  }),

  colorPiker: new ColorPiker({
    element: document.querySelector('#color-picker')
  })
});
