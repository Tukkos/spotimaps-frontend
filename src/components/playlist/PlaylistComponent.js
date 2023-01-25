import styled from 'styled-components';
import { Link, Navigate } from 'react-router-dom';

import { FaRegTrashAlt } from 'react-icons/fa';

export default function PlaylistComponent({ playlist }) {
  function deletePlaylist() {
    console.log(`Playlist ${playlist.id} deletada`);
  };

  return (
    <Reference>
      <Link to={`/playlists/${playlist.id}`}>
        <Playlist >
        
          <img src={playlist.image} />

          <div>
            <PlaylistTitle> Playlist: {playlist.name} </PlaylistTitle>
            <PlaylistDuration> {playlist.duration} min</PlaylistDuration>
          </div>

        </Playlist>
      </Link>
      <Icon >
        <FaRegTrashAlt onClick={() => deletePlaylist()} />
      </Icon>
    </Reference>
  );
}

const Playlist = styled.div`
  height: 130px;
  width: calc(100vw - 40px);
  max-width: 400px;
  background-color: #F0F7F4;
  margin: 0 -20px 20px -20px;
  padding: 15px;

  display: flex;

  border: 1px solid #d5d5d5;
  border-radius: 5px;

  img{
    width: 100px;
    height: 100px;
  }

  div{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const PlaylistTitle = styled.div`
  margin: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const PlaylistDuration = styled.div`
  margin: 0 20px 20px 20px;
`;

const Reference = styled.div`
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  right: -10px;
  bottom: 25px;
  cursor: pointer;
  z-index: 2;
`;
