import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Discover = ({navigation}) => {
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <View style={{ backgroundColor: 'rgb(238, 238, 238)', padding: 20,}}>
   <View style={{ flexDirection: "row", gap: 10, }} >
   <Image source={require('../../Assets/image/5.png')} style={{ height: 40, width: 40, }} />
       <View style={{ flexDirection: "row", gap: 157 }} >
         <Text style={{ fontSize: 18,color:'#2D4379'}}>Hi, Naveen!</Text>
         <Image source={require('../../Assets/image/6.png')} style={{ height: 33, width: 30, }} />

       </View>
       </View>
       <View style={{ flexDirection: "row", gap: 30,justifyContent:'space-between',marginVertical:17 }} >
       <Image source={require('../../Assets/image/like.png')} style={{ height: 65, width: 65, }} />
     <Text style={{fontWeight:700,fontSize:22,}}>Discover</Text>
     <View style={{ flexDirection: "row", gap:12}} >
       
       <Image source={require('../../Assets/image/speech.png')} style={{ height: 46, width: 65, }} />
       <TouchableOpacity
     
          onPress={() => {
            navigation.navigate('Filters')
          }}>

<Image source={require('../../Assets/image/btn.png')} style={{ height: 50, width: 50, }} />

        </TouchableOpacity>
        </View>
    
     </View>
     
<View style={{ flexDirection: "row", gap: 10, justifyContent: 'center', alignItems: 'center',marginTop:270}}>
<Image source={require('../../Assets/image/Refresh.png')} style={{ height: 51, width: 51, }} />
<Image source={require('../../Assets/image/Cancel.png')} style={{ height: 51, width: 51, }} />
<Image source={require('../../Assets/image/Favorite.png')} style={{ height: 51, width: 51, }} />
<Image source={require('../../Assets/image/Star.png')} style={{ height: 51, width: 51, }} />
<Image source={require('../../Assets/image/Star.png')} style={{ height: 51, width: 51, }} />

</View>
       
    </View>
      
    </View>
  )
}

export default Discover

const styles = StyleSheet.create({})