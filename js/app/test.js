// Add the test routes
App.Router.map(function() {

  this.route('tests');

  this.route('test', {
    path: '/test/:test_id'
  });
});

var TestRoute = {
  // Properties
  /**
   * The index model's API success callback
   *
   * @memberof App.TestRoute
   * @instance
   * @type {function}
   */
  appIndexApiSuccess: null,

  // Overrides
  /**
   * The route's after model hook. If the model is "off",
   * turn off tests. If not, try to find a matching method
   * to call.
   *
   * @memberof App.TestRoute
   * @instance
   * @param {Object} model
   * @param {Object} transition
   */
  afterModel: function(model, transition) {

    // If the test route has a method matching the model ID, call it
    if (typeof this[model] === 'function') {

      this[model](transition);

    } else {

      this.transitionTo('404');
    }
  },
  /**
   * The route's model hook
   *
   * @memberof App.TestRoute
   * @instance
   * @param {Object} params
   * @returns {Object}
   */
  model: function(params) {

    if (params && params.test_id) {

      return params.test_id;
    }
  },

  // Methods
  /**
   * The show times test
   *
   * @memberof App.TestRoute
   * @instance
   * @param {Object} transition
   */
  'test-showtimes': function(transition) {

    var context = this;

    // Store App.Index.apiSuccess method
    if (!this.get('appIndexApiSuccess')) {
    
      this.set('appIndexApiSuccess', App.Index.apiSuccess);

      /*
       * Proxy App.Index.apiSuccess method.
       * Decorate with show times since they aren't
       * available with the API, yet.
       */
      App.Index.apiSuccess = function(response) {

        var i = 0,
            results = context.get('appIndexApiSuccess').call(this, response);

        for ( i = 0; i < results.length; i++ ) {

          if (i % 2 === 0) {

            results[i].showtimes = [
              '10:00am',
              '4:00pm'
            ];

          } else {

            results[i].showtimes = [
              '1:00pm',
              '7:00pm'
            ];
          }
        }

        return results;
      };

    }

    transition.then(function() {

      context.transitionTo('index');
    });
  },
  /**
   * Turn tests off
   *
   * @memberof TestRoute
   * @instance
   * @param {Object} transition
   */
  'turn-off-tests': function(transition) {

    var context = this;

    // Restore original methods
    App.Index.apiSuccess = this.get('appIndexApiSuccess');

    transition.then(function() {

      context.transitionTo('index');
    });
  }
};

/**
 * The test route
 *
 * @memberof App
 * @constructor
 */
App.TestRoute = Ember.Route.extend(TestRoute);

/**
 * The tests controller
 *
 * @memberof App
 * @constructor
 */
App.TestsController = Ember.Controller.extend({
  // Properties
  /**
   * A reference to the test route
   *
   * @memberof App.TestsController
   * @instance
   * @type {external:Ember.Route}
   */
  testRoute: null,
  /**
   * A collection of tests
   *
   * @memberof App.TestsController
   * @instance
   * @type {Array.<Object>}
   */
  tests: [],

  // Overrides
  /**
   * The controller's init method
   *
   * @memberof App.TestsController
   * @instance
   */
  init: function() {

    this._super();

    var prop = '',
        tests = [];

    for (prop in TestRoute) {

      if (TestRoute.hasOwnProperty(prop) && prop.indexOf('test') !== -1) {

        tests.push({
          id: prop,
          title: this.parseTest(prop)
        });

        this.set('tests', tests);
      }
    }
  },

  // Methods
  /**
   * Parse test title
   *
   * @memberof App.TestsController
   * @instance
   * @param {string} prop The test route object property name to parse
   * @returns {string}
   */
  parseTest: function(prop) {

    var i = 0,
        split = prop.split('-'),
        title = '';

    for ( i = 0; i < split.length; i++ ) {

      if (!i) {

        title = split[i].charAt(0).toUpperCase() + split[i].slice(1);

      } else {

        title += ' ' + split[i];
      }
    }

    return title;
  }
});