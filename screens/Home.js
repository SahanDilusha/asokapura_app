import { Image } from "expo-image";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ProductView from "../component/ProductView";
import { BlurView } from 'expo-blur';
import Animated, { FadeInRight, FadeOutRight } from "react-native-reanimated";
import { useState } from "react";
import CartItem from "../component/CartItem";

export default function Home({ navigation }) {

    const [showCheckOut, setShowCheckOut] = useState(false);
    const [input, setInput] = useState('');
    const [showCart, setShowCart] = useState(true);

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
                    numColumns={3}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={stylesheet.botomView}>
                <Text style={stylesheet.text1}>Total(Rs.)  25000.00</Text>
                <View style={stylesheet.btnView}>
                    <Pressable style={[stylesheet.cartBtn, stylesheet.btn]} onPress={() => {
                        setShowCart(!showCart);
                    }}>
                        <FontAwesome name="shopping-cart" size={30} color="black" />
                        <Text style={stylesheet.btnText}>Cart</Text>
                        <Text style={stylesheet.btnText2}>100</Text>
                    </Pressable>
                    <Pressable style={[stylesheet.cashBtn, stylesheet.btn]} onPress={() => {
                        setShowCheckOut(!showCheckOut);
                    }}>
                        <FontAwesome5 name="cash-register" size={30} color="black" />
                        <Text style={stylesheet.btnText}>Check Out</Text>
                    </Pressable>
                </View>
            </View>

            {
                showCheckOut && (<Animated.View entering={FadeInRight} exiting={FadeOutRight} style={stylesheet.checkOut}>
                    <BlurView tint={"dark"} style={stylesheet.checkOut}>
                        <Pressable style={stylesheet.checkOutBtn} onPress={() => {
                            setShowCheckOut(!showCheckOut);
                        }}></Pressable>
                        <ScrollView contentContainerStyle={stylesheet.checkOutScrollView}>
                            <View style={stylesheet.totalView}>
                                <Text style={stylesheet.text2}>Total(Rs.)</Text>
                                <Text style={stylesheet.text2}>00.00</Text>
                            </View>
                            <View>
                                <Pressable></Pressable>
                                <Pressable></Pressable>
                                <TextInput value={input} inputMode={"numeric"} editable={false} style={stylesheet.inputCheckOut} placeholder={"00.00"} placeholderTextColor={"#949191"} />
                            </View>
                            <View style={stylesheet.totalView}>
                                <Text style={stylesheet.text2}>Blance(Rs.)</Text>
                                <Text style={stylesheet.text2}>00.00</Text>
                            </View>
                            <View style={stylesheet.numberPadView}>
                                <View style={stylesheet.numberPadBtnView}>
                                    <Pressable style={stylesheet.numberPadBtn} onPress={() => {
                                        setInput(input + '.');
                                    }}>
                                        <Text style={stylesheet.numberPadBtnText}>.</Text>
                                    </Pressable>
                                    <Pressable style={stylesheet.numberPadBtn} onPress={() => {
                                        setInput('');
                                    }}>
                                        <Text style={stylesheet.numberPadBtnText}>Clear</Text>
                                    </Pressable>
                                    <Pressable style={stylesheet.numberPadBtn} onPress={() => {
                                        setInput(input.slice(0, -1));
                                    }}>
                                        <FontAwesome5 name="backspace" size={24} color="#ffffff" />
                                    </Pressable>
                                </View>
                                <View style={stylesheet.numberPadBtnView}>
                                    <Pressable style={stylesheet.numberPadBtn} onPress={() => {
                                        setInput(input + '1');
                                    }}>
                                        <Text style={stylesheet.numberPadBtnText}>1</Text>
                                    </Pressable>
                                    <Pressable style={stylesheet.numberPadBtn} onPress={() => {
                                        setInput(input + '2');
                                    }}>
                                        <Text style={stylesheet.numberPadBtnText}>2</Text>
                                    </Pressable>
                                    <Pressable style={stylesheet.numberPadBtn} onPress={() => {
                                        setInput(input + '3');
                                    }}>
                                        <Text style={stylesheet.numberPadBtnText}>3</Text>
                                    </Pressable>
                                </View>
                                <View style={stylesheet.numberPadBtnView}>
                                    <Pressable style={stylesheet.numberPadBtn} onPress={() => {
                                        setInput(input + '4');
                                    }}>
                                        <Text style={stylesheet.numberPadBtnText}>4</Text>
                                    </Pressable>
                                    <Pressable style={stylesheet.numberPadBtn} onPress={() => {
                                        setInput(input + '5');
                                    }}>
                                        <Text style={stylesheet.numberPadBtnText}>5</Text>
                                    </Pressable>
                                    <Pressable style={stylesheet.numberPadBtn} onPress={() => {
                                        setInput(input + '6');
                                    }}>
                                        <Text style={stylesheet.numberPadBtnText}>6</Text>
                                    </Pressable>
                                </View>
                                <View style={stylesheet.numberPadBtnView}>
                                    <Pressable style={stylesheet.numberPadBtn} onPress={() => {
                                        setInput(input + '7');
                                    }}>
                                        <Text style={stylesheet.numberPadBtnText}>7</Text>
                                    </Pressable>
                                    <Pressable style={stylesheet.numberPadBtn} onPress={() => {
                                        setInput(input + '8');
                                    }}>
                                        <Text style={stylesheet.numberPadBtnText}>8</Text>
                                    </Pressable>
                                    <Pressable style={stylesheet.numberPadBtn} onPress={() => {
                                        setInput(input + '9');
                                    }}>
                                        <Text style={stylesheet.numberPadBtnText}>9</Text>
                                    </Pressable>
                                </View>
                                <View style={stylesheet.numberPadBtnView}>
                                    <Pressable disabled={true} style={stylesheet.numberPadBtn2}>
                                    </Pressable>
                                    <Pressable style={stylesheet.numberPadBtn} onPress={() => {
                                        setInput('0');
                                    }}>
                                        <Text style={stylesheet.numberPadBtnText}>0</Text>
                                    </Pressable>
                                    <Pressable style={stylesheet.numberPadBtn2} disabled={true}>
                                    </Pressable>
                                </View>
                            </View>
                            <View style={stylesheet.btnView}>
                                <Pressable style={[stylesheet.cartBtn, stylesheet.btn]} onPress={() => {
                                    setShowCheckOut(!showCheckOut);
                                    setShowCart(!showCart);
                                }}>
                                    <FontAwesome name="shopping-cart" size={30} color="black" />
                                    <Text style={stylesheet.btnText}>Cart</Text>
                                    <Text style={stylesheet.btnText2}>100</Text>
                                </Pressable>
                                <Pressable style={[stylesheet.cashBtn, stylesheet.btn]} onPress={() => {
                                    setShowCheckOut(!showCheckOut);
                                }}>
                                    <MaterialCommunityIcons name="cash-fast" size={30} color="black" />
                                    <Text style={stylesheet.btnText}>Pay</Text>
                                </Pressable>
                            </View>
                        </ScrollView>
                    </BlurView>
                </Animated.View >)
            }

            {
                showCart && (<Animated.View entering={FadeInRight} exiting={FadeOutRight} style={stylesheet.checkOut}>
                    <BlurView tint={"dark"} style={stylesheet.checkOut}>
                        <Pressable style={stylesheet.checkOutBtn} onPress={() => {
                            setShowCart(!showCart);
                        }}></Pressable>
                        <View style={stylesheet.checkOutScrollView}>
                            <View style={stylesheet.cartView1}>
                                <Text style={stylesheet.text2}>Total Items -100</Text>
                                <Pressable style={stylesheet.cartBtn1}>
                                    <Text style={stylesheet.text2}>Clear</Text>
                                </Pressable>
                            </View>
                            <View style={stylesheet.cartItemBody}>
                                <FlashList estimatedItemSize={200} data={data} renderItem={({ item }) => <CartItem item={{ color: "#e6b64e", img: img }} />} />
                            </View>
                            <Pressable style={[stylesheet.cashBtn, stylesheet.btn1]} onPress={() => {
                                setShowCart(!showCart);
                                setShowCheckOut(!showCheckOut);
                            }}>
                                <MaterialCommunityIcons name="cash-fast" size={30} color="black" />
                                <Text style={stylesheet.btnText}>Check Out</Text>
                            </Pressable>
                        </View>
                    </BlurView>
                </Animated.View>)
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
        justifyContent: "center",
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
    btn1: {
        width: "100%",
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
        height: "100%",
        backgroundColor: "#000",
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    checkOut: {
        position: "absolute",
        width: "100%",
        height: "100%",
        flexDirection: "row",
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
    checkOutBtn: {
        width: "50%",
    },
    totalView: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
    },
    text2: {
        fontSize: 20,
        fontFamily: "Roboto-Bold",
        color: "#ffffff",
    },
    numberPadView: {
        width: "100%",
        marginVertical: 10,
        gap: 10,
    },
    numberPadBtnView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    },
    numberPadBtn: {
        flex: 1,
        backgroundColor: "#b81706",
        height: 60,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    numberPadBtn2: {
        flex: 1,
        backgroundColor: "#000000",
        height: 60,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    numberPadBtnText: {
        fontSize: 25,
        color: "#ffffff",
        fontFamily: "Roboto-Bold",
    },
    cartView1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cartBtn1: {
        backgroundColor: "red",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    cartItemBody: {
        flex: 1,
        paddingVertical: 10,
    },

});