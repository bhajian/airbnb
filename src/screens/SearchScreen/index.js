import React, {useState} from "react";
import {View, Text, ImageBackground, Pressable, StyleSheet} from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feed from "../../components/Feed";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SearchScreen = (props) => {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <CustomInput
                    style={styles.searchInput}
                    iconCategory="Fontisto"
                    iconName="search"
                    value={searchText}
                    setValue={setSearchText}
                />
                <CustomButton
                    text=""
                    style={styles.searchButton}
                    iconCategory="FontAwesome5"
                    iconName="search"
                />
            </View>
            <View style={styles.contentContainer}>
                <Feed />
            </View>

        </View>
    )
};

export default SearchScreen;
