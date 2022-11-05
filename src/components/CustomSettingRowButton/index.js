import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CustomSettingRowButton = ({onPress, name, value, bgColor, fgColor, iconCategory, iconName, style}) => {
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
                    <Text style={styles.settingName}>{name}</Text>
                </View>
                <View style={styles.settingValueContainer}>
                    <Pressable style={styles.pressableSetting} onPress={onPress}>
                        <Text style={styles.settingValue} >
                            {value}
                        </Text>
                        <FontAwesome name="chevron-right" style={styles.settingIcon}/>
                    </Pressable>
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
        color: "grey",
        paddingRight: 10,
    },
    pressableSetting: {
        flexDirection: "row",
    },
});

export default CustomSettingRowButton;
