let person;
let pImg;
let hImg;
let bImg;
let hurdles = [];
let soundClassifier;
// let score = 0;
// let state = 'splash';

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
  // textAlign(CENTER);
  // textSize(20);
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

  // switch (state) {
  //   case ('splash'):
  //     splashScreenKeyPressed();
  //     break;
  //   case ('gamePlay'):
  //     gamePlayKeyPressed();
  //     break;
  //   case ('youWon'):
  //     youWon();
  //     break;
  //   case ('youLose'):
  //     // youLose code
  //     break;
  //   default:
  //     break;
  // }

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

  // switch (state) {
  //   case ('splash'):
  //     splashScreen();
  //     break;
  //   case ('gamePlay'):
  //     gamePlay();
  //     break;
  //   case ('youWon'):
  //     youWon();
  //     break;
  //   case ('youLose'):
  //     // youLose code
  //     break;
  //   default:
  //     break;
  // }

}

// function splashScreen() {
//   background(0);
//   fill(255);
//   text('click to start', w / 2, h / 2);
// }

// function gamePlay() {
//   if (random(1) < 0.005) {
//     hurdles.push(new Hurdles());
//   }
//
//   background(bImg);
//
//   for (let h of hurdles) {
//     h.move();
//     h.show();
//     if (person.hits(h)) {
//       console.log('game over');
//       noLoop();
//     }
//   }
//
//   person.show();
//   person.move();
// }
//
// function youWon() {
//   background(random(255), random(255), random(255));
//   fill(255);
//   text('You Won!', w / 2, h / 2);
// }
//
// function splashScreenKeyPressed() {
//   state = 'gamePlay';
// }
//
// function gamePlayKeyPressed() {
//   if (key == ' ') {
//     person.jump();
//   }
//
//   if (dist(mouseX, mouseY, 300, 100) <= 25) {
//     score++;
//     console.log('score');
//   }
//
//   if (score >= 12) {
//     state = 'youWon'
//   }
// }
