const todoRoutes = require('./todoRoutes');

module.exports = function(app, db) {
  todoRoutes(app, db);
  // All other routes groups will come here
};