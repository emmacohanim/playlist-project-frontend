import React, {useEffect } from 'react';
function CreatedPlaylist ({selectedGenres, token, songs, setSongs}) {

    useEffect(() => {
       if (selectedGenres.length>0) {
         fetch(`https://api.spotify.com/v1/recommendations?limit=20&seed_genres=${selectedGenres.join("%2C")}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

        })
        .then(r=>r.json())
        .then(songs => {
            setSongs(songs.tracks)
            })
      }}
      ,[selectedGenres, token]) 

      const displaySongs = songs.map((s) => {
        // console.log(s["artists"][0]["name"])
        return  (
            <div>
                <p>Title: {s["name"]} Artist:{s["artists"][0]["name"]}</p>
                
            </div>
       
        )
    })

return (
    <div id="songs-in-playlist">
        {displaySongs}
        {/* <Song/> */}
    </div>
    // return list of songs

)

}
export default CreatedPlaylist