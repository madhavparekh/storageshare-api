var request = require('request');
var key = require('./keys').gMaps

const baseURL = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins='
 

function getDistances(renterAddress, locationAdresses) {
    let origin = renterAddress.replace(/,/g, '').replace(/ /g , '+')
    let destinations = locationAdresses.map(e => e + '|').toString().replace(/,/g , '').replace(/ /g , '+')
    let distanceMatrixRequest = baseURL + origin + '&destinations=' + destinations.substring(0, destinations.length - 1) + '&key=' +key.access_token_key;
    console.log(distanceMatrixRequest)
    // console.log(destinations.substring(0, destinations.length - 1))

}

module.exports = { getDistances }
