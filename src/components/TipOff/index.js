import React from "react";
import {Image, StyleSheet, View} from "react-native";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

export default function TipOff({tipoff}) {
    return (
        <View style={styles.container}>
            <LeftContainer
                user={tipoff.to}
            />
            <MainContainer
                tipoff={tipoff}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        borderBottomWidth: 0.5,
        borderColor: 'grey'
    }
});
