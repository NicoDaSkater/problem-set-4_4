# Problem Set 4-4

## Closures, Prototypes, Constructors, and Classes

1. What is a closure?
> Closure is a feature of higher-order functions that allows us to use a returned function to later refer to the context of its parent function.

> We can use closure to get a snapshot of values we want to keep private. We enclose the current state of variables in the inner function; this allows us to save and utilize sensitive data without having to reference it.

2. What are the benefits of using a constructor functions to create object instances instead of a factory function?

    *a*. The objects returned from a factory function don't encapsulate behavior or the data that concerns them. The behaviors and the properties of that specific object are still observable to the rest of the program.

     *b*. With Constructor functions, we can encapsulate behavior and data by referencing data and behavior within the context of the object that owns them using `this.`
     
     *c*. Factory functions pollute the global scope due to the properties and methods within an object returned by a factory function being accessible to the rest of the program.
     
     *d*. Constructor functions allow us to preserve memory by not having multiple copies of the same object type.
     
     *e*. Thanks to constructor functions, we have a higher potential for variety in the objects we can produce from the same constructor.
   

3. What is the `__proto__` property and how does it differ from the `protoype` property?
    > The `__proto__` property within an object points to the constructor function it's an instance of, its *prototype*, or blueprint.

    >The `prototype` property is an object that is the prototype of the object that has it stored in its `prototype` property. The object inside the `prototype` property has a `prototype` property itself. Making a chain that continues until it reaches an object whose `prototype` property is `null`
    



