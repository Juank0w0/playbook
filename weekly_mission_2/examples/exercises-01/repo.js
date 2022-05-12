console.log("\n1. Repo object")
//Crear un objeto pelón con propiedades
const repo = {
    name: 'juank0w0\'s repo',
    author: 'Juan carlos',
    language: 'en',
    numberOfCommits: 10,
    stars: 0,
    forks: 2,
    issues_open: 1,
    issues_closed: 0,
//funciones
    getTotalIssues: function()
    {
        return this.issues_open + this.issues_closed;
    },

    // Alternative
    // getGeneralInfo: function()
    getGeneralInfo()
    {
        console.log(`This repository \"${this.name}\" was created by ${this.author}`)
    }
}

console.log("Repository name: " + repo.name)
console.log("Total issues: " + repo.getTotalIssues())
repo.getGeneralInfo()


console.log("\n2. Issue object")

const issue = {
    title: 'New issue',
    repositoryNameAssociated: 'Juank0w0\'s repo',
    status: 'open',
    numberOfComments: 0,
    labels: [
        "LaunchX", "important"
    ],
    author: 'Juan Carlos',
    dateCreated: '2022-05-09',
    lastUpdated: '2022-04-10',

    getTitleAndAuthor: function()
    {
        return `Title: ${this.title}, Author: ${this.author}`
    },

    getGeneralInfo: function()
    {
        return `Status: ${this.status}, Labels: [${this.labels}]\nDateCreated: ${this.dateCreated}, DateModified: ${this.lastUpdated}`
    }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())


console.log("\n3. PullRequest object")

const pullRequest = 
{
    title: 'Found an error on X class',
    author: 'Juan Carlos',
    branchName: 'main',
    dateCreated: '2022-04-17',
    status: 'open',
    repositoryNameAssociated: 'juank0w0/LaunchX',

    getStatus: function()
    {
        return this.status;
    },

    getTitleAndAuthor: function()
    {
        return `Title: ${this.title}\nAuthor: ${this.author}`
    }
}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())