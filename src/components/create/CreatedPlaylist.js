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
            setSongs(songs.tracks.map((s)=>{
                return {
                    title: s["name"],
                    artist: s["artists"][0]["name"],
                    album: s["album"]["name"],
                    duration: s["duration_ms"]
                  };
            }))
            })
      }},[selectedGenres, token]) 

      const displaySongs = songs.map((s) => {
<<<<<<< HEAD
=======
        // console.log(s["artists"][0]["name"])
>>>>>>> f2784ccfa9f84dd98d0349aacc4087e1f6fe5e8c
        return  (
            <div>
                <p>Title: {s["title"]} Artist: {s["artist"]}</p>
                
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