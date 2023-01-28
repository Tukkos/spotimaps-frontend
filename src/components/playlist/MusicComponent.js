import styled from 'styled-components';
import msToMinutesAndSeconds from '../../utils/msToMin';

export default function MusicsComponent({ musics }) {
  const musicDuration = msToMinutesAndSeconds(musics.musics.duration);

  return (
    <MusicLine>
      <div>{musics.musics.name}</div>
      <div>{musicDuration} min</div>
    </MusicLine>
  );
}

const MusicLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
