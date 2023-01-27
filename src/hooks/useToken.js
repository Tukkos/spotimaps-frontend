import { useContext } from 'react';

import LoginContext from '../contexts/LoginContext';

export default function useToken() {
  const { loginInfos } = useContext(LoginContext);
  return loginInfos.token;
}
