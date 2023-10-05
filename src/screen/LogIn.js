import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#fff', paddingHorizontal: 105, marginBottom: -30, height: 140, padding: 40 }}>
        <Text style={{ backgroundColor: '#E8505B', color: '#fff', borderRadius: 6, paddingHorizontal: 20, marginRight: 30 }}>Go</Text>
        <Text style={{ color: '#E8505B', fontSize: 20, fontWeight: 400, }}>CLUBBING</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 40, backgroundColor: '#E8505B', paddingHorizontal: 83, height: 60, padding: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15, marginVertical: 20 }}>
        <Text style={{ color: '#fff' }}>LOGIN</Text>
        <Text style={{ color: 'rgba(255, 255, 255, 0.25)' }}> SIGN UP</Text>
      </View>
      <View style={{ marginTop: -40, backgroundColor: '#fff', paddingHorizontal: 17, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
        <Text style={{ color: '#0D253C', fontWeight: 600, fontSize: 20,padding:15 }}>Welcome back</Text>
        <Text style={{ color: '#2D4379', fontSize: 12, marginVertical: 6 }}> Sign in with your account</Text>

        <View
          style={{ borderBottomWidth: 1, }}>
          <View>
            <Text style={styles.lables}>Username</Text>
            <TextInput style={styles.inputStyle} />
          </View>
        </View>

        <View
          style={{ borderBottomWidth: 1, }}>
          <Text style={styles.lables}>Password</Text>
          <TextInput style={styles.inputStyle}
            placeholderTextColor="#9a73ef"
            returnKeyType='go'
            secureTextEntry
            autoCorrect={false} />
        </View>



        <TouchableOpacity
          style={{ backgroundColor: '#E8505B', paddingVertical: 10, paddingHorizontal: 110, borderRadius: 7, marginVertical: 20 }}
          onPress={() => {
            navigation.navigate('SignUp')
          }}>

          <Text style={{ color: '#fff', }}> LOGIN </Text>
        </TouchableOpacity>


        <Text style={{ color: '#2D4379', marginVertical: 1, fontSize: 12, textAlign: 'center' }}>
          Forgot the Password? <Text style={{ color: '#376AED' }}>Reset here</Text></Text>

        <Text style={{ color: '#2D4379', marginVertical: 20, textAlign: 'center', fontSize: 11 }}>OR SIGN IN WITH</Text>

        <View style={{ flexDirection: 'row', gap: 18, justifyContent: 'center', alignItems: 'center', }}>
          <Image source={require('../Assets/image/4.png')} style={{ height: 25, width: 25, }} />
          <Image source={require('../Assets/image/3.png')} style={{ height: 25, width: 25, }} />
          <Image source={require('../Assets/image/2.png')} style={{ height: 25, width: 25, }} />
        </View>
    <Text style={{padding:20}}></Text>
      </View>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(238 238 238)'
  },
  lables: {
    fontSize: 18,
    color: '#2D4379',
    fontSize: 12,
    marginVertical: 10


  },
  inputStyle: {
    paddingVertical: 7,
    // width: 250,


  },

})