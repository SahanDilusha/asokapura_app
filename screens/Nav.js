import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Nav({ menuOnPress, setText,onPressSearch,placeholder }) {
    const Applogo = require("../assets/images/app_logo.png");
    const Menulogo = require("../assets/images/menu-icon.png");
    return (
        <View style={stylesheet.viewTop}>
            <View style={stylesheet.logoView}>
                <Pressable onPress={menuOnPress}>
                    <Image source={Menulogo} style={stylesheet.menuLogo} />
                </Pressable>
                <Image source={Applogo} style={stylesheet.appLogo} />
            </View>
            <View style={stylesheet.inputView}>
                <TextInput style={stylesheet.searchInput} placeholder={placeholder} placeholderTextColor={"#949191"} onChangeText={(text) => {
                    setText(text);
                }} />
                <Pressable style={stylesheet.searchPressable} onPress={onPressSearch}>
                    <Text style={stylesheet.searchPressableText}>Search</Text>
                </Pressable>
            </View>
        </View>
    );
}

const stylesheet = StyleSheet.create({
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
});