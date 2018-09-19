   //const MongoClient = require('mongodb').MongoClient;
   const {MongoClient, ObjectID} = require('mongodb');

   MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB sever');
    }
    console.log('Connected to MongoDB server'); 

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ba14722adb865c3eb299955')
    // },{
    //     $set:{
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ba0f56dd150d550700c52e0')
    },{
        $set:{
            name: 'MikeBee'
        },
        $inc:{
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
    });