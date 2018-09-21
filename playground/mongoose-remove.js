const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//     console.log(result);
// }); 

Todo.findOneAndRemove({_id: '5ba4e25cadb865c3eb29cef5'}).then((todo) => {
    console.log(todo);
}); 

// Todo.findByIdAndRemove('5ba4e25cadb865c3eb29cef5').then((todo) => {
//     console.log(todo);
// }); 
