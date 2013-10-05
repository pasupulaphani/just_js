
// if a function is called as a method on an object, or by using new, 
// then the value of this will be the current instance of the object, 
// otherwise it will be the global context (or undefined in strict mode). 
// The lesson here is the value of this is dependent on how a function is called.

function add(x, y) {
  console.log(this); 
  return x + y;
}

add(1, 1); // "this" in above finction is global
new add(1,1); // "this" in above finction is for that instance

//////////////////////////////////////////////////
// scope mistake ( this is only applicale in function move)
//////////////////////////////////////////////////
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype = {
  move: function(x, y) {
    this.x += x;
    this.y += y;

    function checkBounds() {

      console.log(this.x); // is undefined

      if (x > 100) {
        console.error('Warning: Shape out of bounds');
      }
    }

    checkBounds();
  }
};

var shape = new Shape();
shape.move(101, 1);