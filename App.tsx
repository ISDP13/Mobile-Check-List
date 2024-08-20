import {StatusBar} from 'expo-status-bar';
import {
    Alert,
    Button,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    SafeAreaView, FlatList
} from 'react-native';
import {AndroidSafeArea} from "./SRC/Components/ViewStyles";
import Header from "./SRC/Components/Header";
import {useState} from "react";
import ListItem from "./SRC/Components/ListItem";
import Form from "./SRC/Components/Form";

export default function App() {

    const [AssignmentBlocks, setAssignmentBlocks] = useState([
        {text: "Осмотр Сталелитейного завода", key: "1"},
        {text: "Осмотр квартир Группа ПИК", key: "2"},
        {text: "Осмотр Грузовых Контейнеров", key: "3"},
        {text: "Осомтр строительной техники", key: "4"},
    ])

    const addHandler = (text) => {
        setAssignmentBlocks((list) => {
            return [
                {text: text, key: Math.random().toString(36).substring(7)},
                ...list
            ]
        })
    }

    const deleteHandler = (key) => {
        setAssignmentBlocks((list)=>{
            return list.filter(AssignmentBlocks => AssignmentBlocks.key != key)
        })
    }


    return (

        <View>
            <Header/>
            <Form addHandler={addHandler}/>
            <View>

                <FlatList data={AssignmentBlocks} renderItem={({item}) => (
                    <ListItem el={item} deleteHandler={deleteHandler}/>
                )}/>
            </View>
        </View>


    );
}


// export default function App() {
//
//     // const textPress = () => console.log("Test Text Pressing")
//     // const buttonPress = () => Alert.alert("Заголовок", "Основное сообщение", [
//     //     {text: "Да", onPress: () => console.log("Да")},
//     //     {text: "Отмена", onPress: () => console.log("Отмена")}
//     // ])
//     //
//     // const simpleText = {backgroundColor: "yellow"}
//
//     return (
//
//         <SafeAreaView style={AndroidSafeArea.container}>
//             <Text>aa</Text>
//         </SafeAreaView>
//
//
//
//         // <SafeAreaView style={AndroidSafeArea.container}>
//         //
//         //     <Text style={[textStyle.bold, simpleText]} onPress={textPress}>
//         //         Test Test Test Test Test Test Test Test {"\n"}
//         //         Test Test Test Test Test Test Test Test {"\n"}
//         //         Test Test Test Test Test Test Test Test
//         //     </Text>
//         //
//         //
//         //     <View style={textStyle.box}>
//         //         <Text> Hello </Text>
//         //     </View>
//         //
//         //     <Button title={"Кнопка"} color={"green"} onPress={buttonPress}/>
//         //
//         //     <TouchableWithoutFeedback onPress={buttonPress}>
//         //         <Image source={require('./assets/favicon.png')}/>
//         //     </TouchableWithoutFeedback>
//         //
//         //
//         //     <TouchableHighlight onPress={textPress}>
//         //         <Image blurRadius={3} source={{
//         //             width: 400,
//         //             height: 250,
//         //             uri: "https://a.d-cd.net/MwAAAgLQ2-A-960.jpg"
//         //         }}/>
//         //     </TouchableHighlight>
//         //
//         //     <SafeAreaView style={textStyle.mainBlock}>
//         //         <View style={[textStyle.box2, {backgroundColor: "green"}]}></View>
//         //         <View style={[textStyle.box2, {backgroundColor: "white"}, {height: 200}]}></View>
//         //         <View style={[textStyle.box2, {backgroundColor: "red"}]}></View>
//         //     </SafeAreaView>
//         //
//         //
//         //     <StatusBar style="auto"/>
//         // </SafeAreaView>
//     );
// }

