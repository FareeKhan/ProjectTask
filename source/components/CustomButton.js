import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({style,title,onPress,bgColor,textColor}) => {
  return (
    <View style={[style,{flex:1}]}>
       <TouchableOpacity style={[styles.btnDesign,{backgroundColor:bgColor == null ? "#08C0CA":bgColor ,
       }]} onPress={onPress}> 
           <Text style={{color:textColor == null ? "#fff" : textColor,fontWeight:"700"}}>{title}</Text>
       </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    btnDesign:{
        alignItems:"center",
        paddingVertical:15,
        borderRadius:10,
       marginHorizontal:24
    }
})