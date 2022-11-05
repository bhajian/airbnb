import React from 'react';
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CustomSettingRow = ({ onPress,
                              name,
                              value,
                              setValue,
                              bgColor,
                              fgColor,
                              iconCategory,
                              iconName,
                              editable = true,
                              style,
                              multiline = false}) => {
    const renderIcon = (iconCategory, iconName) => {
        if (iconCategory === "Fontisto") {
            return <Fontisto style={styles.icon} name={iconName} style={styles.settingIcon} />
        }
        if (iconCategory === "FontAwesome5") {
            return <FontAwesome5 style={styles.icon} name={iconName} style={styles.settingIcon} />
        }
        if (iconCategory === "FontAwesome") {
            return <FontAwesome style={styles.icon} name={iconName} style={styles.settingIcon} />
        }
    }

    return (
        <View style={styles.settingsContainer}>
            <View style={styles.settingItem}>
                <View style={styles.settingNameContainer}>
                    {renderIcon(iconCategory, iconName)}
                    <Text style={styles.settingName}>
                        {name}
                    </Text>
                </View>
                <View style={styles.settingValueContainer}>
                    <TextInput
                        multiline={multiline}
                        style={styles[editable ? 'settingValue' : 'settingValueDisabled']}
                        editable={editable}
                        selectTextOnFocus={editable}
                        onChangeText={setValue}
                    >
                        {value}
                    </TextInput>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    settingsContainer:{
        margin: 10,
        marginTop: 5,
    },
    settingItem:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        justifyContent: "space-between",
        paddingBottom: 5,
    },
    settingNameContainer:{
        flexDirection: "row",
        marginLeft: 10,
        paddingBottom: 5,
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
        paddingRight: 10,
    },
    settingValueDisabled: {
        color: "grey",
        paddingRight: 10,
    },
    pressableSetting: {
        flexDirection: "row",
    },
});

export default CustomSettingRow;
