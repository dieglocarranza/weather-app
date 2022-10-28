
function geolocation() {

    const geolocationSupport = true;

    if (geolocationSupport) {
        return {
            lat: 123123,
            lon: 1223
        }
    } else {
        // throw 'Something happened'
        throw new Error('Your devices does not suuport gelocation')
    }
}


try {
    
    const { lat, lon } = geolocation();
    console.log(lat, lon)


    console.log(geolocation())
    
} catch (error) {
    console.log(error.message)
}