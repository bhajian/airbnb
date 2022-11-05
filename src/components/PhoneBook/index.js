import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import PhoneBookItem from "../../components/PhoneBookItem";
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {API, Auth} from "aws-amplify";
import {getUser} from "../../graphql/queries";
import SearchBar from "../../components/SearchBar";


const PhoneBook = ({inModal, modalClose}) => {
    const [data, setData] = useState([]);

    const navigation = useNavigation();
    useEffect(() => {
        loadContacts().then(data => {
            setData(data)
        })
    }, []);

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
        <View style={styles.container}>
            <SearchBar />
            <FlatList
                data={data}
                renderItem={({item})=><PhoneBookItem
                    item={item}
                    onPress={() =>{
                        if(inModal){
                            modalClose()
                        }
                        navigation.navigate('NewTipoff', {contact: item});
                    }}
                />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: '#ffffff',
    },
});

export default PhoneBook;
