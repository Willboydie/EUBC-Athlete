import { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const [isEnabled3, setIsEnabled3] = useState(false);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F8F9FA', dark: '#1E3A8A' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#80808"
          name="settings.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Settings{'\n'}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.settingsContainer}>
        <ThemedView style={styles.settingRow}>
          <ThemedText style={styles.settingLabel}>GPS Tracking</ThemedText>
          <Switch
            trackColor={{ false: '#ccc', true: '#3B82F6' }}
            thumbColor={isEnabled1 ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => setIsEnabled1(previous => !previous)}
            value={isEnabled1}
          />
        </ThemedView>

        <ThemedView style={styles.settingRow}>
          <ThemedText style={styles.settingLabel}>Stroke Counter</ThemedText>
          <Switch
            trackColor={{ false: '#ccc', true: '#3B82F6' }}
            thumbColor={isEnabled2 ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => setIsEnabled2(previous => !previous)}
            value={isEnabled2}
          />
        </ThemedView>

        <ThemedView style={styles.settingRow}>
          <ThemedText style={styles.settingLabel}>Auto Sync Data</ThemedText>
          <Switch
            trackColor={{ false: '#ccc', true: '#3B82F6' }}
            thumbColor={isEnabled3 ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={() => setIsEnabled3(previous => !previous)}
            value={isEnabled3}
          />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#1E3A8A',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  settingsContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
    gap: 24,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomColor: '#E5E7EB',
    borderBottomWidth: 1,
  },
  settingLabel: {
    fontSize: 18,
    color: '#1E3A8A',
  },
});

