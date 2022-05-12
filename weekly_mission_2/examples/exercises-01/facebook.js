console.log("1. User object")

const user =
{
    name: 'Juan Carlos',
    password: '********',
    id: '8197687979879879',
    dateCreated: '2015-04-18',

    checkPassword: function(pass)
    {
        return pass == this.password
    },

    printLogin: function()
    {
        return `Welcome ${this.name}`
    }
}

if (user.checkPassword('********'))
{
    console.log(user.printLogin())
}
else
{
    console.log('Wrong password!')
}

console.log("\n2. Post object")

const post =
{
    owner: 'Juan Carlos',
    message: 'This is my first post.',
    likes: 50,
    shares: 20,
    comments: [
        {
            user: 'Benito',
            message: 'Hola'
        },
        {
            user: 'Manuela',
            message: 'Que buen meme'
        },
        {
            user: 'Ricardo',
            message: 'Que cuentas'
        }
    ],

    getComments: function()
    {
        var sReturn = ''
        this.comments.forEach(function(element, index)
        {
            sReturn += `\nComment #${index+1} `
            sReturn += `${element.user} commented: ${element.message}`
        })

        return sReturn
    },

    getLikesAndShares: function()
    {
        return `Likes ${this.likes}, Shares: ${this.shares}`
    }
}

console.log(`${post.owner} posted: ${post.message}`)
console.log(post.getLikesAndShares())
console.log(post.getComments())

console.log("\n3. Biography object")

const biography = 
{
    user: 'Juan Carlos',
    userID: '984sadf9498e9e',
    gender: 'Male',
    description: 'Hello my name is juan',
    employment: 'free',
    livesIn: '.',
    from: 'San cris, Chiapas',

    getUserInfo: function()
    {
        return `from ${this.from} and lives in ${this.livesIn}`
    },

    getHome: function()
    {
        return `${this.livesIn}`
    }
}

console.log(`${biography.user} is `)
console.log(biography.getUserInfo())
console.log('Biography: ' + biography.description)