import { StyleSheet } from "react-native";
const baseStyle = StyleSheet.create({
    safeArea: {
        flex:1, 
        justifyContent: 'center',
    },
    scrollView: {
        marginHorizontal: 20,
    },
    emailField: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    passwordField: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingTop: 30
    },
    signInButton: {
        padding: 15,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 60,
        marginRight: 60,

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        width: 200,
        height: 200,
    },
    field: {
        marginTop: 15,
        marginBottom:10,
        padding:15,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 8,
    }, 
    button: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        marginTop: 30,
        borderColor: '#000000',
        borderWidth: 1,
        width: 227,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button2: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        borderColor: '#000000',
        borderWidth: 2,
        width: 130,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default baseStyle;