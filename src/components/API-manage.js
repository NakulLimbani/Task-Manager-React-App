import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/todos`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching tasks: ${error.message}`);
  }
};
