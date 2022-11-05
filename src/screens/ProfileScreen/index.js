import React, {useEffect, useState} from "react";
import {View, Text, ImageBackground, Pressable, TextInput, StyleSheet} from "react-native";
import {API, Auth, graphqlOperation} from "aws-amplify";
import ProfilePicture from "../../components/ProfilePicture";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import Colors from "../../Constants/Colors";
import UserAvatar from 'react-native-user-avatar';
import {getAllContact} from "../../components/PhonebookLibrary";
import {getUser} from "../../graphql/queries";


const ProfileScreen = (props) => {
    const navigation = useNavigation();
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        setCurrentUserData()
    }, []);

    async function setCurrentUserData() {
        const currentUser = await Auth.currentAuthenticatedUser();
        if(currentUser) {
            const userData = await API.graphql({
                query: getUser,
                variables: {id: currentUser.attributes.sub},
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
            if(userData && userData.data){
                setCurrentUser(userData.data.getUser)
            }

        }
    }

    async function signOut() {
        try {
            await Auth.signOut();
            props.updateAuthState('loggedOut');
        } catch (error) {
            console.log('Error signing out: ', error);
        }
    }

    const onUpgradePressed = () => {
        navigation.navigate('UpgradePremium');
    };

    const onEditPressed = () => {
        navigation.navigate('EditProfile');
    };

    return (
        <View style={styles.container} >
            <View style={styles.topContainer} >
                <UserAvatar size={100} name={(currentUser ? currentUser.name : "")} src="" />
                <Text style={styles.name} >
                    {(currentUser ? currentUser.name : "")}
                </Text>
                <Text style={styles.email} >
                    {(currentUser ? currentUser.email : "")}
                </Text>
                <Text style={styles.phone} >
                    {(currentUser ? currentUser.phone : "")}
                </Text>
                <Text style={styles.accountNumber} >
                    {(currentUser ? currentUser.accountId : "")}
                </Text>
            </View>


            <View style={styles.bottomContainer}>
                <CustomButton
                    text="Upgrade to Premium"
                    onPress={onUpgradePressed}
                    bgColor="#E3E8F1"
                    fgColor="#5B67CA"
                />
                <CustomButton
                    text="Edit Profile"
                    onPress={onEditPressed}
                    bgColor="#E3E8F1"
                    fgColor="#000000"
                />
                <CustomButton
                    text="Change to Business Account"
                    onPress={onUpgradePressed}
                    bgColor="#E3E8F1"
                    fgColor="#000000"
                />
                <CustomButton
                    text="Sign Out"
                    onPress={signOut}
                    bgColor="#E3E8F1"
                    fgColor="#FB1F1F"
                />
            </View>
        </View>
    )
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: '100%',
        alignItems: "stretch",
    },
    topContainer: {
        marginTop: 30,
        height: 200,
        alignItems: "center",
        margin: 30,
    },
    bottomContainer: {
        margin: 30,
    },
    name:{
        marginTop: 15,
        margin: 5,
    },
    email:{
        margin: 5,
        color: "grey",
    },
    phone:{
        margin: 5,
        color: "grey",
    },
    accountNumber:{
        margin: 5,
        color: Colors.light.tint,
    },
});
