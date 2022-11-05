import React, {useEffect, useState} from "react";
import {View, Text, ImageBackground, Pressable, TextInput, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import {API, Auth} from "aws-amplify";
import {useNavigation} from "@react-navigation/native";
import CustomSettingRowButton from "../../../components/CustomSettingRowButton";
import CustomButton from "../../../components/CustomButton";
import Colors from "../../../Constants/Colors";
import CustomSettingRow from "../../../components/CustomSettingRow";
import {getContact, getUser} from "../../../graphql/queries";
import {createContact, createUser, updateContact, updateUser} from "../../../graphql/mutations";
import {getAllContact} from "../../../components/PhonebookLibrary";
import uuid from 'react-native-uuid';
import UserAvatar from 'react-native-user-avatar';


const EditProfileScreen = (props) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [accountId, setAccountId] = useState("");
    const [bio, setBio] = useState("");
    const [image, setImage] = useState("");

    const navigation = useNavigation();
    useEffect(() => {
        createUserProfileIfNotExists().then(user => {
            setId(user.id);
            setName(user.name);
            setPhone(user.phone)
            setEmail(user.email)
            setAccountId(user.accountId)
            setBio(user.bio)
            setImage(user.image)
            getAllContact().then(contacts => {
                saveContacts(contacts, user.id);
            }).catch(e => {
                console.error(e);
            });
        }).catch(e => {
            console.error(e);
        });
    }, []);

    const saveContacts = async (contacts, userId) => {
        try{
            let contactsToSave = [];
            for(const i in contacts){
                const contact = contacts[i];
                const contactName = contact.givenName + ' ' + contact.familyName;
                const newContact = {
                    id: uuid.v4(),
                    name: contactName,
                    email: ((contact.emailAddresses[0] && contact.emailAddresses[0].email)
                        ? contact.emailAddresses[0].email : ' '),
                    phone: ((contact.phoneNumbers[0] && contact.phoneNumbers[0].number)
                        ? contact.phoneNumbers[0].number : ' ')
                }
                // console.log(newContact);
                contactsToSave.push(newContact);
            }
            const user = {
                id: userId,
                contacts: contactsToSave,
            }
            console.log(user)

            await API.graphql({
                query: updateUser,
                variables: {input: user},
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
        } catch (e){
            console.error(e);
        }
    }

    const createUserProfileIfNotExists = async () => {
        const currentUser = await Auth.currentAuthenticatedUser();
        if(currentUser) {
            const userData = await API.graphql({
              query: getUser,
              variables: {id: currentUser.attributes.sub},
              authMode: 'AMAZON_COGNITO_USER_POOLS'
            });

            if (!userData || !userData.data || !userData.data.getUser) {
              try{
                  const newUser = {
                      id: currentUser.attributes.sub,
                      name: ' ',
                      email: currentUser.attributes.email,
                      phone: currentUser.attributes.phone_number,
                      accountId: 'ABCD-12345',
                  }
                  const createdUser = await API.graphql({
                      query: createUser,
                      variables: {input: newUser},
                      authMode: 'AMAZON_COGNITO_USER_POOLS'
                  });
                  return createdUser;
              } catch (e){
                console.error(e);
              }

            } else {
                return userData.data.getUser;
            }
        }
    }



    const onSavePressed = async () => {
        try{
            const user = {
                id: id,
                name: name,
                bio: bio,
            }

            await API.graphql({
                query: updateUser,
                variables: {input: user},
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
            navigation.goBack();
        } catch (e){
            console.error(e);
        }
    };

    const onEditEmailPressed = () => {
        navigation.navigate('EditEmail');
    };

    return (
        <ScrollView style={styles.container} >
            <View style={styles.topContainer} >
                <UserAvatar size={100} name={name} src={image} />

            </View>

            <View style={styles.settingsContainer}>

                <CustomSettingRow
                    name="Account ID"
                    value={accountId}
                    iconCategory="FontAwesome5"
                    iconName="id-card"
                    editable={false}
                />

                <CustomSettingRow
                    name="Name"
                    value={name}
                    setValue={setName}
                    iconCategory="Fontisto"
                    iconName="person"
                    editable={true}
                />

                <CustomSettingRowButton
                    onPress={onEditEmailPressed}
                    name="Phone"
                    value={phone}
                    iconCategory="FontAwesome5"
                    iconName="phone"
                />

                <CustomSettingRowButton
                    onPress={onEditEmailPressed}
                    name="Email"
                    value={email}
                    iconCategory="FontAwesome5"
                    iconName="envelope"
                />

                <CustomSettingRowButton
                    onPress={onEditEmailPressed}
                    name="Setting"
                    value=""
                    iconCategory="FontAwesome5"
                    iconName="cog"
                />

                <CustomSettingRowButton
                    onPress={onEditEmailPressed}
                    name="Help"
                    value=""
                    iconCategory="FontAwesome5"
                    iconName="question-circle"
                />

                <CustomSettingRowButton
                    onPress={onEditEmailPressed}
                    name="Language"
                    value="English"
                    iconCategory="FontAwesome5"
                    iconName="globe"
                />

                <CustomSettingRow
                    name="Bio"
                    value={bio}
                    setValue={setBio}
                    iconCategory="FontAwesome"
                    iconName="book"
                    editable={true}
                    multiline={true}
                />
            </View>

            <View style={styles.bottomContainer}>
                <CustomButton
                    onPress={onSavePressed}
                    text="Save"
                    bgColor={Colors.light.tint}
                    fgColor="#FFFFFF"
                />
            </View>

        </ScrollView>
    )
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: '100%',
    },
    topContainer: {
        marginTop: 30,
        height: 200,
        alignItems: "center",
    },
    bottomContainer:{
        paddingTop: 20,
        margin: 20,
    },
    settingsContainer:{
        margin: 10,
        marginTop: 5,
    },
    settingItem:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        justifyContent: "space-between",
        paddingBottom: 5,
    },
    settingNameContainer:{
        flexDirection: "row",
        marginLeft: 10,

    },
    settingValueContainer:{
        marginRight: 10,
    },
    settingName: {
        color: "grey",
        marginLeft: 5,
    },
    settingIcon: {
        color: "grey",
    },
    settingValue: {

    },
    settingBioValue: {
        textAlignVertical: 'top',
    },
    settingPhoneValue: {
        color: "grey",
        paddingRight: 10,
    },
    settingEmailValue: {
        color: "grey",
    },
    pressableSetting: {
        flexDirection: "row",
    },
});

