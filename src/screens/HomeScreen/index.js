import React from "react";
import {View, Text, ImageBackground, Pressable, StyleSheet} from "react-native";
import TipOff from "../../components/TipOff";
import tipoffs from "../../../assets/data/tipoffs";
import styles from "./styles";
import Feed from "../../components/Feed";
import NewTipoffButton from "../../components/NewTipoffButton";
import Colors from "../../Constants/Colors";

const HomeScreen = (props) => {

    return (
        <View style={styles.container}>
            <Feed />
            <NewTipoffButton />
        </View>
    )
};

export default HomeScreen;
