import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from "@react-navigation/native";
import styles from "../SignUpScreen/styles";

export default function ConfirmSignUp({ navigation, route }) {
    const {usernameParam} = route.params;
    const [authCode, setAuthCode] = useState('');
    const [username, setUsername] = useState(usernameParam);


    async function resendConfirmationCode() {
        try {
            await Auth.resendSignUp(username);
            console.log('code resent successfully');
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }

    const onBackToSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    async function confirmSignUp() {
        try {
            await Auth.confirmSignUp(username, authCode);
            console.log('✅ Code confirmed');
            navigation.navigate('EditProfile');
        } catch (error) {
            console.log(
                '❌ Verification code does not match. Please enter a valid verification code.',
                error.code
            );
        }
    }
    return (
        <SafeAreaView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm verification code.</Text>

                <CustomInput
                    placeholder="Email"
                    value={username}
                    setValue={setUsername}
                    iconCategory="Fontisto"
                    iconName="email"
                />
                <CustomInput
                    placeholder="Code"
                    value={authCode}
                    setValue={setAuthCode}
                    iconCategory="Fontisto"
                    iconName="email"
                />

                <CustomButton
                    text="Confirm Code"
                    onPress={confirmSignUp}
                />

                <CustomButton
                    text="Register a new account"
                    onPress={onBackToSignUpPress}
                    type="TERTIARY"
                />

                <CustomButton
                    text="Resend Confirmation Code"
                    onPress={resendConfirmationCode}
                />

            </View>
        </SafeAreaView>
    );
}
