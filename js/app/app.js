/**
 * Ember.js - A framework for creating <strong>ambitious</strong> web applications
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

Ember.Route.reopen({
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

        $(document).foundation();
      });
    });
  }
});

/**
 * The instance of Ember.Application used throughout the app
 *
 * @namespace
 * @name App
 * @extends external:Ember.Application
 */
App = Ember.Application.create({
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
  movieDbImageBase: 'http://image.tmdb.org/t/p/w300'
});

App.Router.map(function() {
  
  this.route('404');

  this.route('special-engagements');
});