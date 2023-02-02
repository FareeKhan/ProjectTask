import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import Iconic from 'react-native-vector-icons/Ionicons'

const Welcome = ({navigation}) => {
    const data =[
        require('../assets/one.png'),
        require('../assets/two.png'),
        require('../assets/three.png'),
        require('../assets/four.png'),
        require('../assets/five.png'),
        require('../assets/six.png'),
        require('../assets/seven.png'),
        require('../assets/eight.png'),
    ]


    const renderItem  = ({item,index})=>{
        return(
              <TouchableOpacity style={{paddingBottom:10,paddingHorizontal: 22}}>
                 <Image source={item}  />
              </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#08C0CA"}}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingTop: Platform.OS=='ios'?52 :20,justifyContent:"space-between", width: "75%",paddingBottom:30 , paddingHorizontal: 24 }}>
                <TouchableOpacity style={[styles.headerButton]} onPress={()=>navigation.goBack()}>
                    <Iconic name="chevron-back-outline" size={18}/>
                </TouchableOpacity>
                <Text style={{ fontWeight: "700", color: "#fff" }}>Pick your Favourites</Text>
            </View>
            <ScrollView>

           <View>
            <FlatList
            data={data}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={renderItem}
            numColumns={2}
            />
            </View>
            <CustomButton title='Continue' bgColor={'#fff'} textColor={'#000'} style={{paddingVertical:30}} />
            </ScrollView>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    headerButton: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
})