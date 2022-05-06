const User = require('./../models/user')

class UserService {
    static create(id, userName, name){
        return new User(id, userName, name, "Sin bio")
    }

    static getInfo(user) {
        return Object.values(user)
    }

    static updateUsername(user, username) {
        user.setUsername = username
    }

    static getAllUsernames(user){
        const usersUsernames = user.map( user => user.userName)
        return usersUsernames
    }

}

module.exports = UserService