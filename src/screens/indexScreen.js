import React, {useContext} from 'react';
import {View,Text,StyleSheet,FlatList,Button} from 'react-native';
import BlogContext from '../context/blogContext'; 

const indexScreen =()=>{

    const {data,addBlogPost} = useContext(BlogContext);

    return (
        <View>
            <Text>THis is my index Screen
            </Text>
            <Button title="Add Post" onPress={addBlogPost} />
    <FlatList 
        data={data}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({item})=>{
        return <Text>{item.title}</Text>;
        }}
    />
        </View>
    );
}

const styles= StyleSheet.create({

});

export default indexScreen;