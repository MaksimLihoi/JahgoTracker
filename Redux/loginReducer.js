const UPDATE_USER_LOGIN = "UPDATE_USER-LOGIN";
const UPDATE_USER_PASSWORD = "UPDATE-USER-PASSWORD";
const LOGIN_BUTTON_PRESSED = "LOGIN-BUTTON-PRESSED";
const SING_UP_BUTTON_PRESSED = "SING-UP-BUTTON-PRESSED";
const UPDATE_USER_REPEAT_PASSWORD = "UPDATE-USER-REPEAT-PASSWORD";

let initializeState = {
    newLoginText: '',
    newPasswordText: '',
    newRepeatPasswordText: '',
    isAuth: false,
    isPasswordForget: false,
    isSingUpButtonPressed: false,
    isLoginButtonPressed: true,
};


const loginReducer = (state = initializeState, action) => {
        switch (action.type) {
            case UPDATE_USER_LOGIN:
                return {
                    ...state,
                    newLoginText: action.newLoginText,
                };


            case UPDATE_USER_PASSWORD:
                return {
                    ...state,
                    newPasswordText: action.newPasswordText,
                };

            case UPDATE_USER_REPEAT_PASSWORD:
                return {
                    ...state,
                    newRepeatPasswordText: action.newRepeatPasswordText,
                }

            case LOGIN_BUTTON_PRESSED: {
                if (state.isLoginButtonPressed) {
                    //TODO: Remove this fake login in future;
                    let login = state.newLoginText;
                    let password = state.newPasswordText;
                    if (login === 'login' && password === 'pass') {
                        return {
                            ...state,
                            isAuth: true,
                            isPasswordForget: false,
                            isSingUpButtonPressed: false,
                            newPasswordText: '',
                            newLoginText: '',
                        };
                    } else {
                        return {
                            ...state,
                            isSingUpButtonPressed: false,
                            newPasswordText: '',
                            newLoginText: '',
                            isPasswordForget: true,
                        };
                    }
                } else {
                    return {
                        ...state,
                        isLoginButtonPressed: true,
                        isSingUpButtonPressed: false,
                    }
                }
            }


            case
            SING_UP_BUTTON_PRESSED: {
                return {
                    ...state,
                    isSingUpButtonPressed: true,
                    isPasswordForget: false,
                    isLoginButtonPressed: false,
                };
            }
                ;
            default: {
                return state;
            }

        }

    }
;

export const updateLoginUserActionCreator = (newLoginText) => {
    return {
        type: UPDATE_USER_LOGIN,
        newLoginText: newLoginText,
    };
};

export const updatePasswordUserActionCreator = (newPasswordText) => {
    return {
        type: UPDATE_USER_PASSWORD,
        newPasswordText: newPasswordText,
    };
};

export const updateRepeatPasswordUserActionCreator = (newRepeatPasswordText) => {
    return {
        type: UPDATE_USER_REPEAT_PASSWORD,
        newPasswordText: newRepeatPasswordText,
    };
};

export const loginButtonActionCreator = () => {
    return {
        type: LOGIN_BUTTON_PRESSED,
    };
};

export const singUpButtonActionCreator = () => {
    return {
        type: SING_UP_BUTTON_PRESSED,
    }
};

export default loginReducer;
