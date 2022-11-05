import React from "react";
import {FlatList, StyleSheet} from "react-native";
import TipOff from "../../components/TipOff";
import tipoffs from "../../../assets/data/tipoffs";

export default function Feed() {
    return (
        <FlatList
            data={tipoffs}
            renderItem={({item}) => <TipOff tipoff={item} />}
            keyExtractor={(item) => item.id}
        />
    );
}

const styles = StyleSheet.create({
    container: {

    }
});



