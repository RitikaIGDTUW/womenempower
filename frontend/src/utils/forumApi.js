
import axios from "axios";

const API_BASE_URL = "/api/posts";
console.log(`${API_BASE_URL}/`);    

export const fetchPosts = async () => {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
};

export const createPost = async (title, content, token) => {
    const response = await axios.post(`${API_BASE_URL}/create`, { title, content }, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const addComment = async (postId, content, token) => {
    const response = await axios.post(`${API_BASE_URL}/comment`, { postId, content }, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};
