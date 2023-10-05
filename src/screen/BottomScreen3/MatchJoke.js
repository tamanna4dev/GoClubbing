import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const MatchJoke = ({navigation}) => {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <View style={{ backgroundColor: 'rgb(238, 238, 238)', padding: 20,}}>
   <View style={{ flexDirection: "row", gap: 10, }} >
   <Image source={require('../../Assets/image/5.png')} style={{ height: 40, width: 40, }} />
       <View style={{ flexDirection: "row", gap: 100 }} >
         <Text style={{ fontSize: 18,color:'#2D4379'}}>Hi, Naveen!</Text>
         <Image source={require('../../Assets/image/6.png')} style={{ height: 33, width: 30, }} />

       </View>
       </View>
       <View style={{ flexDirection: "row",justifyContent:'space-between',marginVertical:15 }} >
       <Image source={require('../../Assets/image/like.png')} style={{ height: 55, width: 55, }} />

     <View style={{ flexDirection: "row", gap:12}} >
       
       <Image source={require('../../Assets/image/speech.png')} style={{ height: 35, width: 50, }} />
       <Image source={require('../../Assets/image/btn.png')} style={{ height: 37, width: 37, }} />
     </View>
     </View>
     
    <View style={{ justifyContent: 'center', alignItems: 'center',}}>
    <Image source={require('../../Assets/image/24.png')} style={{ height:285, width: 220,marginTop:-75 }} />
    </View>

    <View style={{ justifyContent: 'center', alignItems: 'center',}}>
<Text style={{color:'#E94057',fontSize:25,fontWeight:700}}>It’s a match, Jake!</Text>
<Text style={{color:'rgba(0, 0, 0, 0.7)',fontSize:11}}>Start a conversation now with each other</Text>
<TouchableOpacity
         style={{backgroundColor: '#E94057', paddingVertical:12, paddingHorizontal: 78, borderRadius: 15, marginVertical: 30,}}
          onPress={() => {
            navigation.navigate('Matches')
          }}>

          <Text style={{ color: '#fff',fontWeight:600 }}>Say hello </Text>
        </TouchableOpacity>
        
        <Text style={{ backgroundColor: 'rgba(233, 64, 87, 0.15)', paddingVertical:12, paddingHorizontal: 65, borderRadius: 15, color: '#E94057',fontWeight:600,marginTop:-29}}>Keep swiping </Text>

</View>
    </View>
  
    </View>
  )
}

export default MatchJoke

const styles = StyleSheet.create({})