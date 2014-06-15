Ember.TEMPLATES["404"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"row\">\n  <div class=\"columns\">\n    <h2>404 Page not found</h2>\n\n    <p>\n      The page requested could not be found.\n    </p>\n  </div>\n</section>");
  
});
Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "topnav", options) : helperMissing.call(depth0, "partial", "topnav", options))));
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "partial", "header", options))));
  data.buffer.push("\n\n<main class=\"row shadow\">\n  <div class=\"columns\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n  </div>\n</main>");
  return buffer;
  
});
Ember.TEMPLATES["footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Now Playing");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Special Engagements");
  }

  data.buffer.push("<footer class=\"row footer-main\">\n  <div class=\"large-8 large-centered columns text-center\">\n    <div class=\"row\">\n      <div class=\"large-6 columns\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "vcard", options) : helperMissing.call(depth0, "partial", "vcard", options))));
  data.buffer.push("\n      </div>\n\n      <div class=\"large-6 columns\">\n        <ul class=\"footer-menu no-bullet\">\n          <li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </li>\n\n          <li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "special-engagements", options) : helperMissing.call(depth0, "link-to", "special-engagements", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </li>\n\n          <li>\n            <a href=\"#\">About</a>\n          </li>\n\n          <li>\n            <a href=\"#\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>");
  return buffer;
  
});
Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<header class=\"row header-main\">\n  <div class=\"large-4 medium-4 columns\">\n    <img src=\"img/ye-olde-logo.png\" alt=\"Image of logo\">\n  </div>\n\n  <div class=\"large-2 medium-3 columns text-center hide-for-small\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "vcard", options) : helperMissing.call(depth0, "partial", "vcard", options))));
  data.buffer.push("\n  </div>\n\n  <div class=\"large-6 medium-5 columns text-right\">\n    <div class=\"header-share\">\n      <img src=\"img/share.png\" class=\"pointer\" alt=\"Image of sharing buttons\">\n    </div>\n  </div>\n</header>");
  return buffer;
  
});
Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"row\">\n  <div class=\"columns\">\n    <h2 class=\"uppercase\">Now Playing</h2>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "movies", options) : helperMissing.call(depth0, "partial", "movies", options))));
  data.buffer.push("\n  </div>\n</section>");
  return buffer;
  
});
Ember.TEMPLATES["movies"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <li>\n      <h3 class=\"movie-title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n\n      <div class=\"movie-poster\">\n        <img src=\"");
  stack1 = helpers.unbound.call(depth0, "App.movieDbImageBase", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers.unbound.call(depth0, "poster_path", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\" alt=\"No movie poster for ");
  stack1 = helpers.unbound.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\">\n      </div>\n\n      <strong>Showtimes</strong>\n\n      <p>\n        ");
  stack1 = helpers.each.call(depth0, "showtimes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n\n      <div class=\"text-center\">\n        <a class=\"button radius\">Buy Tickets</a>\n      </div>\n    </li>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n          No showtimes\n        ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n    <li>\n      <p>Nothing playing right now.</p>\n    </li>\n  ");
  }

  data.buffer.push("<ul class=\"small-block-grid-2 medium-block-grid-4 text-center\">\n  ");
  stack1 = helpers.each.call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>");
  return buffer;
  
});
Ember.TEMPLATES["special-engagements"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"row\">\n  <div class=\"columns\">\n    <h2 class=\"uppercase\">Special Engagements</h2>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "movies", options) : helperMissing.call(depth0, "partial", "movies", options))));
  data.buffer.push("\n  </div>\n</section>");
  return buffer;
  
});
Ember.TEMPLATES["tests"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <li>\n          <a href=\"#/test/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n        </li>\n      ");
  return buffer;
  }

  data.buffer.push("<section class=\"row\">\n  <div class=\"columns\">\n    <h2 class=\"uppercase\">Available Tests</h2>\n\n    <ul>\n      ");
  stack1 = helpers.each.call(depth0, "tests", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </div>\n</section>");
  return buffer;
  
});
Ember.TEMPLATES["topnav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Now Playing");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Special Engagements");
  }

  data.buffer.push("<div class=\"contain-to-grid shadow\">\n  <nav class=\"top-bar\" data-topbar>\n    <ul class=\"title-area\">\n      <li class=\"name\">\n        <h1>\n          &nbsp;\n          Ye Olde Theatre\n        </h1>\n      </li>\n\n      <li class=\"toggle-topbar menu-icon\">\n        <a href=\"#\"></a>\n      </li>\n    </ul>\n\n    <section class=\"top-bar-section\">      \n      <ul class=\"right\">\n        <li>\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n\n        <li class=\"divider\"></li>\n\n        <li>\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "special-engagements", options) : helperMissing.call(depth0, "link-to", "special-engagements", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n\n        <li class=\"divider\"></li>\n\n        <li>\n          <a href=\"#\">About</a>\n        </li>\n\n        <li class=\"divider\"></li>\n\n        <li>\n          <a href=\"#\">Contact</a>\n        </li>\n      </ul>\n    </section>\n  </nav>\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["vcard"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<ul class=\"location no-bullet\">\n  <li>\n    <u>Ye Olde Theatre</u>\n  </li>\n  \n  <li>\n    <em>1234 SE Fake St</em>\n  </li>\n\n  <li>\n    <em>Portland, OR</em>\n  </li>\n\n  <li>\n    <em>\n      <a href=\"#\">Get directions</a>\n    </em>\n  </li>\n</ul>");
  
});