const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5e6cca6c954e7f7253b37fd91c514cb6&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json:true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error) {
            callback('Unable to find location. Try again', undefined)
        } else {
            callback(
                undefined, 
                body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feeel like " +
                body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + "%."
            )
        }
    })
}

module.exports = forecast