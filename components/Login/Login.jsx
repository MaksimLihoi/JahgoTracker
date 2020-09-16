import React, {Component} from "react";
import {
    Button,
    View,
    Text,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    Keyboard
} from "react-native";
import {Block, Button as ButtonGalio} from "galio-framework";
import logo from "../../assets/logos/logoLoginScreen.jpg"
import facebookLogo from "../../assets/logos/facebookLogo.png"
import googleLogo from "../../assets/logos/googleLogo.png"
import Hr from "react-native-hr-component";
import Styles from "./styles.js";


class Login extends Component {
    constructor(props) {
        super(props);

        this.keyboardHeight = new Animated.Value(0);
        this.imageHeight = new Animated.Value(120);
        this.imageWidth = new Animated.Value(120);
        this.imageMarginBottom = new Animated.Value(15);
    }

    componentDidMount() {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardWillShow = (event) => {
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: event.duration,
                toValue: event.endCoordinates.height,
                useNativeDriver: false,
            }),
            Animated.timing(this.imageHeight, {
                duration: event.duration,
                toValue: 60,
                useNativeDriver: false,
            }),
            Animated.timing(this.imageWidth, {
                duration: event.duration,
                toValue: 60,
                useNativeDriver: false,
            }),
            Animated.timing(this.imageMarginBottom, {
                duration: event.duration,
                toValue: 10,
                useNativeDriver: false,
            }),
        ]).start();
    };

    keyboardWillHide = (event) => {
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: event.duration,
                toValue: 0,
                useNativeDriver: false,
            }),
            Animated.timing(this.imageHeight, {
                duration: event.duration,
                toValue: 120,
                useNativeDriver: false,
            }),
            Animated.timing(this.imageWidth, {
                duration: event.duration,
                toValue: 120,
                useNativeDriver: false,
            }),
            Animated.timing(this.imageMarginBottom, {
                duration: event.duration,
                toValue: 15,
                useNativeDriver: false,
            }),
        ]).start();
    };

    singUpButtonOnPress = () => {
        this.props.singUpButton();
    };

    loginButtonOnPress = () => {
        this.props.loginButton();
    };

    forgotPassword = () => {
        Alert.alert("Forgot pass pressed", "pressed");
    };

    facebookOnPress = () => {
        //TODO: Add sing up and login through facebook.
        Alert.alert("Facebook button pressed", "Facebook button pressed")
    };

    googleOnPress = () => {
        //TODO: Add sing up and login through google account.
        Alert.alert("Google button pressed", "Google button pressed")
    };

    loginOnTextChange = (text) => {
        this.props.updateLoginText(text);
    };

    passwordOnTextChange = (text) => {
        this.props.updatePasswordText(text);
    };

    repeatPasswordOnTextChange = (text) => {
        this.props.updateRepeatPasswordText(text);
    };


    render() {
        //TODO: Animated.view for sing up:
        // 1)TextInput
        // 2)Buttons.
        return (
            <View style={Styles.component}>
                <Animated.View style={[Styles.component, {paddingBottom: this.keyboardHeight}]}>
                    {this.props.isAuth ? <Text>IsAuth: true</Text> : <Text>IsAuth: false</Text>}
                    <Animated.Image source={logo} style={[Styles.logoJahgo,
                        {
                            height: this.imageHeight,
                            width: this.imageWidth,
                            marginBottom: this.imageMarginBottom,
                        }]}/>
                    <TextInput style={Styles.textInput}
                               value={this.props.newLoginText}
                               onChangeText={value => this.loginOnTextChange(value)}
                               placeholder="E-mail"
                               placeholderTextColor="#80a699"
                               autocorrect={false}
                               selectionColor={"white"}
                               color={"white"}/>
                    <TextInput style={Styles.textInput}
                               value={this.props.newPasswordText}
                               onChangeText={value => this.passwordOnTextChange(value)}
                               placeholder="Password"
                               secureTextEntry={true}
                               textContentType={"password"}
                               placeholderTextColor="#80a699"
                               autocorrect={false}
                               selectionColor={"white"}
                               color={"white"}/>

                    {this.props.isSingUpButtonPressed ?
                        <TextInput style={Styles.textInput}
                                   value={this.props.newRepeatPasswordText}
                                   onChangeText={value => this.repeatPasswordOnTextChange(value)}
                                   placeholder="Repeat password"
                                   secureTextEntry={true}
                                   textContentType={"password"}
                                   placeholderTextColor="#80a699"
                                   autocorrect={false}
                                   selectionColor={"white"}
                                   color={"white"}/> : null}
                    {this.props.isPasswordForget ?
                        <Button onPress={this.forgotPassword} title={"Forgot your password?"}/> : null}
                    <ButtonGalio onPress={this.loginButtonOnPress} style={Styles.buttonSingIn}>
                        <Text style={Styles.currentButtonText} color={"05634b"}>Login</Text>
                    </ButtonGalio>
                    <ButtonGalio onPress={this.singUpButtonOnPress} style={Styles.buttonSingUp}>
                        <Text style={Styles.buttonText}>Sing up</Text>
                    </ButtonGalio>
                    <Hr text={"  or  "} width={300} lineColor={"white"} textStyles={Styles.textStylesHr}
                        hrStyles={Styles.lineStyle}/>
                    <View style={Styles.logos}>
                        <TouchableOpacity onPress={this.facebookOnPress}>
                            <Image style={Styles.socialNetworkLogo} source={facebookLogo}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.googleOnPress}>
                            <Image style={Styles.socialNetworkLogo} source={googleLogo}/>
                        </TouchableOpacity>

                    </View>
                </Animated.View>
            </View>);
    };
};


export default Login;
