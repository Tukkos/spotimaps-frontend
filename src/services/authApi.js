import axios from 'axios';
// import api from './api';

// export async function logIn( login ) {
//   const response = await api.post('/auth/logIn', login);
//   return response.data;
// }

async function signUp({ userEmail, userPassword, passwordConfirmation }) {
  const body = {
    email: userEmail,
    password: userPassword,
    confirmPassword: passwordConfirmation
  };
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}`+'/users', body);
  return response;
}

export {
  signUp,
};
