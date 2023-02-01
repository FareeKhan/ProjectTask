import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const ResetPassword = ({navigation}) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 52, width: "60%", justifyContent: "space-between", marginHorizontal: 24 }}>
                <TouchableOpacity style={[styles.headerButton]}>
                    <Text style={{ color: "#fff" }}>s</Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: "700" }}>Reset Password</Text>
            </View>

            <CustomInput
                style={{ paddingTop: 60 }}
                iconName={'lock'}
                value={password}
                placeholder={'Password'}
                onChangeText={setPassword}
            />
            <CustomInput
                style={{ paddingTop: 20 }}
                iconName={'lock'}
                value={confirmPassword}
                placeholder={'Confirm Password'}
                onChangeText={setConfirmPassword}
            />
            <CustomButton style={{ paddingTop: 20 }} title='Reset'  onPress={navigation.navigate('Login')}/>

        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    headerButton: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#08C0CA",
        alignItems: "center",
        justifyContent: "center"
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
    },
    forgotText: {
        textAlign: "right",
        marginHorizontal: 24,
        paddingTop: 15,
        paddingBottom: 20,
        color: "#08C0CA"
    }
})