import * as React from "react";
import {View, Text, StyleSheet, ImageBackground} from "react-native";
import LoginContainer from "./components/Login/loginContainer";
import Navigator from 'react-native-easy-router'
import {Provider} from "react-redux";
import store from "./Redux/reduxStore";
import backgroundImage from "./assets/background/1-12.jpg"
import OnboardingQuestionsContainer from "./components/OnboardingQuestions/OnboardingQuestionsContainer";

const App = (props) => {
    return (
        <Provider store={store}>
            <View style={Styles.component}>
                <ImageBackground source={backgroundImage} style={{width: "100%", height: "100%"}}>
                    {/*<LoginContainer/>*/}
                    <OnboardingQuestionsContainer/>
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
