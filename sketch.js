// let students =[{
//  name: "jake",
//  food: "cake"
// }, {
//   name: "blake",
//   food: "shake"
// }, {
//   name: "sam",
//   food: "ham, candy, donuts"
// }, {
//   name: "cam",
//   food: "pizza"
// }];
//let setlist;
let randomIndex;
let button;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(32);
  //text("click to start", width/2, height/2);

  button = createButton('click to start randomizer');
  button.position(50,50);
  button.mousePressed(greet);
}

function draw() {
}
function greet(){
  if (setlist[0]){
  background(random(200,255));
  randomIndex = int(random(setlist.length));
  text(setlist[randomIndex].artist,50,50);
  setlist.splice(randomIndex,1);
  }
   button.remove();
}

function mousePressed() {
if (setlist[0]){
background(random(200,255));
randomIndex = int(random(setlist.length));
text(setlist[randomIndex].artist,50,50);
setlist.splice(randomIndex,1);
} else {
  background(random(255));
  text("nothing left",50,50);
}
}
