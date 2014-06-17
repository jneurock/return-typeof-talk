/**
 * The special engagements route
 * 
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.SpecialEngagementsRoute = Ember.Route.extend({
  // Overrides
  afterModel: function(model) {

    console.info(model);
  },
  /**
   * The route's model
   *
   * @memberof App.SpecialEngagementsRoute
   * @returns {Array.<Object>}
   */
  model: function() {

    return App.SpecialEngagements.findAll();
  }
});

/**
 * The special engagements model
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Object
 */
App.SpecialEngagements = Ember.Object.extend();

App.SpecialEngagements.reopenClass({
  // Properties
  /**
   * A hash that defines a map between
   * special engagements and typical
   * movie objects
   *
   * @memberof App.SpecialEngagements
   * @instance
   * @type {Object}
   */
  map: {
    id: 'id',
    poster_path: 'images.0',
    showtimes: 'times',
    title: 'names.0.en'
  },

  // Methods
  /**
   * Adapt model
   *
   * @memberof App.SpecialEngagements
   * @instance
   * @param {Array.<Object>} model
   * @returns {Array.<Object>}
   */
  adaptModel: function(model) {

    var i = 0,
        newModel = [];

    for ( i = 0; i < model.length; i++ ) {

      newModel.push(this.mapMovie( model[i] ));
    }

    return newModel;
  },
  /**
   * API success callback
   *
   * @memberof App.SpecialEngagements
   * @instance
   * @param {Object} response The API response
   * @returns {Array.<Object>}
   */
  apiSuccess: function(response) {

    if (response instanceof Array) {

      return this.adaptModel(response);

    } else {

      this.apiFail();
    }
  },
  /**
   * API failure callback
   *
   * @memberof App.SpecialEngagements
   * @instance
   */
  apiFail: function() {

    console.error('App.SpecialEngagements.findAll: API call failed');
  },
  /**
   * Find all records
   *
   * @memberof App.SpecialEngagements
   * @instance
   * @returns {Array.<Object>}
   */
  findAll: function() {

    var endpoint = 'js/special-engagements.json',
        options = {
          context: this,
          dataType: 'json'
        };

    return $.ajax(endpoint, options).then(this.apiSuccess, this.apiFail);
  },
  /**
   * Map a special engagement object to a typical now playing object
   *
   * @memberof App.SpecialEngagements
   * @instance
   * @param {Object} movie A single special engagement object
   * @returns {Object}
   */
  mapMovie: function(movie) {

    var map = this.map || {},
        mappedMovie = {},
        prop = '';

    for ( prop in map ) {

      if (map.hasOwnProperty(prop)) {

        mappedMovie[prop] = App.getFromPath( movie, map[prop] );
      }
    }

    return mappedMovie;
  }
});