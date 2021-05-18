import React from 'react';
import { useDataLayerValue } from '../../helpers/datalayer';
import "./style.css";

export default function Home({spotify}) {

    const [{ user }, dispatch] = useDataLayerValue();
    

    console.log(user);
    return (
    <div className="home">
        <div className="home__body">

        </div>
        
    </div>
    );
};