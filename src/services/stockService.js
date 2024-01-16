import axios from 'axios';

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export const analyzeStock = async (companyName) => {
  try {
    const response = await axios.post(API_ENDPOINT, { name: companyName });
    return response.data;
  } catch (error) {
    console.error('Error in analyzeStock:', error);
    throw error;
  }
};
