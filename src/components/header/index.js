import React from 'react';
import "./style.css";
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../../helpers/datalayer';

export default function Header() {

    const [{user}, dispatch] = useDataLayerValue();

    return (
    <div className="header">
        <div className="header__left">
            <SearchIcon />
            <input placeholder="Search for Artists, Songs, or Albums..." type="text" />
        </div>
        <div className="header__right">
            <Avatar src={user ? user.images[0] ? user.images[0].url : "" : "" } alt={user ? user.display_name : "-"} />
            <h4>{user ? user.display_name : "-"}</h4>
        </div>
    </div>
    );
};