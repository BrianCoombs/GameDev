//course: https://www.youtube.com/watch?v=GFO_txvwK_c&t=138s


const canvas = document.getElementById('canvas1');

//Defines all the 2d drawing methods in ctx
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = './resources/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 8;
let gameFrame = 0;
const staggerFrames = 4;
let animations = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 9,
  },
  {
    name: "run",
    frames: 7,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "getHit",
    frames: 4,
  },
];

let numAnimations = {
  0: 6,
  1: 6,
  2: 6,
  3: 8,
  4: 10,
  5: 4,
  6: 6,
  7: 6,
  8: 11,
  9: 3,
}

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //To draw a rectangle
  //ctx.fillRect(50,50,100,100);
  //To draw a whole image
  //ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  //Moves through animations horizontally

  //Cycles through animations
  ctx.drawImage(playerImage, frameX*spriteWidth,frameY*spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
  if(gameFrame % staggerFrames == 0){
    if(frameX < animations[frameY].frames) frameX++;
    else frameX=0;
  }
  gameFrame++

  requestAnimationFrame(animate);
}
animate();
