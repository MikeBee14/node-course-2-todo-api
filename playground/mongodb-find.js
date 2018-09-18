   //const MongoClient = require('mongodb').MongoClient;
   const {MongoClient, ObjectID} = require('mongodb');

//    var obj = new ObjectID();
//    console.log(obj);

   MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB sever');
    }
    console.log('Connected to MongoDB server'); 

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ba128f7adb865c3eb298fe5')  
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unabel to fetch todos', err);
    // })

    db.collection('Users').find({
        name: 'MikeBee'  
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unabel to fetch todos', err);
    })

//     db.collection('Todos').find().count().then((count) => {
//         console.log(`Todos count: ${count}`);
//     }, (err) => {
//         console.log('Unabel to fetch todos', err);
//     })

     //db.close();
    });