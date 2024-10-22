import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Notification({text, type}) {

    return (
        <Animated.View entering={FadeInUp} exiting={FadeOutUp} style={[stylesheet.container, type === "Infor" ? stylesheet.colorInfor : type === "Waring" ? stylesheet.colorWaring : stylesheet.colorError]} >
            <FontAwesome5 name="info-circle" size={30} color="#ffffff" />
            <View style={stylesheet.textView}>
                <Text style={stylesheet.titel}>{type}</Text>
                <Text style={stylesheet.text}>{text}</Text>
            </View>
        </Animated.View>
    );

}

const stylesheet = StyleSheet.create({
    container: {
        minHeight: 50,
        paddingHorizontal: 30,
        paddingVertical: 10,
        flexDirection: "row",
        gap: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        minWidth: "50%",
        marginTop: 20,
        borderRadius: 10,
    },
    colorInfor: {
        backgroundColor: "#065999",
    },
    colorError: {
        backgroundColor: "#d1060d",
    },
    colorWaring: {
        backgroundColor: "#d4910b",
    },
    titel: {
        fontSize: 20,
        fontFamily: "Roboto-Bold",
        color: "#ffffff",
    },
    text: {
        fontSize: 16,
        color: "#ffffff",
    },
    textView: {
        gap: 5,
    },
});