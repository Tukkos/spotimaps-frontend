import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LoginContext = createContext();
export default LoginContext;

export function LoginProvider({ children }) {
  const [loginInfos, setLoginInfos] = useLocalStorage('userData', {});

  return (
    <LoginContext.Provider value={{ loginInfos, setLoginInfos }}>
      {children}
    </LoginContext.Provider>
  );
}
