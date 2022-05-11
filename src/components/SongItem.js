import React from "react";

const SongItem = ({song}) => {

    return (
        <>
            <li>{song.index} "{song["im:name"].label}" by {song["im:artist"].label}</li>
        </>
    );
};


export default SongItem;