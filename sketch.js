let randomIndex;
let button;
let animating = false;
let btn = false;

function setup() {
  createCanvas(500, 500);
  background(220);
  fill(0);
  textSize(40);
  noStroke();

  //decorate start screen
  button = createButton('Welcome to EDC 2020');
  button.position(175,225);
  button.mousePressed(greet);
}

function draw() {

  if(animating == true){
    noStroke();
    fill(random(255),random(255),random(255),random(255));
    rect(random(width), random(height), random(50), 100);
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

  button.remove();
  btn = true;
}

function randomizer(){
  animating = false;
  clear();
  let date = ["Friday", "Saturday", "Sunday"]
  if (setlist[0]){
  background(random(255),random(255),random(255),random(255));
  randomIndex = int(random(setlist.length));
  fill(0);
  textAlign(CENTER);
  text(setlist[randomIndex].artist,145,200);
  text(random(setlist[randomIndex].song),250,250);
  text(random(date),300,300);
  setlist.splice(randomIndex,1);

  } else {
    background(random(255));
    text("nothing left",50,50);
  }
}

function mousePressed() {
  if(btn==true)
  {
    animating = true;
    setTimeout(randomizer,1000);
  }
}
