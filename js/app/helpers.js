/**
 * Custom Handlebars helpers
 *
 * @namespace Helpers
 */

/**
 * A helper for outputting movie posters
 *
 * @memberof Helpers
 * @instance
 * @method
 * @param {string} filename
 * @parma {string} title
 * @returns {string}
 */
Ember.Handlebars.helper('poster', function(filename, title) {
  
  var alt = 'No movie poster',
      src = '';

  try {

    if (!filename) {

      throw 'filename argument is required';
    }

    // If filename begins with "/", prepend themoviedb.org image base
    src = filename.charAt(0) === '/' ? App.get('movieDbImageBase') + filename : 'img/' + filename;

    // Add movie title to alt text
    alt = title ? alt + ' for ' + title : alt;

    return new Handlebars.SafeString('<img src="' + src + '" alt="' + alt + '">');

  } catch(e) {

    console.warn('poster helper: ' + e);
  }
});