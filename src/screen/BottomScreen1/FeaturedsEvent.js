import { StyleSheet, Text, View,Image,TextInput } from 'react-native'
import React from 'react'

const FeaturedsEvent
= () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
    <View style={{ backgroundColor: '#fff', padding: 20,}}>
   <View style={{ flexDirection: "row", gap:67, }} >
  <Text style={{fontSize:18,color:'#4F4F4F'}}>Back</Text>
  <Text style={{fontSize:20,fontWeight:700,color:'#363636'}}>Featured’s Event</Text>
  <Image source={require('../../Assets/image/32.png')} style={{ height: 26, width: 26, }} />

       </View>

       <TextInput
    style={styles.input}
    placeholder="Search events"
   
   />
   
   <View style={{ flexDirection: "row", gap:10, }} >
   <Text style={{backgroundColor:'#E8505B',color:'#fff',borderWidth:1,borderColor:'#E8505B',borderRadius:5,textAlign:'center',width:76,height:26,padding:3}}>All</Text>
<Text style={{color:'#E8505B',borderWidth:1,borderColor:'#E8505B',borderRadius:5,textAlign:'center',width:80,height:26,padding:2}}>Live Sport</Text>
<Text style={{color:'#E8505B',borderWidth:1,borderColor:'#E8505B',borderRadius:5,textAlign:'center',width:58,height:25,padding:1}}>Dj</Text>
<Text style={{color:'#E8505B',borderWidth:1,borderColor:'#E8505B',borderRadius:5,textAlign:'center',width:82,height:26,padding:2}}>Bollywood</Text>
</View>

      <View style={{marginVertical:15}}>
      <Image source={require('../../Assets/image/36.png')} style={{ height: 208, width: 323,borderTopLeftRadius: 7, borderTopRightRadius: 7,}} />
        <View style={{ backgroundColor: 'rgb(242 236 236)',width:323, padding:10,}}>
    
        <View style={{flexDirection:'row',gap:50,}}>
        <View style={{flexDirection:'row',gap:5,}}>

        <Image source={require('../../Assets/image/11.png')} style={{ height: 20, width: 20,marginVertical:10 }} />
            <Text style={{color: '#828282',marginVertical:10}}>12-03-2022</Text>
            </View>

            <View style={{flexDirection:'row',marginVertical:10}}>
        <Image source={require('../../Assets/image/12.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282',marginVertical:1}}> Fri, 07:30 – 01:00Am</Text>
            
        </View>
        </View>

        <View style={{flexDirection:'row',gap:50}}>
        
        <View style={{flexDirection:'row',gap:7,}}>
        <Image source={require('../../Assets/image/13.png')} style={{ height: 20, width: 20,}} />
            <Text style={{color: '#828282',}}>Koramangala</Text>
      </View>
            
    <View style={{flexDirection:'row',}}>
    <Text style={{backgroundColor:'#E8505B',color:'#fff',borderWidth:1,borderColor:'#E8505B',borderRadius:15,textAlign:'center',width:116,height:26,padding:3}}>View Details</Text>
    

            
        </View>
      </View>
        </View>

      </View>

        <Image source={require('../../Assets/image/37.png')} style={{ height: 208, width: 323,borderTopLeftRadius: 7, borderTopRightRadius: 7,}} />
        <View style={{ backgroundColor: 'rgb(242 236 236)',width:323, padding:10,}}>
    
        <View style={{flexDirection:'row',gap:50,}}>
        <View style={{flexDirection:'row',gap:5,}}>

        <Image source={require('../../Assets/image/11.png')} style={{ height: 20, width: 20,marginVertical:10 }} />
            <Text style={{color: '#828282',marginVertical:10}}>12-03-2022</Text>
            </View>

            <View style={{flexDirection:'row',marginVertical:10}}>
        <Image source={require('../../Assets/image/12.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282',marginVertical:1}}> Fri, 07:30 – 01:00Am</Text>
            
        </View>
        </View>

        <View style={{flexDirection:'row',gap:50}}>
        
        <View style={{flexDirection:'row',gap:7,}}>
        <Image source={require('../../Assets/image/13.png')} style={{ height: 20, width: 20,}} />
            <Text style={{color: '#828282',}}>Koramangala</Text>
      </View>
            
    <View style={{flexDirection:'row',}}>
    <Text style={{backgroundColor:'#E8505B',color:'#fff',borderWidth:1,borderColor:'#E8505B',borderRadius:15,textAlign:'center',width:116,height:26,padding:3}}>View Details</Text>
    

            
        </View>
      </View>
        </View>     
        
</View>
    </View>
      

  )
}

export default FeaturedsEvent


const styles = StyleSheet.create({
  input: {
    height: 40,
    // margin: 12,
    borderColor: '#BDBDBD',
    padding: 10,
    color:'#666',
    backgroundColor:'#ddd',
    borderRadius:5,
    marginVertical:20
},
})