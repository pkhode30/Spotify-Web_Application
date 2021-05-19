import React from 'react';
import Header from '../../components/header';
import { useDataLayerValue } from '../../helpers/datalayer';
import "./style.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from '../../components/song-row';

export default function Body({ spotify }) {

  const [{discover_weekly}, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify.play({  context_uri: `spotify:playlist:${id}`, }).then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                      type: "SET_ITEM",
                      item: r.item,
                    });
                    dispatch({
                      type: "SET_PLAYING",
                      playing: true,
                    });
            });
    });
  };
    
  const playSong = (id) => {
    spotify.play({ uris: [`spotify:track:${id}`], }).then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                      type: "SET_ITEM",
                      item: r.item,
                    });
                    dispatch({
                      type: "SET_PLAYING",
                      playing: true,
                    });
            });
    });
  };

    return (
    <div className="body">
        <Header />

        <div className="body__info">
            <img src={discover_weekly ? discover_weekly.images[0].url : ""} alt="Discover Weekly Image" />
            <div className="body__infoText">
                <strong>PLAYLISTS</strong>
                <h2>Discover Weekly</h2>
                <p>{discover_weekly ? discover_weekly.description : "-"}</p>
            </div>
        </div>

        <div className="body__songs">
            <div className="body__icons">
                <PlayCircleFilledIcon className="body__shuffle" onClick={playPlaylist} />
                <FavoriteIcon fontSize="large" />
                <MoreHorizIcon />
            </div>
            
            { discover_weekly ? discover_weekly.tracks.items.map((item) => (
                    <SongRow track={item.track} playSong={playSong} />
                    )
                ) : ( <></> ) }
        </div>
    </div>
    );
};