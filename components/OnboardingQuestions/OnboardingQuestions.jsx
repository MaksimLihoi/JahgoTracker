import React, {Component} from "react";
import {View, Text, Modal, TouchableOpacity, Button} from "react-native";
import styles from "./styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {Button as ButtonGalio} from "galio-framework";
import {Picker} from '@react-native-community/picker';

const TYPE_OF_WORK = "TYPE-OF-WORK";
const ALCOHOL_CONSUMPTION = "ALCOHOL-CONSUMPTION";
const WEIGHT = "WEIGHT";
const HEIGHT = "HEIGHT";
const GENDER = "GENDER";

class OnboardingQuestions extends Component {
    constructor() {
        super();

        this.pickerItems = [];
        this.changedGender = "Gender";
        this.changedWeight = "Weight";
        this.changedHeight = "Height";
        this.changedTypeOfWork = "Type of work";
        this.changedAlcoholConsumption = "Alcohol consumption";
        this.currentPicker = "";
        this.pickerValue = null;
        this.date = new Date();
    }

    handleConfirm = (date) => {
        this.props.hideDatePicker();
        this.date = date;
        this.props.setDate(date);
    };

    modalCancelOnPress = () => {
        this.pickerValue = null;
        this.props.cancelPicker(this.currentPicker);
        this.props.hideModalPicker();
    };

    showModalOnPress = (field) => {
        if (field == GENDER) {
            this.pickerItems = this.props.genderItems;
            this.currentPicker = GENDER;
        }
        if (field == WEIGHT) {
            this.pickerItems = this.props.weightItems;
            this.currentPicker = WEIGHT;
        }
        if (field == HEIGHT) {
            this.pickerItems = this.props.heightItems;
            this.currentPicker = HEIGHT;
        }
        if (field == ALCOHOL_CONSUMPTION) {
            this.pickerItems = this.props.alcoholConsumptionItems;
            this.currentPicker = ALCOHOL_CONSUMPTION;
        }
        if (field == TYPE_OF_WORK) {
            this.pickerItems = this.props.typeOfWorkItems;
            this.currentPicker = TYPE_OF_WORK;
        }

        this.props.showModalPicker();
    };

    pickerConfirmOnPress = (field) => {
        if (field == GENDER) {
            this.changedGender = this.props.gender;
        }
        if (field == WEIGHT) {
            this.changedWeight = this.props.weight;
        }
        if (field == HEIGHT) {
            this.changedHeight = this.props.height;
        }
        if (field == ALCOHOL_CONSUMPTION) {
            this.changedAlcoholConsumption = this.props.alcoholConsumption;
        }
        if (field == TYPE_OF_WORK) {
            this.changedTypeOfWork = this.props.typeOfWork;
        }

        this.props.hideModalPicker();
    };

    onPickerValueChange = (value) => {
        this.pickerValue = value;
        this.props.setPickerValue(value, this.currentPicker);
    }

    render() {
        //TODO: Make maximumDate for people u18
        return (
            <View style={styles.component}>
                <Text style={styles.aboutYouText}>About you</Text>
                <View style={styles.dateOfBirth}>
                    <TouchableOpacity onPress={this.props.showDatePicker}>
                        <Text style={styles.dateInput}>
                            {this.props.dateOfBirth ? this.props.dateOfBirth.getDate() : "DD"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.showDatePicker}>
                        <Text style={styles.dateInput}>
                            {this.props.dateOfBirth ? this.props.dateOfBirth.getMonth() + 1 : "MM"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.showDatePicker}>
                        <Text style={styles.dateInput}>
                            {this.props.dateOfBirth ? this.props.dateOfBirth.getFullYear() : "YYYY"}
                        </Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={this.props.isDatePickerVisible}
                        mode="date"
                        date={this.date}
                        onConfirm={this.handleConfirm}
                        onCancel={this.props.hideDatePicker}/>
                </View>
                <View>
                    <Modal animated transparent visible={this.props.isModalVisible} animationType={"fade"}>
                        <View style={styles.modalContainer}>
                            <View style={styles.pickerContainer}>
                                <View style={styles.modalHeader}>
                                    <Button onPress={this.modalCancelOnPress} title={"Cancel"}/>
                                    <Text>Title</Text>
                                    <Button onPress={() => this.pickerConfirmOnPress(this.currentPicker)}
                                            title={"Confirm"}/>
                                </View>
                                <Picker
                                    selectedValue={this.pickerValue}
                                    style={{width: "100%", height: 50}}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.onPickerValueChange(itemValue)}>
                                    {this.pickerItems.map((item) =>
                                        (<Picker.Item label={item} value={item}/>))}
                                </Picker>
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity onPress={() => this.showModalOnPress(GENDER)}>
                        <Text style={styles.picker}>{this.changedGender}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.showModalOnPress(WEIGHT)}>
                        <Text style={styles.picker}>{this.changedWeight}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.showModalOnPress(HEIGHT)}>
                        <Text style={styles.picker}>{this.changedHeight}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.showModalOnPress(TYPE_OF_WORK)}>
                        <Text style={styles.picker}>{this.changedTypeOfWork}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.showModalOnPress(ALCOHOL_CONSUMPTION)}>
                        <Text style={styles.picker}>{this.changedAlcoholConsumption}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <ButtonGalio style={styles.activeButton}>
                        <Text style={styles.activeButtonText} color={"05634b"}>Confirm</Text>
                    </ButtonGalio>
                </View>
            </View>
        );
    }
}

export default OnboardingQuestions;
