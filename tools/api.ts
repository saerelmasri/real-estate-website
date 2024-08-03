import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'ContentType': 'application/json',
    },
});

export const fetchData = async (url: string, options = {}) => {
    try {
        const response = await axiosInstance(url, options);
        return response.data;
    } catch (error) {
        console.error('Error retrieving data:', error);
        throw new Error('Could not get data');
    }
};