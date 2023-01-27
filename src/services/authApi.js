import axios from 'axios';

async function signUp({ userEmail, userPassword, passwordConfirmation }) {
  const body = {
    email: userEmail,
    password: userPassword,
    confirmPassword: passwordConfirmation
  };
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}`+'/users', body);
  return response;
}

async function loginPost({ userEmail, userPassword }) {
  const body = {
    email: userEmail,
    passwordHash: userPassword
  };
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}`+'/users/logIn', body);
  return response;
}

export {
  signUp,
  loginPost,
};
