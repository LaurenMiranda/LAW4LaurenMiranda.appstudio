let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

console.log(`${petNames}` )

let withSal = petNames
withSal.push('Sal')

console.log(`${withSal}` )

console.log(`The third pet is named ${petNames[2]}` )

let lengthSal = withSal.length

console.log(`The array has ${lengthSal} names`)

let popped = withSal.pop()

console.log(`${popped}`)