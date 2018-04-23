class ColorPalette {
  constructor({ element, colors = [] }) {
    if (!element) {
      throw Error('No element');
    }
    this.element = element;
    this.colorsElements = [];
    this.colors = colors;
    this.currentColor = null;

    this.init();
  }
  init() {
    this.element.addEventListener(
      'click',
      this.handleSetCurrentColor.bind(this)
    );
    for (let color of this.colors) {
      this.addColorElement(color);
    }
  }
  addColorElement(color) {
    const li = document.createElement('li');
    li.className = 'color-palette__color';
    const { r, g, b } = color;
    li.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    this.element.appendChild(li);
    this.colorsElements.push(li);
  }
  addColor(color) {
    console.log('color :', color);
    this.addColorElement(color);
  }
  handleSetCurrentColor({ target }) {
    // console.log('target :', target);
    if (target.tagName === 'LI') {
      this.currentColor = target.style.backgroundColor;
      //   console.log('currentColor :', this.currentColor);
      //   this.element.querySelectors('li');

      for (let element of this.colorsElements) {
        element.classList.remove('selected');
      }

      target.classList.add('selected');
    }
  }
}
