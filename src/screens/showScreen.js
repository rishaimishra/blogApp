import React,{useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/blogContext';

const showScreen = ({navigation}) =>{

    const {state} = useContext(Context);

    const blogPost = state.find(
        (blogPost)=> blogPost.id === navigation.getParam('id')
    );

    
    
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
};


const style=StyleSheet.create({});

export default showScreen;



