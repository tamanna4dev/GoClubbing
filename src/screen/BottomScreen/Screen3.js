import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Screen3 = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20,height:600}}>
   <View style={{ flexDirection: "row", gap: 10, }} >
   <Image source={require('../../Assets/image/5.png')} style={{ height: 40, width: 40, }} />
       <View style={{ flexDirection: "row", gap: 146 }} >
         <Text style={{ fontSize: 18,color:'#2D4379'}}>Hi, Naveen!</Text>
         <Image source={require('../../Assets/image/6.png')} style={{ height: 33, width: 30, }} />

       </View>
       </View>

<View style={{justifyContent: 'center', alignItems: 'center',}}>
<Image source={require('../../Assets/image/people.png')} style={{ height: 240, width: 240, }} />

<Text style={{fontSize:25,fontWeight:700 ,color:'gba(0, 0, 0, 1)',marginVertical:20,width:240}}>Discover ,match & get connected </Text>
<Text style={{fontSize:14,color:'rgba(0, 0, 0, 0.7)'}}>     You can make friends and connections by  </Text>

<Text style={{fontSize:14,color:'rgba(0, 0, 0, 0.7)'}}>joining the elite goClubbing community.</Text>


<TouchableOpacity
         style={{backgroundColor: '#E94057', paddingVertical:15, paddingHorizontal: 50, borderRadius: 15, marginVertical: 80,}}
          onPress={() => {
            navigation.navigate('Discover')
          }}>

          <Text style={{ color: '#fff',fontWeight:600 }}> Join Premium goClubbing </Text>
        </TouchableOpacity>

</View>
<Text style={{padding:20}}></Text>
      </View>
    </View>

  )
}

export default Screen3

const styles = StyleSheet.create({})