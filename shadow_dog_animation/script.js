
const canvas = document.getElementById('canvas1');

//Defines all the 2d drawing methods in ctx
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = './resources/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //To draw a rectangle
  //ctx.fillRect(50,50,100,100);
  //To draw a whole image
  //ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(playerImage, 0,2*spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
  requestAnimationFrame(animate);
}

animate();
