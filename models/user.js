'use strict';

const users = [
    {id: 1, username: 'admin', password: 'admin'},
    {id: 2, username: 'user', password: 'user'}
];

class User {
    static find(username, password) {
        return users.find(user => user.username === username && user.password === password);
    }

    static findById(id) {
        return users.find(user => user.id === id);
    }
}

module.exports = User;
