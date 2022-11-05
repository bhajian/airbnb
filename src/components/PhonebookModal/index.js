import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../Constants/Colors";
import {useNavigation} from "@react-navigation/native";
import PhoneBook from "../PhoneBook";
import Modal from "react-native-modal";
import {getAllContact} from "../PhonebookLibrary";


export default function PhonebookModal(props) {

    return (
        <Modal
            isVisible={props.visibility}
            style={styles.modal}
        >
            <View style={styles.modalTop}>
                <TouchableOpacity onPress={props.onClose} style={styles.closeButton}>
                    <Text style={styles.cancelButton}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
            <PhoneBook
                inModal={true}
                modalClose={props.onClose}
            />
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        marginLeft: 0,
        paddingTop: 40,
    },
    cancelButton:{
        margin: 15,
        fontSize: 17,
        color: Colors.light.tint,
    },
    modalTop:{
        height: 50,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: Colors.light.tint,
        position: 'absolute',
        bottom: 25,
        right: 20,
        width: 55,
        height: 55,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
