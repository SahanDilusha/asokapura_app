import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Notification() {

    return (
        <Animated.View entering={FadeInUp} exiting={FadeOutUp} style={stylesheet.container} >
            <Ionicons name="information-circle" size={30} color={"#fff"} />
            <View style={stylesheet.textView}>
                <Text style={stylesheet.titel}>Infor</Text>
                <Text style={stylesheet.text}>fvgfdvfdv</Text>
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
        backgroundColor: "#065999",
        position: "absolute",
        minWidth: "50%",
        marginTop:20,
        borderRadius:10,
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
    textView:{
        gap:5,
    },
});