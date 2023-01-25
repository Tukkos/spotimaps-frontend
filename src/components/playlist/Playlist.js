import { Link, useParams } from 'react-router-dom';

import { BsCaretLeft } from 'react-icons/bs';

import Body from '../../styles/playlistPage/Body';
import DefaultScreen from '../../styles/playlistPage/DefaultScreen';
import Header from '../../styles/playlistPage/Header';
import PageTitle from '../../styles/playlistPage/PageTitle';
import styled from 'styled-components';
import MusicsComponent from './MusicComponent';

export default function Playlist() {
  const params = useParams();

  const userPlaylists = [
    {
      id: 0,
      name: 'Beyonce',
      image: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/07/beyonce-renaissance-foto.jpg',
      duration: '00:30',
      musics: [
        {
          id: 0,
          name: 'Energy',
          duration: '1:56'
        },
        {
          id: 1,
          name: 'Cozy',
          duration: '3:30'
        },
        {
          id: 2,
          name: 'Break my Soul',
          duration: '4:38'
        }
      ]
    },
    {
      id: 1,
      name: 'Billie Eilish',
      image: 'https://upload.wikimedia.org/wikipedia/en/2/26/Billie_Eilish_-_Guitar_Songs.png',
      duration: '00:08',
      musics: [
        {
          id: 0,
          name: 'TV',
          duration: '4:42'
        },
        {
          id: 1,
          name: 'The 30th',
          duration: '3:37'
        }
      ]
    }
  ];

  return (
    <DefaultScreen>
      <Header>
        <PageTitle>{userPlaylists[params.playlistId].name}</PageTitle>
        <Link to="/playlists"> <BsCaretLeft color='#F0F7F4' fontSize='28px' /> </Link >
      </Header>

      <Body>
        <Musics>
          {userPlaylists[params.playlistId].musics.map((musics) => <MusicsComponent musics={musics}/>)}
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
