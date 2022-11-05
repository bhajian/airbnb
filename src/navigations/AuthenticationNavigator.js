import React, { useState, useEffect } from 'react';
import SignIn from '../screens/SignInScreen';
import SignUp from '../screens/SignUpScreen';
import ConfirmSignUp from '../screens/ConfirmSignUp';
import {createStackNavigator} from "@react-navigation/stack";

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = props => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="SignIn">
                {screenProps => (
                    <SignIn {...screenProps} updateAuthState={props.updateAuthState} />
                )}
            </AuthenticationStack.Screen>
            <AuthenticationStack.Screen name="SignUp" component={SignUp} />
            <AuthenticationStack.Screen
                name="ConfirmSignUp"
                component={ConfirmSignUp}
            />
        </AuthenticationStack.Navigator>
    );
};

export default AuthenticationNavigator;
