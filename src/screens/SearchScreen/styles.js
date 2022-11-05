import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    container: {

    },
    searchBarContainer: {
        flexDirection: "row",
        height: 75,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        paddingBottom: 7,
        backgroundColor: 'white',
    },
    searchInput: {
        marginTop: 20,
        marginHorizontal: 7,
        maxWidth: '80%'
    },
    searchButton: {
        marginTop: 20,
        marginLeft: 5,
        maxWidth: '12%'
    },
    contentContainer: {
        paddingBottom: 120,
    }
});

export default styles;
