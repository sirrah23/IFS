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
