import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container3}>Čau</Text>
      <Text style={styles.container3}>Nefungovalo mi to u mě na počítači proto vám ukážu jen tohle</Text>
      <Image style={styles.container2} source={require('./Img/popis-dinosauru.png')}>
      </Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E5E3',
    alignItems: 'center',
    justifyContent: 'center',

  },
  container2: {
    marginTop: 100,
    width: 200,
    height: 300,
    borderColor: '#000000',
    borderWidth: 6
    
  },
  container3: {
    fontSize: 22

  }
});


