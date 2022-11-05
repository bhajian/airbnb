import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import Footer from "./Footer";

export default function MainContainer({tipoff}) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.tipoffHeaderContainer}>
                <Text style={styles.toName} >To: {tipoff.to.name}</Text>
                <Text style={styles.sentAt}>{tipoff.sentAt}</Text>
            </View>
            <View style={styles.tipoffHeaderContainer}>
                <Text style={styles.fromName}>From: {tipoff.from.name}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text>{tipoff.content}</Text>
                {!!tipoff.image && <Image source={{uri: tipoff.image}} style={styles.image} />}
            </View>
            <Footer tweet={tipoff} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    },
    tipoffHeaderContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    toName: {
        marginHorizontal: 5,
        fontWeight: 'bold'
    },
    fromName: {
        marginHorizontal: 5,
        color: 'grey'
    },
    sentAt: {
        marginHorizontal: 5,
    },
    contentContainer: {
        marginTop: 5,
        marginLeft: 5,
    },
    image: {
        marginVertical: 10,
        width: "100%",
        height: 200,
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: 'hidden',
    }
});
