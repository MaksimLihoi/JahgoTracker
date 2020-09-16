import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
        component: {
            alignItems: "center",
            alignContent: "center",
            flex: 1,
            justifyContent: "center",
        },
        currentButtonText: {
            color: "#1e5b45",
            fontWeight: "bold",
        },
        buttonText: {
            color: "white",
            fontWeight: "bold",
        },
    //TODO: IPhone suggest strong password for sing up, so it doesn't look naturally.
        textInput: {
            height: 45,
            borderColor: '#06543e',
            borderWidth: 1,
            borderRadius: 25,
            marginBottom: 10,
            backgroundColor: "#06543e",
            justifyContent: "center",
            paddingLeft: 15,
            paddingRight: 15,
            width: 300,
        },
        buttonSingUp: {
            backgroundColor: "#1e5b45",
            width: 300,
            color: "#1e5b45",
            shadowColor: "#06543e",
        },
        buttonSingIn: {
            backgroundColor: "white",
            width: 300,
            shadowColor: "#06543e",
        },
        logoJahgo: {
            width: 120,
            height: 120,
            marginBottom: 15,
        },
        textStylesHr: {
            color: "white",
            fontSize: 20,
        },
        lineStyle: {
            marginTop: 5,
            width: "80%",
        },
        socialNetworkLogo: {
            width: 50,
            height: 50,
            marginLeft: 10,
            marginRight: 10,
        },
        logos: {
            marginLeft: 8,
            marginRight: 8,
            paddingVertical: 8,
            flexDirection: 'row',
        },
        forgotPasswordButton: {
            height: 0,
            width: 0,
        },
    }
);

export default Styles;
