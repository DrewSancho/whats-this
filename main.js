/*******************************/
/*           Set-up            */
/*******************************/
var whatIsThis = function whatIsThis (a, b) {
    console.log('This is...', this);
    console.log('a = ', a);
    console.log('b = ', b);
};

var inAnObject = {
    name: 'inAnObject',
    test: whatIsThis,
    inner: {
        name: 'inner',
        test2: whatIsThis
    }
};

var inAFunction = function inAFunction (a, b) {
    this.name = 'Sally';
    whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
};
var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
};

/*******************************/
/*          Problems           */
/*******************************/

// * Problem 1

whatIsThis('hello', 'world');

// * "this" is global variable
// * because this is being called by a function

// * Problem 2

window.whatIsThis('hello', 'world');

// * "this" is global variable
// * because ... window is global and is calling it




// * Problem 3

inAnObject.test('face', 'book');

// * "this" is { name: 'inAnObject',
//   test: [Function: whatIsThis],
//   inner: { name: 'inner', test2: [Function: whatIsThis] } }
// a =  face
// b =  book
// * because it's being called by an object and therefore the scope is in the object




// * Problem 4

inAnObject.inner.test('twitter', 'book');

// * "this" is underfined 
// * because the test isn't a function



// * Problem 5

inAnObject.inner.test2('twitter', 'book');

// * "this" is {
    //     name: 'inner',
    //     test2: whatIsThis
    // }
// * because test2 is calling this inside inner object




// * Problem 6

whatIsThis.call();

// * "this" is global
// * because there is no object calling it




// * Problem 7

whatIsThis.call(trickyTricky);

// * "this" is {
    // name: 'trickyTricky',
    // why: 'does this work?',
    // what: 'is going on here?'
// }; a = undefined b = undefined
// * because it gets bound to the object trickytricky when you call it




// * Problem 8

whatIsThis.call(trickyTricky, 'nice', 'job');

// * "this" is This is... { name: 'trickyTricky',
//   why: 'does this work?',
//   what: 'is going on here?' }
// a =  nice b =  job

// * because call binds this to trickytricky and variables a and b get defined




// * Problem 9

whatIsThis.call(confusing);

// * "this" is {
//     name: 'confusing',
//     state: 'Alaska',
//     city: 'Anchorage'
// }; a = undefined b = undefined
// * because this gets bound when you use call to the object confusing




// * Problem 10

whatIsThis.call(confusing, 'hello');

// * "this" is {
//     name: 'confusing',
//     state: 'Alaska',
//     city: 'Anchorage'
// }; a = hello b = undefined
// * because this gets bound to object confusing  with call and variable a is hello




// * Problem 11

whatIsThis.apply(trickyTricky);

// * "this" is { name: 'trickyTricky',
//   why: 'does this work?',
//   what: 'is going on here?' }
// a =  undefined  b =  undefined
//
// * because apply binds this to the object trickytricky and no a or b therefore undefined




// * Problem 12

whatIsThis.apply(confusing, ['nice', 'job']);

// * "this" is { name: 'confusing', state: 'Alaska', city: 'Anchorage' }
// a =  nice b =  job

// * because apply binds this to confusing object




// * Problem 13

whatIsThis.apply(confusing, 'nice', 'job');

// * "this" is cannot be bound 
// * because argument type is wrong type needs to be an array




// * Problem 14

inAFunction('what will', 'happen?');

// * "this" is global variable 
// * because there is no object calling this but arguments are still valid




// * Problem 15

inAFunction.test3('A', 'B');

// * "this" is not defined  
// * because because there is no in a function test3




// * Problem 16

var newObject = new inAFunction('what will', 'happen?');

// * "this" is global
// * because 




// * Problem 17

var newObject = new inAFunction('what will', 'happen?');
newObject.test3('C', 'D');

// * "this" is ...
// * because ...




// * Problem 18

inAnObject.test.call(trickyTricky, 'face', 'book');

// * "this" is trickytricky obj
// * because this is bound to the object trickytricky with call




// * Problem 19

inAnObject.inner.test2.apply(confusing, ['foo', 'bar']);

// * "this" is the object confusing
// * because this is bound to the object confusing with apply and the arguments type is correct