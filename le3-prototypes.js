

function Animal() {

}

Animal.prototype = {
	type:'unknown',
	weight:0,
	weightUnits : 'kg',

	toString : function() {
		return this.type + ', ' + this.weight + this.weightUnits;
	}
};

var molly = new Animal();
molly.type = 'Dog';
molly.weight = 28;
molly.name = 'testName' // dynamically add properties

console.log(molly);

// override the default properties

String.prototype.match = function() {
  return true;
};

console.log('alex'.match(/1234/));

