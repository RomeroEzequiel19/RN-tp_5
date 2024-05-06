import ContadorScreen from './src/screens/ContadorScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import ListScreen from './src/screens/ListScreen.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Inicio'>
        <Tab.Screen name='Inicio' component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name='Lista' component={ListScreen} 
        options={{
          tabBarLabel: 'Lista',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="list-status" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name='Contador' component={ContadorScreen} 
        options={{
          tabBarLabel: 'Contador',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="contain" color={color} size={26} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App