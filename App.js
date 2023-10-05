import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/Navigation/AppNavigation'
import BottomNavigation from './src/Bottom/BottomNavigation'
import Filters from './src/screen/BottomScreen3/Filters'
import Like from './src/screen/BottomScreen3/Like'
import Skip from './src/screen/BottomScreen3/Skip'
import MatchJoke from './src/screen/BottomScreen3/MatchJoke'
import Matches from './src/screen/BottomScreen3/Matches'
import Discover from './src/screen/BottomScreen3/Discover'
import Screen1 from './src/screen/BottomScreen/Screen1'
import LadiesNight from './src/screen/BottomScreen1/LadiesNight'
import TodaysEvent from './src/screen/BottomScreen1/TodaysEvent'
import FeaturedsEvent from './src/screen/BottomScreen1/FeaturedsEvent'
import Casinova from './src/screen/BottomScreen1/Casinova'
import CasinovaUpcomingEvents from './src/screen/BottomScreen1/CasinovaUpcomingEvents'
import CasinovaOffers from './src/screen/BottomScreen1/CasinovaOffers'
import BookingPage4 from './src/screen/BottomScreen1/BookingPage4'
import BookingPage1 from './src/screen/BottomScreen1/BookingPage1'
import BookingPage3 from './src/screen/BottomScreen1/BookingPage3'
import BookingPage2 from './src/screen/BottomScreen1/BookingPage2'



const App = () => {
  return (
    <View style={{flex:1,}}>
      {/* <AppNavigation/> */}
{/* <Screen1/> */}
{/* <LadiesNight/> */}
{/* <TodaysEvent/> */}
{/* <FeaturedsEvent/> */}
{/* <Casinova/> */}
{/* <CasinovaUpcomingEvents/> */}
{/* <CasinovaOffers/> */}
{/* <BookingPage4/> */}
<BookingPage1/>
{/* <BookingPage3/> */}
{/* <BookingPage2/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
