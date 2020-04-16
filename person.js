class Person {
  constructor() {
    this.r = 300;
    this.s = 175;
    this.x = 20;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2;
  }

  jump() {
    if (this.y == height - this.r) {
    this.vy = -35;
    }
  }

  hits(hurdles) {
    return collideRectRect(this.x, this.y, this.s, this.r, hurdles.x, hurdles.y, hurdles.r, hurdles.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    image(pImg, this.x, this.y, this.s, this.r);
  }

}
