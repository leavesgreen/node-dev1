
function Foo(){
    this.name = 'aaa';
}

var obj = new Object();
var foo =new Foo();

//最终对象,__proto__等于其构造方法的prototype
console.log(foo.__proto__==Foo.prototype);
console.log(obj.__proto__==Object.prototype);

console.log('---');
//构造函数本身,Foo,Object ,等于其prototype的constructor
console.log(Foo==Foo.prototype.constructor);
console.log(Object==Object.prototype.constructor);

console.log(Function==Function.prototype.constructor) //特殊的;

console.log('---');

//构造函数本身,是个函数,其__proto__等于Function的prototype
console.log(Foo.__proto__==Function.prototype)
console.log(Object.__proto__==Function.prototype)
console.log(Function.__proto__==Function.prototype)


console.log('---');

//prototype本身是个对象,所以它的__proto__

console.log(Object.__proto__);
console.log(Object.constructor);
console.log(Object.prototype);


