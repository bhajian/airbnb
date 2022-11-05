import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, Dimensions} from 'react-native';
import ProfilePicture from "../../components/ProfilePicture";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Message = ({message}) => {

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.rowLeftContainer}>
                    <View>
                        <ProfilePicture
                            image={'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1018280982%2F0x0.jpg'}
                            size={60}
                        />
                    </View>
                    <View>
                        <Text style={styles.name}>ABDF-46576 (Anonymous)</Text>
                        <Text style={styles.shortMessage}>some message e that was sent..</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name="chevron-right" style={styles.settingIcon}/>
                </View>
            </View>
        </View>
    );
};

export default Message;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    rowLeftContainer: {
        flexDirection: 'row',
    },
    name:{
        marginLeft: 8,
        fontWeight: 'bold',
    },
    shortMessage:{
        marginLeft: 8,
        color: '#8d8d8d',
    },
});
