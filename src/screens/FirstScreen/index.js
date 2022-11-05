import React, {useState} from 'react';
import {
    View,
    Image,
    ScrollView, Text,
} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Logo from '../../../assets/images/gossip.jpeg';
import styles from './styles';
import CustomButton from "../../components/CustomButton";

const FirstScreen: () => Node = () => {

    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    };


    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "#ffffff"}}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo]}
                    resizeMode="contain"
                />
                <Text style={styles.textLogo}> Go Tipoff </Text>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        By registering, you confirm that you accept our{' '}Terms of Use
                    </Text>
                    <CustomButton text="Sign In" onPress={onSignInPressed} />
                    <CustomButton
                        text="Sign Up"
                        onPress={onSignInPressed}
                        bgColor="#E3E8F1"
                        fgColor="#5B67CA"
                    />
                </View>
            </View>

        </ScrollView>
    );
};

export default FirstScreen;
