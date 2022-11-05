import React from 'react';
import type {Node} from 'react';
import {
    TextInput,
    View,
} from 'react-native';

import styles from './styles';
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const CustomInput = ({value, setValue, placeholder, secureTextEntry, style, iconCategory, iconName}) => {

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
        <View style={[style, styles.container]}>
            {renderIcon(iconCategory, iconName)}

            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

export default CustomInput;
