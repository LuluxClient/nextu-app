import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import GalacticCruiserCard from '@/components/GalacticCruiserCard';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View>
        <GalacticCruiserCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
