const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const userId = '5a61cbecf2033c5838f86fc3';
// const id = '5a626665feba9c88446fb25b';

// if (!ObjectID.isValid(id)) {
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
//     if (!todo) {
//         return console.log('id not found');
//     }
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('id not found');
    }
    console.log('User', user);
}).catch((e) => console.log(e));
