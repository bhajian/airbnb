import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor, iconCategory, iconName, style}) => {
    const renderIcon = (iconCategory, iconName) => {
        if (iconCategory === "Fontisto") {
            return <Fontisto style={styles.icon} name={iconName} />
        }
        if (iconCategory === "FontAwesome5") {
            return <FontAwesome5 style={styles.icon} name={iconName} />
        }
        if (iconCategory === "FontAwesome") {
            return <FontAwesome style={styles.icon} name={iconName} />
        }
    }

    return (
        <Pressable
            onPress={onPress}
            style={[
                style,
                styles.container,
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {},
            ]}>
            {renderIcon(iconCategory, iconName)}
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {},
                ]}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: "center",
    },
    icon: {
        padding: 0,
        color: '#ffffff',
        fontSize: 18,
        paddingRight: 10,
    },
    container_PRIMARY: {
        backgroundColor: '#5B67CA',
    },

    container_SECONDARY: {
        borderColor: '#5B67CA',
        borderWidth: 2,
    },

    container_TERTIARY: {},

    text: {
        fontWeight: 'bold',
        color: 'white',

    },

    text_SECONDARY: {
        color: '#3B71F3',
    },

    text_TERTIARY: {
        color: 'gray',
    },
});

export default CustomButton;
