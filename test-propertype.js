Foo = function (){
	this.name = 'foo';
	this.value =  30;
	
	this.see = function(){
		console.log('hello 1...')
	}
}

Foo.prototype.pName = 'test3p';
Foo.prototype.say = function(){
	console.log('hello 2...')
}

var a = new Foo();
var b = new Foo();

a.name = 'foo a';
b.name = 'foo b';

b.pName = 'xxxxxxxx';

console.log(a.name);
console.log(b.name);

//console.log(a.pName);
//console.log(b.pName);

console.log(a.pName==b.pName);
console.log(a.say==b.say);

console.log(a.see==b.see);
