let meri;
let hiekka;
let timer = 20;
let countDownSwitch = false;
let seasound;
let notification;
let notificationPlayed = false;
let backButton;
let forward = true;
let x = 0;
let pelikaani1;
let pelikaani1Flip;
let x1 = 0;
let y1 = 0;

function setup(){
    createCanvas(windowWidth,windowHeight);
    meri = loadImage('files/perumeri.jpg');
    hiekka = loadImage('files/hiekka.png');
    pelikaani1 = loadImage('files/pelikaani1.png');
    pelikaani1Flip = loadImage('files/pelikaani1Flip.png');
    notification = createAudio('files/chime.wav');
    seasound = createAudio('files/sea.mp3');
    seasound.loop();
    //Back
    backButton = createImg('files/back_sea.svg');
    backButton.position(10,10);
    backButton.size(80,80);
    backButton.mousePressed(back);
    backButton.class('button');
    //Reset
    resetButton = createImg('files/reset_sea.svg');
    resetButton.position(windowWidth/2.5,windowHeight/2.5);
    resetButton.mousePressed(resetTimer);
    resetButton.size(200,100);
    resetButton.hide();
    resetButton.class('button');
}

function resetTimer() {
    timer = 20;
    notificationPlayed = false;
    resetButton.hide();
    seasound.loop();
}

function back() {
    window.history.back();
    
}
function draw(){
    image(meri,x,0,(windowWidth+20),windowHeight);
    //a slight movement to the sea
    if(timer % 1 === 0 && timer != 0) {
        if(forward === true) {
            x = x + 0.05;
            if(x >= 20) {
                forward = false;
            }
        } else {
            x = x - 0.05;
            if(x <= 0) {
                forward = true;
            }
        }
    }
    //Timer by YuanHau from https://editor.p5js.org/YuanHau/sketches/HJU-MpfaZ
    if (frameCount % 60 == 0 && timer > 0){
  	     timer--;
    }
    if (timer == 0){
        if(notificationPlayed === false) {
            notification.play();
            resetButton.show();
            seasound.stop();
            notificationPlayed = true;
        } 
    }
    //pelican follows mouse, flips when direction changes
    x1 = lerp(x1, mouseX, 0.001);
    y1 = lerp(y1, mouseY, 0.001);
    if (mouseX > x1) {
        image(pelikaani1, x1, y1, 30, 30);
    }
    else {
        image(pelikaani1Flip, x1, y1, 30, 30);
    }
    image(hiekka,0,windowHeight - hiekka.height/2,windowWidth,hiekka.height/2);
}