import {StatusBar} from 'expo-status-bar';
import {
    Alert,
    Button,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    SafeAreaView, StyleSheet, TouchableOpacity
} from 'react-native';
import {AndroidSafeArea, styles} from "./ViewStyles";

export default function ListItem({el, deleteHandler}) {

    return (
        <TouchableOpacity onPress={()=> deleteHandler(el.key)}>
            <Text style={listStyles.someText}>
                {el.text}
            </Text>
        </TouchableOpacity>
    )

}
const listStyles = StyleSheet.create({

    someText:{
        fontWeight: "bold",
        textAlign: "center",
        padding: 20,
        borderRadius: 20,
        backgroundColor: "pink",
        borderWidth:1,
        marginTop: 10,
        width: "70%",
        marginLeft: "15%"
    }
})
