class svgShape {
  constructor() {
    this.color = "";
  }

  setSvgColor(colorVar) {
    this.color = colorVar;
  }
}

export class Triangle extends svgShape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

export class Square extends svgShape {
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}

export class Circle extends svgShape {
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}
