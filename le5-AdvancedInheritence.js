
// http://dailyjs.com/2012/05/28/js101-prototype-chains/

// Ok we have seen inheritence lets see prototype-chain inheritence
function Shape(name) {
  this.x = 0;
  this.y = 0;
  this.name = name
  console.log('Shape constructor called '+name);
}

Shape.prototype = {
  move: function(x, y) {
    this.x += x;
    this.y += y;
  },

  toString: function() {
    console.log( 'name: ' + this.name + ', at x: ' + this.x + ', y:' + this.y);
  }
};

// Rectangle
function Rectangle(name) {
  this.name = name;
  console.log('Rectangle constructor called');
}

// Assign all static methods of Shape to the instances of Rectangle
Rectangle.prototype = new Shape("Im Shape");

console.log("Name in the Shape static constructor : " + Rectangle.prototype.name) // this is ok

var rect = new Rectangle('Player 1');
console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);

console.log("rect instance name : " + rect.name) // has the instance name; which is good
rect.move(1, 1);
rect.toString();
// this works fine as it calls the static Shape methods

// we have already seen overriding methods by creating methods to instances

// Instead you can override in the prototype chain so that all its (Rectangle) instances will have it
Rectangle.prototype.move = function(x, y) {
	console.log("This is Recatangle prototype move ");
	console.log("calling the super");
	//////////////////////
	//// apply        ////
	//////////////////////
	Shape.prototype.move.apply(this, arguments) // The apply method in particular allows us to call the function without creating a new instance
	//Shape.prototype.move(x, y) // this is creating a new instance
}

rect.move(2, 2);
rect.toString();

// Ultimately you can override prototype function using instance methods
rect.move = function(x, y) {
	console.log("This is rect overridden move ");
	console.log("calling the super");
	//////////////////////
	//// apply        ////
	//////////////////////
	Shape.prototype.move.apply(this, arguments) // The apply method in particular allows us to call the function without creating a new instance
	//Shape.prototype.move(x, y) // this is creating a new instance
}

rect.move(2, 2);
rect.toString();
