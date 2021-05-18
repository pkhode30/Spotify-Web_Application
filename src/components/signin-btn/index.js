import React from 'react';
import "./style.css";
import { loginUrl } from '../../services/auth';
import { getTokenFromUrl } from '../../services/auth';
import { useEffect, useState } from 'react';
import {useHistory } from 'react-router';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();


export default function SigninBtn() {

    const [token,setToken] = useState(null);
    const history = useHistory();

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
      });
      history.push('/home');
    }
  },[]);

    return (
    <div className="signinBtn">
        <a href={loginUrl}>SIGN IN WITH SPOTIFY</a>
    </div>
    );
};