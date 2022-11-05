import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PhoneBookScreen from "../screens/PhoneBookScreen";
import Colors from "../Constants/Colors"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import ProfilePicture from "../components/ProfilePicture";
import SearchScreen from "../screens/SearchScreen";
import MessageScreen from "../screens/MessageScreen";
import HomeScreen from "../screens/HomeScreen";
import Modal from "react-native-modal";
import PhoneBook from "../components/PhoneBook";
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import PhonebookModal from "../components/PhonebookModal";


const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <Tab.Navigator
            screenOptions={{

            }}>
            <Tab.Screen
                name={'Home'}
                options={{
                    tabBarActiveTintColor: Colors.light.tint,
                    headerLeftContainerStyle:{
                        left: 10,
                    },
                    tabBarIcon: ({color}) => (
                        <Fontisto name="home" size={25} color={color} />
                    ),
                    headerTitle: () => (<FontAwesome
                        name="user-secret"
                        size={25}
                        color={Colors.light.tint}
                        style={{ marginRight: 15 }}
                    />),
                    headerRight: () => (
                        <Pressable
                            onPress={toggleModal}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                                marginRight: 10,
                            })}>
                            <FontAwesome
                                name="paper-plane"
                                size={25}
                                color={Colors.light.tint}
                                style={{ marginRight: 15 }}
                            />
                            <PhonebookModal
                                visibility={isModalVisible}
                                onClose={toggleModal}
                            />
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <ProfilePicture
                            size={30}
                            image={'https://d14u0p1qkech25.cloudfront.net/1073359577_1fc084e5-1ae2-4875-b27d-1a42fd80ff28_thumbnail_250x250'}
                        />
                    ),
                }}
            >
                {(screenProps => <HomeScreen {...screenProps} updateAuthState={props.updateAuthState} />)}
            </Tab.Screen>
            <Tab.Screen
                name={'PhoneBook'}
                component={PhoneBookScreen}
                options={{
                    tabBarActiveTintColor: Colors.light.tint,
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="book" size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Search'}
                component={SearchScreen}
                options={{
                    tabBarActiveTintColor: Colors.light.tint,
                    tabBarIcon: ({color}) => (
                        <Fontisto name="search" size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Messages'}
                component={MessageScreen}
                options={{
                    tabBarActiveTintColor: Colors.light.tint,
                    tabBarIcon: ({color}) => (
                        <Fontisto name="email" size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={'profile'}
                options={{
                    tabBarActiveTintColor: Colors.light.tint,
                    tabBarIcon: ({color}) => (
                        <Fontisto name="person" size={25} color={color} />
                    ),
                }}
            >
                {(screenProps => <ProfileScreen {...screenProps} updateAuthState={props.updateAuthState} />)}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;

const styles = StyleSheet.create({
    closeButton: {
        paddingEnd: 10,
        paddingTop: 10,
    },
});
