import React, { useState, useEffect } from "react";
import SongsList from "../components/SongsList";

const SongsContainer = () => {
    const [songs, setSongs] = useState([])

    useEffect(()=>{
        loadSongs();
    }, []);

    const loadSongs = function() {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(res => res.json())
            .then(songsList => setSongs(songsList.feed.entry))
            .catch(err => console.error);
    }
    
    return (
        <>
            <h3>From Apple Music:</h3>
            <SongsList songs={songs}/>
        </>
    );
};

export default SongsContainer;