class App {
  constructor({ canvas, colorPalette, colorPiker }) {
    this.canvas = canvas;
    this.colorPalette = colorPalette;
    this.colorPiker = colorPiker;
    this.context = null;

    this.isDrawing = false;

    this.init();
  }
  init() {
    this.context = this.canvas.getContext('2d');

    this.colorPiker.onAdd = color => this.colorPalette.addColor(color);

    this.canvas.addEventListener(
      'mousedown',
      this.handleCanvasMousedown.bind(this)
    );
    this.canvas.addEventListener(
      'mousemove',
      this.handleCanvasMousemove.bind(this)
    );

    this.canvas.addEventListener(
      'mouseup',
      this.handleCanvasMouseup.bind(this)
    );

    this.canvas.addEventListener(
      'mouseleave',
      this.handleCanvasMouseleave.bind(this)
    );
    document
      .querySelector('#clear-canvas-button')
      .addEventListener('click', this.handleCanvasClear.bind(this));
    document
      .querySelector('#brush-size-slider')
      .addEventListener('change', this.handleBrushSizeChange.bind(this));
  }
  handleCanvasMousedown(event) {
    console.log('event: ', event);

    this.lastEvent = event;
    this.isDrawing = true;
  }
  handleCanvasMousemove(event) {
    if (this.isDrawing) {
      this.context.beginPath();
      this.context.moveTo(this.lastEvent.offsetX, this.lastEvent.offsetY);
      this.context.lineTo(event.offsetX, event.offsetY);
      this.context.strokeStyle = this.colorPalette.currentColor;

      this.context.stroke();
      this.lastEvent = event;
    }
  }
  handleCanvasMouseup(event) {
    this.lastEvent = event;
    this.isDrawing = false;
  }
  handleCanvasMouseleave(event) {
    console.log('handleCanvasMouseleave');
    this.lastEvent = event;
    // this.isDrawing = false;
  }
  //===================

  handleCanvasClear(event) {
    // console.log('CanvasClear');

    // this.context.fillRect(0, 0, this.canvas.width, this.canvas.heigh);

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  handleBrushSizeChange({ target }) {
    this.context.lineWidth = parseInt(target.value, 10);
  }
}
