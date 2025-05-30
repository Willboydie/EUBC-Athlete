import getGeoData from './getGeoData';

const updatePosition = (setLatitude, setLongitude, hasPermission) => {
  try {
    const position = getGeoData(hasPermission);
    setLatitude(position.latitude);
    setLongitude(position.longitude);
  } catch (error) {
    console.error("Error updating position:", error);
  }
};

export default updatePosition;
