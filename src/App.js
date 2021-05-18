import './App.css';
import Home from './pages/home';
import Signin from './pages/signin';
import { getTokenFromUrl } from './services/auth';
import { useEffect, useState } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './helpers/DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [token,setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

    //Run code based on given condition
  useEffect(() => {
    
  const hash = getTokenFromUrl();
  window.location.hash = "";

  const _token = hash.access_token;

  if(_token){
    
    setToken(_token);
    spotify.setAccessToken(_token);

    spotify.getMe().then(user => {
      dispatch({
        type: 'SET_USER',
        user: user
      });

    });

  }
  },[]);
  
  return (
    <div className="app">
      {
        token ? (
          <Home />
        ) : (
          <Signin />
        )
      }

    </div>
  );
}

export default App;
