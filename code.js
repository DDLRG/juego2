var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall = createSprite(190, 120, 250, 3);
var wall1 = createSprite(190, 260, 250, 3);
var wall2 = createSprite(67, 145, 3, 50);
var wall3 = createSprite(67, 235, 3, 50);
var wall4 = createSprite(313, 145, 3, 50);
var wall5 = createSprite(313, 235, 3, 50);
var wall6 = createSprite(41, 170, 50, 3);
var wall7 = createSprite(41, 210, 50, 3);
var wall8 = createSprite(337, 210, 50, 3);
var wall9 = createSprite(337, 170, 50, 3);
var wall10 = createSprite(18, 190, 3, 40);
var wall11 = createSprite(361, 190, 3, 40);

var man = createSprite(35, 190, 13, 13);
man.shapeColor = "cyan";

var ball = createSprite(100, 255, 10, 10);
ball.shapeColor = "red";
ball.velocityY = 5;
var ball1 = createSprite(150, 125, 10, 10);
ball1.shapeColor = "red";
ball1.velocityY = 5;
var ball2 = createSprite(200, 255, 10, 10);
ball2.shapeColor = "red";
ball2.velocityY = -5;
var ball3 = createSprite(250, 125, 10, 10);
ball3.shapeColor = "red";
ball3.velocityY = 5;
var ball4 = createSprite(300, 255, 10, 10);
ball4.shapeColor = "red";
ball4.velocityY = -5;
var vidas = 0;
playSound("assets/category_music/clear_evidence_loop1.mp3", true);
function draw() {
  background("white");
  text("deaths: " + vidas, 200, 100);
  fill("blue");
  rect(18, 170, 52, 40);
  rect(308, 170, 52, 40);
  drawSprites();
  ball.bounceOff(wall);
  ball.bounceOff(wall1);
  ball1.bounceOff(wall);
  ball1.bounceOff(wall1);
  ball2.bounceOff(wall);
  ball2.bounceOff(wall1);
  ball3.bounceOff(wall);
  ball3.bounceOff(wall1);
  ball4.bounceOff(wall);
  ball4.bounceOff(wall1);
  
  man.bounceOff(wall);
  man.bounceOff(wall2);
  man.bounceOff(wall3);
  man.bounceOff(wall4);
  man.bounceOff(wall5);
  man.bounceOff(wall6);
  man.bounceOff(wall7);
  man.bounceOff(wall8);
  man.bounceOff(wall9);
  man.bounceOff(wall10);
  man.bounceOff(wall11);
  
  if (keyDown("right")) {
    man.x = man.x + 2;
  }
  if (keyDown("left")) {
   man.x = man.x - 2; 
  }
  if (keyDown("down")) {
    man.y = man.y + 2;
  }
  if (keyDown("up")) {
    man.y = man.y - 2;
  }
  if (man.isTouching(wall)||
  man.isTouching(wall1)||
  man.isTouching(ball)||
  man.isTouching(ball1)||
  man.isTouching(ball2)||
  man.isTouching(ball3))
{
  playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  vidas = vidas + 1;
   man.x = 40;
   man.y = 190;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
