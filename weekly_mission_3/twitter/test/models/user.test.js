const User = require('./../../app/models/user')

describe("Unit Test fot User class", () => {

    test('Create an User object', () => {
        //codigo que usaremos en la app
        const user = new User(1, "eduardocano", "eduardo cano", "Bio")

        //aqui validas resultados del codigo
        //comparacion que va a igualar izquierda con derecha
        expect(user.id).toBe(1)
        expect(user.userName).toBe("eduardocano")
        expect(user.name).toBe("eduardo cano")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test('add getters', () => {

        const user = new User(1, "eduardocano", "eduardo cano", "Bio")
        expect(user.getUsername).toBe("eduardocano")
        expect(user.bio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    test('add setters', () => {
        const user = new User(1, "eduardocano", "eduardo cano", "Bio")
        user.setUsername = "eduardo"
        expect(user.username).toBe("eduardo")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    })
    
})