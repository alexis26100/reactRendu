import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import ScreenCompteur from '@/components/screen/ScreenCompteur';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ScreenCompteur path="app/(tabs)/(compteur)/compteur.tsx"></ScreenCompteur>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
