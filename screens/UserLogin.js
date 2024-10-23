import { StatusBar } from "expo-status-bar";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Image } from 'expo-image';
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from "react";
import Notification from "../component/Notification";


export default function UserLogin() {

    const [getShowNotification, setShowNotification] = useState(false);
    const [getShow, setShow] = useState(false);


    const Applogo = require("../assets/images/app_logo.png");

    function handleNotification() {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <SafeAreaView style={stylesheet.safeAreaView}>
            <ScrollView contentContainerStyle={stylesheet.scrollView} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={stylesheet.container}>
                    <View style={stylesheet.haderView}>
                        <Image source={Applogo} style={stylesheet.applogo} />
                        <Text style={stylesheet.title}>Prithipura Communities</Text>
                    </View>
                    <View style={stylesheet.mainView}>
                        <View style={stylesheet.inputView}>
                            <TextInput style={stylesheet.input} placeholder={"Enter Your Username"} placeholderTextColor={"#d1d1cd"} />
                            <View style={stylesheet.passwordInputView}>
                                <TextInput style={stylesheet.input} secureTextEntry={getShow ? false : true} placeholder={"Enter Your Password"} placeholderTextColor={"#d1d1cd"} />
                                <Pressable style={stylesheet.showPasswordPressable} onPress={() => {
                                    setShow(!getShow);
                                }}>
                                    <FontAwesome5 name={getShow ? "eye" : "eye-slash"} size={30} color={"#d1d1cd"} />
                                </Pressable>
                            </View>
                            <Pressable style={stylesheet.pressable} onPress={() => {
                                handleNotification();
                            }}>
                                <Text style={stylesheet.pressableText}>Sgin In</Text>
                            </Pressable>
                        </View>
                    </View>
                    <Text style={stylesheet.text1}>2024@www.prithipura.org</Text>
                    {
                        getShowNotification && <Notification text={"Hello"} type={"Error"} />
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const stylesheet = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#171716",
        alignItems: "center",
        padding: 20,
        gap: 50,
    },
    mainView: {
        width: "60%",
    },
    applogo: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 40,
        textTransform: "uppercase",
        color: "#ffffff",
        fontFamily: "Roboto-Bold",
    },
    haderView: {
        alignItems: "center",
        gap: 20,
    },
    inputView: {
        gap: 50,
        alignItems: "center",
    },
    input: {
        width: "100%",
        height: 50,
        borderBottomWidth: 2,
        borderColor: "#ffffff",
        fontFamily: "Roboto-Regular",
        fontSize: 25,
        paddingLeft: 10,
        paddingRight: 45,
        color: "#d1d1cd",
    },
    passwordInputView: {
        width: "100%",
    },
    pressable: {
        backgroundColor: "#fccb42",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 55,
        borderRadius: 10,
    },
    pressableText: {
        fontSize: 25,
        fontFamily: "Roboto-Bold",
        color: "#171716",
    },
    text1: {
        fontSize: 20,
        fontFamily: "Roboto-Regular",
        color: "#d1d1cd",
    },
    showPasswordPressable: {
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        alignSelf: "flex-end",
    },
});