import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabNavigator from "./HomeTabNavigator";
import NewTipoffScreen from "../screens/NewTipOff";
import EditProfileScreen from "../screens/ProfileScreen/EditProfileScreen";
import EditEmailScreen from "../screens/ProfileScreen/EditEmailScreen";
import UpgradePremiumScreen from "../screens/UpgradePremiumScreen";

const Stack = createNativeStackNavigator();

const Router = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Home"}
                options={{
                    headerShown: false,
                }}
            >
                {screenProps => <HomeTabNavigator {...screenProps} updateAuthState={props.updateAuthState} />}
            </Stack.Screen>

            <Stack.Screen
                name={"NewTipoff"}
                component={NewTipoffScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name={"EditProfile"}
                component={EditProfileScreen}
                options={{
                    headerShown: true,
                }}
            />

            <Stack.Screen
                name={"EditEmail"}
                component={EditEmailScreen}
                options={{
                    headerShown: true,
                }}
            />

            <Stack.Screen
                name={"UpgradePremium"}
                component={UpgradePremiumScreen}
                options={{
                    headerShown: true,
                }}
            />

        </Stack.Navigator>
    );
};

export default Router;
