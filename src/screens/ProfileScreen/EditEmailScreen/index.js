import React from "react";
import {View, Text, ImageBackground, Pressable, TextInput, StyleSheet} from "react-native";
import {Auth} from "aws-amplify";
import ProfilePicture from "../../../components/ProfilePicture";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CustomButton from "../../../components/CustomButton";

const EditEmailScreen = (props) => {

    async function signOut() {
        try {
            await Auth.signOut();
            props.updateAuthState('loggedOut');
        } catch (error) {
            console.log('Error signing out: ', error);
        }
    }

    return (
        <View style={styles.container} >
            <View style={styles.topContainer} >

            </View>



            <View style={styles.settingsContainer}>
                <View style={styles.settingItem}>
                    <View style={styles.settingNameContainer}>
                        <FontAwesome5 name="envelope" style={styles.settingIcon}/>
                        <Text style={styles.settingName}>Email</Text>
                    </View>
                    <View style={styles.settingValueContainer}>
                        <TextInput style={styles.settingEmailValue} editable={false} selectTextOnFocus={false}>
                            be_foe@gmail.com
                        </TextInput>
                    </View>
                </View>
            </View>

            <View style={styles.settingsContainer}>
                <CustomButton
                    text="Save & Next Step"
                    bgColor="#E3E8F1"
                    fgColor="#000000"
                />
            </View>


        </View>
    )
};

export default EditEmailScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: '100%',
    },
    topContainer: {
        marginTop: 30,
        height: 200,
        alignItems: "center",
    },
    profilePicture: {

    },
    settingsContainer:{
        margin: 10,
        marginTop: 5,
    },
    settingItem:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        justifyContent: "space-between",
    },
    settingNameContainer:{
        flexDirection: "row",
        marginLeft: 10,
        paddingBottom: 3,
    },
    settingValueContainer:{
        marginRight: 10,
    },
    settingName: {
        color: "grey",
        marginLeft: 5,
    },
    settingIcon: {
        color: "grey",
    },
    settingValue: {

    },
    settingBioValue: {
        textAlignVertical: 'top',
    },
    settingPhoneValue: {
        color: "grey",
    },
    settingEmailValue: {
        color: "grey",
    },
    pressableSetting: {
        flexDirection: "row",

    },
});

