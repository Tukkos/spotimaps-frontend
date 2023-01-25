import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import Body from '../../styles/playlistPage/Body';
import DefaultScreen from '../../styles/playlistPage/DefaultScreen';
import Header from '../../styles/playlistPage/Header';
import PageTitle from '../../styles/playlistPage/PageTitle';
import PlaylistComponent from './PlaylistComponent';

export default function Playlists() {
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
        <PageTitle>Suas Playlists</PageTitle>
        <Link to="/generate"> <AiOutlinePlusCircle color='#F0F7F4' fontSize='30px' /> </Link >
        
      </Header>
      {(userPlaylists[0] === undefined) ? 
        <Body >
          <Message> No momento você ainda não tem playlists </Message >
        </Body>
        :
        <Body>
          {userPlaylists.map((playlist) => <PlaylistComponent playlist={playlist} key={playlist.id} /> )}
        </Body>
      }
      
    </DefaultScreen>
  );
}

const Message = styled.div`
  margin-top: 40vh;
  text-align: center;
  font-size: 20px;
  color: #F0F7F4;
`;
