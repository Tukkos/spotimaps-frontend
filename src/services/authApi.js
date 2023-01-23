import api from './api';

export async function logIn( login ) {
  const response = await api.post('/auth/logIn', login);
  return response.data;
}

export async function signUp( signIn ) {
  const response = await api.post('/auth/signIn', signIn);
  return response.data;
}
