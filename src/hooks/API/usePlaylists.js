import useAsync from '../useAsync';
import useToken from '../useToken';

import * as playlistsApi from '../../services/playlistsApi';

export default function usePlaylists() {
  const token = useToken();
  const {
    data: playlists,
    loading: playlistsLoading,
    error: playlistsError,
    act: getPlaylists
  } = useAsync(() => playlistsApi.getPlaylists({ token }), false);

  return {
    playlists,
    playlistsLoading,
    playlistsError,
    getPlaylists
  };
}
