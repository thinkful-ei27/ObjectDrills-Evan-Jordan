// function createMyObject() {
//     const myObject = {
//         foo: 'bar',
//         answerToUniverse: 42,
//         'olly olly': 'oxen free',
//         sayHello: function() {return "hello"}
//     }
//     return myObject;
//   }


// const cat = {
//     name: 'meowzers',
//     age: '3'
// }

//   function updateObject(obj) {
   
//     obj.foo = 'foo'
//     obj.bar = 'bar'
//     obj.bizz = 'bizz'
//     obj.bang = 'bang'
    
//     return obj;
// }
  
//   updateObject(cat)
  
  function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function() {return this.firstName + " " + this.lastName},
    };
    return person;
  }
  

  const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
  function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;

    return obj;
  }
  
  