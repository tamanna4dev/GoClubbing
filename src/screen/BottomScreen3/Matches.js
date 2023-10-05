import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Matches = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <View style={{ backgroundColor: 'rgb(238, 238, 238)', padding: 20,}}>
   <View style={{ flexDirection: "row", gap: 10, }} >
   <Image source={require('../../Assets/image/5.png')} style={{ height: 40, width: 40, }} />
       <View style={{ flexDirection: "row", gap: 117 }} >
         <Text style={{ fontSize: 18,color:'#2D4379'}}>Hi, Naveen!</Text>
         <Image source={require('../../Assets/image/6.png')} style={{ height: 33, width: 30, }} />

       </View>
       </View>
       <View style={{ flexDirection: "row", gap: 30,justifyContent:'space-between',marginVertical:17 }} >
       <Image source={require('../../Assets/image/like.png')} style={{ height: 55, width: 55, }} />
     <Text style={{fontWeight:700,fontSize:22,}}>Matches</Text>
     <View style={{ flexDirection: "row", gap:12}} >
       
       <Image source={require('../../Assets/image/speech.png')} style={{ height: 41, width: 57, }} />
       <Image source={require('../../Assets/image/29.png')} style={{ height: 42, width: 42, }} />
     </View>
     </View>
   <View style={{ justifyContent: 'center', alignItems: 'center',}}>
   <Text style={{color:'rgba(0, 0, 0, 0.7)',fontSize:12}}>This is a list of people who have liked you and </Text>
          <Text style={{color:'rgba(0, 0, 0, 0.7)',fontSize:12}}>your matches.</Text>
     <View style={{flexDirection:'row',gap:15 ,marginVertical:20}}>
       <Image source={require('../../Assets/image/25.png')} style={{ height: 200, width: 140,borderRadius:7 }} />
       <Image source={require('../../Assets/image/26.png')} style={{ height: 200, width: 140,borderRadius:7 }} />
     </View>

     <View style={{flexDirection:'row',gap:15}}>
       <Image source={require('../../Assets/image/27.png')} style={{ height: 200, width: 140,borderRadius:7 }} />
       <Image source={require('../../Assets/image/28.png')} style={{ height: 200, width: 140,borderRadius:7 }} />
     </View>
   </View>
    </View>
    
    </View>
  )
}

export default Matches

const styles = StyleSheet.create({})