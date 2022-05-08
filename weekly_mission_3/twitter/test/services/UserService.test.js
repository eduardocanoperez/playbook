const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test("1. create a new user using the UserService", () => {
        const user = UserService.create(1, "eduardocano", "eduardo")

        expect(user.userName).toBe("eduardocano")
        expect(user.name).toBe("eduardo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. get all user data in a list", () => {
        const user = UserService.create(1, "eduardocano", "eduardo")
        const userInfoList = UserService.getInfo(user)

        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("eduardocano")
        expect(userInfoList[2]).toBe("eduardo")
        expect(userInfoList[3]).toBe("Sin bio")
    })

    test("3. update username", () => {
        const user = UserService.create(1, "eduardocano", "eduardo")
        UserService.updateUsername(user, "lalo")
        expect(user.username).toBe("lalo")
    })

    test("4. given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "eduardocano1", "eduardo")
        const user2 = UserService.create(1, "eduardocano2", "eduardo")
        const user3 = UserService.create(1, "eduardocano3", "eduardo")
        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toContain("eduardocano1")
        expect(usernames).toContain("eduardocano2")
        expect(usernames).toContain("eduardocano3")
    })
})