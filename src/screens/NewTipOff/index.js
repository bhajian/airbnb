import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    Platform,
    Image, View, Text,
    Switch,
} from 'react-native';
import { API, graphqlOperation, Auth, Storage } from 'aws-amplify';
import UserAvatar from 'react-native-user-avatar'
import { useNavigation } from '@react-navigation/native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { v4 as uuidv4 } from 'uuid';
// import { Text, View } from '../../components/Themed';
import Colors from "../../Constants/Colors";
import ProfilePicture from "../../components/ProfilePicture";
import {createMessage, createUser} from '../../graphql/mutations'
import AntDesign from "react-native-vector-icons/AntDesign";
import CustomSwitch from "../../components/CustomSwitch";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {getUser} from "../../graphql/queries";

export default function NewTipoffScreen({navigation, route}) {
    let contact = route.params.contact;

    const [senderId, setSenderId] = useState("");
    const [receiverId, setReceiverId] = useState(contact.id);
    const [isPrivate, setIsPrivate] = useState(false);
    const togglePrivateSwitch = () => setIsPrivate(previousState => !previousState);
    const [isAnonymous, setIsAnonymous] = useState(false);
    const toggleAnonymousSwitch = () => setIsAnonymous(previousState => !previousState);
    const [tipoff, setTipoff] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    // const navigation = useNavigation();

    async function getCurrentUserId() {
        const currentUser = await Auth.currentAuthenticatedUser();
        if(currentUser) {
            setSenderId(currentUser.attributes.sub)
        }
    }

    const getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    useEffect(() => {
        getPermissionAsync().then(e => {
            getCurrentUserId();
        })
    }, [])

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImageUrl(result.uri);
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    const uploadImage = async () => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const urlParts = imageUrl.split('.');
            const extension = urlParts[urlParts.length - 1];
            const key = `${uuidv4()}.${extension}`;
            await Storage.put(key, blob);
            return key;
        } catch (e) {
            console.log(e);
        }
        return '';
    }

    const onPostTipoff = async () => {
        let image;
        if (!!imageUrl) {
            image = await uploadImage();
        }

        try {
            const currentUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            const newTipoff = {
                message: tipoff,
                senderId : currentUser.attributes.sub,
                receiverId: receiverId,
                anonymous: isAnonymous,
                public: !isPrivate,
            }

            const createdMessage = await API.graphql({
                query: createMessage,
                variables: {input: newTipoff},
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
            console.log(createdMessage)

            navigation.goBack();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                            <View style={styles.closeButton}>
                                <FontAwesome name="chevron-left" style={styles.closeIcon}/>
                                <Text style={styles.closeIcon}> Back </Text>
                            </View>
                        </TouchableOpacity>
                        <UserAvatar size={30} name={contact.name} src={contact.image} />
                        <Text style={styles.contactName}>
                            {contact.name}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={onPostTipoff}>
                        <FontAwesome
                            name="paper-plane"
                            size={25}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.newMessageSetting}>
                    <CustomSwitch
                        iconCategory={"FontAwesome5"}
                        iconName={"lock"}
                        isEnabled={isPrivate}
                        toggleSwitch={togglePrivateSwitch}
                        name={"Private"}
                    />
                    <CustomSwitch
                        iconCategory={"FontAwesome5"}
                        iconName={"user-secret"}
                        isEnabled={isAnonymous}
                        toggleSwitch={toggleAnonymousSwitch}
                        name={"Anonymous"}
                    />
                </View>
            </View>

            <View style={styles.newTweetContainer}>
                <View style={styles.inputsContainer}>
                    <TextInput
                        value={tipoff}
                        onChangeText={(value) => setTipoff(value)}
                        multiline={true}
                        style={styles.tipoffInput}
                        placeholder={"What's happening?"}
                    />
                    <TouchableOpacity onPress={pickImage}>
                        <Text style={styles.pickImage}>Pick a image</Text>
                    </TouchableOpacity>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
        height: '100%',
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey'
    },
    headerLeft: {
        flexDirection: 'row',
        paddingStart: 5,
        paddingEnd: 10,
    },
    closeButton: {
        flexDirection: 'row',
        marginTop: 7,
        paddingEnd: 10,

    },
    closeIcon: {
        fontSize: 17,
        color: Colors.light.tint,
    },
    contactName: {
        padding: 10,
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 10,
        width: 60,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    newTweetContainer: {
        flexDirection: 'row',
        padding: 15,
    },
    inputsContainer: {
        marginLeft: 10,
    },
    tipoffInput: {
        height: 150,
        maxHeight: 300,
        fontSize: 20,
    },
    pickImage: {
        fontSize: 18,
        color: Colors.light.tint,
        marginVertical: 10,
    },
    settingText:{
        fontSize: 15,
        marginVertical: 10,
    },
    image: {
        width: 150,
        height: 150,
    },
    newMessageSetting:{
        bottom: 0,
        flexDirection: 'row',
        margin: 5,
    },
    topContainer: {
        backgroundColor: "#F4F3FD",
        height: 125,
        width: '100%',
    },
    privateSwitch:{
        transform: [{ scaleX: .7 }, { scaleY: .7 }],
        marginTop: 5,
    },

});
