import React, { useState } from 'react';
import {
    View,
    Image,
    useWindowDimensions,
    ScrollView,
} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Logo from '../../../assets/images/logo.jpeg';
import styles from './styles';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { Auth } from 'aws-amplify';

function SignInScreen (props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    async function onSignInPressed() {
        try {
            await Auth.signIn(username, password);
            props.updateAuthState('loggedIn');
        } catch (error) {
            console.log('❌ Error signing in...', error);
        }
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, {height : height * 0.3}]}
                    resizeMode="contain"
                />
                <CustomInput
                    style={styles.username}
                    placeholder="Username"
                    iconCategory="Fontisto"
                    iconName="email"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    iconCategory="FontAwesome5"
                    iconName="key"
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomButton text="Sign In" onPress={onSignInPressed} />
                <CustomButton
                    text="Forgot password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <SocialSignInButtons />

                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPress}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};

export default SignInScreen;
