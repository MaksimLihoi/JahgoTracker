import * as React from "react";
import {View, Text, StyleSheet, ImageBackground} from "react-native";
import LoginContainer from "./components/Login/loginContainer";
import Login from "./components/Login/Login";
import {Provider} from "react-redux";
import store from "./Redux/reduxStore";
import backgroundImage from "./assets/background/1-12.jpg"

const App = (props) => {
    return (
        <Provider store={store}>
            <View style={Styles.component}>
                <ImageBackground source={backgroundImage} style={{width: "100%", height: "100%"}}>
                    <LoginContainer/>
                </ImageBackground>
            </View>
        </Provider>
    );
};

const Styles = StyleSheet.create({
        component: {
            backgroundColor: "#05634b",
            alignItems: "center",
            flex: 1,
        },
    }
);

export default App;
