var mongoose = require('mongoose');

var User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true   
    }
});


// var otherTodo = new User({
//     email: 'Automation+teacher2017-10-02194727.479@prodigygame.com'
// });

// otherTodo.save().then((doc) => {
//     console.log('Saved user', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

module.exports = {User};