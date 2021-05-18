import './App.css';
import Home from './pages/home';
import Signin from './pages/signin';
import { getTokenFromUrl } from './services/auth';
import { useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './helpers/datalayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

    //Run code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
    
      dispatch({
        type:"SET_TOKEN",
        token: _token,
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
    }

  });


  console.log("Here is my user>>>>>", user);
  console.log("Here is my Token>>>>", token);
  
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
