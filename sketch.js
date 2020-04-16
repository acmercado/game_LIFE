let person;
let pImg;
let hImg;
let bImg;
let hurdles = [];
let soundClassifier;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
  pImg = loadImage('person.png');
  hImg = loadImage('hurdles.png');
  bImg = loadImage('background.jpg');
}

function mousePressed() {
  hurdles.push(new Hurdles());
}


function setup() {
  createCanvas(800, 450);
  person = new Person();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    person.jump();
  }
}

function keyPressed() {
  if (key == ' ') {
    person.jump();
  }
}

function draw() {
  if (random(1) < 0.005) {
    hurdles.push(new Hurdles());
  }

  background(bImg);

  for (let h of hurdles) {
    h.move();
    h.show();
    if (person.hits(h)) {
      console.log('game over');
      noLoop();
    }
  }

  person.show();
  person.move();


}
