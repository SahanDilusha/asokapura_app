import { Image } from "expo-image";
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Home() {
    const Applogo = require("../assets/images/app_logo.png");
    const Menulogo = require("../assets/images/menu-icon.png");

    return (
        <SafeAreaView style={stylesheet.safeAreaView}>
            <View style={stylesheet.viewTop}>
                <View style={stylesheet.logoView}>
                    <Pressable>
                        <Image source={Menulogo} style={stylesheet.menuLogo} />
                    </Pressable>
                    <Image source={Applogo} style={stylesheet.appLogo} />
                </View>
                <View style={stylesheet.inputView}>
                    <TextInput style={stylesheet.searchInput} placeholder={"Enter Product Name"} placeholderTextColor={""} />
                    <Pressable style={stylesheet.searchPressable}>
                        <Text style={stylesheet.searchPressableText}>Search</Text>
                    </Pressable>
                </View>
            </View>
            <View style={stylesheet.centerView}></View>
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
        gap: 20,
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
    btnText2:{
        fontSize:18,
        backgroundColor: "#ffbc2b",
        padding:5,
        borderRadius:10,
        fontFamily: "Roboto-Bold",
    }
});