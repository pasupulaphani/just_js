function Shape() {
  this.side = 0;
}

Shape.prototype.setSide = function(side) {
  if (typeof side == 'number' && side > 0) {
    this.side = side;
  } else {
    throw new Error('side only accepts positive numbers');
  }
};

Shape.prototype.getSide = function() {
  return this.side;
};

var squre = new Shape();
console.log(squre.getSide());  // 0

squre.setSide(4);
console.log(squre.getSide());  // 4

// but once you know the object properties nothing is stopping you to set it
squre.side = "qwer"
console.log(squre.getSide());  // qwer



//////////////////////////////////////////////
/////// fix without prototype
//////////////////////////////////////////////
// Private members are made by the constructor.
// Ordinary vars and parameters of the constructor becomes the private members.

console.log("fix without prototype")

function Shape1() {
	var side = 0;

	this.setSide = function(s) {
		if (typeof s == 'number' && s > 0) {
			side = s;
		} else {
			throw new Error('side only accepts positive numbers');
		}
	};

	this.getSide = function() {
		return side;
	};
}


var squre = new Shape1();
console.log(squre.getSide());  // 0

squre.setSide(4);
console.log(squre.getSide());  // 4

// Here this doesn't work
squre.side = "qwer"
console.log(squre.getSide());  // 4


//////////////////////////////////////////////
/////// fix with prototype
console.log("fix with prototype")

function Shape2() {
}

Shape2.prototype = (function(first_argument) {
	var side = 0;

	return {
		constructor : Shape2,
		setSide     : function(s) {
			if (typeof s == 'number' && s > 0) {
				side = s;
			} else {
				throw new Error('side only accepts positive numbers');
			}
		},
		getSide     : function() {
			return side;
		}
	}

})();


var squre = new Shape2();
console.log(squre.getSide());  // 0

squre.setSide(4);
console.log(squre.getSide());  // 4

// Here this doesn't work
squre.side = "qwer"
console.log(squre.getSide());  // 4



////////////////////////////////////////////
///// fixing privacy with closures
console.log("fixing privacy with closures");

var Shape3 = (function () {

	var side = 0;

	// private method (in the scope and could set "side")
	function Shape() {
		side = 0;
	}

	Shape.prototype.setSide = function (s) {
		if (typeof s == 'number' && s > 0) {
			side = s;
		} else {
			throw new Error('side only accepts positive numbers');
		}
	}

	Shape.prototype.getSide = function() {
		return side;
	};

	return Shape;
}());


var squre = new Shape3();
console.log(squre.getSide());  // 0

squre.setSide(4);
console.log(squre.getSide());  // 4

// Here this doesn't work
squre.side = "qwer"
console.log(squre.getSide());  // 4
