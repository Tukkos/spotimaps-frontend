import styled from 'styled-components';

export default function MusicsComponent({ musics }) {
  return (
    <MusicLine>
      <div>{musics.musics.name}</div>
      <div>{musics.musics.duration}</div>
    </MusicLine>
  );
}

const MusicLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
