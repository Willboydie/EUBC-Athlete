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
    marginTop: 60,
    marginBottom: 20
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
    marginTop: 60,
    marginBottom: 20
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
},
timerContainer: {
  alignItems: 'center',
  marginVertical: 20,
},
timerText: {
  fontSize: 60,
  fontWeight: 'bold',
  color: '#000',
},

buttonContainer: {
  flexDirection: 'column',  // was 'col' which isn't a valid value
  alignItems: 'center',
  gap: 20,
},

finishButtonSlot: {
  height: 80, // enough to reserve space for the Finish button
  justifyContent: 'center',
  alignItems: 'center',
},

finishButton: {
  flexDirection: 'row',
  backgroundColor: '#FFFFFF',
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 12,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 2,
  borderWidth: 2,
  borderColor: '#000',
},

finishButtonText: {
  fontSize: 20,
  fontWeight: '600',
  color: '#000',
  marginLeft: 8,
},

metricsContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: 10,
  width: '100%',
  paddingHorizontal: 20,
},

metricBox: {
  width: '45%',
  backgroundColor: '#F3F4F6',
  paddingVertical: 20,
  paddingHorizontal: 10,
  borderRadius: 12,
  alignItems: 'center',
  marginVertical: 8,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 2,
},

metricLabel: {
  fontSize: 16,
  color: '#6B7280',
  fontWeight: '500',
  marginBottom: 4,
},

metricValue: {
  fontSize: 24,
  fontWeight: '600',
  color: '#1E3A8A',
},

});

export default styles;