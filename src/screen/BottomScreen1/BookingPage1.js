import { StyleSheet, Text, View,Image,TouchableOpacity,Button } from 'react-native'
import React, { useState } from 'react'



const BookingPage1 = ({navigation}) => {
const [counter, setCounter] = useState(0);
    return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
<View style={{ backgroundColor: '#fff', padding: 20,width:336}}>
<View style={{flexDirection:"row", gap:80, }} >
<Text style={{fontSize:18,color:'#4F4F4F'}}>Back</Text>
<Text style={{fontSize:18,fontWeight:700,color:'#363636'}}>Booking</Text>
</View>
<Text style={{fontSize:19,fontWeight:500,backgroundColor:'#E8505B', color:'#fff',borderRadius:4,width:300,height:55,marginVertical:5,padding:9}}>Naveen</Text>
<View style={{flexDirection:'row',gap:20,marginVertical:12}}>
<Text style={{color:'#363636',fontWeight:600,fontSize:16}}>Booking :</Text>
<Text style={{color:'#828282',fontSize:14}}>Ladies Night</Text>
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
<Text style={{color:'#363636',fontWeight:600,fontSize:16,marginVertical:10}}>Ticket Type</Text>
<View style={{flexDirection:'row',gap:20,}}>
<Text style={styles.btn}>VIP</Text>

<TouchableOpacity
        
        onPress={() => {
          navigation.navigate('BookingPage2')
        }}>
<Text style={styles.btns}>Normal</Text>

      </TouchableOpacity>  
</View>
<Text style={{color:'#363636',fontWeight:600,fontSize:16,marginVertical:14}}>No.of guests</Text>
     <View style={{marginVertical:30}}>
      
<View style={{flexDirection:'row',gap:30}}>    
<View>
<Text style={{color:'#363636',fontWeight:600,fontSize:16,}}>Girls</Text>
<Text style={{color:'rgba(55, 54, 54, 0.5)',fontSize:12,}}>Free</Text>
</View>




  
        <Text style={styles.counter}> {counter}</Text>
        <View style={{flexDirection:'row',gap:28}}>


        <TouchableOpacity
        style={[styles.commonButton, styles.add]}
        onPress={() => {
          setCounter(counter - 1);
        }}>
        <Text style={styles.commonText}> -  </Text>

      </TouchableOpacity>  

        <TouchableOpacity
        style={[styles.commonButton, styles.Subtract]}
        onPress={() => {
          setCounter(counter + 1);
        }}>
        <Text style={styles.commonText}> + </Text>

      </TouchableOpacity>  


      


        </View>
      </View>



      <View style={{flexDirection:'row',gap:26}}>    
 <View>
<Text style={{color:'#363636',fontWeight:600,fontSize:16,}}>Boys</Text>
<Text style={{color:'rgba(55, 54, 54, 0.5)',fontSize:12,}}>allowed</Text>
</View> 




  
        <Text style={styles.counter}> {counter}</Text>
        <View style={{flexDirection:'row',gap:26,}}>

        <TouchableOpacity
        style={[styles.commonButton, styles.add]}
        onPress={() => {
          setCounter(counter - 1);
        }}>
        <Text style={styles.commonText}> -  </Text>

      </TouchableOpacity>  

        <TouchableOpacity
        style={[styles.commonButton, styles.Subtract]}
        onPress={() => {
          setCounter(counter + 1);
        }}>
        <Text style={styles.commonText}> + </Text>

      </TouchableOpacity>  


      


        </View>
      </View>



      <View style={{flexDirection:'row',gap:18}}>    
 <View>
<Text style={{color:'#363636',fontWeight:600,fontSize:15,}}>Couples</Text>
<Text style={{color:'rgba(55, 54, 54, 0.5)',fontSize:12,}}>Rs:2000/-</Text>
</View>




  
        <Text style={styles.counter}> {counter}</Text>
        <View style={{flexDirection:'row',gap:30,}}>

        <TouchableOpacity
        style={[styles.commonButton, styles.add]}
        onPress={() => {
          setCounter(counter - 1);
        }}>
        <Text style={styles.commonText}> -  </Text>

      </TouchableOpacity>  

        <TouchableOpacity
        style={[styles.commonButton, styles.Subtract]}
        onPress={() => {
          setCounter(counter + 1);
        }}>
        <Text style={styles.commonText}> + </Text>

      </TouchableOpacity>  


      


        </View>
      </View>


</View>
      
      
    <View style={{justifyContent: 'center', alignItems: 'center', }}>
        
    <Text style={{ color: '#fff',fontSize:16,fontWeight:'600',backgroundColor: '#E8505B', paddingVertical: 13, width:210,borderRadius:23,textAlign:'center' }}>Book</Text>
    </View>
    </View>
    </View>
    
  )
}

export default BookingPage1

const styles = StyleSheet.create({
    btn:{
      backgroundColor:'#E8505B',
      color:'#fff',
        borderRadius:15, 
        width:100,
        height:25,
        textAlign:'center',
        fontWeight:500, 
        padding:3,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
    },
    btns:{
      backgroundColor:'#fff',
      color:'#E8505B',
        borderRadius:15, 
        width:100,
        height:25,
        textAlign:'center',
        fontWeight:500, 
        padding:3,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
    },
    add:{
      borderWidth:1,
      borderColor:'#E8505B',

    width:40,
    height:30,
alignItems:'center',
justifyContent:'center',
borderRadius:5
    
    },
    Subtract:{
      borderWidth:1,
      borderColor:'#E8505B',
      
      width:40,
      height:30,
alignItems:'center',
justifyContent:'center',
borderRadius:5
  
    },
    counter:{
  fontSize:18,
  fontWeight:500,
  color:' #263238'

    
    },
  
      
       commonText:{
        color:'#E8505B'
       }
})