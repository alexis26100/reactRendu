import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/screen/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View>
      <EditScreenInfo path="app/(tabs)/index.tsx" />

    </View>
    
  );
}
