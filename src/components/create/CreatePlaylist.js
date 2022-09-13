import React, { useState, useEffect } from "react"
import Genres from "./Genres"
import CreatedPlaylist from "./CreatedPlaylist"

function CreatePlaylist() {

    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleClick = (genre) => {
        if (selectedGenres.includes(genre)) {
        setSelectedGenres((genres) => genres.filter((g) => g !== genre));
        } else {
        setSelectedGenres((genres) => [...genres, genre]);
        }
  };

    useEffect(() => {
        fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer BQDVfTnegFTzej196OGlZxJ3lcq35DeJ6rp3CBTVmoDDHc7MljTi3ND03JBlTzokzisxay_BgWMwejpQcNpDsREUjtK8Kj9zoHRHXZtvYk3XeZrmBzRhi6MIUzvFc97fNcL-Ozm296MyxfAVj5kLeZlKbjw0voYt8VfI82kRm56hip6j'
            }
        })
        .then(r => r.json())
        .then(genres => setGenres(genres.genres))
      },[])

    return (
        <div id="created-playlist">
            <CreatedPlaylist selectedGenres={selectedGenres}/>
            <div id="genre-buttons">
                <Genres genres={genres} handleClick={handleClick} selectedGenres={selectedGenres}/>
            </div>
        </div>
        
    )

}

export default CreatePlaylist