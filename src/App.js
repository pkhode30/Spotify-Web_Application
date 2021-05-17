import { useEffect, useState } from 'react';
import './App.css';
import Signin from './pages/signin';
import { getTokenFromUrl } from './services/auth';
import SpotifyWebApi from "spotify-web-api-js";
import Home from './pages/home';

const spotify = new SpotifyWebApi();

function App() {

  const [token,setToken] = useState(null);

  //Run code based on given condition
  useEffect(() => {
    //Code...
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log("The user==>>>>", user);
      })
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
