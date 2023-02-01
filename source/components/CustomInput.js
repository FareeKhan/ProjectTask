import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Iconic from 'react-native-vector-icons/AntDesign'
const CustomInput = ({ value, placeholder, onChangeText ,style,iconName,...props}) => {
    return (
        <View style={[style]}>
            <View style={{borderWidth:2,borderColor:"#08C0CA",flexDirection:"row",alignItems:"center",height:45,marginHorizontal:25,borderRadius:10}}>
                <View style={{paddingHorizontal:14}}>
                  <Iconic name={iconName} size={20} color={'#08C0CA'} />
                 </View>
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    style={{ fontWeight:"800" }}
                    placeholderTextColor={'#7B7B7B'}
                    {...props}
                />
            </View>
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({})