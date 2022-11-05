import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from "@react-navigation/native";
import styles from "./styles";
import {createUser} from '../../graphql/mutations'

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation = useNavigation();

    async function onRegisterPressed() {
        try {
            var lowerEmail = email.toLowerCase();
            const { user, userSub } = await Auth.signUp({
                username: phone,
                password,
                attributes: {
                    email: lowerEmail,
                    phone_number: phone,
                }});

            console.log('✅ Sign-up Confirmed');
            navigation.navigate('ConfirmSignUp', {usernameParam: phone});
        } catch (error) {
            console.log('❌ Error signing up...', error);
        }
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const onConfirmCodePress = () => {
        navigation.navigate('ConfirmSignUp');
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                    iconCategory="Fontisto"
                    iconName="email"
                />
                <CustomInput
                    placeholder="Phone"
                    value={phone}
                    setValue={setPhone}
                    iconCategory="Fontisto"
                    iconName="phone"
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                    iconCategory="FontAwesome5"
                    iconName="key"
                />
                <CustomInput
                    placeholder="Repeat Password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry
                    iconCategory="FontAwesome5"
                    iconName="key"
                />

                <CustomButton
                    text="Register"
                    style={styles.registerButton}
                    onPress={onRegisterPressed}
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>
                        Terms of Use
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>
                        Privacy Policy
                    </Text>
                </Text>

                {/*<SocialSignInButtons />*/}

                <CustomButton
                    text="Have an account? Sign in"
                    onPress={onSignInPress}
                    type="TERTIARY"
                />
                <CustomButton
                    text="Confirm your account"
                    onPress={onConfirmCodePress}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};



export default SignUpScreen;
