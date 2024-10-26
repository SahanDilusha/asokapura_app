import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Nav from '../component/Nav';

export default function Void({ navigation }) {
    const [getText, setText] = useState('');

    return (
        <SafeAreaView style={stylesheet.safeAreaView}>
            <Nav setText={setText} menuOnPress={() => {
                navigation.openDrawer();
            }} onPressSearch={() => { console.log(getText) }}
                placeholder={"Enter Product Name"} />

            <ScrollView contentContainerStyle={stylesheet.scrollView} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
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
                <View style={stylesheet.tableRow}>
                    <View style={stylesheet.rowItem}>

                    </View>
                </View>
            </ScrollView>

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
        borderWidth: 2,
        borderStyle: "solid",
    },
    colText: {
        fontSize: 18,
        fontFamily: "Roboto-Bold",
    },
    rowItem:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
});