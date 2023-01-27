import { useContext } from 'react';

import LoginContext from '../contexts/LoginContext';

export default function useUserId() {
  const { loginInfos } = useContext(LoginContext);
  return loginInfos.user.id;
}
