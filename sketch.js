var alien1Image, alien2Image, alienGroup;
var fruit1Image, fruit2Image, fruit3Image, fruit4Image, fruitGroup;
var gameOverImage;
var backGround, backGroundImage;
var sword, swordImage;
var gameState;
var play = 0;
var end = 1;
var score = 0;
var knifeSound, gameOverSound;


function preload() {
  swordImage = loadImage("sword.png");
  alien1Image = loadImage("alien1.png");
  alien2Image = loadImage("alien2.png");
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  gameOverImage = loadImage("gameOver.png");
  backGroundImage = loadImage("backGround.jpg");
  knifeSound = loadSound("knifeSwooshSound.mp3");
  gameOverSound = loadSound("gameOver.mp3");
}

function setup() {
  createCanvas(600, 350);
  sword = createSprite(350, 200, 10, 10);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  // sword.debug=true;
  sword.setCollider("circle", 0, 0, 60)
  gameState = play;
  backGround = createSprite(300, 170, 10, 10);
  backGround.addImage(backGroundImage);
  backGround.scale = 2;
  fruitGroup = createGroup();
  alienGroup = createGroup();
}

function draw() {
  background("black");
  if (gameState === play) {
    sword.y = World.mouseY;
    sword.x = World.mouseX;
    if (fruitGroup.isTouching(sword)) {
      score++;
      fruitGroup.destroyEach();
      knifeSound.play();
    }
    if (alienGroup.isTouching(sword)) {
      score = 0;
      gameState = end;
      gameOverSound.play();
    }
  }
  if (gameState === end) {
    fruitGroup.destroyEach();
    alienGroup.destroyEach();
    sword.addImage(gameOverImage);
    sword.y = 180;
    sword.x = 300;
  }
  sword.depth = backGround.depth;
  sword.depth++;

  alienUpSpawn();
  alienDownSpawn();
  alienRightSpawn();
  alienLeftSpawn();
  fruitDownSpawn();
  fruitUpSpawn();
  fruitRightSpawn();
  fruitLeftSpawn();

  drawSprites();
  text("score:" + score, 300, 20);
}


function fruitDownSpawn() {
  if (frameCount % 80 === 0) {
    var fruit = createSprite(random(20, 580), 360, 10, 10);
    fruit.velocityY = -(7 + (score / 4));
    fruit.scale = 0.2;
    // fruit.debug=true;
    fruit.depth = backGround.depth;
    fruit.depth++;
    fruit.setCollider("circle", 0, 0, 100);
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1:
        fruit.addImage(fruit1Image);
        break;
      case 2:
        fruit.addImage(fruit2Image);
        break;
      case 3:
        fruit.addImage(fruit3Image);
        break;
      case 4:
        fruit.addImage(fruit4Image);
        break;
      default:
        break;
    }
    fruit.lifetime = 150;
    fruitGroup.add(fruit);
  }
}

function fruitUpSpawn() {
  if (frameCount % 120 === 0) {
    var fruitUp = createSprite(random(20, 580), -20, 10, 10);
    fruitUp.velocityY = (7 + (score / 4));
    fruitUp.scale = 0.2;
    // fruit.debug=true;
    fruitUp.depth = backGround.depth;
    fruitUp.depth++;
    fruitUp.setCollider("circle", 0, 0, 100);
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1:
        fruitUp.addImage(fruit1Image);
        break;
      case 2:
        fruitUp.addImage(fruit2Image);
        break;
      case 3:
        fruitUp.addImage(fruit3Image);
        break;
      case 4:
        fruitUp.addImage(fruit4Image);
        break;
      default:
        break;
    }
    fruitUp.lifetime = 150;
    fruitGroup.add(fruitUp);
  }
}

