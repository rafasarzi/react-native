import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Topo from './src/telas/viva/components/topo'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Topo/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
        <Text>Cadastro Cliente</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Topo/>
      <Text>Details Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text>Cadatro Instrutor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} >
        <Text>voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}>
          
        </Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
  alignItems: "center",
  backgroundColor: "#CC9105",
  padding: 10,
  borderRadius: 6,
  margin: 30,
  marginHorizontal:20
  }
});

export default App;