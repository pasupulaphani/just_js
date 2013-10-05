// Still I'm confused 

// what the hell is JS inheritence


function MyObject() {}
console.log("MyObject is "+typeof(MyObject)); // this is a function
var myObject = new MyObject(); // just saving it to the end (see pre-existing instances part)

// static method
MyObject.doSomething = function(i) {
	console.log("MyObject doSomething " + i);
}

// this creates an object
var anotherObject = new MyObject();
console.log("anotherObject is "+typeof(anotherObject)+ " of "+anotherObject.constructor);

// try to call as a classical object orientation. But doesn't work
try {
	anotherObject.doSomething(1);
} catch(err) {
	console.log("\nfailed: " + err.message + "\n");
}

// adding instance specific function
anotherObject.doSomething = function(i) {
	console.log("anotherObject doSomething "+ i);
}

//as expected calls the instance specific method : this works
anotherObject.doSomething(2); 

//calls the static Object method
MyObject.doSomething(3); 

// no inheritence till now
///////////////Prototype comes to play///////////////////

//apply the static method to all instances from here on in
MyObject.prototype.doSomething = MyObject.doSomething; 

// Since you have overridden the method in your instance; acts like a typical OO model
anotherObject.doSomething(4);  //still calls the instance method

//fine now lets test by creating 
var yetAnotherObject = new MyObject();
yetAnotherObject.doSomething(5); //inherited doSomething() from MyObject is called

// if you wish to override and call the parent function you can do this
yetAnotherObject.doSomething = function(i) {
	console.log("calling the parent function");
	MyObject.doSomething(i) // this is actually creating a new isntance; instead use apply (see next tutorial)
}

yetAnotherObject.doSomething(6) // this will call the insance implementation

//pre-existing instances also inherit the new function
myObject.doSomething(7); 

