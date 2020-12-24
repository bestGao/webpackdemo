class Parent { 
    constructor(name) { 
        this.name = name
    }
}
class Child extends Parent { 
    constructor(name,age) { 
        super(name)
        this.age = age
    }
}
var child1 = new Child('kevin', '18');

console.log(child1);