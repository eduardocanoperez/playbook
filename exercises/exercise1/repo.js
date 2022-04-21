const repo = {
    name: "LaunchX",
    autor: "Eduardocano",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,

    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository belong to ${this.name} was created by ${this.autor} have ${this.stars} stars and ${this.forks} forks`
    }
}
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales:" + repo.getTotalIssues())
console.log(repo.getGeneralInfo())