import Levels from './screens/Levels';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Lessons } from './screens/Lessons';
import Error from './screens/Error';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Levels' }} >
           {(props) => <Levels  {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Level" options={{ title: 'Lessons' }} >
          {(props) => <Lessons  {...props} onPress={() => {}} />}
        </Stack.Screen>
        <Stack.Screen name='Error' options={{ title: 'Oops!' }} >
          {(props) => <Error  {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const CustomTheme = {
  // ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(0, 45, 85)',
  },
};
