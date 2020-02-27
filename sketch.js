let students =[{
 name: "jake",
 food: "cake"
}, {
  name: "blake",
  food: "shake"
}, {
  name: "sam",
  food: "ham"
}, {
  name: "cam",
  food: "pizza"
}];

let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(32);
  text("click to start", width/2, height/2);
}

function draw() {
}

function mousePressed() {
if (students[0]){
background(random(200,255));
randomIndex = int(random(students.length));
text(students[randomIndex].name,50,50);
students.splice(randomIndex,1);
} else {
  background(random(255));
  text("nothing left",50,50);
}
}
