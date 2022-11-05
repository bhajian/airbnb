import React from "react";
import {Image, StyleSheet, View} from "react-native";
import ProfilePicture from "../../ProfilePicture";

export default function LeftContainer({user}) {
    return (
        <View>
            <ProfilePicture image={user.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        // width: '100%',
        // padding: 15,
    }
});
