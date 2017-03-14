function Koch(x, y, eqs){
	this.pt = createVector(x, y);
	this.eqs = eqs;
}

Koch.prototype = Object.create(IFS.prototype);

Koch.prototype.show = function(){
	strokeWeight(2);
	push();
	translate(0, height/2);
	point(this.pt.x * 550, this.pt.y * -550);
	pop();	
}