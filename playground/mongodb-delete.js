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

    // todosCollection.deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    // todosCollection.deleteOne({text: 'Something else to do'}).then((result) => {
    //     console.log(result);
    // });

    todosCollection.findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });
    
    // client.close();
});