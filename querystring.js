

var dep = new Deps.Dependency();

/* TODO: use history.js so that the page doesn't reload on change. */
var set = function(key, val) {
  var query = {};
  var elements = window.location.search.substr(1).split('&');
  _.each(elements, function(element) {
    var arr = element.split('=');
    query[arr[0]] = arr[1];
  });

  query[encodeURIComponent(key)] = encodeURIComponent(val);

  var search = '';

  _.each(query, function(val, key) {
    search += '&' + key + '=' + val;
  });
  window.location.search = '?' + search.substr(1);
  dep.changed();


};

var get = function(key) {
  dep.depend();
  
  var elements = window.location.search.substr(1).split('&');
  var xKey = encodeURIComponent(key) + '=';
  var xLength = xKey.length;

  for(var i in elements) {
    if(elements[i].substr(0,xLength) === xKey) {
      return decodeURIComponent(elements[i].substr(xLength));
    }
  }

  return undefined;
};

// Deps.autorun(function() {
//   dep.depend();
//   console.log("DEP IS CHANGED!");
// });

// Meteor.startup(function() {
//   console.log("STARTUP");
// });


Meteor.Querystring = {
  set: set,
  get: get,
};
