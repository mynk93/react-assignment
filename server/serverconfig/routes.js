/**
 * Routes for express app
 */

module.exports = function(app) {

  app.get('*', function(req, res) {
      res.render('index.html');
  });

};
