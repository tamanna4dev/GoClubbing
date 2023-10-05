import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const SignUp = ({navigation}) => {


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(238, 238, 238)' }}>
            <View style={{ backgroundColor: '#fff', padding: 20, }}>
                <Text style={{ fontWeight: '700', fontSize: 24, color: '#363636' }}>Sign up</Text>
                <Text style={{ fontSize: 13, color: '#363636', marginVertical: 20 }}>Hi, Please fill the information to complete the sign up.</Text>


                {/* <View style={{ flexDirection: 'row', gap: 44, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.lables}>First Name</Text>
                        <Text style={styles.lables}>Last Name</Text>

                    </View> */}

                <View style={{ flexDirection: 'row' }}>
                    <View>

                        <Text style={styles.lables}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="First Name"

                        />
                    </View>

                    <View>
                        <Text style={styles.lables}>Last Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name"

                        />
                    </View>
                </View>


                    <Text style={styles.lables}>Email ID</Text>
                    <TextInput
                        style={styles.input}
                        placeholder=" Enter the Email ID"


                    />
                 
          <Text style={styles.lables}>Password</Text>
          <TextInput style={styles.input}
            secureTextEntry
            placeholder=" Enter the Password"/>


<View style={{alignItems:'center',justifyContent:'center'}}>
<Text style={{color:'#000000'}}>By accepting the following <Text style={{color:'#E8505B',fontWeight:'700'}}>Terms & Conditions</Text></Text>

<TouchableOpacity
          style={{ backgroundColor: '#E8505B', paddingVertical: 13, paddingHorizontal: 125, marginVertical: 20,borderRadius:26, }}
          onPress={() => {
            navigation.navigate('BottomNavigation')
          }}>

          <Text style={{ color: '#fff',fontSize:16,fontWeight:'600' }}> Sign up </Text>
        </TouchableOpacity>

  <Text style={{fontSize:16,color:'#828282',textAlign:'center'}}>or</Text>
</View>
  
  
<View style={{ flexDirection: 'row', gap:50, justifyContent: 'center', alignItems: 'center',marginVertical:40, }}>
          <Image source={require('../Assets/image/3.png')} style={{ height: 40, width: 40, }} />
          <Image source={require('../Assets/image/4.png')} style={{ height: 40, width: 40, }} />
          <Image source={require('../Assets/image/2.png')} style={{ height: 40, width: 40, }} />
        </View>
   </View>     

      
        </View>

    )
}

export default SignUp

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        borderColor: '#BDBDBD',
        padding: 10,
        color:'#666',
    },
    lables: {
        fontSize: 14,
        color: '#000',
        fontWeight: '400',
        marginLeft:10



    },
})