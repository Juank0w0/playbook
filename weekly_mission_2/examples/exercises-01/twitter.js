console.log("\n1. User object")

const user = 
{
    name: 'Juan Carlos',
    username: 'Ju4n_C4rlos',
    bio: 'Hola :)',
    following: 4,
    followers: 0,
    dateJoined: '2022-04',

    getData: function()
    {
        return `${this.name} @${this.username}\n${this.followers} followers and follows ${this.following} accounts`
    }
}

console.log("User " + user.username)
console.log("Bio: " + user.bio)
console.log(user.getData())


console.log("\n2. Trending topic object")

const trending_topic =
{
    hashes: [
        {
            hash: 'BBVA',
            tweets: 9002
        },
        {
            hash: 'cuba',
            tweets: 9002
        },
        {
            hash: 'FelizLunes',
            tweets: 22700
        }
    ],

    getTrendingTopic: function(element)
    {
        return `#${element.hash} with ${element.tweets} tweets`
    }
}

trending_topic.hashes.forEach(function(element, index)
{
    console.log(`Trending topic ${index+1}: `
        + trending_topic.getTrendingTopic(element))
})


console.log("\n3. Hashtag object")

const hashtag1 = 
{
    hash: 'HomeOffice',
    tweets: 37100,

    getTweets: function()
    {
        return this.tweets
    },

    getData: function()
    {
        return `Hash #${this.hash} (${this.tweets} tweets)`
    }
}

console.log(hashtag1.getTweets() + " tweets")
console.log(hashtag1.getData())