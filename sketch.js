
const {Engine,World,Bodies,Body,Constraint,Render}=Matter;

var boyimg;
var grd;
var tree;
var rock;
var man;
var mans=[];
var trow;
var render;

function preload()
{
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	grd = new Grd(width/2,height-10,width,20);
	tree = new Tr();
	rock = new Stone(152,383,50,50,0);
	trow = new Throw(152,383,rock.body);
	for(var i=0;i<10;i++){
		var s=random(20,50);
		mans[i] = new Mango(random(490,735),random(150,250),s,s);
	}

	console.log(rock);
	console.log(mans[0]);
  
}

function draw() {
	Engine.update(engine);	
  rectMode(CENTER);
  background(200);
  image(boyimg,125,330,150,200);
  grd.display();
  tree.display();
  rock.display();
  trow.display();
  for(var m of mans){ 
  m.display();
  }
  for (var z of mans){

	  if(hit(rock,z)){
		  console.log("hit");
		  Matter.Body.setStatic(z.body,false);
	  }
  }
  //text("X:"+mouseX+" Y:"+mouseY,mouseX,mouseY);	
 
}
function mouseDragged(){
	Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	setTimeout(()=>{
	trow.fly();
	},100);
}
function hit(rk,ma){
	rk=rk.body.position;
	ma=ma.body.position;
	var q=ma.height;
	var d=dist(rk.x,rk.y,ma.x,ma.y);
	console.log(q);
	if(d<=30){
		return true;
	}else{
		return false;
	}
}
