import {StatusBar} from 'expo-status-bar';
import {
    Alert,
    Button,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    SafeAreaView, StyleSheet, TextInput
} from 'react-native';
import {AndroidSafeArea} from "./ViewStyles";
import {useState} from "react";

export default function Form({addHandler}) {

    const [text, setValue] = useState("")

    const onChange = (text) => {
        setValue(text)
    }

    return (
        <View>

            <TextInput style={styles.input} onChangeText={onChange} placeholder="Задание на осмотр..."/>
            <Button title={"Добавить Задание на осмотр"} color={"green"} onPress={() => addHandler(text)}/>

        </View>
    )

}
const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "black",
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 30
    },

    button: {
        marginBottom: 20
    }
})
