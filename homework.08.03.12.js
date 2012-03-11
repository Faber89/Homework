
/* POINT */

function Point(x,y) {

	var x;
	var y;

	this.getX = function(){return x;};
	this.getY = function(){return y;};

	this.setX = function(coordinataX){this.x = coordinataX;};
	this.setY = function(coordinataY){this.y = coordinataY;};

	this.setX(x);
	this.setY(y);
};

Point.prototype.getDistance = function (p2){

	var ascissa = Math.abs(this.getX() - p2.getX());
	var ordinata = Math.abs(this.getY() - p2.getY());

	var distance = Math.sqrt(Math.pow(ascissa,2) + Math.pow(ordinata,2));

	return distance;	
}

/* TRIANGLE */

Point.prototype.translate = function(dx,dy) {
	this.setY(this.getY() + dy);
	this.setX(this.getX() + dx);
};

function Triangle(vert1, vert2, vert3) {

	var vertex1 = vert1;
	var vertex2 = vert2;
	var vertex3 = vert3;

	this.getVertex1 = function(){return vertex1;};
	this.getVertex2 = function(){return vertex2;};
	this.getVertex3 = function(){return vertex3;};

};

Triangle.prototype.getPerimeter = function (){

	var dist12 = this.getVertex1().getDistance(this.getVertex2());
	var dist13 = this.getVertex1().getDistance(this.getVertex3());
	var dist23 = this.getVertex2().getDistance(this.getVertex3());

	return (dist12 + dist13 + dist23);
	
};

Triangle.prototype.getArea = function (){

	var dist12 = this.getVertex1().getDistance(this.getVertex2());
	var dist13 = this.getVertex1().getDistance(this.getVertex3());
	var dist23 = this.getVertex2().getDistance(this.getVertex3());

	var semPer = this.getPerimeter()/2;

	return Math.sqrt(semPer*(semPer - dist12)*(semPer - dist13)*(semPer - dist23));
};


// *** PROVE DI TEST ***

var p1 = new Point(1,1);
var p2 = new Point(5,1);
var p3 = new Point(3,3);

var tri = new Triangle(p1,p2,p3);

p1.getX();
p1.getY();

p1.getDistance(p2);

tri.getArea();
tri.getPerimeter();