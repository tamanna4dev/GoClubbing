import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Filters = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <View style={{ backgroundColor: 'rgb(238, 238, 238)', padding: 20,}}>
       <View style={{ flexDirection: "row", gap: 10, }} >
       <Image source={require('../../Assets/image/5.png')} style={{ height: 40, width: 40, }} />
           <View style={{ flexDirection: "row", gap: 127 }} >
             <Text style={{ fontSize: 18,color:'#2D4379'}}>Hi, Naveen!</Text>
             <Image source={require('../../Assets/image/6.png')} style={{ height: 33, width: 30, }} />
    
           </View>
           </View>
           <View style={{ flexDirection: "row", gap: 35,justifyContent:'flex-end',marginVertical:10 }} >
          <Text style={{fontSize:22,fontWeight:700,}}>Filters</Text>
          <Text style={{fontSize:19,fontWeight:600,color:'#E94057',}}>clear</Text>
          
         </View>
         <Text style={{fontSize:18,fontWeight:700, }}>Interested in</Text>
        
         <View style={{ flexDirection: "row", justifyContent:'center',marginVertical:10 }} >
         <Text style={{fontSize:15,fontWeight:400,backgroundColor:'#E94057',color:'#fff',borderTopLeftRadius: 15, borderBottomLeftRadius: 15,paddingVertical:12, paddingHorizontal: 26, }}>Girls</Text>
          <Text style={{fontSize:15,fontWeight:400,color:'#000',borderWidth:1,borderColor:'#DDD',paddingVertical:12, paddingHorizontal: 26,}}>Boys</Text>
          <Text style={{fontSize:15,fontWeight:400,color:'#000',borderWidth:1,borderColor:'#DDD',borderTopRightRadius: 15, borderBottomRightRadius: 15,paddingVertical:12, paddingHorizontal: 26, }}>Both</Text>

          
</View>
{/* <Image source={require('../../Assets/image/iput.png')} style={{ height: 40, width: 300, }} /> */}

<View style={{ flexDirection: "row",gap:190,marginVertical: 20,}}>
<Text style={{fontSize:18,fontWeight:700, }}>Distance</Text>
<Text style={{fontSize:11,}}>40Km</Text>
</View>
<Image source={require('../../Assets/image/slider.png')} style={{ height: 34, width:280, }} />

<View style={{ flexDirection: "row",gap:230,marginVertical: 20,}}>
<Text style={{fontSize:18,fontWeight:700, }}>Age</Text>
<Text style={{fontSize:11,}}>20-28</Text>
</View>
<Image source={require('../../Assets/image/slider (1).png')} style={{ height: 34, width:280, }} />
<TouchableOpacity
         style={{backgroundColor: '#E94057', paddingVertical:12, paddingHorizontal: 78, borderRadius: 15, marginVertical: 30,}}
          onPress={() => {
            navigation.navigate('Like')
          }}>

          <Text style={{ color: '#fff',fontWeight:600,textAlign:'center' }}>Continue </Text>
        </TouchableOpacity>
         </View>
    </View>
  
  )
}

export default Filters

const styles = StyleSheet.create({})