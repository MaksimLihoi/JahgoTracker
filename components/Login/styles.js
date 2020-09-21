import {StyleSheet} from "react-native";

//TODO: Change colors to another one.
const Styles = StyleSheet.create({
        component: {
            alignItems: "center",
            alignContent: "center",
            flex: 1,
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: 75,
        },
        activeButtonText: {
            color: "#0b6846",
            fontWeight: "bold",
            fontSize: 16,
        },
        inactiveButtonText: {
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
        },
        //TODO: IPhone suggest strong password for sing up, so it doesn't look naturally.
        textInput: {
            height: 45,
            borderColor: 'rgba(4, 73, 52, 0.6)',
            borderWidth: 1,
            borderRadius: 7,
            marginBottom: 10,
            backgroundColor: "rgba(4, 73, 52, 0.6)",
            justifyContent: "center",
            paddingLeft: 15,
            paddingRight: 15,
            width: 300,
        },
        inactiveButton: {
            width: 300,
            color: "#0b6846",
            shadowColor: "#06543e",
            backgroundColor: null,
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 7,
        },
        activeButton: {
            backgroundColor: "white",
            width: 300,
            shadowColor: "#06543e",
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 7,
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
        jahgoTrackerText: {
            marginBottom: 50,
            color: "#0b6846",
            fontSize: 30,
            fontWeight: "bold",
        },
    }
);

export default Styles;
