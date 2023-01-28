import { useEffect, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Body from '../../styles/playlistPage/Body';
import DefaultScreen from '../../styles/playlistPage/DefaultScreen';
import Header from '../../styles/playlistPage/Header';
import PageTitle from '../../styles/playlistPage/PageTitle';
import PlaylistComponent from './PlaylistComponent';

import { getPlaylists } from '../../services/playlistsApi';

import useToken from '../../hooks/useToken';
import useUserId from '../../hooks/useUserId';

export default function Playlists() {
  const token = useToken();
  const userId = useUserId();
  const [ playlists, setPlaylists ] = useState([]);

  useEffect(() => {
    getPlaylists({ token, userId })
      .then((res) => {
        setPlaylists(res.data);
      })
      .catch(() => {
        console.log('Error');
      });
  }, []);

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
          duration: 116000
        },
        {
          id: 1,
          name: 'Cozy',
          duration: 210000
        },
        {
          id: 2,
          name: 'Break my Soul',
          duration: 278000
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
          duration: 282000
        },
        {
          id: 1,
          name: 'The 30th',
          duration: 217000
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
          {playlists.map((playlist) => <PlaylistComponent playlist={playlist} key={playlist.id} /> )}
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
