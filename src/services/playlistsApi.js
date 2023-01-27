import axios from 'axios';

async function getPlaylists({ token }) {
  const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}`+'/playlists', {

    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

export {
  getPlaylists,
};
