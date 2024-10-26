import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import Nav from '../component/Nav';
import { FlashList } from '@shopify/flash-list';

export default function Void({ navigation }) {
    const [getText, setText] = useState('');

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
                    <Pressable style={stylesheet.rowItem}>
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
});