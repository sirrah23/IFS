var ifs;
var scl = 500;
var file_equations;
var eqs = [];

function preload(){
	 file_equations = loadStrings('./data/dragon.txt');
	 //file_equations = loadStrings('./data/fern.txt');
}


function setup() {
  createCanvas(800, 800);
  file_equations.forEach(function(file_eq){
	eqs.push(generateEquation(file_eq));
  });
  ifs = new IFS(1, 1, eqs);
}

function draw() {
	for(var i = 0; i < 100; i++){
		ifs.iterate();
		ifs.show();
	}
}

function IFS(x, y, eqs){
	this.pt = createVector(x, y);
	this.eqs = eqs;
}

IFS.prototype.iterate = function(){
	var x, y;
	var eq = this.getEq(); 
	x = eq.a*this.pt.x + eq.b*this.pt.y + eq.e;
	y = eq.c*this.pt.x + eq.d*this.pt.y + eq.f;
	this.pt.x = x; this.pt.y = y;
}

IFS.prototype.show = function(){
	//TODO: Inheritance for different displays
	strokeWeight(2);
	push();
	//translate(width/2, height); FERN
	translate(width/2, height/2);
	point(this.pt.x * 300, this.pt.y * -300);
	//point(this.pt.x * 50, this.pt.y * -50); FERN
	pop();	
}

IFS.prototype.getEq = function(){
	var r = random();
	var eq;
	for(var i = 0; i < this.eqs.length; i++){
		eq = this.eqs[i];
		if(r < eq.p){
			return eq;
		}
		r -= eq.p
	}
}

function generateEquation(eqStr){
	eqStr = eqStr.split(',')
	var keys = ['a', 'b', 'c', 'd', 'e', 'f', 'p'];
	var nums = eqStr.map(function(x){return Number(x);});
	var eq = {};
	for(var i = 0; i < nums.length; i++){
		eq[keys[i]] = nums[i];
	}
	return eq;
}
