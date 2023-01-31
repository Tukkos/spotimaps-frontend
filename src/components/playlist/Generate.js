import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import { BsPlayCircle } from 'react-icons/bs';

import DefaultScreen from '../../styles/playlistPage/DefaultScreen';
import Body from '../../styles/playlistPage/Body';
import Header from '../../styles/playlistPage/Header';
import PageTitle from '../../styles/playlistPage/PageTitle';
import { createMusic, createMusicsPlaylist, createPlaylist } from '../../services/playlistsApi';
import useToken from '../../hooks/useToken';

export default function Generate() {
  const token = useToken();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [duration, setDuration] = useState('');
  const [band, setBand] = useState('');
  
  const musics = [
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
    },
    {
      id: 3,
      name: 'TV',
      duration: 282000
    },
    {
      id: 4,
      name: 'The 30th',
      duration: 217000
    }
  ];

  function randomizeMusics() {
    return 0.5 - Math.random();
  };

  async function makePlaylist(e) {
    e.preventDefault();

    if (duration === '') {
      alert('Favor inserir um tempo valido.');
    }
    if (band === '') {
      alert('Favor colocar o nome de uma banda.');
    } else {
      setLoading(false);
      let msDuration = duration * 60000;

      const playlistMusics = [];
      const randomizedMusics = musics.sort(randomizeMusics);
      let i = 0;

      while (msDuration > 0) {
        playlistMusics.push(randomizedMusics[i]);
        i++;
        msDuration = msDuration - randomizedMusics[i].duration;
      }

      const playlist = await axiosCreatePlaylist();
      const playlistId = playlist.data.id;

      playlistMusics.map(async(musicArray) => {
        await axiosCreateMusics({ playlistId, musicArray });
      });
      setLoading(true);
      navigate('/playlists');
    }
  };

  async function axiosCreatePlaylist() {
    const playlistDuration = duration * 60000;
    const body = {
      bandName: band,
      duration: playlistDuration,
      image: 'https://m.media-amazon.com/images/I/81xT1axhZ2L._AC_SL1500_.jpg',
    };

    const playlist = await createPlaylist({ token, body });
    return playlist;
  };

  async function axiosCreateMusics({ playlistId, musicArray }) {
    const body = {
      name: musicArray.name,
      duration: musicArray.duration,
    };

    const music = await createMusic({ token, body });
    const musicId = music.data.id;
    console.log(playlistId);
    await axiosCreateMusicPlaylists({ playlistId, musicId });
  };

  async function axiosCreateMusicPlaylists({ playlistId, musicId }) {
    const body = {
      musicsId: musicId,
      playlistId: playlistId
    };
    console.log(body);

    await createMusicsPlaylist({ token, body });
  }

  return (
    <DefaultScreen>
      <Header>
        <PageTitle>Crie sua playlist</PageTitle>
        <Link to="/playlists"> <BsPlayCircle color='#F0F7F4' fontSize='28px' /> </Link >
      </Header>

      <Body>
        <form onSubmit={makePlaylist} >
          <input
            type='number'
            value={duration}
            placeholder='duração (min)'
            onChange={e => setDuration(e.target.value)}
            disabled = {(loading) ? '' : 'disabled'} />

          <input
            type='text'
            value={band}
            placeholder='banda'
            onChange={e => setBand(e.target.value)}
            disabled = {(loading) ? '' : 'disabled'} />
        
          {(loading) ? <button type="submit" >Gerar playlist</button>
            : <button ><ThreeDots color="#ffffff" height={40} width={40} /></button>}
        </form>
      </Body>
    </DefaultScreen>
  );
}
