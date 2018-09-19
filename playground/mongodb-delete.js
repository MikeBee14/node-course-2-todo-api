   //const MongoClient = require('mongodb').MongoClient;
   const {MongoClient, ObjectID} = require('mongodb');

   MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB sever');
    }
    console.log('Connected to MongoDB server'); 

    //deleteMany
    // db.collection('Users').deleteMany({name: 'MikeBee'})
    // .then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'})
    //  .then((result) => {
    //       console.log(result);
    // });

    // findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5ba0fed7908f7c5175a00411')})
    .then((result) => {
         console.log(JSON.stringify(result, undefined, 2));
    });

    //db.close();
    });