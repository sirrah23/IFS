/*
* Draw a random fractal to the screen
* via an iterated function system
*/

var ifs;
var fractalObj;
var file_equations;

function preload(){
	var File_Obj_Pairs = [
		{
			"file" : "./data/dragon.txt",
			"obj" : Dragon,
		},
		{
			"file" : "./data/fern.txt",
			"obj" : Fern,
		},
	];
	var pair = File_Obj_Pairs[Math.floor(random(File_Obj_Pairs.length))];
	file_equations = loadStrings(pair.file);
	fractalObj = pair.obj;
}


function setup() {
	var eqs = [];
	createCanvas(800, 800);
	file_equations.forEach(function(file_eq){
		eqs.push(generateEquation(file_eq));
	});
	ifs = new fractalObj(1, 1, eqs);
}

function draw() {
	for(var i = 0; i < 100; i++){
		ifs.iterate();
		ifs.show();
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
