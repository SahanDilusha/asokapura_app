import { Image } from "expo-image";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ProductView from "./ProductView";
import { BlurView } from 'expo-blur';
import Animated, { FadeInRight, FadeOutLeft, FadeOutRight } from "react-native-reanimated";
import { useState } from "react";


export default function Home({ navigation }) {

    const [showCheckOut, setShowCheckOut] = useState(true);

    const Applogo = require("../assets/images/app_logo.png");
    const Menulogo = require("../assets/images/menu-icon.png");
    const img = require("../assets/images/download (1).jpeg");

    const data = [
        {},
        {},
        {},
        {},
        {},
        {},
    ];

    return (
        <SafeAreaView style={stylesheet.safeAreaView}>

            <View style={stylesheet.viewTop}>
                <View style={stylesheet.logoView}>
                    <Pressable onPress={() => {
                        navigation.openDrawer();
                    }}>
                        <Image source={Menulogo} style={stylesheet.menuLogo} />
                    </Pressable>
                    <Image source={Applogo} style={stylesheet.appLogo} />
                </View>
                <View style={stylesheet.inputView}>
                    <TextInput style={stylesheet.searchInput} placeholder={"Enter Product Name"} placeholderTextColor={"#949191"} />
                    <Pressable style={stylesheet.searchPressable}>
                        <Text style={stylesheet.searchPressableText}>Search</Text>
                    </Pressable>
                </View>
            </View>
            <View style={stylesheet.centerView}>

                <FlashList
                    data={data}
                    renderItem={({ item }) => <ProductView item={{ color: "#e6b64e", img: img }} />}
                    estimatedItemSize={200}
                    contentContainerStyle={stylesheet.flashList}
                    numColumns={3}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={stylesheet.botomView}>
                <Text style={stylesheet.text1}>Total(Rs.)  25000.00</Text>
                <View style={stylesheet.btnView}>
                    <Pressable style={[stylesheet.cartBtn, stylesheet.btn]}>
                        <FontAwesome name="shopping-cart" size={30} color="black" />
                        <Text style={stylesheet.btnText}>Cart</Text>
                        <Text style={stylesheet.btnText2}>100</Text>
                    </Pressable>
                    <Pressable style={[stylesheet.cashBtn, stylesheet.btn]}>
                        <FontAwesome5 name="cash-register" size={30} color="black" />
                        <Text style={stylesheet.btnText}>Check Out</Text>
                    </Pressable>
                </View>
            </View>

            {
                showCheckOut && <Animated.View entering={FadeInRight} exiting={FadeOutRight} style={stylesheet.checkOut}>
                    <Pressable style={stylesheet.checkOut} onPress={() => {
                        setShowCheckOut(!showCheckOut);
                    }}>  </Pressable>
                    <BlurView tint={"dark"} style={stylesheet.checkOut}>
                        <ScrollView contentContainerStyle={stylesheet.checkOutScrollView}>
                            <View>
                                <Pressable></Pressable>
                                <Pressable></Pressable>
                                <TextInput inputMode={"numeric"} style={stylesheet.inputCheckOut} placeholder={"00.00"} placeholderTextColor={"#949191"} />
                            </View>
                        </ScrollView>
                    </BlurView>

                </Animated.View>
            }



        </SafeAreaView>
    );
}
const stylesheet = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#171716",
    },
    viewTop: {
        height: 70,
        width: "100%",
        backgroundColor: "#ffffff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        gap: 20,
    },
    appLogo: {
        width: 60,
        height: 60,
    },
    menuLogo: {
        width: 30,
        height: 30,
    },
    logoView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    inputView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    searchInput: {
        width: 400,
        height: 50,
        borderRadius: 20,
        borderColor: "#000000",
        borderWidth: 2,
        paddingLeft: 20,
        fontSize: 18,
        fontFamily: "Roboto-Regular",
    },
    searchPressable: {
        width: 120,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fccb42",
        borderRadius: 20,
        borderWidth: 1,
        borderStyle: "solid",
    },
    searchPressableText: {
        fontFamily: "Roboto-Bold",
        fontSize: 20,
    },
    botomView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        height: 70,
        width: "100%",
        backgroundColor: "#ffffff",
        alignItems: "center",
    },
    centerView: {
        flex: 1,
        padding: 10,
        gap: 20,
        flexDirection: "row",
        justifyContent: "center",
    },
    text1: {
        fontFamily: "Roboto-Bold",
        fontSize: 20,
    },
    btnView: {
        flexDirection: "row",
        gap: 20,
    },
    btn: {
        width: 200,
        height: 50,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 20,
    },
    cartBtn: {
        backgroundColor: "#5794f7",
    },
    cashBtn: {
        backgroundColor: "#ffbc2b",
    },
    btnText: {
        fontFamily: "Roboto-Bold",
        fontSize: 20,
    },
    btnText2: {
        fontSize: 18,
        backgroundColor: "#ffbc2b",
        padding: 5,
        borderRadius: 10,
        fontFamily: "Roboto-Bold",
    },
    checkOutScrollView: {
        width: "50%",
        height: "100%",
        backgroundColor: "#000",
        alignSelf: "flex-end",
        padding: 20,
    },
    checkOut: {
        position: "absolute",
        width: "100%",
        height: "100%",
        flexDirection:"row",
    },
    inputCheckOut: {
        width: "100%",
        height: 60,
        borderBottomWidth: 2,
        borderStyle: "solid",
        borderColor: "#ffffff",
        textAlign: "right",
        fontSize: 25,
        paddingRight: 10,
        color: "#ffffff",
        fontFamily: "Roboto-Bold",
    },
});