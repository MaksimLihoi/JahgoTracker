const DATE_PICKER_PRESSED = "DATE-PICKER-PRESSED";
const HIDE_DATE_PICKER = "HIDE-DATE-PICKER";
const SET_DATE = "SET-DATE";
const HIDE_MODAL = "HIDE-MODAL";
const SHOW_MODAL = "SHOW-MODAL";
const SET_PICKER_VALUE = "SET-PICKER-VALUE";
const CANCEL_PICKER = "CANCEL-PICKER";
const TYPE_OF_WORK = "TYPE-OF-WORK";
const ALCOHOL_CONSUMPTION = "ALCOHOL-CONSUMPTION";
const WEIGHT = "WEIGHT";
const HEIGHT = "HEIGHT";
const GENDER = "GENDER";

//TODO: write variants of weight and height.
let initializeState = {
    dateOfBirth: null,
    isDatePickerVisible: false,
    isModalPickerVisible: false,
    gender: "Gender",
    genderItems: ["Male", "Female", "Other"],
    weight: null,
    weightItems: [],
    height: null,
    heightItems: [],
    typeOfWork: "Type of work",
    typeOfWorkItems: ["Physical", "Creative", "Brainwork"],
    alcoholConsumption: "Alcohol consumption",
    alcoholConsumptionItems: ["Every day", "Few times a week", "Once a week", "Once a month", "Once a year"],
    currentPicker: null,
};


const onboardingQuestionsReducer = (state = initializeState, action) => {
    switch (action.type) {
        case DATE_PICKER_PRESSED:
            return {
                ...state,
                isDatePickerVisible: true,
            }
        case HIDE_DATE_PICKER:
            return {
                ...state,
                isDatePickerVisible: false,
            }
        case SET_DATE: {
            return {
                ...state,
                dateOfBirth: action.dateOfBirth,
            }
        }
        case HIDE_MODAL: {
            return {
                ...state,
                isModalPickerVisible: false,
            }
        }
        case SHOW_MODAL: {
            return {
                ...state,
                isModalPickerVisible: true,
            }
        }
        case SET_PICKER_VALUE: {
            if (action.currentPicker == GENDER)
                return {
                    ...state,
                    gender: action.pickerValue,
                }
            if (action.currentPicker == WEIGHT)
                return {
                    ...state,
                    weight: action.pickerValue,
                }
            if (action.currentPicker == HEIGHT)
                return {
                    ...state,
                    height: action.pickerValue,
                }
            if (action.currentPicker == ALCOHOL_CONSUMPTION)
                return {
                    ...state,
                    alcoholConsumption: action.pickerValue,
                }
            if (action.currentPicker == TYPE_OF_WORK)
                return {
                    ...state,
                    typeOfWork: action.pickerValue,
                }

        }
        case CANCEL_PICKER: {
            if (action.currentPicker == GENDER)
                return {
                    ...state,
                    gender: null,
                }
            if (action.currentPicker == WEIGHT)
                return {
                    ...state,
                    weight: null,
                }
            if (action.currentPicker == HEIGHT)
                return {
                    ...state,
                    height: null,
                }
            if (action.currentPicker == ALCOHOL_CONSUMPTION)
                return {
                    ...state,
                    alcoholConsumption: null,
                }
            if (action.currentPicker == TYPE_OF_WORK)
                return {
                    ...state,
                    typeOfWork: null,
                }
        }
        default: {
            return state;
        }
    }
}

export const isDatePickerVisibleActionCreator = () => {
    return {
        type: DATE_PICKER_PRESSED,
    };
}

export const hideDatePickerActionCreator = () => {
    return {
        type: HIDE_DATE_PICKER,
    };
}

export const setDateActionCreator = (date) => {
    return {
        type: SET_DATE,
        dateOfBirth: date,
    };
}

export const hideModalActionCreator = () => {
    return {
        type: HIDE_MODAL,
    };
}

export const showModalActionCreator = () => {
    return {
        type: SHOW_MODAL,
    };
}

export const setPickerValueActionCreator = (value, currentPicker) => {
    return {
        type: SET_PICKER_VALUE,
        pickerValue: value,
        currentPicker: currentPicker,
    };
}

export const cancelPickerActionCreator = (currentPicker) => {
    return {
        type: CANCEL_PICKER,
        currentPicker: currentPicker,
    };
}

export default onboardingQuestionsReducer;
