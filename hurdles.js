class Hurdles {

  constructor() {
    this.r = 100;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 25;
  }

  show() {
    image(hImg, this.x, this.y, this.r, this.r);
  }

}
