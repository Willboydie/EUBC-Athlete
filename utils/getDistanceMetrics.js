import { getDistance } from 'geolib';


export default function getDistanceMetrics(latitude, newLatitude, longitude, newLongitude, geoElapsed) {
    
    const distance = getDistance(
        { latitude, longitude },
        { latitude: newLatitude, longitude: newLongitude }
    ) / 1000.0 ; // Distance in km

    const speed = distance / geoElapsed; // Speed in km/s
    
    return {
        distance,
        speed
    };
}