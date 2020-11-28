function findMatching(drivers, string){
    let newString = string.toLowerCase()
    return drivers.filter(driver => driver.toLowerCase() === newString)
}

function fuzzyMatch(drivers, string){
    return drivers.filter(driver => driver.startsWith(string))
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string)
}