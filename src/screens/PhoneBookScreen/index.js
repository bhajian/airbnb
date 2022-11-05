import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import PhoneBookItem from "../../components/PhoneBookItem";
import {FlatList, StyleSheet, View} from "react-native";
import {API, Auth} from "aws-amplify";
import {getUser} from "../../graphql/queries";
import SearchBar from "../../components/SearchBar";
import PhoneBook from "../../components/PhoneBook";

const PhoneBookScreen = (props) => {
    const [data, setData] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        loadContacts().then(data => {
            setData(data)
        })
    }, []);

    const onContactPressed = async() => {
        navigation.navigate('NewTipoff');
    };

    const loadContacts = async() => {
        const currentUser = await Auth.currentAuthenticatedUser();
        if(currentUser) {
            const userData = await API.graphql({
                query: getUser,
                variables: {id: currentUser.attributes.sub},
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
            return userData.data.getUser.contacts;
        }
    };

    return (
        <PhoneBook/>
    );
};

export default PhoneBookScreen;
