import { Link, useParams } from 'react-router-dom';

import { BsCaretLeft } from 'react-icons/bs';

import Body from '../../styles/playlistPage/Body';
import DefaultScreen from '../../styles/playlistPage/DefaultScreen';
import Header from '../../styles/playlistPage/Header';
import PageTitle from '../../styles/playlistPage/PageTitle';
import styled from 'styled-components';
import MusicsComponent from './MusicComponent';
import { useEffect, useState } from 'react';
import { getPlaylistsMusics } from '../../services/playlistsApi';
import useToken from '../../hooks/useToken';
import EditableInput from './PlaylistTitle';

export default function Playlist() {
  const token = useToken();
  const params = useParams();
  const playlistId = params.playlistId;
  const [ playlistMusics, setPlaylistsMusics ] = useState([]);

  useEffect(() => {
    getPlaylistsMusics({ token, playlistId })
      .then((res) => {
        setPlaylistsMusics(res.data);
      })
      .catch(() => {
        console.log('Error');
      });
  }, []);

  return (
    <DefaultScreen>
      <Header>
        { playlistMusics.name != undefined ? <EditableInput text={playlistMusics?.name} playlistId={playlistId} /> : null }
        <Link to="/playlists"> <BsCaretLeft color='#F0F7F4' fontSize='28px' /> </Link >
      </Header>

      <Body>
        <Musics>
          {playlistMusics.musicsPlaylists?.map((musics) => <MusicsComponent musics={musics}/>)}
        </Musics>
      </Body>
    </ DefaultScreen>
  );
}

const Musics = styled.div`
  width: calc(100vw - 40px);
  max-width: 400px;
  height: calc(100vh - 90px);
  background-color: #F0F7F4;
  margin: 0 -20px 20px -20px;
  padding: 15px;

  border: 1px solid #d5d5d5;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;
