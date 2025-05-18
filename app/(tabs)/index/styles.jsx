import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  topBar: {
    position: 'absolute',
    top: 50,
    left: 24,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusConnected: {
    fontSize: 16,
    color: '#22C55E', // green
    fontWeight: '600',
  },
  statusDisconnected: {
    fontSize: 16,
    color: '#EF4444', // red
    fontWeight: '600'
  },
  outingId: {
    fontSize: 16,
    color: '#6B7280', // gray-500
    fontWeight: '500',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#1E3A8A',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  startButton: {
    backgroundColor: 'green',
    paddingVertical: 56,
    paddingHorizontal: 56,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  stopButton: {
    backgroundColor: '#EF4444',
    paddingVertical: 56,
    paddingHorizontal: 54,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '500',
  },
  timerText: {
  fontSize: 48,
  color: '#1E3A8A',
  fontWeight: '500',
  marginTop: 40,
}
});

export default styles;