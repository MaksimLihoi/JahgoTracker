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
        this.repeatPasswordFieldHeight = new Animated.Value(0);
        this.repeatPasswordFieldBorderWidth = new Animated.Value(0);
        this.compText = new Animated.Value(30);

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
            Animated.timing(this.compText, {
                duration: event.duration,
                toValue: 1,
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
            Animated.timing(this.compText, {
                duration: event.duration,
                toValue: 30,
                useNativeDriver: false,
            }),
        ]).start();
    };

    singUpButtonOnPress = () => {
        if (!this.props.isSingUpButtonPressed) {
            Animated.parallel([
                Animated.timing(this.repeatPasswordFieldHeight, {
                    duration: 500,
                    toValue: 45,
                    useNativeDriver: false,
                }),
            ]).start();
        } else {
            Alert.alert("Sing up button pressed");
        }
        this.props.singUpButton();
    };

    loginButtonOnPress = () => {
        if (this.props.isSingUpButtonPressed) {
            Animated.parallel([
                Animated.timing(this.repeatPasswordFieldHeight, {
                    duration: 500,
                    toValue: 0,
                    useNativeDriver: false,
                }),
            ]).start();
        }
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
        return (
                <Animated.View style={[Styles.component, {paddingBottom: this.keyboardHeight}]}>
                    <Animated.Text style={[Styles.jahgoTrackerText,
                        {
                            fontSize: this.compText,
                        }
                    ]}>Jahgo Tracker</Animated.Text>
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

                    <Animated.View style={[
                        Styles.textInput,
                        {
                            height: this.repeatPasswordFieldHeight,
                            borderWidth: this.repeatPasswordFieldBorderWidth,
                        }
                    ]}>
                        {this.props.isSingUpButtonPressed ?
                            <TextInput value={this.props.newRepeatPasswordText}
                                       onChangeText={value => this.repeatPasswordOnTextChange(value)}
                                       placeholder="Repeat password"
                                       secureTextEntry={true}
                                       textContentType={"password"}
                                       placeholderTextColor="#80a699"
                                       autocorrect={false}
                                       selectionColor={"white"}
                                       color={"white"}/> : null}
                    </Animated.View>
                    {this.props.isPasswordForget ?
                        <Button onPress={this.forgotPassword} title={"Forgot your password?"}/> : null}
                    <Animated.View>
                        {this.props.isSingUpButtonPressed ?
                            <View>
                                <ButtonGalio onPress={this.singUpButtonOnPress} style={Styles.activeButton}>
                                    <Text style={Styles.activeButtonText} color={"05634b"}>Sign up</Text>
                                </ButtonGalio>
                                <ButtonGalio onPress={this.loginButtonOnPress} style={Styles.inactiveButton}>
                                    <Text style={Styles.inactiveButtonText}>Login</Text>
                                </ButtonGalio>
                            </View> :
                            <View>
                                <ButtonGalio onPress={this.loginButtonOnPress} style={Styles.activeButton}>
                                    <Text style={Styles.activeButtonText} color={"05634b"}>Login</Text>
                                </ButtonGalio>
                                <ButtonGalio onPress={this.singUpButtonOnPress} style={Styles.inactiveButton}>
                                    <Text style={Styles.inactiveButtonText}>Sign up</Text>
                                </ButtonGalio>
                            </View>}
                    </Animated.View>
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
            );
    };
};


export default Login;
