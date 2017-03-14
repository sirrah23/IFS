function Dragon(x, y, eqs){
	this.pt = createVector(x, y);
	this.eqs = eqs;
}

Dragon.prototype = Object.create(IFS.prototype);

Dragon.prototype.show = function(){
	strokeWeight(2);
	push();
	translate(width/2, height/2);
	point(this.pt.x * 300, this.pt.y * -300);
	pop();	
}