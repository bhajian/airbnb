import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, Dimensions} from 'react-native';
import ProfilePicture from "../../components/ProfilePicture";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import UserAvatar from 'react-native-user-avatar';


const PhoneBookItem = ({onPress, item, bgColor, fgColor, style}) => {


    return (
        <View style={styles.row}>
            <Pressable style={styles.pressableSetting} onPress={onPress}>
                <View style={styles.rowLeftContainer}>
                    <UserAvatar size={30} name={item.name} src={item.image} />
                    <Text style={styles.contactName}>{item.name}</Text>
                </View>
                <View style={styles.rowRightContainer}>
                    <FontAwesome name="chevron-right" style={styles.settingIcon}/>
                </View>
            </Pressable>
        </View>
    );
};

export default PhoneBookItem;

const styles = StyleSheet.create({

    row: {

    },
    pressableSetting:{
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    rowLeftContainer: {
        flexDirection: "row",
    },
    rowRightContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 10,
    },
    contactName: {
        fontSize: 15,
        marginTop: 5,
        marginLeft: 10,
    },
});
