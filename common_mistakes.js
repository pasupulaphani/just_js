
///////////////////////////////////
// http://dailyjs.com/2012/07/23/js101-scope/
///////////////////////////////////

// no block scope in javascript
//Variables and functions are visible within the current function, regardless of blocks. 
function example1() {
  // Do not do this
  var a = 3
  for (var i = 0; i < 3; i++) {
    console.log(a);
    var a = 1;
    // Do stuff with `a`
  }
  console.log(a);
}

example1()

// closure is bound to the function scope outputs 3 3 3 ; instead of 0 1 2
function example2() {
  var o = {}, i = 0;
  for (i = 0; i < 3; i++) {
    o[i] = function() { console.log(i); };
  }
  o[0]();
  o[1]();
  o[2]();
}

example2()