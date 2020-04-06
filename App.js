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
                    iconName = focused
                        ? 'ios-home'
                        : 'ios-home-outline';
                } else if (route.name === 'Search') {
                    iconName = focused ? 'ios-search-box' : 'ios-search';
                }else if (route.name === 'Add') {
                    iconName = focused ? 'ios-add-circle-box' : 'ios-add-circle';
                }

                // You can return any component that you like here!
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

