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
 * Pass someString into a function as the argument string.
 * Change the value of string.
 * Log the value of someString.
 */
(function(string) {

  string = 'a different string';

  console.log(someString); // "a string"

})(someString);

/*
 * ====================================================
 */

var someObject = {
      name: 'someObject'
    };

/*
 * Pass someObject into a function as the argument object.
 * Change the value of object.name.
 * Log the value of someObject.name.
 */
(function(object) {

  object.name = 'object';

  console.log(someObject.name); // "object"

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