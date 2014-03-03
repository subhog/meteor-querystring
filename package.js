Package.describe({
  summary: "Reactive use of query string."
});

Package.on_use(function (api, where) {
  
  api.use(['deps'], 'client');
  api.add_files('querystring.js', 'client');

});




