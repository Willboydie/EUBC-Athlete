import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
// import { useEffect } from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Athlete.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.stopButton]}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', // off-white
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#1E3A8A', // deep blue
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: '#3B82F6', // soft blue
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, // Android shadow
  },
  stopButton: {
    backgroundColor: '#EF4444', // soft red for Stop
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
});
