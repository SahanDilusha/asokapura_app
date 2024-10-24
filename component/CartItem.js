import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function CartItem() {

    const img = require("../assets/images/download (1).jpeg");


    return (
        <View style={stylesheet.container}>
            <Image source={img} style={stylesheet.image} />
            <View style={stylesheet.view1}>
                <Text style={stylesheet.text2}>gvhjdvhndfvh</Text>
            </View>
            <View style={stylesheet.itemCount}>
                <Text style={stylesheet.text1}>10</Text>
            </View>
        </View>
    );
}

const stylesheet = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: "100%",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: "row",
        gap: 10,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    itemCount: {
        backgroundColor: "red",
        position: "absolute",
        alignSelf: "flex-start",
        borderRadius: 100,
        minHeight: 40,
        minWidth: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        marginLeft: 3,
        marginTop: 3,
    },
    text1: {
        fontFamily: "Roboto-Bold",
        color: "#ffffff",
        fontSize: 18,
    },
    text2: {
        fontFamily: "Roboto-Bold",
        color: "#000000",
        fontSize: 20,
    }
});