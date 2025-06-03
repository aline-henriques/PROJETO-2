import { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export function PostProvider({ children }) {
    const [posts, setPosts] = useState([]);

    const addPost = (newPost) => {
        setPosts(prev => [...prev, newPost]);
    };

    return (
        <PostContext.Provider value={{ posts, addPost }}>
            {children}
        </PostContext.Provider>
    );
}

export function usePost() {
    return useContext(PostContext);
}