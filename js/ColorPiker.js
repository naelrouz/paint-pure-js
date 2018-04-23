class ColorPiker {
  constructor({ element, previewElement }) {
    this.element = element;
    this.previewElement = previewElement;
    this.color = {
      r: 0,
      g: 0,
      b: 0
    };

    this.onAdd = () => {};

    this.init();
  }
  init() {
    this.previewElement = this.element.querySelector('.color-picker__preview');
    this.setPreviewElementColor();

    const selectColorSliders = this.element.querySelectorAll(
      '.color-picker__slider'
    );

    for (const slider of selectColorSliders) {
      slider.addEventListener('input', this.handleColorChange.bind(this));
    }

    // selectColorSliders.forEach(slider =>
    //   slider.addEventListener('input', this.setPreviewElementColor.bind(this))
    // );

    // Subscriptions to control events
    document
      .querySelector('#new-color-button')
      .addEventListener('click', this.handleColorPikerOpen.bind(this));

    this.element
      .querySelector('.color-picker__close-button')
      .addEventListener('click', this.handleColorPikerClose.bind(this));

    this.element
      .querySelector('.color-picker__add-button')
      .addEventListener('click', this.handleAddColorToPalettes.bind(this));
  }
  // Methods
  setPreviewElementColor() {
    const { r, g, b } = this.color;
    // console.log('color: ', this.color);

    this.previewElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
  open() {
    this.element.style.display = 'block';
  }
  close() {
    this.element.style.display = 'none';
  }
  // Handlers
  handleColorChange({ target }) {
    this.color[target.name] = parseInt(target.value, 10);

    this.setPreviewElementColor();
  }
  handleColorPikerOpen(event) {
    this.open();
  }
  handleColorPikerClose(event) {
    this.close();
  }
  handleAddColorToPalettes(event) {
    this.onAdd(this.color);
    this.close();
  }
}
