console.log("1. User class")

class User
{
    constructor(name, password)
    {
        this.name = name
        this.password = password

        this.id = '98716654989'

        var today = new Date()
        this.dateCreated = today.getFullYear() + '-'
            + (today.getMonth()+1)
            + '-' + today.getDate()
    }

    checkPassword(pass)
    {
        return pass == this.password
    }

    printLogin()
    {
        return `Welcome ${this.name}`
    }
}

user = new User('Juan Carlos', 'sadfe65468er6s4s')

if (user.checkPassword('sadfe65468er6s4s'))
{
    console.log(user.printLogin())
}
else
{
    console.log('Wrong password!')
}

/**
 * 2.
 */
console.log("\n2. Post class")

class Post
{
    constructor(owner, message)
    {
        this.owner = owner
        this.message = message

        this.comments = 0
        this.likes = 0
        this.shares = 0

        this.commentCount
        this.comments = []
    }

    addComment(user, message)
    {
        this.commentsCount++

        this.comments.push({user, message})
    }

    set setLikes(likes)
    {
        this.likes = likes
    }

    set setShares(shares)
    {
        this.shares = shares
    }

    get getComments()
    {
        var sReturn = ''
        this.comments.forEach(function(element, index)
        {
            sReturn += `\nComment #${index+1} `
            sReturn += `${element.user} commented: ${element.message}`
        })

        return sReturn
    }

    get getLikesAndShares()
    {
        return `Likes ${this.likes}, Shares: ${this.shares}`
    }
}

post = new Post('Juan Carlos', 'This is my first post')

post.setLikes = 50
post.setShares = 20

post.addComment('Benito', 'Hola')
post.addComment('Manuela', 'Que buen meme')
post.addComment('Ricardo', 'Que cuentas')

console.log(`${post.owner} posted: ${post.message}`)
console.log(post.getLikesAndShares)
console.log(post.getComments)

/**
 * 3.
 */
console.log("\n3. Biography class")

class Biography
{
    constructor(user, gender, description)
    {
        this.user = user
        this.gender = gender
        this.description = description

        this.userID = '1000224433448855'
    }
    
    set setEmployment(employment)
    {
        this.employment = employment
    }

    set setLivesIn(place)
    {
        this.livesIn = place
    }

    set setFrom(place)
    {
        this.from = place
    }

    get getUserInfo()
    {
        return `from ${this.from} and lives in ${this.livesIn}`
    }

    get getUser()
    {
        return this.user
    }

    get getHome()
    {
        return `${this.livesIn}`
    }
}

biography = new Biography('Juan Carlos', 'Male', 'I am a LaunchX programmer')

biography.setEmployment = 'Estudent'
biography.setLivesIn = 'San cris, chis'
biography.setFrom = 'chis, San Cris'

console.log(`${biography.getUser} is `)
console.log(biography.getUserInfo)
console.log('Biography: ' + biography.description)