var ifs;
var i = 0;
var scl = 500;
var LIM = 10000;
var eq1 = {
	a:-0.4,
	b:0.0,
	c:0.0,
	d:-0.4,
	e:-1.0,
	f:0.1,
};
var eq2 = {
	a:0.76,
	b:-0.4,
	c:0.4,
	d:0.76,
	e:0.0,
	f:0.0,
};
var eqs = [eq1, eq2];

function setup() {
  createCanvas(800, 800);
  ifs = new IFS(1, 1, eqs);
}

function draw() {
	ifs.iterate();
	ifs.show();
	// noLoop();
}

function IFS(x, y, eqs){
	this.pt = createVector(x, y);
	this.eqs = eqs;
	// this.pts = [];
}

IFS.prototype.iterate = function(){
	var x, y;
	var r = Math.floor(random(eqs.length));
	var eq = eqs[r]; 
	x = eq.a*this.pt.x + eq.b*this.pt.y + eq.e;
	y = eq.c*this.pt.x + eq.d*this.pt.y + eq.f;
	this.pt.x = x; this.pt.y = y;
}

// IFS.prototype.iterLoop = function(LIM){
// 	for(var i = 0; i < LIM; i++){
// 		this.iterate();
// 		this.pts.push(this.pt);
// 	}
// }

IFS.prototype.show = function(){
	var x,y;
	strokeWeight(2);
	x = scl*this.pt.x
	y = scl*this.pt.y
	//x = map(x, -scl, scl, 0, width);
	//y = map(y, -scl, scl, 0, height);
	// console.log(x,y);
	push();
	translate(width/2, height/2)
	point(x, y);	
	pop();
}