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
    todosCollection.findOneAndUpdate({
        _id: new ObjectID('5a607a734b1f0c8a98cf07e6')
    }, {
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    usersCollection.findOneAndUpdate({
        _id: new ObjectID('5a607b9e06940d89045474d5')
    }, {
        $inc: {
            age: 1
        },
        $set: {
            name: 'Jensen'
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(results);
        client.close();
    });
    // client.close();
});