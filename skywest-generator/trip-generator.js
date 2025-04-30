// HTML Elements Assignment
let jsAircraft = document.getElementById('HTMLaircraft')
let jsPosition = document.getElementById('HTMLposition')
let jsLegs = document.getElementById('HTMLlegs')
let jsRoute = document.getElementById('HTMLroute')
let jsButton = document.getElementById('generate-button')

/* This function will generate a skywest trip for one day

Output :
Aircraft type you will be flying
Your crew position
Number of legs you will be flying
Your route - airports you will be flying to

*/

function generateTrip() {

    // Data banks
    const aircraft = ['ERJ', 'CRJ 900', 'CRJ 700', 'CRJ 550', 'CRJ 200', 'A380']
    const position = ['Captain', 'First Officer', 'Flight Attendant']
    const airports = ['APA', 'COS', 'GJT', 'ASE', 'DRO', 'PUB', 'LAR', 'CPR', 'COD']

    // Roll for how many flights the trip will have
    let legs = Math.ceil((Math.random() * 4) + 1)

    // Function to create a route for the trip in a list
    function generateAirports() {
        let list = ['DEN', '>>>']
        for (let i = 0; i < legs - 1; i++) {
            let nextStop = Math.floor(Math.random() * airports.length)

            // Validate next destination is not the same as the previous destination
            while (airports[nextStop] === list[list.length - 2]) {
                nextStop = Math.floor(Math.random() * airports.length)
            }

            list.push(airports[nextStop])
            list.push('>>>')
        }
        list.push('DEN')
        return list
    }

    // Assign aircraft type and position
    let aircraftAssignment = aircraft[Math.floor(Math.random() * aircraft.length)]
    let positionAssignment = position[Math.floor(Math.random() * position.length)]

    // Create the route
    let airportsList = generateAirports()
    let route = airportsList.join(' ')

    // Log results
    // console.log(`You got assigned a trip!`)
    // console.log(`You will be flying on the ${aircraftAssignment}.`)
    // console.log(`You will be operating as the ${positionAssignment}.`)
    // console.log(`Your trip has ${legs} legs.`)
    // console.log(`Your route: ${route}`)

    // Display results
    jsAircraft.innerHTML = `${aircraftAssignment}`
    jsPosition.innerHTML = `${positionAssignment}`
    jsLegs.innerHTML = `${legs}`
    jsRoute.innerHTML = `${route}`
}

jsButton.onclick = generateTrip