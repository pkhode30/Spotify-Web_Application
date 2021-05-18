import React from 'react';
import "./style.css";
import { loginUrl } from '../../services/auth';

export default function SigninBtn() {

  return (
    <div className="signinBtn">
      <a href={loginUrl}>SIGN IN WITH SPOTIFY</a>
    </div>
  );
};