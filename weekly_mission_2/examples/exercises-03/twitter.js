console.log("\n1. User class")

class User
{
    constructor(name, username, bio)
    {
        this.name = name
        this.username = username
        this.bio = bio

        this.following = 0
        this.followers = 0

        var today = new Date()
        this.dateJoined = today.getFullYear() + '-'
            + (today.getMonth()+1)
            + '-' + today.getDate()
    }

    get getData()
    {
        return `${this.name} @${this.username}\n${this.followers} followers and follows ${this.following} accounts`
    }

    set setFollowers(x)
    {
        this.followers = x
    }

    set setFollowing(x)
    {
        this.following = x
    }
}

user = new User('Juan Carlos', "Ju4n_C4rlos", "Hola")

console.log(user.getData)

user.setFollowers = 0
user.setFollowing = 3

console.log(user.getData)


/**
 * 2.
 */
console.log("\n2. Trending topic object")

class Hash 
{
    constructor(hash)
    {
        this.hash = hash
        this.tweets = 0
    }

    set setTweets(number)
    {
        this.tweets = number
    }

    get getTweets()
    {
        return this.tweets
    }

    get getData()
    {
        return `Hash #${this.hash} (${this.tweets} tweets)`
    }
}


class TrendingTopic
{
    constructor()
    {
        this.hashes = []
    }

    set addHash(hash)
    {
        this.hashes.push(hash)
    }

    get getHashes()
    {
        return this.hashes
    }

    getTrendingTopic(element)
    {
        return `#${element.hash} with ${element.tweets} tweets`
    }

    printTrendingTopics()
    {
        this.hashes.forEach(function(element, index)
        {
            console.log(`Trending topic ${index+1}: `
                + trendingTopic.getTrendingTopic(element))
        })
    }
}

trendingTopic = new TrendingTopic()

hash1 = new Hash('BBVA')
hash1.setTweets = 9002
trendingTopic.addHash = hash1

hash2 = new Hash('cuba')
hash2.setTweets = 9002
trendingTopic.addHash = hash2

hash3 = new Hash('FelizLunes')
hash3.setTweets = 22700
trendingTopic.addHash = hash3

trendingTopic.getHashes.forEach(function(element, index)
{
    console.log(`Trending topic ${index+1}: `
        + trendingTopic.getTrendingTopic(element))
})

console.log("\nAdd trending topic")

hash4 = new Hash('LaunchX')
hash4.setTweets = 453010
trendingTopic.addHash = hash4

trendingTopic.printTrendingTopics()


console.log("\n3. Hashtag object")

hashtag1 = new Hash('NodeJS')
hashtag1.setTweets = 97500
console.log(hashtag1.getTweets + " tweets")
console.log(hashtag1.getData)