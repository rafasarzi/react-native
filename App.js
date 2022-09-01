import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Viva from './src/telas/viva';

export default function App() {
  return (
    <SafeAreaView>
      <Viva />
      <StatusBar />
    </SafeAreaView>
  );
}
