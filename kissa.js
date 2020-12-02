let kissa1;
let kissa2;
let kissa3;
let timer = 120;
let notification;
let purr;
let notificationPlayed = false;
let backButton;
let img;
let kasi1;
let kasi2;
function setup(){
    createCanvas(windowWidth,windowHeight);
    kissa1 = loadImage('files/kissa1.jpg');
    kissa2 = loadImage('files/kissa2.jpg');
    kissa3 = loadImage('files/kissa3.jpg');
    kasi1 = loadImage('files/kasi1.svg');
    kasi2 = loadImage('files/kasi2.svg');
    noStroke();
    rectMode(CENTER);
    imageMode(CENTER);
    notification = createAudio('files/chime.wav');
    purr = createAudio('files/purr.mp3');
    purr.loop();
    //Back
    backButton = createImg('files/back_cat.svg');
    backButton.position(10,10);
    backButton.size(80,80);
    backButton.mousePressed(back);
    backButton.class('button');
    //Reset
    resetButton = createImg('files/reset_cat.svg');
    resetButton.position(windowWidth/2.5,windowHeight/2.5);
    resetButton.mousePressed(resetTimer);
    resetButton.size(200,100);
    resetButton.hide();
    resetButton.class('button');
    img = kissa1;
}

function resetTimer() {
    timer = 20;
    notificationPlayed = false;
    resetButton.hide();
    purr.loop();
}

function back() {
    window.history.back();
}

function draw(){
    background(235,235,235);
    image(img,windowWidth/2,windowHeight/2,900,650);
    //Timer by YuanHau from https://editor.p5js.org/YuanHau/sketches/HJU-MpfaZ
    if (frameCount % 60 === 0 && timer > 0) {
        timer--;
    }
    //change to random cat at 10 second intervals
    if(frameCount % 60 === 0 && timer % 10 === 0 && timer != 0) {
        randomKissa();
    }
    if (timer == 0){
        if(notificationPlayed === false) {
            notification.play();
            resetButton.show();
            purr.stop();
            notificationPlayed = true;
        }  
    }
    if (mouseIsPressed == true) {
        if (mouseButton == LEFT) {
            image(kasi2, mouseX, mouseY, 150,150);
        }
    }
    if (mouseIsPressed == false) {
        image(kasi1, mouseX, mouseY, 150,150);
    }
}

function randomKissa() {
    var ran = random(4);
    if(ran < 1) {
        img = kissa1;
    }
    else if(ran < 3) {
         img = kissa2;
    }
    else {
        img = kissa3;
    }
}