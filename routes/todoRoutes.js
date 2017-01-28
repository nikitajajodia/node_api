const Todo = require('../data/todo-schema');

module.exports = function(app, db) {

  // Creating a todo
  app.post('/todo', (req, res) => {
  	const todo = new Todo ({
  		todo: req.body.todo,
  		state: req.body.state
  	});
  	todo.save(function (err, data) {
  		if (err) {
  			console.log("an error occurred", err);
  		} else {
  			res.send(data);
  		}
  	})
  });

  // Fetching all todos
  app.get('/todos' , (req, res) => {
  	Todo.find({}, function (err, todos) {
  		if (err) {
  			cosole.log("an error occurred", err);
  		} else {
  			res.send(todos);
  		}
  	})
  });

};