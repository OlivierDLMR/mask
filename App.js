import React from 'react';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Home from './screens/Home';
import Search from './screens/Search';
import Add from './screens/Add';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Add" component={Add} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

