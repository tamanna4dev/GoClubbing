import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Screen1 = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
         <View style={{ backgroundColor: '#fff', padding: 20, height:690}}>
        <View style={{ flexDirection: "row", gap: 10, }} >
        <Image source={require('../../Assets/image/5.png')} style={{ height: 40, width: 40, }} />
            <View style={{ flexDirection: "row", gap: 176 }} >
              <Text style={{ fontSize: 18,color:'#2D4379',}}>Hi, Naveen!</Text>
              <Image source={require('../../Assets/image/6.png')} style={{ height: 33, width: 30, }} />

            </View>
            </View>

          <Text style={{ fontSize: 17, marginLeft: 100, color: '#2D4379',marginTop:-20,marginVertical:10  }}>Let's goClubbing</Text>


          <TextInput
                    style={styles.input}
                    placeholder="Search event to goClubbing"
                   
                   />

<View style={{flexDirection:'row',gap:140,marginVertical:10}}>
<TouchableOpacity
        
          onPress={() => {
            navigation.navigate('TodaysEvent')
          }}>

<Text style={{fontWeight:600,fontSize:21,color:'#363636'}}>Today’s Events</Text>
        </TouchableOpacity>
                  
                   <Text style={{fontSize:16,fontWeight:600,color:'#376AED'}}>View all</Text>
                   </View>
                    
                 
                 
      

<View style={{flexDirection:'row', gap:13}}>


<Image source={require('../../Assets/image/7.png')} style={{ height: 140, width: 167, }} />

    
        <View style={{ backgroundColor: 'rgb(242 236 236)',width:167, padding:10,marginTop:140,marginLeft:-180,}}>
    
        <View style={{flexDirection:'row',marginVertical:4}}>
        <Image source={require('../../Assets/image/11.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282',}}>12-03-2022</Text>
            
        </View>

        <View style={{flexDirection:'row',marginVertical:4}}>
        <Image source={require('../../Assets/image/12.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282'}}>Fri, 07:30 – 01:00Am</Text>
            
        </View>
        <View style={{flexDirection:'row',marginVertical:4}}>
        <Image source={require('../../Assets/image/13.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282'}}>Koramangala</Text>
            
    
      </View>
        </View>
        
       

        <Image source={require('../../Assets/image/8.png')} style={{ height: 140, width: 167, }} />
        
        <View style={{ backgroundColor: 'rgb(242 236 236)',width:167, padding:10,marginTop:140,marginLeft:-180 }}>
   
        
        <View style={{flexDirection:'row',marginVertical:4 ,}}>
        <Image source={require('../../Assets/image/11.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282'}}>12-03-2022</Text>
            
        </View>
        <View style={{flexDirection:'row',marginVertical:4}}>
        <Image source={require('../../Assets/image/12.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282'}}>Fri, 07:30 – 01:00Am</Text>
            
        </View>
        <View style={{flexDirection:'row',marginVertical:4}}>
        <Image source={require('../../Assets/image/13.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282'}}>New BEL Road</Text>
            </View>   
        </View>
        </View>
        
    



        <View style={{flexDirection:'row',gap:140,marginVertical:10}}>
        <TouchableOpacity
        
        onPress={() => {
          navigation.navigate('FeaturedsEvent')
        }}>
                   <Text style={{fontWeight:600,fontSize:21,color:'#363636'}}>Featured Events</Text>

      </TouchableOpacity>
                   <Text style={{fontSize:16,fontWeight:600,color:'#376AED'}}>View all</Text>
                   </View>
                    
                   <View style={{flexDirection:'row', gap:13}}>
 
        <TouchableOpacity
        
        onPress={() => {
          navigation.navigate('LadiesNight')
        }}>

<Image source={require('../../Assets/image/9.png')} style={{ height: 140, width: 167, }} />

      </TouchableOpacity>
        <View style={{ backgroundColor: 'rgb(242 236 236)',width:167, padding:10,marginTop:140,marginLeft:-180,}}>
    
        <View style={{flexDirection:'row',marginVertical:4}}>
        <Image source={require('../../Assets/image/11.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282',}}>12-03-2022</Text>
            
        </View>

        <View style={{flexDirection:'row',marginVertical:4}}>
        <Image source={require('../../Assets/image/12.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282'}}>Fri, 07:30 – 01:00Am</Text>
            
        </View>
        <View style={{flexDirection:'row',marginVertical:4}}>
        <Image source={require('../../Assets/image/13.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282'}}>Koramangala</Text>
            
    
      </View>
        </View>


        <Image source={require('../../Assets/image/10.png')} style={{ height: 140, width: 167, }} />
        
        <View style={{ backgroundColor: 'rgb(242 236 236)',width:167, padding:10,marginTop:140,marginLeft:-180 }}>
   
        
        <View style={{flexDirection:'row',marginVertical:4 ,}}>
        <Image source={require('../../Assets/image/11.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282'}}>12-03-2022</Text>
            
        </View>
        <View style={{flexDirection:'row',marginVertical:4}}>
        <Image source={require('../../Assets/image/12.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282'}}>Fri, 07:30 – 01:00Am</Text>
            
        </View>
        <View style={{flexDirection:'row',marginVertical:4}}>
        <Image source={require('../../Assets/image/13.png')} style={{ height: 20, width: 20, }} />
            <Text style={{color: '#828282'}}>New BEL Road</Text>
            </View>   
        </View>
        </View>

        {/* <View style={{flexDirection:'row',gap:87,marginVertical:20}}>
        <Image source={require('../Assets/image/14.png')} style={{ height: 20, width: 20, }} /> 
        <Image source={require('../Assets/image/15.png')} style={{ height: 20, width: 20, }} />
        <Image source={require('../Assets/image/16.png')} style={{ height: 20, width: 20, }} />
        <Image source={require('../Assets/image/17.png')} style={{ height: 20, width: 20, }} />    
        </View> */}
        
        </View>      
                   
         
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    
    input: {
        height: 40,
        // margin: 12,
        borderColor: '#BDBDBD',
        padding: 10,
        color:'#666',
        backgroundColor:'#ddd',
        borderRadius:5,
    },
    lables: {
        fontSize: 14,
        color: '#000',
        fontWeight: 400,
        marginLeft:10
    }
})