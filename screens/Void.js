import { useState } from 'react';
import { StyleSheet } from 'react-native';
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
        </SafeAreaView>
    );
}

const stylesheet =StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#171716",
    },
});