import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import First from '../screen/First'
import Registration from '../screen/Registration'
import Login from '../screen/Login'
import Email from '../screen/Email'
import ResetPassword from '../screen/ResetPassword'
import Welcome from '../screen/Welcome'

const StackNavigation = () => {
   const Stack = createStackNavigator()
   return (
      <Stack.Navigator initialRouteName='First' screenOptions={{ headerShown: false }}>
         <Stack.Screen name='First' component={First} />
         <Stack.Screen name='Registration' component={Registration} />
         <Stack.Screen name='Login' component={Login} />
         <Stack.Screen name='Email' component={Email} />
         <Stack.Screen name='ResetPassword' component={ResetPassword} />
         <Stack.Screen name='Welcome' component={Welcome} />
      </Stack.Navigator>

   )
}

export default StackNavigation

const styles = StyleSheet.create({})