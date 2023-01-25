import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import { BsPlayCircle } from 'react-icons/bs';

import DefaultScreen from '../../styles/playlistPage/DefaultScreen';
import Body from '../../styles/playlistPage/Body';
import Header from '../../styles/playlistPage/Header';
import PageTitle from '../../styles/playlistPage/PageTitle';

export default function Generate() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [duration, setDuration] = useState('');
  const [band, setBand] = useState('');

  function makePlaylist(e) {
    e.preventDefault();

    if (duration === '') {
      alert('Favor inserir um tempo valido.');
    }
    if (band === '') {
      alert('Favor colocar o nome de uma banda.');
    } else {
      setLoading(false);
      console.log('Playlist criada');
      navigate('/playlists');
    }
  };

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
