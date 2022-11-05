import React from "react";
import {View, Text, ImageBackground, Pressable, TextInput, StyleSheet} from "react-native";
import {Auth} from "aws-amplify";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import Colors from "../../Constants/Colors";

const UpgradePremiumScreen = (props) => {
    const navigation = useNavigation();


    const onBuyNowPressed = () => {
        navigation.navigate('SignUp');
    };


    return (
        <View style={styles.container} >
            <View style={styles.topContainer} >
                <Text style={styles.name} >
                    Behnam Hajian
                </Text>
                <Text style={styles.email} >
                     be_hajian@yahoo.com
                </Text>
                <Text style={styles.phone} >
                     +1 (619) 999-8887
                </Text>
                <Text style={styles.accountNumber} >
                    Account Number: ARVF19465
                </Text>
            </View>


            <View style={styles.bottomContainer}>

                <CustomButton
                    text="Buy Now"
                    onPress={onBuyNowPressed}
                    bgColor="#5B67CA"
                    fgColor="#ffffff"
                />

            </View>

        </View>
    )
};

export default UpgradePremiumScreen;

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
