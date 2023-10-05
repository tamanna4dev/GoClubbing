import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from '../screen/Screen';
import LogIn from '../screen/LogIn'
import SignUp from '../screen/SignUp';
import BottomNavigation from '../Bottom/BottomNavigation';
import Discover from '../screen/BottomScreen3/Discover';
import Filters from '../screen/BottomScreen3/Filters'
import Like from '../screen/BottomScreen3/Like'
import Skip from '../screen/BottomScreen3/Skip'
import MatchJoke from '../screen/BottomScreen3/MatchJoke';
import Matches from '../screen/BottomScreen3/Matches';
import Screen1 from '../screen/BottomScreen/Screen1';
import TodaysEvent from '../screen/BottomScreen1/TodaysEvent';
import FeaturedsEvent from '../screen/BottomScreen1/FeaturedsEvent';
import Casinova from '../screen/BottomScreen1/Casinova';
import CasinovaOffers from '../screen/BottomScreen1/CasinovaOffers';
import CasinovaUpcomingEvents from '../screen/BottomScreen1/CasinovaUpcomingEvents';
import LadiesNight from '../screen/BottomScreen1/LadiesNight';
import BookingPage1 from '../screen/BottomScreen1/BookingPage1';
import BookingPage2 from '../screen/BottomScreen1/BookingPage2';
import BookingPage3 from '../screen/BottomScreen1/BookingPage3';
import BookingPage4 from '../screen/BottomScreen1/BookingPage4';





const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen' component={Screen} options={{ headerShown: false }} />
        <Stack.Screen name='LogIn' component={LogIn} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='BottomNavigation' component={BottomNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='Discover' component={Discover} options={{ headerShown: false }} />
        <Stack.Screen name='Filters' component={Filters} options={{ headerShown: false }} />
        <Stack.Screen name='Like' component={Like} options={{ headerShown: false }} />
        <Stack.Screen name='Skip' component={Skip} options={{ headerShown: false }} />
        <Stack.Screen name='MatchJoke' component={MatchJoke} options={{ headerShown: false }} />
        <Stack.Screen name='Matches' component={Matches} options={{ headerShown: false }} />
        <Stack.Screen name='Screen1' component={Screen1} options={{ headerShown: false }} />
        <Stack.Screen name='TodaysEvent' component={TodaysEvent} options={{ headerShown: true }} />
        <Stack.Screen name='FeaturedsEvent' component={FeaturedsEvent} options={{ headerShown: true }} />
        <Stack.Screen name='Casinova' component={Casinova} options={{ headerShown: true }} />
        <Stack.Screen name='CasinovaOffers' component={CasinovaOffers} options={{ headerShown: true }} />
        <Stack.Screen name='CasinovaUpcomingEvents' component={CasinovaUpcomingEvents} options={{ headerShown: true }} />
        <Stack.Screen name='LadiesNight' component={LadiesNight} options={{ headerShown: true }} />
        <Stack.Screen name='BookingPage1' component={BookingPage1} options={{ headerShown: true }} />
        <Stack.Screen name='BookingPage2' component={BookingPage2} options={{ headerShown: true }} />
        <Stack.Screen name='BookingPage3' component={BookingPage3} options={{ headerShown: true }} />
        <Stack.Screen name='BookingPage4' component={BookingPage4} options={{ headerShown: true }} />

      </Stack.Navigator>

    </NavigationContainer>
  )
}
export default AppNavigation

const styles = StyleSheet.create({})