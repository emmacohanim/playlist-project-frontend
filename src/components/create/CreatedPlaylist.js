import React, {useEffect, useState} from 'react';
function CreatedPlaylist ({selectedGenres, token}) {
    // why can't we get tracks?
    const [songs, setSongs] = useState([])

    function displaySongs() {
        songs.map((s) => {
            return <p>{s["name"]}</p>
        })
      }

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/recommendations?limit=5&seed_genres=${selectedGenres.join("%2C")}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

        })
        .then(r=>r.json())
        .then(songs => setSongs(songs.tracks))
      },[selectedGenres, token])

      

      

return (
    <div id="songs-in-playlist">
        {displaySongs}
        {/* <Song/> */}
    </div>
    // return list of songs

)

}
export default CreatedPlaylist