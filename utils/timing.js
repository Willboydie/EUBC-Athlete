
export function startTiming(intervalRef, setTimerElapsed) {
    intervalRef.current.stopwatch = setInterval(() => {
    setTimerElapsed((prev) => prev + 1);
    }, 10);
}

export function stopTiming(intervalRef) {
    clearInterval(intervalRef.current.stopwatch);
}

export function startGeoTracking(intervalRef, setGeoElapsed, updateGeoData) {
    intervalRef.current.geoTracking = setInterval(() => {
        setGeoElapsed((prev) => prev + 0.5);
        updateGeoData();
    }, 500);
}

export function stopGeoTracking (intervalRef) {
    clearInterval(intervalRef.current.geoTracking);
}

export default { startTiming, stopTiming, startGeoTracking, stopGeoTracking };