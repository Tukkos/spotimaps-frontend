import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginContext from '../contexts/LoginContext';

import GlobalStyles from '../styles/GlobalStyles';
import Login from './login/Login';
import SignUp from './login/SignUp';

export default function App() {
  const [loginInfos, setLoginInfos] = useState([]);

  return (
    <>
      <GlobalStyles />
      <>
        <BrowserRouter>
          <LoginContext.Provider value={{ loginInfos }} >
            <Routes>
              <Route path="/" element={<Login  setLoginInfos={setLoginInfos} />} />
              <Route path="/signUp"  element={<SignUp />} />
            </Routes>
          </LoginContext.Provider>
        </BrowserRouter>
      </>
    </>
  );
}
