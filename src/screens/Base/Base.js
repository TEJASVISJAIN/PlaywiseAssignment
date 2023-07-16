import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../ProfileScreen'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import EditDetailsScreen2 from '../EditDetailsScreen/EditDetailsScreen2';
import Onboarding from '../OnboardingScreen'
const Root = createStackNavigator();
const Stack = createStackNavigator();

function Flow(){
  return(
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="Edit2"
        component={EditDetailsScreen2}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </Stack.Navigator>
  )
}

function Base() {
    return (
      <NavigationContainer>
        <Root.Navigator screenOptions={{
          headerShown: false
        }}>
          <Root.Screen component={Flow} name="Flow" />
        </Root.Navigator>
      </NavigationContainer>
    );
  }
  
export default Base;
