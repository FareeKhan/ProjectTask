import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const Registration = ({navigation}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    return (
        <View style={{ flex: 1,backgroundColor:"#fff" }}>
            <View style={{ alignItems: "center", paddingTop: 90 }}>
                <Image source={require('../assets/ColorLogo.png')} />
            </View>
            <View style={{ alignItems: "center", marginTop: 24 }}>
                <Text style={styles.title}>MeNuu</Text>
                <Text style={styles.subTitle}>Menu.Nutrition.yoU</Text>
            </View>

            <CustomInput
                style={{ paddingTop: 60 }}
                iconName={'user'}
                value={name}
                placeholder={'Name'}
                onChangeText={setName}
            />
            <CustomInput
                style={{ paddingTop: 20 }}
                iconName={'mail'}
                value={email}
                placeholder={'Email'}
                onChangeText={setEmail}
            />
            <CustomInput
                style={{ paddingTop: 20 }}
                iconName={'lock'}
                value={password}
                placeholder={'Password'}
                onChangeText={setPassword}
            />
            <CustomInput
                style={{ paddingTop: 20 }}
                iconName={'lock'}
                value={repeatPassword}
                placeholder={'Repeat Password'}
                onChangeText={setRepeatPassword}
            />
            <CustomButton style={{ paddingTop: 30 }} title='Get started' />


            <View style={styles.footer}>
                <Text style={{ color: "#C4C4C4", fontWeight: "500" }}>Already have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Text style={{ color: "#08C0CA", fontWeight: "700" }}> Login</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Registration

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
        paddingBottom: 50,
        justifyContent: "center",
        shadowColor: "#C4C4C4",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 1,
        backgroundColor: "#fff",
        paddingTop: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
})