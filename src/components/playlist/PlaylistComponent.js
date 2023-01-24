import styled from 'styled-components';

export default function PlaylistComponent({ playlist }) {
  console.log(playlist);
  return (
    <Playlist>
      <img src={playlist.image} />
      <div>
        <span> {playlist.name} </span>
        <span> {playlist.duration} </span>
      </div>
    </Playlist>
  );
}

const Playlist = styled.div`
  height: 130px;
  width: calc(100vw - 40px);
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
  }
`;
