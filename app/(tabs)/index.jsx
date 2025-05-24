import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import formatTime from '../../utils/formatTime';
import getDistanceMetrics from '../../utils/getDistanceMetrics';
import styles from '../styles/styles';

export default function Home() {

  const [ timing, setTiming ] = useState(false);
  const [connected, setConnected ] = useState(false);
  const [ timerElapsed, setTimerElapsed ] = useState(0);
  const [ geoElapsed, setGeoElapsed ] = useState(0.0);
  const [ inPiece, setInPiece ] = useState(false);
  const [ distance, setDistance ] = useState(0);
  const [ speed, setSpeed ] = useState(0);
  const [ avgSpeed, setAvgSpeed ] = useState(0);
  const [ strokeRate, setStrokeRate ] = useState(0);
  const [ latitude, setLatitude ] = useState(null);
  const [ longitude, setLongitude ] = useState(null);
  const [ newLatitude, setNewLatitude ] = useState(null);
  const [ newLongitude, setNewLongitude ] = useState(null);
  
  const intervalRef = useRef({
    stopwatch: null,
    geoTracking: null
  });

  const updateGeoData = () => {

    updatePosition(setNewLatitude, setNewLongitude);

    const { distance, speed } = getDistanceMetrics(latitude, newLatitude, longitude, newLongitude, geoElapsed);
    setDistance((distance) => distance + distance);
    setSpeed(speed);
    
    setLatitude(newLatitude);
    setLongitude(newLongitude);
  }

  const togglePlay = () => {
    if (!timing) {

      intervalRef.current.stopwatch = setInterval(() => {
        setTimerElapsed((prev) => prev + 1);
      }, 10);

      intervalRef.current.geoTracking = setInterval(() => {
        setGeoElapsed((prev) => prev + 0.5);
        updateGeoData();
      }, 500);

      setInPiece(true);
    } else {
      clearInterval(intervalRef.current.stopwatch);
    }
    setTiming(!timing);
  };

  const toggleFinish = (data) => {
    if (inPiece) {
      clearInterval(intervalRef.current.stopwatch);
      clearInterval(intervalRef.current.geoTracking);
      setInPiece(false);
      setElapsed(0);
      // And upload the data to the server!!
    }
  };

  useEffect(() => {

    return () => {
      clearInterval(intervalRef.current.stopwatch)
      intervalRef.current = {
        stopwatch: null,
        geoTracking: null
      };
      setInPiece(false);
      setElapsed(0);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={connected ? styles.statusConnected : styles.statusDisconnected}>
          ● {connected ? "Connected" : "Offline"}
        </Text>
        <Text style={styles.outingId}>
          Outing ID: #123459
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
        style={timing ? styles.stopButton : styles.startButton} 
        onPress={togglePlay}>
          <Text 
          style={styles.buttonText}>
            <Icon
            name={timing ? 'pause' : 'play'}
            size={64}
            color="#FFFFFF"
          />
          </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.finishButtonSlot}>
    {!timing && inPiece && (
      <TouchableOpacity style={styles.finishButton}
      onPress={toggleFinish}>
        <Icon name="flag" size={32} color="#000" />
        <Text style={styles.finishButtonText}>Finish</Text>
      </TouchableOpacity>
    )}
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>
          {formatTime(elapsed)}
        </Text>
      </View>
      <View style={styles.metricsContainer}>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Distance</Text>
          <Text style={styles.metricValue}>{distance? distance : "0.0"} km</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Speed</Text>
          <Text style={styles.metricValue}>{speed ? speed.toFixed(1) : "0.0"} km/h</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Avg Speed</Text>
          <Text style={styles.metricValue}>
            {avgSpeed ? avgSpeed : '0.0'} km/h
          </Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Rate</Text>
          <Text style={styles.metricValue}>{strokeRate ? strokeRate : "0.0"} s/min</Text>
      </View>
    </View>
    </View>
  );
}