function geolocationSupport() {
    // if ('geolocation' in navigator) {
    //     return true;
    // }

    // return false
    return 'geolocation' in navigator

}

const defaultOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 1000000
}

export function getCurrentPosition(options = defaultOptions) {

    if ( !geolocationSupport() ) throw new Error('Your browser does not support geolocation')

    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition((position) => {
        
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            resolve(position)

            // console.log(position);
        
        }, () => {

            reject('We can not your get current location');

        }, options)
    })
}

export async function getLatLng( options = defaultOptions) {

    try {
        const { coords: { latitude: lat, longitude: lng } } = await getCurrentPosition(options);
        return { lat, lng, isError: false }        
    } catch (error) {
        return { isError: true, lat: null, lng: null }
    }
    
}