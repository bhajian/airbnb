/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import Router from "./src/navigations/Router";
import {StyleSheet, Text, View, Button, StatusBar, ActivityIndicator} from 'react-native';
import Amplify, {API, Auth } from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import awsconfig from './src/aws-exports'
import AuthenticationNavigator from "./src/navigations/AuthenticationNavigator";

Amplify.configure(awsconfig)

const Initializing = () => {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="tomato" />
      </View>
  );
};

const App = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState('initializing');

  useEffect(() => {
    checkAuthState().then().catch(e => {
      console.error(e);
    });
  }, []);



  async function checkAuthState() {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUserLoggedIn('loggedIn');
    } catch (err) {
      console.error(err);
      setUserLoggedIn('loggedOut');
    }
  }
  function updateAuthState(isUserLoggedIn) {
    setUserLoggedIn(isUserLoggedIn);
  }

  return (
      <NavigationContainer>
        {isUserLoggedIn === 'initializing' && <Initializing />}
        {isUserLoggedIn === 'loggedIn' && (
            <Router updateAuthState={updateAuthState} />
        )}
        {isUserLoggedIn === 'loggedOut' && (
            <AuthenticationNavigator updateAuthState={updateAuthState} />
        )}
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 150,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: "center",
  },
});

export default App;
