var num = 25;

console.log(typeof num); // "number"

/*
 * ====================================================
 */

var example = '';

console.log( typeof example ); // "string"

example = 1;

console.log( typeof example ); // "number"

example = false;

console.log( typeof example ); // "boolean"

/*
 * ====================================================
 */

var someString = 'a string';

/*
 * Pass someString into a function as the argument str.
 * Change the value of str.
 * Log the value of someString.
 */
(function(str) {

  str = 'a different string';

  console.log(someString); // "a string"

})(someString);

/*
 * ====================================================
 */

var someObject = {
      name: 'someObject'
    };
    
/*
 * Pass someObject into a function as the argument obj.
 * Change the value of obj.name.
 * Log the value of someObject.name.
 */
(function(obj) {

  obj.name = 'obj';

  console.log(someObject.name); // "obj"

})(someObject);

/*
 * ====================================================
 */

/**
 * Constructor for a person object
 *
 * @constructor
 */
function Person() {

  return {
    /**
     * The person's age
     *
     * @memberof Person
     * @instance
     * @type {number}
     */
    age: 0,
    /**
     * The person's first name
     *
     * @memberof Person
     * @instance
     * @type {string}
     */
    firstName: '',
    /**
     * The person's last name
     *
     * @memberof Person
     * @instance
     * @type {string}
     */
    lastName: '',
    /**
     * The person's weight
     *
     * @memberof Person
     * @instance
     * @type {number}
     */
    weight: 0
  };
}