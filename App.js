import React from 'react';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Home from './screens/Home';
import Search from './screens/Search';
import Add from './screens/Add';
import {Ionicons} from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = 'ios-home';
                } else if (route.name === 'Search') {
                    iconName = 'ios-search';
                }else if (route.name === 'Add') {
                    iconName = 'ios-add-circle';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
                       tabBarOptions={{
                           activeTintColor: 'black',
                           inactiveTintColor: 'black',
                       }}>
            <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Add" component={Add} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

