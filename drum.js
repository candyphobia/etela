let timer = 20;
let drumMiddle;
let drumRim;
let notification;
let notificationPlayed = false;
let backButton;
let resetButton;
var circleX;
var circleY;
var drumstick1;
var drumstick2;
var bgSound;

function preload() {
    soundFormats('wav');
    drumMiddle = loadSound('files/drumMiddle.wav');
    drumRim = loadSound('files/drumRim.wav')
    bgSound = loadSound('files/bgSounds.wav');
}   

function setup(){
    createCanvas(windowWidth,windowHeight);
    notification = createAudio('files/chime.wav');
    bgSound.loop();
    //Back
    drumstick1 = loadImage('files/drumstick1.png');
    drumstick2 = loadImage('files/drumstick2.png');
    backButton = createImg('files/back_drum.svg');
    backButton.position(10,10);
    backButton.size(80,80);
    backButton.mousePressed(back);
    backButton.class('button');
    //Reset
    resetButton = createImg('files/reset_drum.svg');
    resetButton.mousePressed(resetTimer);
    resetButton.size(200,100);
    resetButton.position(windowWidth/2-100,windowHeight/2-50);
    resetButton.hide();
    resetButton.class('button');
    circleX = windowWidth/2;
    circleY = windowHeight/2;
    stroke(142,74,11);
    strokeWeight(5);
    strokeWeight(5);
}

function resetTimer() {
    timer = 20;
    notificationPlayed = false;
    resetButton.hide();
    bgSound.loop();
}

function back() {
    window.history.back();
}

function draw(){
    background(86,125,97);
    fill(225,204,64);
    ellipse(circleX, circleY, 650, 650);
    fill(225,165,0);
    ellipse(circleX, circleY, 500,500);
    //Timer by YuanHau from https://editor.p5js.org/YuanHau/sketches/HJU-MpfaZ
    if (frameCount % 60 == 0 && timer > 0){
  	timer--;
    }
    if (timer == 0){
        if(notificationPlayed === false) {
        notification.play();
        resetButton.show();
        bgSound.stop();
        notificationPlayed = true;
            } 
  }
    if (mouseIsPressed == true) {
        if (mouseButton == LEFT) {
            image(drumstick2, mouseX-20, mouseY-50);
            }
        }
    if (mouseIsPressed == false) {
        image(drumstick1, mouseX-20, mouseY-50);
        }
}
//defines which part of the drum plays which sound
function mouseClicked() {
    if (dist(mouseX, mouseY, circleX, circleY) < 250) {
          drumMiddle.playMode('restart')
          drumMiddle.play();
        }
    if (dist(mouseX, mouseY, circleX, circleY) < 350 && dist(mouseX, mouseY, circleX, circleY) > 250) {
          drumRim.playMode('restart')
          drumRim.play();
        }
}

