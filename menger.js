function Menger(x, y, eqs){
	this.pt = createVector(x, y);
	this.eqs = eqs;
}

Menger.prototype = Object.create(IFS.prototype);

Menger.prototype.show = function(){
	strokeWeight(2);
	push();
	translate(width/4, height - 200);
	point(this.pt.x * 550, this.pt.y * -550);
	pop();	
}