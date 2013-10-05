///////////////Different types of Object creations///////////////////

myObject=new Object();
console.log(typeof(myObject));

///////////////////////////////////////

var myObject={};
console.log(typeof(myObject));

///////////////////////////////////////

function MyObject() {}
var myObject = new MyObject();
console.log(typeof(myObject));

/////////////////////////////////////////

//this creates a singleton
var myObject = new function MyObject() {};
console.log(typeof(myObject)); 

///////////////Done with Object creations///////////////////