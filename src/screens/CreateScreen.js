import React,{useContext} from 'react';
import {StyleSheet} from 'react-native';
import { Context } from '../context/blogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation})=>{
    const {addBlogPost} =useContext(Context);

    return <BlogPostForm onSubmit={(title,Content)=>{
        addBlogPost(title,Content,()=>navigation.navigate('Index'))
    }} />
    
};



const styles=StyleSheet.create({
   
});

export default CreateScreen;