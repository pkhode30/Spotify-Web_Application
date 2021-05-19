import React from 'react';
import Body from '../../containers/body';
import Footer from '../../containers/footer';
import Sidebar from '../../containers/sidebar';
import "./style.css";

export default function Home({spotify}) {
    return (
    <div className="home">
        <div className="home__body">
            <Sidebar />
            <Body spotify={spotify} />
        </div>
        <Footer spotify={spotify} />
    </div>
    );
};