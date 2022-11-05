import React from "react";
import {View, Text, ImageBackground, Pressable, StyleSheet} from "react-native";
import MessageList from "../../components/MessageList";

const MessageScreen = (props) => {

    return (
        <View style={styles.container}>
            <MessageList />
        </View>
    )
};

export default MessageScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: '100%'
    },
});