function fruitRightSpawn() {
  if (frameCount % 200 === 0) {
    var fruitRight = createSprite(620, random(20, 330), 10, 10);
    fruitRight.velocityY = -(7 + (score / 4));
    fruitRight.scale = 0.2;
    // fruit.debug=true;
    fruitRight.depth = backGround.depth;
    fruitRight.depth++;
    fruitRight.setCollider("circle", 0, 0, 100);
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1:
        fruitRight.addImage(fruit1Image);
        break;
      case 2:
        fruitRight.addImage(fruit2Image);
        break;
      case 3:
        fruitRight.addImage(fruit3Image);
        break;
      case 4:
        fruitRight.addImage(fruit4Image);
        break;
      default:
        break;
    }
    fruitRight.lifetime = 150;
    fruitGroup.add(fruitRight);
  }
}

function fruitLeftSpawn() {
  if (frameCount % 280 === 0) {
    var fruitLeft = createSprite(-20, random(20, 330), 10, 10);
    fruitLeft.velocityX = -(7 + (score / 4));
    fruitLeft.scale = 0.2;
    // fruit.debug=true;
    fruitLeft.depth = backGround.depth;
    fruitLeft.depth++;
    fruitLeft.setCollider("circle", 0, 0, 100);
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1:
        fruitLeft.addImage(fruit1Image);
        break;
      case 2:
        fruitLeft.addImage(fruit2Image);
        break;
      case 3:
        fruitLeft.addImage(fruit3Image);
        break;
      case 4:
        fruitLeft.addImage(fruit4Image);
        break;
      default:
        break;
    }
    fruitLeft.lifetime = 150;
    fruitGroup.add(fruitLeft);
  }
}



function alienDownSpawn() {
  if (frameCount % 200 === 0) {
    var alien = createSprite(random(20, 580), 370, 10, 10);
    alien.velocityY = -(8 + (score / 5));
    alien.scale = 0.8;
    alien.depth = backGround.depth;
    alien.depth++;
    // alien.debug=true;
    alien.setCollider("circle", 0, 0, 20);
    var randDown = Math.round(random(1, 2))
    switch (randDown) {
      case 1:
        alien.addImage(alien1Image);
        break;
      case 2:
        alien.addImage(alien2Image);
        break;
      default:
        break;
    }
    alien.lifetime = 100;
    alienGroup.add(alien);
  }
}

function alienUpSpawn() {
  if (frameCount % 200 === 0) {
    var alienUp = createSprite(random(20, 580), -20, 10, 10);
    alienUp.velocityY = (8 + (score / 5));
    alienUp.scale = 0.8;
    alienUp.depth = backGround.depth;
    alienUp.depth++;
    // alien.debug=true;
    alienUp.setCollider("circle", 0, 0, 20);
    var randUp = Math.round(random(1, 2))
    switch (randUp) {
      case 1:
        alienUp.addImage(alien1Image);
        break;
      case 2:
        alienUp.addImage(alien2Image);
        break;
      default:
        break;
    }
    alienUp.lifetime = 100;
    alienGroup.add(alienUp);
  }
}

function alienRightSpawn() {
  if (frameCount % 200 === 0) {
    var alienRight = createSprite(620,random(20, 330), 10, 10);
    alienRight.velocityX = -(8 + (score / 5));
    alienRight.scale = 0.8;
    alienRight.depth = backGround.depth;
    alienRight.depth++;
    // alien.debug=true;
    alienRight.setCollider("circle", 0, 0, 20);
    var randRight = Math.round(random(1, 2))
    switch (randRight) {
      case 1:
        alienRight.addImage(alien1Image);
        break;
      case 2:
        alienRight.addImage(alien2Image);
        break;
      default:
        break;
    }
    alienRight.lifetime = 100;
    alienGroup.add(alienRight);
  }
}

function alienLeftSpawn() {
  if (frameCount % 200 === 0) {
    var alien = createSprite(-20, random(20, 480), 10, 10);
    alien.velocityX = (8 + (score / 5));
    alien.scale = 0.8;
    alien.depth = backGround.depth;
    alien.depth++;
    // alien.debug=true;
    alien.setCollider("circle", 0, 0, 20);
    var randLeft = Math.round(random(1, 2))
    switch (randLeft) {
      case 1:
        alien.addImage(alien1Image);
        break;
      case 2:
        alien.addImage(alien2Image);
        break;
      default:
        break;
    }
    alien.lifetime = 100;
    alienGroup.add(alien);
  }
}