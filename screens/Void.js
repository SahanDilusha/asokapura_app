import Nav from "./Nav";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Void({ navigation }) {
    const [getText, setText] = useState('');

    return (
        <SafeAreaView>
            <Nav setText={setText} menuOnPress={() => {
                navigation.openDrawer();
            }} onPressSearch={() => { console.log(getText) }}
                placeholder={"Enter Product Name"} />
        </SafeAreaView>
    );
}