import React from 'react';
import SigninBtn from '../../components/signin-btn';
import "./style.css";

export default function Signin() {
    return (
    <div className="signin">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify Banner" ></img>
        <SigninBtn />
    </div>
    );
};