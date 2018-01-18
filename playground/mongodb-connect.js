const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    usersCollection = client.db(dbName).collection('Users');
    todosCollection = client.db(dbName).collection('Todos');
    // todosCollection.insertOne({
    //     text: 'Something else to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert to do', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // usersCollection.insertOne({
    //     name: 'Isaac',
    //     age: 22,
    //     location: 'Accra'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});