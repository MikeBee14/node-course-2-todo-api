const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = '5ba3a0e557acd27068aaa42b11';

// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');  
// }    
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '5ba25ca9fd0efa335d01a941';

User.findById(userId).then((user) => {
    if (!user){
        return console.log('User not found');
    }
    console.log('User By Id', user);
}).catch((e) => console.log(e));