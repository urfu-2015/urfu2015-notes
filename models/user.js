'use strict';

const crypto = require('crypto');

const users = [
    {id: 1, username: 'admin', hash: '0192023a7bbd73250516f069df18b500', salt: '123'},
    {id: 2, username: 'user', hash: 'f67c683f0f3e98cb9dd5582e8cbbcd04', salt: '321'}
];

function encryptPassword(password, salt) {
    return crypto.createHash('md5').update(password + salt).digest('hex');
}

class User {
    constructor(props) {
        this.id = props.id;
        this.username = props.username;

        this.hash = props.hash;
        this.salt = props.salt;
    }
    checkPassword(password) {
        const hash = encryptPassword(password, this.salt);

        return this.hash === hash;
    }

    static findByName(username) {
        var user = users.find(user => user.username === username);

        return user && new User(user);
    }

    static findById(id) {
        var user = users.find(user => user.id === id);

        return user && new User(user);
    }

    static getSerializator() {
        return user => user.id;
    }

    static getDeserializator() {
        return id => User.findById(id);
    }
}

module.exports = User;
