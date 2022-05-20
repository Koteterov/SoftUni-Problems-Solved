class Rectangle {
  constructor(w, h, col) {
    this.width = w;
    this.height = h;
    this.color = col;
  }
  calcArea() {
    return this.width * this.height;
  }
}

let rect = new Rectangle(4, 5, "Red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
