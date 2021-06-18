var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;

var blueDuck;
var redDuck;
var ducks;

var blueDuckImg;
var redDuckImg;

var grass;

var burrowImg;

var timer = 60;

function preload(){
  blueDuckImg = loadImage("images/blueDuck.png");
  redDuckImg = loadImage("images/redDuck.png");

  grass = loadImage("images/grass_Background.jpg");

  burrowImg = loadImage("images/Burrow.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();

    countdown();
  }

  if(gameState === 2){
    game.end();
  }
}

function countdown(){
  if(frameCount % 30 === 0 && timer > 0){
    timer--;
  }

  stroke("black");
  fill("black");
  textSize(30);
  text("Time Left: 00:" + timer, 50, 50);

  if(timer === 0){
    game.update(2);
  }
}