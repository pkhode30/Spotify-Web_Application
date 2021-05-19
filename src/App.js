import './App.css';
import Home from './pages/home';
import Signin from './pages/signin';
import { getTokenFromUrl } from './services/auth';
import { useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './helpers/datalayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "SigninSucessful";
    const _token = hash.access_token;

    if(_token){
      
      spotify.setAccessToken(_token);
    
      dispatch({
        type:"SET_TOKEN",
        token: _token,
      })

  
      spotify.getPlaylist('37i9dQZEVXcGmTnqQNoy9e').then( response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      }));

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      }); 
    }
  }, [token, dispatch]);


  
  return (
    <div className="app">
      {
        token ? (
          <Home spotify={spotify} />
        ) : (
          <Signin />
        )
      }

    </div>
  );
}

export default App;
