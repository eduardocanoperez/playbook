const User = require('./../models/user')

class UserService {
    static create(id, userName, name){
        return new User(id, userName, name, "Sin bio")
    }

    static user([]){
        return new userInfoList([1, 2, 3, 4])
    }

    
}

module.exports = UserService