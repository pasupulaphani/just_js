// we have seen closures

// lets see singletons
// for more explination see http://robdodson.me/blog/2012/08/08/javascript-design-patterns-singleton/

var Animal = function(n) {

    var instance;

    Animal = function Animal() {
        return instance;
    }

    Animal.prototype = this;
    instance = new Animal();
    instance.constructor = Animal;

    instance.name = n;

    return instance;
};

Animal.prototype.getName = function() {

	console.log(this.name)
}

a1 = new Animal("Bob");
a1.getName();  // Bob

a2 = new Animal("Alice");
a2.getName();  // Bob

// This gives flexibility and usage of prototype but doesn't give u privacy of closures
// you can get singleton with closures and prototyes by combining this with last example of le7
