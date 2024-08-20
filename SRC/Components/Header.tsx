import {StatusBar} from 'expo-status-bar';
import {
    Alert,
    Button,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    SafeAreaView
} from 'react-native';
import {AndroidSafeArea, styles} from "./ViewStyles";

export default function Header() {

    return (

        <View style={styles.main}>
            <Text style={styles.text}>Check list</Text>
        </View>

    );
}
