import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen1 from '../screen/BottomScreen/Screen1'
import Screen2 from '../screen/BottomScreen/Screen2'
import Screen3 from '../screen/BottomScreen/Screen3'
import Screen4 from '../screen/BottomScreen/Screen4'
import { NavigationContainer } from '@react-navigation/native';



const bottom=createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    
    <bottom.Navigator>
        <bottom.Screen name='Screen1' component={Screen1} 
        options={{headerShown:false, tabBarIcon:()=>{
            return (
                <Image source={require('../Assets/image/14.png')} style={{ height: 20, width: 20, }} />
            )
        }}} />
        <bottom.Screen name='Screen2' component={Screen2} options={{headerShown:false, tabBarIcon:()=>{
            return (
                <Image source={require('../Assets/image/15.png')} style={{ height: 20, width: 20, }} />
            )
        }}} />
           <bottom.Screen name='Screen3' component={Screen3} options={{headerShown:false, tabBarIcon:()=>{
            return (
                <Image source={require('../Assets/image/16.png')} style={{ height: 20, width: 20, }} />
            )
        }}} />
            <bottom.Screen name='Screen4' component={Screen4} options={{headerShown:false, tabBarIcon:()=>{
            return (
                <Image source={require('../Assets/image/17.png')} style={{ height: 20, width: 20, }} />
            )
        }}} />

    </bottom.Navigator>
 
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})