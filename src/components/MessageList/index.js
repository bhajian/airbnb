import React from "react";
import {FlatList, StyleSheet} from "react-native";
import tipoffs from "../../../assets/data/tipoffs";
import Message from "../Message";

export default function MessageList() {
    return (
        <FlatList
            data={tipoffs}
            renderItem={({item}) => <Message message={item} />}
            keyExtractor={(item) => item.id}
        />
    );
}

const styles = StyleSheet.create({
    container: {

    }
});



