class User {

    constructor(id, userName, name, bio, userInfo) {

        this.info = userInfo
        this.id = id
        this.userName = userName
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }

    get getInfo() {
        return this.info
    }

    get getUsername() {
        return this.userName
    }
    get getBio() {
        return this.bio
    }
    get getDateCreated() {
        return this.dateCreated
    }
    get getLastUpdated() {
        return this.lastUpdated
    }

    set setUsername(newUsername) {
        this.username = newUsername
    }
    set setBio(newBio) {
        this.bio = newBio
    }
}

module.exports = User