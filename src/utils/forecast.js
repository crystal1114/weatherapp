const request = require('request')

 const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/100ff7641c4e6961655a3b668741e281/' + latitude + ',' + longitude
    request({url: url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connec to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +
                    ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
 }

 module.exports = forecast