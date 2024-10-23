import { Image } from "expo-image";
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

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
                    <TextInput style={stylesheet.searchInput} placeholder={"Enter Product Name"} placeholderTextColor={""}/>
                    <Pressable style={stylesheet.searchPressable}>
                        <Text style={stylesheet.searchPressableText}>Search</Text>
                    </Pressable>
                </View>
            </View>
            <View></View>
            <View></View>
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
    logoView:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:20,
    },
    inputView:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:20,
    },
    searchInput:{
        width:400,
        height:50,
        borderRadius:20,
        borderColor:"#000000",
        borderWidth:2,
        paddingLeft:20,
        fontSize:18,
        fontFamily:"Roboto-Regular",
    },
    searchPressable:{

    },
    searchPressableText:{

    },
});