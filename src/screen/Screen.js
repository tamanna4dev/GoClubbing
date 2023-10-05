import { StyleSheet, Text, View,ImageBackground ,Image} from 'react-native'
import React,{useEffect} from 'react'
import bgImage from '../Assets/image/1.png';



const Screen1 = ({navigation}) => {
  useEffect(()=>{ 
    setTimeout(()=>{
  navigation.navigate('LogIn')
    },2000)
  },[])
  return (
    
      <ImageBackground source={bgImage}  style={styles.container}>
<Text style={{backgroundColor:'#E8505B',color:'#fff',paddingHorizontal:23,fontSize:17,borderRadius:5,marginRight:63}}>Go</Text>
          <Text style={{color:'#E8505B',fontSize: 20,fontWeight: 400 }}> CLUBBING </Text>

      </ImageBackground>

  )
}

export default Screen1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
})