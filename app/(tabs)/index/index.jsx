import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';


export default function Home() {

  const [ start, setStart ] = useState(false);
  const [connected, setConnected ] = useState(false);
  const [ elasped, setElapsed ] = useState(0);

  const toggleStart = () => {
    if (!start) {
      // const now = Date.now();
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    setStart(!start);
  };

  useEffect(() => {
    // Clean up interval on unmount
    return () => clearInterval(intervalRef.current);
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
        style={start ? styles.stopButton : styles.startButton} 
        onPress={() => {setStart(!start)}}>
          <Text 
          style={styles.buttonText}>
            <Icon
            name={start ? 'pause' : 'play'}
            size={64}
            color="#FFFFFF"
          />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
