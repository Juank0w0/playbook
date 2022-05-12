console.log("\n1. Profile object")

const profile =
{
    name: 'Juan Carlos',
    mobile: '645-1234-1234',
    email: 'juancaruser@gmail.com',

    getContactData: function()
    {
        return `${this.mobile} ${this.email}`
    }
}

console.log(profile.name)
console.log(profile.getContactData())


console.log("\n2. History object")

const history =
{
    trips: [
        {
            origin: 'Centro de la cuidad',
            destination: 'Col. Maravilla',
            distance_km: 8,
            fare: 100,
            currency: 'mxn'
        },
        {
            origin: 'Centro Historico',
            destination: 'Museo',
            distance_km: 5,
            fare: 132.3,
            currency: 'mxn'
        },
        {
            origin: 'Av. 20 de mayo',
            destination: 'Av. cesar',
            distance_km: 5,
            fare: 50,
            currency: 'mxn'
        }
    ],

    getOriginDestination: function(element)
    {
        return `From ${element.origin} to ${element.destination}`
    },

    getTripFare: function(element)
    {
        return `${element.distance_km} km @ $${element.fare} ${element.currency}`
    }
}

history.trips.forEach(function(element, index)
{
    console.log(`\nTrip #${index+1}`)
    console.log(history.getOriginDestination(element))
    console.log(history.getTripFare(element))
})


console.log("\n3. Current trip object")

const current_trip =
{
    origin: 'Calle cosntantino',
    destination: 'Soriana',
    distance_km: 3,
    fare: 80,
    currency: 'mxn',

    getOriginDestination: function()
    {
        return `From ${this.origin} to ${this.destination}`
    },

    getTripFare: function()
    {
        return `${this.distance_km} km @ $${this.fare} ${this.currency}`
    }
}

console.log(current_trip.getOriginDestination())
console.log(current_trip.getTripFare())