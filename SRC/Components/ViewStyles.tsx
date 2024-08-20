import {Platform, StyleSheet} from "react-native";


export const AndroidSafeArea = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});

export const styles = StyleSheet.create({
    main:{
        paddingTop: 40,
        height: 100,
        backgroundColor: "silver"
    },
    text:{
        fontSize: 18,
        color:"red",
        fontWeight:"bold",
        textAlign: "center"
    }
})

// export const  textStyle = StyleSheet.create({
//     bold:{
//         fontWeight: "bold",
//         color: "blue",
//         backgroundColor: "pink"
//     },
//     box:{
//         backgroundColor: "yellow",
//         width: "50%",
//         height: 150,
//         opacity: 0.5,
//         borderWidth: 2,
//         borderColor: "red",
//         borderStyle: "dotted",
//         top: Platform.OS === "android" ? 15 : 20,
//         left: "25%"
//     },
//     mainBlock: {
//         flex: 1,
//         backgroundColor: "orange",
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center"
//     },
//     box2: {
//         width: 100,
//         height: 100
//     }
// })
