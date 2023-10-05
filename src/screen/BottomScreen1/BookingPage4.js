import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const BookingPage3 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20,width:336}}>
   <View style={{ flexDirection: "row", gap:80, }} >
  <Text style={{fontSize:18,color:'#4F4F4F'}}>Back</Text>
  <Text style={{fontSize:18,fontWeight:700,color:'#363636'}}>Booking</Text>

       </View>
<View style={{backgroundColor:'#E8505B',padding:8,width:300,height:55,borderRadius:4,marginVertical:5}}>
<Text style={{fontSize:19,fontWeight:500, color:'#fff',}}>Naveen</Text>
      <Text style={{fontSize:12,color:'#fff'}}>Congrats! Added to guest list</Text>
</View>



       <View style={{flexDirection:'row',gap:10,marginVertical:8}}>
       <Text style={{color:'#363636',fontWeight:600,fontSize:16}}>Booking :</Text>
       <Text style={{color:'#828282',fontSize:14}}>BK20220341</Text>
       </View>

       <View style={{flexDirection:'row',gap:20 }}>
        <Image source={require('../../Assets/image/40.png')} style={{ height: 111, width: 111,borderRadius:8 }} />
        <View style={{ width:197,}}>
    
        <View style={{flexDirection:'row',marginVertical:4,gap:8}}>
            <Text style={{color: '#263238',fontWeight:600,fontSize:18}}>Casino’va</Text>
            
        </View>

        <View style={{flexDirection:'row',marginVertical:4,gap:8}}>
        <Image source={require('../../Assets/image/11.png')} style={{ height: 18, width: 18, }} />
            <Text style={{color: '#828282',fontSize:12}}>12-03-2022</Text>
            
        </View>

        <View style={{flexDirection:'row',marginVertical:4,gap:8}}>
        <Image source={require('../../Assets/image/12.png')} style={{ height: 18, width: 18, }} />
            <Text style={{color: '#828282',fontSize:12}}>Fri, 07:30 – 01:00Am</Text>
            
        </View>
        <View style={{flexDirection:'row',marginVertical:4,gap:8}}>
        <Image source={require('../../Assets/image/13.png')} style={{ height: 18, width: 18, }} />
            <Text style={{color: '#828282',fontSize:12}}>Koramangala</Text>
            
    
      </View>
        </View> 
        </View>    
        <View  style={{backgroundColor:'#e2e2e287',padding:8,borderRadius:6,width:260,justifyContent: 'center', alignItems: 'center',marginVertical:30}}> 
        <View style={{flexDirection:'row',gap:154,marginVertical:2}}>
          <Text style={{fontSize:13,fontWeight:'600'}}>Price</Text>
          <Text style={{fontSize:13,}}>2000.00</Text>
        </View>

        <View style={{flexDirection:'row',gap:148,marginVertical:1}}>
          <Text style={{fontSize:13,fontWeight:'600'}}>No. Guests</Text>
          <Text>02</Text>
        </View>

        <View style={{flexDirection:'row',gap:154,marginVertical:2}}>
          <Text style={{fontSize:13,fontWeight:'600'}}>Category</Text>
          <Text style={{fontSize:13,}}>VIP</Text>
        </View>

        <View style={{flexDirection:'row',gap:140,marginVertical:2,borderBottomWidth: 1,borderColor: '#D7D7D7',width:255}}>
          <Text style={{fontSize:13,fontWeight:'600'}}>    Discount %</Text>
          <Text style={{fontSize:13,}}>10%</Text>
        </View>
        <View style={{flexDirection:'row',gap:125,marginVertical:2}}>
          <Text style={{fontSize:13,fontWeight:'600'}}>Total Price</Text>
          <Text style={{fontSize:13,}}>1800.00</Text>
        </View>
        </View>
<View style={{justifyContent: 'center', alignItems: 'center',}}>
<Image source={require('../../Assets/image/41.png')} style={{ height: 180, width: 180, }} />
  <Text style={{fontSize:14,marginVertical:20}}>By accepting the following<Text style={{color:'#E8505B',fontWeight:700,fontSize:14,}}>Terms & Conditions
</Text></Text>
  </View>        
    </View>
    </View>
  )
}

export default BookingPage3

const styles = StyleSheet.create({
    
})