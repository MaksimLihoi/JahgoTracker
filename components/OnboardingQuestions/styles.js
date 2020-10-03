import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
        component: {
            alignItems: "center",
            alignContent: "center",
            flex: 1,
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: 30,
        },
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
        dateOfBirth: {
            flexDirection: "row",
            margin: 10,
        },
        dateInput: {
            textAlign: "center",
            paddingTop: 14,
            marginRight: 15,
            marginLeft: 15,
            backgroundColor: "rgba(4, 73, 52, 0.6)",
            borderColor: 'rgba(4, 73, 52, 0.6)',
            borderWidth: 1,
            borderRadius: 5,
            height: 45,
            width: 80,
            color: "white",
        },
        picker: {
            height: 45,
            borderColor: 'rgba(4, 73, 52, 0.6)',
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 10,
            backgroundColor: "rgba(4, 73, 52, 0.6)",
            justifyContent: "center",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15,
            margin: 10,
            width: 300,
            color: "white",
        },
        genderItem: {
            color: "#80a699",
        },
        activeButton: {
            backgroundColor: "white",
            width: 300,
            shadowColor: "#06543e",
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 7,
        },
        activeButtonText: {
            color: "#0b6846",
            fontWeight: "bold",
            fontSize: 16,
        },
        aboutYouText: {
            marginBottom: 100,
            color: "#0b6846",
            fontSize: 30,
            fontWeight: "bold",
        },
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.5)"
        },
        pickerContainer: {
            height: 300,
            width: "100%",
            backgroundColor: "white",
        },
        modalHeader: {
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
        }
    }
);

export default styles;
