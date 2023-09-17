import axios from 'axios';

const encodeCredentials = (username, password) => {
    const credentials = `${username}:${password}`;
    return btoa(credentials);
}

export const makeApiRequest = async (url, data) => {
    try {
      const encodedCredentials = encodeCredentials(import.meta.env.VITE_USERNAME, import.meta.env.VITE_PASSWORD);
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
}