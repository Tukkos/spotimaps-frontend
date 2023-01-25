import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginContext from '../contexts/LoginContext';

import GlobalStyles from '../styles/GlobalStyles';
import Login from './login/Login';
import SignUp from './login/SignUp';
import Generate from './playlist/Generate';
import Playlist from './playlist/Playlist';
import Playlists from './playlist/Playlists';

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
              <Route path="/generate" element={<Generate /> }/>
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/playlists/:playlistId" element={<Playlist />} />
            </Routes>
          </LoginContext.Provider>
        </BrowserRouter>
      </>
    </>
  );
}
