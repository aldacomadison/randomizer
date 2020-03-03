let randomIndex;
let button;
let animating = false;

function setup() {
  createCanvas(500, 500);
  background(220);
  fill(0);
  textSize(40);
  //text("click to start", width/2, height/2);

  button = createButton('Welcome to EDC 2020');
  button.position(175,225);
  button.mousePressed(greet);
}

function draw() {

if(animating == true){
  fill(random(255),random(255),random(255),random(255));
  rect(random(width), random(height), random(50), 100);
}


}
function greet(){
  if (setlist[0]){
  background(200);
  randomIndex = int(random(setlist.length));
  text(setlist[randomIndex].artist,50,50);
  setlist.splice(randomIndex,1);
  }
   button.remove();
}
function randomizer(){
  animating = false;

  if (setlist[0]){
  background(random(255),random(255),random(255),random(255));
  randomIndex = int(random(setlist.length));
  text(setlist[randomIndex].artist,175,225);
  text(setlist[randomIndex].song,200,250);
  setlist.splice(randomIndex,1);

  } else {
    background(random(255));
    text("nothing left",50,50);
  }

}
function mousePressed() {
  animating = true;
  setTimeout(randomizer,1000);

}
