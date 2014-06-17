/**
 * Ember.js - A framework for creating
 * <strong>ambitious</strong> web applications
 *
 * @external Ember
 * @see {@link http://emberjs.com/api/}
 */

/**
 * Ember's Application class
 *
 * @name external:Ember.Application
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Application.html}
 */

/**
 * Ember's Route class
 *
 * @name external:Ember.Route
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Route.html}
 */

/**
 * Ember's Object class
 *
 * @name external:Ember.Object
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Object.html}
 */

Ember.Route.reopen({
  // Overrides
  /**
   * Override Ember.Route's beforeModel hook.
   * Schedule Foundation to initialize after
   * templates have been rendered.
   *
   * @memberof external:Ember.Route
   * @param {Object} transition
   */
  beforeModel: function(transition) {

    transition.then(function() {

      Ember.run.scheduleOnce('afterRender', this, function() {

        $('html, body').animate({
          scrollTop: 0
        });

        $(document).foundation();
      });
    });
  }
});

/**
 * The instance of Ember.Application used throughout the app
 *
 * @namespace App
 * @extends external:Ember.Application
 */
App = Ember.Application.create({
  // Properties
  /**
   * themoviedb.org API URL base
   *
   * @memberof App
   * @instance
   * @default
   * @type {string}
   */
  movieDbApiBase: 'http://api.themoviedb.org/3/',
  /**
   * themoviedb.org API key
   *
   * @memberof App
   * @instance
   * @default
   * @type {string}
   */
  movieDbApiKey: '008ac003dff617beda4cb8c5e51f6f2d',
  /**
   * themoviedb.org image URL base
   *
   * @memberof App
   * @instance
   * @default
   * @type {string}
   */
  movieDbImageBase: 'http://image.tmdb.org/t/p/w300',

  // Methods
  /**
   * Return a value from an object path
   *
   * @memberof App
   * @instance
   * @param {Object} object
   * @param {strong} path
   * @returns {*} The value at the given path
   */
  getFromPath: function(object, path) {

    var i = 0,
        parts = [],
        part = object;

    try {

      if (!object || typeof object !== 'object') {

        throw 'Missing or invalid argument: "object"';
      }

      if (!path || typeof path !== 'string') {

        throw 'Missing or invalid argument: "path"';
      }

      // Get individual path parts
      parts = path.split('.');

      for ( i = 0; i < parts.length; i++ ) {

        // Ensure current part of path is an object
        if (typeof part !== 'object') {

          throw 'Path part: ' + parts[i - 1] + ' is not an object';
        }

        // See if the next part is a member of the current part
        if (part.hasOwnProperty( parts[i] )) {

          part = part[ parts[i] ];

        } else {

          throw 'Invalid path part: ' + parts[i];
        }
      }

      return part;

    } catch(e) {

      console.warn('App.getFromPath: ' + e);
    }
  }
});

App.Router.map(function() {
  
  this.route('404');

  this.route('special-engagements');
});