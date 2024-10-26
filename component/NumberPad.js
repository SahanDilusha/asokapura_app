
import { Pressable, StyleSheet, Text,  View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function NumberPad({setInput,input}) {
    return(
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
    );
}

const stylesheet = StyleSheet.create({
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
});