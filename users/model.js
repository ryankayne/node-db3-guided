const db = require('../data/db-config.js');

module.exports = {
    list,
    listById,
    insert
}

function list() {
    return db.select('*').from('users');
}

function listById(id) {
    return db('users').where({ id });
    // return db('users').where({ id: userId });
}

// function insert(user) {
//     return db('users')
//     .insert(user)
//     .then(ids => (ids[0]));
// }

function insert(user) {
    return db('users')
    .insert(user)
    .then(ids => {
        return listById(ids[0])});
}

// function insert(user) {
//     return db('users')
//     .insert(user)
//     .then(([id]) => {
//         return listById(id);
//     })
// }