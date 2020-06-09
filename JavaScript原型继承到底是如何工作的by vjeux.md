Everywhere on the web we read that Javascript has prototypal inheritance. However Javascript only provides by default a specific case of prototypal inheritance with the `new` operator. Therefore, most of the explanations are really confusing to read. This article aims to clarify what is prototypal inheritance and how to really use it on Javascript.

### Prototypal Inheritance Definition

When you read about Javascript prototypal inheritance, you often see a definition like this:

> When accessing the properties of an object, JavaScript will traverse the prototype chain upwards until it finds a property with the requested name. [Javascript Garden](https://bonsaiden.github.com/JavaScript-Garden/#object.prototype)

Most Javascript implementations use `__proto__` property to represent the next object in the prototype chain. We will see along this article what is the difference between `__proto__` and `prototype`.

**Note**: `__proto__` is non-standard and should not be used in your code. It is used in the article to explain how Javascript inheritance works.

The following code shows how the Javascript engine retrieves a property (for reading).

```js
function getProperty(obj, prop) {
	if (obj.hasOwnProperty(prop))    
		return obj[prop]   
	else if (obj.__proto__ !== null)    
		return getProperty(obj.__proto__, prop)   
	else    
		return undefined 
}
```

Let's take the usual class example: a 2D Point. A Point has two coordinates `x`, `y` and a method `print`.

Using the definition of the prototypal inheritance written before, we will make an object Point with three properties: `x`, `y` and `print`. In order to create a new point, we just make a new object with `__proto__` set to `Point`.

```javascript
var Point = {  
    x: 0,  
    y: 0,  
    print: function () { console.log(this.x, this.y); } 
};  
var p = {x: 10, y: 20, __proto__: Point}; 
p.print(); // 10 20
```

### Javascript Weird Prototypal Inheritance

What is confusing is that everyone teaches Javascript prototypal inheritance with this definition but does not give this code. Instead they give something like this:

```javascript
function Point(x, y) {  
    this.x = x;  
    this.y = y; 
} 
Point.prototype = {  
	print: function () { console.log(this.x, this.y); } 
};  
var p = new Point(10, 20); 
p.print(); // 10 20
```

This is completely different from the code given above. Point is now a function, we use a `prototype` property, the `new` operator. What the hell!?

#### How `new` works

[Brendan Eich](https://brendaneich.com/) wanted Javascript to look like traditional Object Oriented programming languages such as Java and C++. In those, we use the `new` operator to make a new instance of a class. So he wrote a `new` operator for Javascript.

- C++ has the notion of constructor, that initializes the instance attributes. Therefore, the `new` operator must target a function.
- We need to put the methods of the object somewhere. Since we are working on a prototypal language, let's put it in the prototype property of the function.

The `new` operator takes a function `F` and arguments: `new F(arguments...)`. It does three easy steps:

1. **Create the instance of the class**. It is an empty object with its `__proto__` property set to `F.prototype`.
2. **Initialize the instance**. The function `F` is called with the arguments passed and `this` set to be the instance.
3. **Return the instance**

Now that we understand what the `new` operator does, we can implement it in Javascript.

```javascript
     function New (f) { 
 /*1*/  var n = { '__proto__': f.prototype };       
 		return function () { 
 /*2*/  f.apply(n, arguments); 
 /*3*/  return n;       
     	};     
     }
```

And just a small test to see that it works.

```javascript
function Point(x, y) {  
    this.x = x;  
    this.y = y; 
} 
Point.prototype = {  
	print: function () { console.log(this.x, this.y); } 
};  

var p1 = new Point(10, 20); 
p1.print(); // 10 20 
console.log(p1 instanceof Point); // true  

var p2 = New (Point)(10, 20); 
p2.print(); // 10 20 
console.log(p2 instanceof Point); // true
```

### Real Prototypal Inheritance in Javascript

The [Javascript specifications](https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf) only gives us the `new` operator to work with. However, Douglas Crockford found a way to exploit the `new` operator to do real Prototypal Inheritance! He wrote the [Object.create](http://javascript.crockford.com/prototypal.html) function.

```javascript
Object.create = function (parent) {  
    function F() {}  
    F.prototype = parent;  
    return new F(); 
};
```

This looks really strange but what it does is really simple. It just creates a new object with its prototype set to whatever you want. It could be written as this if we allow the use of `__proto__`:

```javascript
Object.create = function (parent) {  
	return { '__proto__': parent }; 
};
```

The following code is our Point example with the use of real prototypal inheritance.

```javascript
var Point = {  
    x: 0,  
    y: 0,  
    print: function () { console.log(this.x, this.y); } 
};  
var p = Object.create(Point); 
p.x = 10; 
p.y = 20; 
p.print(); // 10 20
```

### Conclusion

We have seen what prototypal inheritance is and how Javascript implements only a specific way to do it.

However, the use of real prototypal inheritance (Object.create and __proto__) has some downsides:

- **Not standard**: `__proto__` is non-standard and even deprecated. Also native Object.create and Douglas Crockford implementation are not exactly equivalent.
- **Not optimized**: Object.create (native or custom) has not yet been as heavily optimized as the `new` construction. It can be up to [10 times slower](https://jsperf.com/object-create-vs-crockford-vs-jorge-vs-constructor/16).