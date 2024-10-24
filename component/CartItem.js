import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function CartItem({ item }) {

    const img = require("../assets/images/download (1).jpeg");


    return (
        <View style={[stylesheet.container, { backgroundColor: item.color }]}>
            <Image source={item.img} style={stylesheet.image} />
            <View style={stylesheet.view1}>
                <Text style={stylesheet.text2}>gvhjdvhndfvh</Text>
                <View style={stylesheet.btnView}>
                    <Pressable style={[stylesheet.btns, stylesheet.btnColor1]}>
                        <FontAwesome5 name="plus" size={24} color="#ffffff" />
                    </Pressable>
                    <Pressable style={[stylesheet.btns, stylesheet.btnColor2]}>
                        <FontAwesome5 name="minus" size={24} color="#ffffff" />
                    </Pressable>
                    <Pressable style={[stylesheet.btns, stylesheet.btnColor3]}>
                        <FontAwesome5 name="trash" size={24} color="#ffffff" />
                    </Pressable>
                </View>
                <Text style={stylesheet.text2}>Total(Rs.) 3000.00</Text>
            </View>

            <View style={stylesheet.itemCount}>
                <Text style={stylesheet.text1}>10</Text>
            </View>
        </View>
    );
}

const stylesheet = StyleSheet.create({
    container: {
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
    },
    view1: {
        gap: 10,
        width: "100%",
    },
    btnView: {
        flexDirection: "row",
        gap: 20,
    },
    btns: {
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    btnColor1: {
        backgroundColor: "#000",
    },
    btnColor2: {
        backgroundColor: "#000",
    },
    btnColor2: {
        backgroundColor: "#4a4844",
    },
    btnColor3: {
        backgroundColor: "#f03835",
    },
});