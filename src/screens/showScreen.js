import React,{useContext} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import {Context} from '../context/blogContext';
import {Feather} from '@expo/vector-icons';


const showScreen = ({navigation}) =>{

    const {state} = useContext(Context);

    const blogPost = state.find(
        (blogPost)=> blogPost.id === navigation.getParam('id')
    );

    
    
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.Content}</Text>
        </View>
    );
};

showScreen.navigationOptions = ({navigation}) =>{
    return {
        headerRight: (
            <TouchableOpacity onPress={() =>{
                navigation.navigate('Edit',
                {id:navigation.getParam('id')})
            }}>
                <Feather name="edit" size={30} />
            </TouchableOpacity>
        )
    };
};

const style=StyleSheet.create({});

export default showScreen;



