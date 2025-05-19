import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
import { formatTime } from '../utils/formatTime';


export default function Home() {

  const [ timing, setTiming ] = useState(false);
  const [connected, setConnected ] = useState(false);
  const [ elapsed, setElapsed ] = useState(0);
  const [ inPiece, setInPiece ] = useState(false);
  const intervalRef = useRef(null);

  const togglePlay = () => {
    if (!timing) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 10);
      setInPiece(true);
    } else {
      clearInterval(intervalRef.current);
    }
    setTiming(!timing);
  };

  const toggleFinish = () => {
    if (inPiece) {
      clearInterval(intervalRef.current);
      setInPiece(false);
      setElapsed(0);
      // And upload the data to the server!!
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current)
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
    </View>
  );
}