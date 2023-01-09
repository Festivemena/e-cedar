import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const BASE_URL = 'http://localhost:3000';

export const createOrGetUser = async (response: any) => {
  const decoded: { name: string, sub: string, picture: string} = jwtDecode(response.credential);
  const { name, sub, picture} = decoded;

  const user = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture,
  };

  // addUser(user);

  await axios.post(`${BASE_URL}/api/auth`, user);
};