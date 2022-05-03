const Spiderman = require("../app/spider")

describe("unit test for spiderman class", () => {
    test('1) create an spiderman objete', () => {

        const andrewGarfield = new Spiderman("spiderman", 31, "andrew garfield", 2, "SONY")



        expect(andrewGarfield.name).toBe("spiderman")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actorName).toBe("andrew garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.movieStudio).toBe("SONY")

    })
    test('2 use the method getinfo()', () => {
        const tomHolland = new Spiderman("spiderman Marvel", 25, "Tom Holland", 5, "Marvel studio")

        expect(tomHolland.getInfo()).toBe("Hey, i'm Tom Holland from Marvel studio")

    })
})