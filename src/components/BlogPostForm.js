import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';


const BlogPostForm =({onSubmit,InitialValue})=>{
    const [title, setTitle] = useState(InitialValue.title);
    const [Content, setContent] = useState(InitialValue.content);
    

    return (
        <View>
            <Text style={styles.label}>Enter Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
        <Text style={styles.label}>Enter Content</Text>
        <TextInput style={styles.input} value={Content} onChangeText={(text) =>setContent(text)} />
        <Button 
        title="Save Blog Post"
        onPress={()=>onSubmit(title,Content)}
        
        />
        </View>
    );
};

BlogPostForm.defaultProps={
    InitialValue:{
        title:'',
        Content:''
    }
}

const styles=StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label:{
        fontSize:20,
        marginBottom:5,
        marginLeft:5
    }
});

export default BlogPostForm;