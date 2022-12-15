import { StyleSheet, View } from 'react-native';
import Levels from './screens/Levels';

export default function App() {
  return (
    <View style={styles.container}>
      <Levels />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    paddingTop: 50,
  },
});
