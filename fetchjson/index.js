"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    //const todo = response.data
    //----this is if we use the interface todo
    var todo = response.data;
    var userId = todo.userId;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(userId, id, title, completed);
});
var logTodo = function (userId, id, title, completed) {
    console.log("\n        userId: ".concat(userId, ";\n        The to do with ID: ").concat(id, "\n        has a title of: ").concat(title, "\n        It is completed : ").concat(completed, "\n    "));
};
