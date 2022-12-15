import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Levels from './screens/Levels';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { Lessons } from './screens/Lessons';

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Levels' }} >
           {(props) => <Levels  {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Level" options={{ title: 'Lessons' }} >
          {(props) => <Lessons  {...props} onPress={() => {}} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
