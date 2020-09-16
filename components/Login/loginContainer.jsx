import React from "react";
import {
    updateLoginUserActionCreator,
    updatePasswordUserActionCreator,
    loginButtonActionCreator,
    singUpButtonActionCreator, updateRepeatPasswordUserActionCreator
} from "../../Redux/loginReducer";
import Login from "./Login";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newLoginText: state.loginScreen.newLoginText,
        newPasswordText: state.loginScreen.newPasswordText,
        newRepeatPasswordText: state.loginScreen.newRepeatPasswordText,
        isAuth: state.loginScreen.isAuth,
        isPasswordForget: state.loginScreen.isPasswordForget,
        isSingUpButtonPressed: state.loginScreen.isSingUpButtonPressed,
    };
};

const LoginContainer = connect(mapStateToProps, {
    updateLoginText: updateLoginUserActionCreator,
    updatePasswordText: updatePasswordUserActionCreator,
    updateRepeatPasswordText: updateRepeatPasswordUserActionCreator,
    loginButton: loginButtonActionCreator,
    singUpButton: singUpButtonActionCreator,
})(Login);

export default LoginContainer;
