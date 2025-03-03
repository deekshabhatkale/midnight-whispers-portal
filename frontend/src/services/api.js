import axios from 'axios';

const API_URL = 'https://midnight-whispers-portal.onrender.com'; // Change to your back-end URL

export const fetchStories = async () => {
    const response = await axios.get(`${API_URL}/stories/api/stories`);
    return response.data;
};

export const getUser  = async () => {
    const response = await axios.get(`${API_URL}/auth/user`);
    return response.data;
};

export const logout = async () => {
    await axios.get(`${API_URL}/auth/logout`);
};

export const createStory  = async (story) => {
    const response = await axios.post(`${API_URL}/stories/api/stories`, story);
    console.log(response.data);
    return response.data;
};

export const fetchStoryById = async (id) => {
    const response = await axios.get(`${API_URL}/stories/api/stories/${id}`);
    return response.data;
};

export const useAuth = () => {
    return {
        getUser ,
        fetchStories,
        logout,
    };
};