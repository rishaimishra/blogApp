import React, { useState } from 'react';

const BlogContext = React.createContext();



export const BlogProvider = ({children}) =>{
    const [blogposts,setBlogPosts] = useState([]);

const addBlogPost = () =>{
    setBlogPosts([...blogposts,{title:`Blog Post #${blogposts.length+1}`}])
};

    return <BlogContext.Provider value={{data:blogposts,addBlogPost}}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;