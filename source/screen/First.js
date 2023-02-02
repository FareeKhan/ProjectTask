import { Dimensions, FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Iconic from 'react-native-vector-icons/Ionicons'

const { height } = Dimensions.get('screen')
const { width } = Dimensions.get('screen')

const First = ({ navigation }) => {
    const [currentIndex,setCurrentIndex] = useState(0)
    const data = [
        {
            imgPath: require('../assets/longBurger.png'),
            colorName: "#08C0CA",
        },
        {
            imgPath: require('../assets/burger.png'),
            colorName: "#FCBD56",
        },
        {
            imgPath: require('../assets/chips.png'),
            colorName: "#E417D4",
        },
    ]

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1 }}>
                <View style={[styles.imgContainer, { backgroundColor: item.colorName }]}>
                    <TouchableOpacity style={styles.skipBtn} onPress={() => data.length == index + 1 ? navigation.navigate('Registration') : ''}>
                        <Text style={{ color: "#fff", fontWeight: "500" }} >Skip</Text>
                    </TouchableOpacity>
                    <Image source={item.imgPath} />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>
                        A super helpful{'\n'}app feature.
                    </Text>
                    <Text style={styles.subTitle}>Lorem ipsum dolor sit amet,consectetur{'\n'}adipiscing elit. Erat.</Text>
                    <View style={styles.footer}>
                         <View style={{flexDirection:"row",alignItems:"center"}}>
                            {
                                data.map((item,index)=>{
                                    return(
                                      <View key={index} style={{borderRadius:50,borderWidth:currentIndex == index ? 1:0,borderColor:item.colorName,marginRight:5}}>
                                          <View 
                                           style={{backgroundColor: item.colorName,width:currentIndex == index ? 6 : 4,height:currentIndex == index ?6 :4,borderRadius:currentIndex == index  ? 12:10,margin:2}} />
                                        </View>
                                    )
                                })
                            }
                         </View>
                        <TouchableOpacity onPress={() => {flatref.scrollToIndex({ index: data.length !== index + 1 ? index + 1 : '' ,}), data.length == index + 1 ? navigation.navigate('Registration') : ''}} style={[styles.footerButton, { backgroundColor: item.colorName }]}>
                            <Iconic name="chevron-forward-outline" size={18} color={'#fff'} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

    return (
        <View style={styles.mainContainer} >
            <FlatList
                ref={(ref) => (flatref = ref)}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                pagingEnabled
                scrollEnabled={false}
                renderItem={renderItem}
                onScroll={e => {
                    const x = e.nativeEvent.contentOffset.x
                    setCurrentIndex((x/width).toFixed(0))
                }}
            />

        </View>
    )
}

export default First

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff"
    },
    imgContainer: {
        height: Platform.OS == 'ios' ? height / 1.7 + 10 : height / 2,
        width: width,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24
    },
    skipBtn: {
        position: 'absolute',
        right: 24,
        top: Platform.OS == 'ios' ? 68 : 30
    },
    contentContainer: {
        paddingHorizontal: 24,
        paddingTop: 32,
        flex: 1,

    },
    title: {
        fontSize: 32,
        fontWeight: "600"
    },
    subTitle: {
        fontWeight: "500",
        lineHeight: 21,
        color: "#C4C4C4",
        paddingTop: 32,
        marginBottom: 50
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    footerButton: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#08C0CA",
        alignItems: "center",
        justifyContent: "center"
    }

})