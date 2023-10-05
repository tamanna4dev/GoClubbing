import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Screen2 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
         <View style={{ backgroundColor: '#fff', padding: 20 }}>
        <View style={{ flexDirection: "row", gap: 10, }} >
        <Image source={require('../../Assets/image/5.png')} style={{ height: 40, width: 40, }} />
            
            <View style={{ flexDirection: "row", gap: 146 }} >
              <Text style={{ fontSize: 18,color:'#2D4379'}}>Hi, Naveen!</Text>
              <Image source={require('../../Assets/image/6.png')} style={{ height: 33, width: 30, }} />
           
            </View>
            </View>
            <View style={{marginTop:150}}>
          <View style={{flexDirection:'row',gap:120,}}>
            <Text style={{ color:'#352B73',fontWeight:700,fontSize:17,}}>BALANCE</Text>
            <Text  style={{color:'#1D1D1C',fontWeight:700,fontSize:17}}>View Activities</Text>
          </View>
          <Text style={{ color:'#352B73',fontWeight:870,fontSize:33 }}>8,000.00</Text>

          <View style={{flexDirection:'row',gap:36,marginVertical:20}}>
        <Image source={require('../../Assets/image/img2.png')} style={{ height: 60, width: 140,borderRadius:10,borderWidth:1,borderColor:'rgb(237 234 234)' }} />
        <Image source={require('../../Assets/image/img1.png')} style={{ height: 60, width: 140, }} />

          </View>
          <View style={{ flexDirection: "row", gap: 150, }} >
<Text style={{color:'#1D1D1C',fontWeight:700,fontSize:17}}>Recent Activities</Text>
<Image source={require('../../Assets/image/Right.png')} style={{ height: 30, width: 30, }} />

</View>
        
        
          <View style={{ flexDirection: "row", gap: 30, }} >
        <Image source={require('../../Assets/image/18.png')} style={{ height: 33,width: 27 }} />
            <View style={{ flexDirection: "row", gap: 156 }} >
              <Text style={{ fontSize: 15,fontWeight:600,color:'#60708F'}}>Topup</Text>
              <Text style={{ fontSize: 15,fontWeight:600,color:'#60708F'}}>+ 5000.00</Text>

            </View>
            </View>
          <Text style={{ fontSize: 15, marginLeft: 55, color: '#D7DCE4',marginTop:-14,marginVertical:15 }}>15.02.2021</Text>


        <View style={{ flexDirection: "row", gap: 21, }} >
        <Image source={require('../../Assets/image/20.png')} style={{ height: 33,width: 38 }} />
            <View style={{ flexDirection: "row", gap: 94}} >
              <Text style={{ fontSize: 15,fontWeight:600,color:'#60708F'}}>Paid at Casino’va</Text>
              <Text style={{ fontSize: 15,fontWeight:600,color:'#60708F'}}>- 1129.90</Text>

            </View>
            </View>
          <Text style={{ fontSize: 15, marginLeft: 55, color: '#D7DCE4',marginTop:-14 ,marginVertical:15}}>15.02.2021</Text>

          <View style={{ flexDirection: "row", gap: 14, }} >
        <Image source={require('../../Assets/image/21.png')} style={{ height: 32,width: 45 }} />
            <View style={{ flexDirection: "row", gap: 58}} >
              <Text style={{ fontSize: 15,fontWeight:600,color:'#60708F'}}>Paid at BangaloreAdda
</Text>
              <Text style={{ fontSize: 15,fontWeight:600,color:'#60708F'}}>- 929.10</Text>

            </View>
            </View>
          <Text style={{ fontSize: 15, marginLeft: 55, color: '#D7DCE4',marginTop:-14 ,marginVertical:15}}>15.02.2021</Text>

          <View style={{ flexDirection: "row", gap: 30, }} >
        <Image source={require('../../Assets/image/18.png')} style={{ height: 33,width: 27 }} />
            <View style={{ flexDirection: "row", gap: 156 }} >
              <Text style={{ fontSize: 15,fontWeight:600,color:'#60708F'}}>Topup</Text>
              <Text style={{ fontSize: 15,fontWeight:600,color:'#60708F'}}>+ 5000.00</Text>

            </View>
            </View>
          <Text style={{ fontSize: 15, marginLeft: 55, color: '#D7DCE4',marginTop:-14,marginVertical:15 }}>15.02.2021</Text>
          </View>
          
    </View>
  
  </View>
  )
}

export default Screen2

const styles = StyleSheet.create({})