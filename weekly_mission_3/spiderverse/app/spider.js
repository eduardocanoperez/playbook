class Spiderman {

    constructor(name, age, actorName, movies, movieStudio){
        this.name = name
        this.age = age
        this.actorName = actorName
        this.movies = movies
        this.movieStudio = movieStudio
    }

    getInfo() {
        return `Hey, i'm ${this.actorName} from Marvel studio`
    }
}

module.exports = Spiderman