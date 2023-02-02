import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('First')
}, 2000);
  return (
    <View style={styles.mainContainer}>
             <Image source={require('../assets/logo.png')} />
        <View style={{alignItems:"center",marginTop:24}}>
             <Text style={styles.title}>MeNuu</Text>
             <Text style={styles.subTitle}>Menu.Nutrition.yoU</Text>
        </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
mainContainer:{
    flex:1,
    backgroundColor:"#08C0CA",
    alignItems:"center",
    justifyContent:"center"
},
title:{
    fontSize:36,
    fontWeight:'500',
    color:"#fff"
},
subTitle:{
    color:"#fff"
}
})