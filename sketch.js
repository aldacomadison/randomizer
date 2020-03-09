let randomIndex;
let button;
let animating = false;
let btn = false;
let stages = [];
let cnv;
let imageCounter = 1;

function preload(){
for (let i=1; i<=12; i++){
  stages[i] = loadImage("assets/stage_" + i + ".JPG");
}
}

function setup() {
  cnv = createCanvas(500, 500);
  cnv.parent('#canvasDiv');
  background(220);
  fill(0);
  textSize(40);
  noStroke();
  imageMode(CENTER);
  frameRate(40);
  button = select('#randButton');
  button.mousePressed(greet);
  button.class("button");
}

function draw() {

  if(animating == true){
    clear();
    fill(random(255),random(255),random(255),random(255));
    ellipse(random(width), random(height), random(50, 200));
    tint(255,127);
    image(stages[imageCounter], width/2, height/2);
    if (imageCounter < stages.length - 1){
    imageCounter++;
  } else {
    imageCounter = 1;
  }
  }
  else if(btn==false) {
    let randR;
    let randG;
    let randB;
    let randA;
    for (let i = 0; i < 500; i += 50) {
      for (let j = 0; j < 500; j += 50) {
          randR = random(255);
          randG = random(255);
          randB = random(255);
          randA = random(200, 255);
          fill(randR, randG, randB, randA);
          rect( i, j, 20, 20 );
        }
      }
    }
}

function greet(){

  // button.remove();
  btn = true;
}

function randomizer(){
  animating = false;
  clear();
  let date = ["Friday", "Saturday", "Sunday"]
  if (setlist[0]){
  clear();
  randomIndex = int(random(setlist.length));
  fill(255);
  textStyle(BOLD);
  tint(255,255);
  image(random(stages), width/2,height/2);
  text(setlist[randomIndex].artist,50,150);
  text(random(setlist[randomIndex].song),50,250);
  text(random(date),50,350);
  setlist.splice(randomIndex,1);

  } else {
    background(random(255));
    text("WEEKEND OVER",150,250);
  }
}

function mousePressed() {
  if(btn==true)
  {
    animating = true;
    setTimeout(randomizer,2000);
  }
}
