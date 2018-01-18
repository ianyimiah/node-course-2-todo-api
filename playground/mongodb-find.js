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
    
    // todosCollection.find({completed: false}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //     client.close();
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    // todosCollection.find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    usersCollection.find().toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
        return usersCollection.find(docs[0][1]).toArray();
    });

    // client.close();
});