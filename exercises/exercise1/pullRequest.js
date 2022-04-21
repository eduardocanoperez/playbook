const PullRequest = {
    title: "update documentation",
    autor: "tomyMyDog",
    branchName: "tomyBranch",
    dateCreated: 10/12/2022,
    status: "pending",
    repositoryNameAssociated: "eduardocanoperez",

    // function getStatus(), getTitleAndAutor()
    getStatus: function(){
        return this.status
    },
    getTitleAndAutor: function(){
        return `the title is: ${this.title} and the autor is: ${this.autor}`
    }
}

console.log("el status del repo es: " + PullRequest.status)
console.log(PullRequest.getTitleAndAutor())