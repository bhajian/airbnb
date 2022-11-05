import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FirstScreen from '../screens/FirstScreen'

const Stack = createStackNavigator();

const SignInNavigator = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FirstScreen"
                component={FirstScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={'SignIn'}
                component={SignInScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    );
};

export default SignInNavigator;
