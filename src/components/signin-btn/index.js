import React from 'react';
import { loginUrl } from '../../services/auth';
import "./style.css";

export default function SigninBtn() {
    return (
    <div className="signinBtn">
        <a href={loginUrl}>SIGN IN WITH SPOTIFY</a>
    </div>
    );
};