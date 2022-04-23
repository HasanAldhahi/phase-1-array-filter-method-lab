// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers, str) {

    return drivers.filter((element, index, array) => {

        return element === str || element.toLowerCase() === str.toLowerCase();

    })

}


function fuzzyMatch(array, str) {

    return array.filter((element) => {
        return element.startsWith(str);

    })

}


function matchName(drivers, str) {

    return drivers.filter((element) => {
        return element.name === str;
    })

}





