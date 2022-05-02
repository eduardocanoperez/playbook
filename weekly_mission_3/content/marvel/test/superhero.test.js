const Superhero = require("./../app/Superhero")


describe("unit test for superhero", () => {
    test('case 1: get a superhero', () => {
        
        const ironman = new Superhero("Iron Man", "Tony Stark", "Robert Downey Jr")
        
        expect(ironman.name).toBe("Iron Man")
        expect(ironman.heroName).toBe("Tony Stark")
        expect(ironman.actor).toBe("Robert Downey Jr")

    })
})