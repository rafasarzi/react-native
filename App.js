import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Campos from './src/components/Campos';
import Titulo from './src/components/Titulo';
import Viva from './src/telas/Viva';

export default function App() {
  return (
    <View style={styles.container}>
      <Viva/>
      <Titulo/>
      <Campos/>
      <Campos/>
      <Campos/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
