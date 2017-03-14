function Fern(x, y, eqs){
	this.pt = createVector(x, y);
	this.eqs = eqs;
}

Fern.prototype = Object.create(IFS.prototype);

Fern.prototype.show = function(){
	strokeWeight(2);
	push();
	translate(width/2, height);
	point(this.pt.x * 50, this.pt.y * -50);
	pop();	
}