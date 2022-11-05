import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import {StyleSheet, View} from "react-native";
import React, {useEffect, useState} from 'react';

const SearchBar = (props) => {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.searchBarContainer}>
            <CustomInput
                style={styles.searchInput}
                iconCategory="Fontisto"
                iconName="search"
                value={searchText}
                setValue={setSearchText}
            />
            {/*<CustomButton*/}
            {/*    text=""*/}
            {/*    style={styles.searchButton}*/}
            {/*    iconCategory="FontAwesome5"*/}
            {/*    iconName="search"*/}
            {/*/>*/}
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: "row",
        height: 55,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: 'white',
    },
    searchInput: {
        marginVertical: 10,
        marginHorizontal: 7,
        maxWidth: '95%'
    },
    searchButton: {
        marginTop: 5,
        marginLeft: 5,
        paddingHorizontal: 15,
        maxWidth: '12%',
    },
});
