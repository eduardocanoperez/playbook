const issue = {
    title: "exemple",
    repositoryNameAssociated: "eduardocanoperez",
    status: "open",
    numberOfComments: 45,
    labels: "documentation",
    author: "tomymydog",
    dateCreated: "20/4/2022",
    lastUpdate: "20/4/2022",

    // function: getTitleAndAuthor(), getGeneralInfo()
    getTitleAndAutor: function(){
        return this.title + ", " + this.author        
    },
    getGeneralInfo: function(){
        return `this issue name is ${this.title} have ${this.numberOfComments} comments, and was created ${this.dateCreated} last update ${this.lastUpdate}`
    }

} 

console.log("title and autor: " + issue.getTitleAndAutor())
console.log(issue.getGeneralInfo())