import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={{ flex: 1,backgroundColor:"#fff"}}>
            <View style={{ alignItems: "center", paddingTop: Platform.OS == 'ios' ? 90 :40 }}>
                <Image source={require('../assets/ColorLogo.png')} />
            </View>
            <View style={{ alignItems: "center", marginTop: 24 }}>
                <Text style={styles.title}>MeNuu</Text>
                <Text style={styles.subTitle}>Menu.Nutrition.yoU</Text>
            </View>

            <CustomInput
            horizontal={true} 
                style={{ marginTop: 60 }}
                iconName={'mail'}
                value={email}
                placeholder={'Email'}
                onChangeText={setEmail}
            />
            <CustomInput
                style={{ marginTop: 20 }}
                iconName={'lock'}
                value={password}
                placeholder={'Password'}
                onChangeText={setPassword}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('Email')}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
            <CustomButton title='Login' onPress={()=>navigation.navigate('Welcome')}/>

            <View style={styles.footer}>
                <Text style={{ color: "#C4C4C4", fontWeight: "500" }}>Don't have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Registration')}>
                    <Text style={{ color: "#08C0CA", fontWeight: "700" }}> Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: '500',
        color: "#000"
    },
    subTitle: {
        color: "#000"
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        shadowColor:Platform.OS == 'ios' ? "#C4C4C4" : "#000" ,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 1,
        backgroundColor: "#fff",
        paddingBottom: Platform.OS == 'ios' ? 50 : 20,
        paddingTop: Platform.OS == 'ios' ? 16 : 8,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation:10
    },
    forgotText: {
        textAlign: "right",
        marginHorizontal: 24,
        paddingTop: 15,
        paddingBottom: 20,
        color: "#08C0CA"
    }
})