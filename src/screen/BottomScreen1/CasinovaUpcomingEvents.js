import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const CasinovaUpcomingEvents = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20,}}>
   <View style={{ flexDirection: "row", gap:95, }} >
  <Text style={{fontSize:18,color:'#4F4F4F'}}>Back</Text>
  <Text style={{fontSize:20,fontWeight:700,color:'#363636'}}>Casino’va</Text>
  <Image source={require('../../Assets/image/31.png')} style={{ height: 23, width: 22, }} />

       </View>
<Image source={require('../../Assets/image/39.png')} style={{ height: 286, width: 350,marginVertical:11 }} />


  
   <Text style={{color:'#263238',fontSize:15,fontWeight:500,marginVertical:3}}>Details:</Text>
    <View style={{flexDirection:'row',marginVertical:4,gap:6}}>
    <Image source={require('../../Assets/image/11.png')} style={{ height: 20, width: 20, }} />
        <Text style={{color: '#828282',fontSize:12}}>12-03-2022</Text>
        
    </View>

    <View style={{flexDirection:'row',marginVertical:4,gap:6}}>
    <Image source={require('../../Assets/image/12.png')} style={{ height: 20, width: 20, }} />
        <Text style={{color: '#828282',fontSize:12}}>Fri, 07:30 – 01:00Am</Text>
        
    </View>
    <View style={{flexDirection:'row',marginVertical:4,gap:7}}>
    <Image source={require('../../Assets/image/13.png')} style={{ height: 20, width: 20, }} />
        <Text style={{color: '#828282',fontSize:12}}>Pune, Maharashtra</Text>
        

  </View>
<View style={{alignItems:'flex-end',marginTop:-116}}>
<Text style={{color:'#263238',fontSize:15,fontWeight:500,marginVertical:8}}>Category, Mode & Price:</Text>
  <View style={{flexDirection:'row',gap:5,}}>
<Text style={{color:'#E8505B',borderWidth:1,borderColor:'#E8505B',borderRadius:7,textAlign:'center',width:76,height:26,marginVertical:2}}>Music</Text>
<Text style={{color:'#E8505B',borderWidth:1,borderColor:'#E8505B',borderRadius:7,textAlign:'center',width:76,height:26,marginVertical:2}}>Live</Text>
</View>
  <View style={{backgroundColor:'#E8505B',padding:7,borderRadius:8,width:150,alignItems:'center',height:65}}>
 <Text style={{color:'#fff',fontSize:13,fontWeight:600,}}>Couples Rs.2000/-</Text>
 <Text style={{color:'#fff',fontSize:13,fontWeight:600}}>Girls Entry Free </Text>
 <Text style={{color:'#fff',fontSize:13,fontWeight:600}}>Stag Not allowed</Text>
  
  </View>
  
</View>
<View style={{ flexDirection: "row", gap:32,marginVertical:15 }} >
   <Text style={{color:'#E8505B',borderWidth:1,borderColor:'#E8505B',borderRadius:5,textAlign:'center',width:76,height:26,padding:3}}>Details</Text>
<Text style={{color:'#E8505B',borderWidth:1,borderColor:'#E8505B',borderRadius:5,textAlign:'center',width:80,height:26,padding:2}}>Offers</Text>
<Text style={{backgroundColor:'#E8505B',color:'#fff',borderWidth:1,borderColor:'#E8505B',borderRadius:5,textAlign:'center',width:128,height:27,padding:2}}>Upcoming Events</Text>
</View>

<View style={{flexDirection:'row', }}>
        <Image source={require('../../Assets/image/7.png')} style={{ height: 140, width: 167, }} />
        <View style={{ backgroundColor: 'rgb(242 236 236)',width:197, padding:10,}}>
    
        <View style={{flexDirection:'row',marginVertical:4,gap:8}}>
        <Image source={require('../../Assets/image/11.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282',}}>12-03-2022</Text>
            
        </View>

        <View style={{flexDirection:'row',marginVertical:4,gap:8}}>
        <Image source={require('../../Assets/image/12.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282'}}>Fri, 07:30 – 01:00Am</Text>
            
        </View>
        <View style={{flexDirection:'row',marginVertical:4,gap:8}}>
        <Image source={require('../../Assets/image/13.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282'}}>Koramangala</Text>
            
    
      </View>
        </View>
        
       

        </View>

<View style={{flexDirection:'row',gap:30, marginVertical: 20}}>
<Image source={require('../../Assets/image/17.png')} style={{ height: 23, width: 22, }} />
<Image source={require('../../Assets/image/16.png')} style={{ height: 23, width: 22, }} />
<Text style={{ color: '#fff',fontSize:16,fontWeight:'600',backgroundColor: '#E8505B', paddingVertical: 13, paddingHorizontal: 100,borderRadius:23, }}>Book</Text>


</View>

   </View>
</View>








   
  
  )
}

export default CasinovaUpcomingEvents

const styles = StyleSheet.create({}) 