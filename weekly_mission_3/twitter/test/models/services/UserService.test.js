const UserService = require('./../../../app/services/UserService')

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
        expect(userInfoList[3]).toBe("sin bio")
    })
})