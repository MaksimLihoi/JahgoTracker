import React from "react";
import OnboardingQuestions from "./OnboardingQuestions";
import {
    isDatePickerVisibleActionCreator,
    hideDatePickerActionCreator,
    setDateActionCreator,
    showModalActionCreator,
    hideModalActionCreator,
    setPickerValueActionCreator,
    cancelPickerActionCreator,
} from "../../Redux/onboardingQuestionsReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isDatePickerVisible: state.onboardingQuestions.isDatePickerVisible,
        dateOfBirth: state.onboardingQuestions.dateOfBirth,
        isModalVisible: state.onboardingQuestions.isModalPickerVisible,
        genderItems: state.onboardingQuestions.genderItems,
        gender: state.onboardingQuestions.gender,
        weight: state.onboardingQuestions.weight,
        weightItems: state.onboardingQuestions.weightItems,
        height: state.onboardingQuestions.height,
        heightItems: state.onboardingQuestions.heightItems,
        typeOfWork: state.onboardingQuestions.typeOfWork,
        typeOfWorkItems: state.onboardingQuestions.typeOfWorkItems,
        alcoholConsumption: state.onboardingQuestions.alcoholConsumption,
        alcoholConsumptionItems: state.onboardingQuestions.alcoholConsumptionItems,
    };
};

const OnboardingQuestionsContainer = connect(mapStateToProps, {
    showDatePicker: isDatePickerVisibleActionCreator,
    hideDatePicker: hideDatePickerActionCreator,
    setDate: setDateActionCreator,
    showModalPicker: showModalActionCreator,
    hideModalPicker: hideModalActionCreator,
    setPickerValue: setPickerValueActionCreator,
    cancelPicker: cancelPickerActionCreator,
})(OnboardingQuestions);

export default OnboardingQuestionsContainer;
