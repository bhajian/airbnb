import React from 'react';
import {View, Text, StyleSheet, Pressable, TextInput, Switch} from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Colors from "../../Constants/Colors";

const CustomSwitch = ({ toggleSwitch,
                              name,
                              isEnabled,
                              bgColor,
                              fgColor,
                              iconCategory,
                              iconName,
                              style,}) => {
    const renderIcon = (iconCategory, iconName) => {
        if (iconCategory === "Fontisto") {
            return <Fontisto name={iconName} style={styles.settingIcon} />
        }
        if (iconCategory === "FontAwesome5") {
            return <FontAwesome5 name={iconName} style={styles.settingIcon} />
        }
        if (iconCategory === "FontAwesome") {
            return <FontAwesome name={iconName} style={styles.settingIcon} />
        }
    }

    return (
        <View style={styles.settingItem}>
            {renderIcon(iconCategory, iconName)}
            <Text style={styles.settingText}>{name}: </Text>
            <Switch
                trackColor={{ false: "#767577", true: Colors.light.tint }}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.privateSwitch}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    settingItem:{
        flexDirection: "row",
        paddingBottom: 5,
        paddingEnd: 20,
        paddingStart: 5,
    },
    settingText:{
        fontSize: 15,
        marginVertical: 10,
    },
    privateSwitch:{
        transform: [{ scaleX: .7 }, { scaleY: .7 }],
        marginTop: 5,
    },
    settingIcon: {
        padding: 5,
        color: '#b8b8b8',
        fontSize: 20,
    },
});

export default CustomSwitch;
