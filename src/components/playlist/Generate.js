import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import { BsPlayCircle } from 'react-icons/bs';

import DefaultScreen from '../../styles/playlistPage/DefaultScreen';
import Button from '../../styles/Button';
import Body from '../../styles/playlistPage/Body';
import Header from '../../styles/playlistPage/Header';
import PageTitle from '../../styles/playlistPage/PageTitle';

export default function Generate() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [duration, setDuration] = useState('');
  const [band, setBand] = useState('');

  function makePlaylist() {
    
  };

  return (
    <DefaultScreen>
      <Header>
        <PageTitle>Crie sua playlist</PageTitle>
        <BsPlayCircle color='#F0F7F4' fontSize='28px' />
      </Header>

      <Body>
        <form onSubmit={makePlaylist} className='form'>
          <input
            className='inputBar'
            type='duração'
            value={duration}
            placeholder='email'
            onChange={e => setDuration(e.target.value)}
            disabled = {(loading) ? '' : 'disabled'} />

          <input
            className='inputBar'
            type='banda'
            value={band}
            placeholder='senha'
            onChange={e => setBand(e.target.value)}
            disabled = {(loading) ? '' : 'disabled'} />
        
          {(loading) ? <Button type="submit" className="button">Fazer login</Button>
            : <Button className="button"><ThreeDots color="#ffffff" height={40} width={40} /></Button>}
        </form>
      </Body>
    </DefaultScreen>
  );
}
