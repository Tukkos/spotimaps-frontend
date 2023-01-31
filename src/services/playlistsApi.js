import axios from 'axios';

async function getPlaylists({ token }) {
  const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}`+'/playlists', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

async function getPlaylistsMusics({ token, playlistId }) {
  const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}`+`/playlists/${playlistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

async function putPlaylistName({ token, playlistId, body }) {
  const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}`+`/playlists/name/${playlistId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

async function createPlaylist({ token, body }) {
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}`+'/playlists', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

async function createMusic({ token, body }) {
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}`+'/playlists/music', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

async function createMusicsPlaylist({ token, body }) {
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}`+'/playlists/musicsPlaylist', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

async function deletePlaylistAndMusics({ token, playlistId }) {
  await axios.delete(`${process.env.REACT_APP_API_BASE_URL}`+`/playlists/${playlistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export {
  getPlaylists,
  getPlaylistsMusics,
  putPlaylistName,
  createPlaylist,
  createMusic,
  createMusicsPlaylist,
  deletePlaylistAndMusics,
};
