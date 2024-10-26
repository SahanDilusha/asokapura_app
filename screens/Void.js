import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import Nav from '../component/Nav';
import { FlashList } from '@shopify/flash-list';
import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Void({ navigation }) {
    const [getText, setText] = useState('');
    const [showModel1, setShowModel1] = useState(false);

    const data = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ];

    return (
        <SafeAreaView style={stylesheet.safeAreaView}>
            <Nav setText={setText} menuOnPress={() => {
                navigation.openDrawer();
            }} onPressSearch={() => { console.log(getText) }}
                placeholder={"Enter Product Name"} />

            <View style={stylesheet.scrollView} >
                <View style={stylesheet.tableHeader}>
                    <View style={stylesheet.col}>
                        <Text style={stylesheet.colText}>Id</Text>
                    </View>
                    <View style={stylesheet.col}>
                        <Text style={stylesheet.colText} numberOfLines={1}>Product Name</Text>
                    </View>
                    <View style={stylesheet.col}>
                        <Text style={stylesheet.colText}>Price(Rs.)</Text>
                    </View>
                    <View style={stylesheet.col}>
                        <Text style={stylesheet.colText}>Quantity</Text>
                    </View>
                    <View style={stylesheet.col}>
                        <Text style={stylesheet.colText}>Wastage</Text>
                    </View>
                    <View style={stylesheet.col}>
                        <Text style={stylesheet.colText}>Total(Rs.)</Text>
                    </View>
                </View>

                <FlashList data={data} estimatedItemSize={200} renderItem={() => <Pressable style={stylesheet.tableRow} onLongPress={() => {
                    Alert.alert("row");
                }} delayLongPress={1000}>
                    <View style={stylesheet.rowItem}>
                        <Text style={stylesheet.colText}>P-493443990</Text>
                    </View>
                    <View style={stylesheet.rowItem}>
                        <Text style={stylesheet.colText} numberOfLines={1}>fdvdfv fvgfdvfgbv fdbv</Text>
                    </View>
                    <View style={stylesheet.rowItem}>
                        <Text style={stylesheet.colText}>3000.00</Text>
                    </View>
                    <Pressable style={stylesheet.rowItem} onPress={() => {
                        setShowModel1(!showModel1);
                    }}>
                        <Text style={stylesheet.colText}>1000 <Ionicons name="add-circle-sharp" size={20} color="#037ffc" /></Text>
                    </Pressable>
                    <Pressable style={stylesheet.rowItem}>
                        <Text style={stylesheet.colText}>1000 <Ionicons name="add-circle-sharp" size={20} color="#037ffc" /></Text>
                    </Pressable>
                    <View style={stylesheet.rowItem}>
                        <Text style={stylesheet.colText}>200000.00</Text>
                    </View>
                </Pressable>
                } />


            </View>

            <View style={stylesheet.botomView}>

            </View>

            {showModel1 && (
                <Animated.View entering={FadeInUp} exiting={FadeOutDown} style={stylesheet.modelMain}>
                    <BlurView tint={"dark"} style={stylesheet.modelBlurView}>
                        <View style={stylesheet.modelBody}>
                            <Text style={stylesheet.modelHader}>Update Wastage</Text>
                            <View style={stylesheet.modelNumberInputView}>
                                <Pressable style={stylesheet.modelPressable}>
                                    <Ionicons name="add" size={24} color="#ffffff" />
                                </Pressable>
                                <TextInput inputMode={"numeric"} placeholder="Enter quantity" style={stylesheet.modelInput} />
                                <Pressable style={stylesheet.modelPressable}>
                                    <AntDesign name="minus" size={24} color="#ffffff" />
                                </Pressable>
                            </View>
                            <View style={stylesheet.modelBotom}>
                                <Pressable style={[stylesheet.modelPressableBotom, stylesheet.modelPressableBotomColor1]}>
                                    <Text style={stylesheet.modelPressableBotomText}>Update</Text>
                                </Pressable>
                                <Pressable style={[stylesheet.modelPressableBotom, stylesheet.modelPressableBotomColor2]} onPress={() => {
                                    setShowModel1(!showModel1);
                                }}>
                                    <Text style={stylesheet.modelPressableBotomText}>Cancel</Text>
                                </Pressable>
                            </View>
                        </View>
                    </BlurView>
                </Animated.View>
            )}

        </SafeAreaView>
    );
}

const stylesheet = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#171716",
    },
    botomView: {
        width: "100%",
        height: 70,
        backgroundColor: "#ffffff",
    },
    scrollView: {
        flexGrow: 1,
        padding: 10,
    },
    tableHeader: {
        width: "100%",
        flexDirection: "row",
    },
    col: {
        flex: 1,
        backgroundColor: "#faedc8",
        padding: 5,
        borderWidth: 1,
        borderStyle: "solid",
    },
    colText: {
        fontSize: 18,
        fontFamily: "Roboto-Bold",
        textAlign: "center"
    },
    tableRow: {
        flexDirection: 'row',
        height: 60,

    },
    rowItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        backgroundColor: "#f0f0f0",
        height: "100%",
        borderWidth: 1,
    },
    modelMain: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    modelBlurView: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    modelBody: {
        minWidth: "50%",
        minHeight: 200,
        backgroundColor: "#ffffff",
        padding: 10,
    },
    modelHader: {
        fontSize: 20,
        fontFamily: "Roboto-Bold",
    },
    modelNumberInputView: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        marginTop: 20,
    },
    modelPressable: {
        width: 50,
        height: 50,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    modelInput: {
        width: 150,
        textAlign: "center",
        fontFamily: "Roboto-Regular",
        fontSize: 20,
        color:"#000000",
    },
    modelBotom: {
        flexDirection: 'row',
        marginTop: 30,
        gap: 10,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modelPressableBotom: {
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 50,
        borderRadius: 10,
    },
    modelPressableBotomText: {
        fontSize: 18,
        fontFamily: "Roboto-Bold",
        color: "#ffffff",
    },
    modelPressableBotomColor1: {
        backgroundColor: "#000000",
    },
    modelPressableBotomColor2: {
        backgroundColor: "#fc2b4a",
    },
});