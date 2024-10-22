import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserLogin() {
    return(
        <SafeAreaView>
            <StatusBar style={"light"} hidden={true}/>
        </SafeAreaView>
    );
}