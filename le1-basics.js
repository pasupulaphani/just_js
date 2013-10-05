
// Types
var one = 1
  , oneObject = new Number(1);

console.log(one === oneObject);
console.log(typeof(one), typeof(oneObject));

// constructors
function Lang(des, created, influences) {
	this.des = des
	this.created = created
	this.influences = influences
}

var javascript = new Lang(
  'Brendan Eich'
, new Date(1995, 0, 1)
, ['C', 'Java', 'Scheme']
);

console.log(javascript);

var c = new Lang(
  'Dennis Ritchie'
, new Date(1972, 0, 1)
, ['B', 'ALGOL']
);

console.log(c.constructor); //this will tell you the construct function

