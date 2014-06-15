/**
 * The index route
 *
 * @memberof App
 * @constructor
 */
App.IndexRoute = Ember.Route.extend({
  /**
   * The route's model
   *
   * @memberof App.IndexRoute
   * @instance
   * @returns {Array.<Object>}
   */
  model: function() {

    return App.Index.findAll();
  }
});

App.Index = Ember.Object.extend();

/**
 * The model for the index route
 *
 * @memberof App
 * @constructor
 */
App.Index.reopenClass({
  /**
   * Find all records
   *
   * @memberof App.Index
   * @instance
   * @returns {Array.<Object>}
   */
  findAll: function() {

    var endpoint = App.get('movieDbApiBase') + 'movie/now_playing',
        options = {
          context: this,
          data: {
            api_key: App.get('movieDbApiKey')
          },
          dataType: 'jsonp'
        };

    return $.ajax(endpoint, options).then(this.apiSuccess, this.apiFail);
  },
  /**
   * API success callback
   *
   * @memberof App.Index
   * @instance
   * @param {Object} response The API response
   * @returns {Array.<Object>}
   */
  apiSuccess: function(response) {

    if (response && response.results instanceof Array) {

      // Limit result set to first 8
      response.results.splice(8);

      return response.results;

    } else {

      this.apiFail();
    }
  },
  /**
   * API failure callback
   *
   * @memberof App.Index
   * @instance
   */
  apiFail: function() {

    console.error('App.Index.findAll: API call failed');
  }
});