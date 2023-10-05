import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Casinova = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20,}}>
   <View style={{ flexDirection: "row", gap:95, }} >
  <Text style={{fontSize:18,color:'#4F4F4F'}}>Back</Text>
  <Text style={{fontSize:20,fontWeight:700,color:'#363636'}}>Casino’va</Text>
  <Image source={require('../../Assets/image/31.png')} style={{ height: 23, width: 22, }} />

       </View>
{/* <Image source={require('../../Assets/image/30.png')} style={{ height: 286, width: 350,borderRadius:10,marginVertical:11 }} /> */}


   <View style={{marginTop:200}}>
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
<View style={{ flexDirection: "row", gap:33,marginVertical:15 }} >
   <Text style={{backgroundColor:'#E8505B',color:'#fff',borderWidth:1,borderColor:'#E8505B',borderRadius:5,textAlign:'center',width:76,height:26,padding:3}}>Details</Text>
<TouchableOpacity
        
        onPress={() => {
          navigation.navigate('CasinovaOffers')
        }}>
 <Text style={{color:'#E8505B',borderWidth:1,borderColor:'#E8505B',borderRadius:5,textAlign:'center',width:80,height:26,padding:2}}>Offers</Text>

      </TouchableOpacity>
      
<Text style={{color:'#E8505B',borderWidth:1,borderColor:'#E8505B',borderRadius:5,textAlign:'center',width:117,height:26,padding:2}}>Upcoming Events</Text>
</View>

    <Text style={{color:'#828282',fontSize:12,marginVertical:2}}>It is a long established fact that a reader will be distracted by the</Text> 
    <Text style={{color:'#828282',fontSize:12,marginVertical:2}}>readable content of a page when looking at its layout. The point </Text> 
    <Text style={{color:'#828282',fontSize:12,marginVertical:2}}>using Lorem Ipsum is that it has a is more-or-less distribution of</Text> 
    <Text style={{color:'#828282',fontSize:12,marginVertical:2}}>letters, as opposed to using 'Content here, content here', making </Text> 
    <Text style={{color:'#828282',fontSize:12,marginVertical:2}}>like readable English. Many desktop publishing packages a page</Text> 
    <Text style={{color:'#828282',fontSize:12,marginVertical:2}}>editors now  use Lorem Ipsum  as their default model text, and a</Text> 
    <Text style={{color:'#828282',fontSize:12,marginVertical:2}}>for 'lorem ipsum' will uncover many web sites still in their infancy. </Text> 
    <Text style={{color:'#828282',fontSize:12,marginVertical:2}}>Various versions have evolved over the years, sometimes accident,</Text> 
    <Text style={{color:'#828282',fontSize:12,marginVertical:2}}>sometimes on purpose (injected humour and the like).There many </Text> 
             


<View style={{flexDirection:'row',gap:30, marginVertical: 20}}>
<Image source={require('../../Assets/image/17.png')} style={{ height: 23, width: 22, }} />
<Image source={require('../../Assets/image/16.png')} style={{ height: 23, width: 22, }} />
<TouchableOpacity
        
        onPress={() => {
          navigation.navigate('BookingPage1')
        }}>
                  <Text style={{ color: '#fff',fontSize:16,fontWeight:'600',backgroundColor: '#E8505B', paddingVertical: 13, paddingHorizontal: 100,borderRadius:23, }}>Book</Text>

      </TouchableOpacity>

</View>

   </View>
</View>





       </View>



   
  
  )
}

export default Casinova

const styles = StyleSheet.create({})