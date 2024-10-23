import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ProductView({ item }) {
    return (
        <Pressable>
            <View style={[stylesheet.main, { backgroundColor: item.color }]}>
                <Image source={item.img} style={stylesheet.image} />
                <View style={stylesheet.qtyView}>
                    <Text style={stylesheet.text2}>30</Text>
                </View>
                <Text style={stylesheet.name} numberOfLines={1} >dscvsadcvdscvsd dswcdcvdscd vcdsvcsdvc</Text>
                <View style={stylesheet.view1}>
                    <Text style={stylesheet.text1}>Rs 2000.00</Text>
                    <Text style={stylesheet.text1}>QTY- 200</Text>
                </View>
                <View style={stylesheet.btnGroup}>
                    <Pressable style={stylesheet.pressable2}>
                        <View style={[stylesheet.pressableView1,stylesheet.pressableViewColor1]}></View>
                        <AntDesign name="plus" size={40} color="#fff" />
                    </Pressable>
                    <Pressable style={stylesheet.pressable2}>
                        <View style={[stylesheet.pressableView1,stylesheet.pressableViewColor2]}></View>
                        <AntDesign name="minus" size={40} color="#fff" />
                    </Pressable>
                </View>
            </View>
        </Pressable>
    );
}

const stylesheet = StyleSheet.create({
    main: {
        width: 280,
        height: 300,
        borderRadius: 20,
        padding: 5,
        alignItems: "center",
        gap: 10,
        margin:10,
    },
    image: {
        width: 220,
        height: 200,
        marginTop: 10,
        borderRadius: 20,
    },
    name: {
        fontSize: 18,
        fontFamily: "Roboto-Bold",
    },
    view1: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text1: {
        fontSize: 20,
        fontFamily: "Roboto-Regular",
    },
    qtyView: {
        minWidth: 50,
        minHeight: 50,
        position: "absolute",
        alignSelf: "flex-start",
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: "#000",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    text2: {
        color: "#fff",
        fontSize: 20,
    },
    pressable2: {
        justifyContent: "center",
        alignItems: "center",
    },
    btnGroup: {
        position: "absolute",
        alignSelf: "flex-end",
        paddingHorizontal: 20,
        marginVertical: 20,
        gap: 30,
    },
    pressableView1: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius:60,
        opacity:.8,
    },
    pressableViewColor1:{
        backgroundColor: "#424242",
    },
    pressableViewColor2:{
        backgroundColor: "#c92f1a",
    },
});