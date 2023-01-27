import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginProvider } from '../contexts/LoginContext';

import GlobalStyles from '../styles/GlobalStyles';
import Login from './login/Login';
import SignUp from './login/SignUp';
import Generate from './playlist/Generate';
import Playlist from './playlist/Playlist';
import Playlists from './playlist/Playlists';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <>
        <BrowserRouter>
          <LoginProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signUp"  element={<SignUp />} />
              <Route path="/generate" element={<Generate /> }/>
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/playlists/:playlistId" element={<Playlist />} />
            </Routes>
          </LoginProvider>
        </BrowserRouter>
      </>
    </>
  );
}
