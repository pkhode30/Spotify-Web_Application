import React from 'react';
import { useDataLayerValue } from '../../helpers/DataLayer';
import "./style.css";

export default function Home() {

    const [{ user }, dispatch] = useDataLayerValue();
    
    console.log(user);
    return (
    <div className="home">
        <p>Welcome {
        user ? (
            user.display_name
        ): (
            "no user"
        )}</p>
    </div>
    );
};