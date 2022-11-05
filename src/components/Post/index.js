import React from "react";
import {View, Text, ImageBackground, Pressable, Image} from "react-native";
import styles from "./style";

const Post = (props) => {
    const post = props.post;
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: post.image}} />

            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

            <Text style={styles.description}>
                {post.type}. {post.title}
            </Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice} </Text>
                <Text style={styles.newPrice}>${post.newPrice}</Text>
                / Night
            </Text>

            <Text style={styles.totalPrice}>${post.totalPrice}</Text>

        </View>
    )
};

export default Post;
