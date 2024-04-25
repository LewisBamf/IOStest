import { StatusBar } from 'expo-status-bar';
import { RootTagContext, StyleSheet, Text, View } from 'react-native';
import Buttont from './conponents/button.js';
import Colors from './conponents/colors.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome to my awsome app</Text>
      <Buttont></Buttont>
      <StatusBar style="auto" hidden={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  h1: {
    fontSize: 50,
    color: Colors.text,
  },
});
