import React, { useState, useEffect } from "react"
import Genres from "./Genres"

function CreatePlaylist() {

    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer BQAJXLDO0BMu4jBTQpGfwn7r52KLfkMH21ZU06kKGz6VExOZfAqMiRP8H5FVaz8hePyO3DV0s-qlP4PeLzisvBHN4Alb0bhvBZ3DfJ0T4f-Tib0DmUkbxrwceE8AT3rbzD8Pvm0-oK7NBfbw3O0Z-erC4bhcFRkOd98duIZr-hPBDRzz'
            }
        })
        .then(r => r.json())
        .then(genres => setGenres(genres.genres))
      },[])

    return (
        <div id="genre-buttons">
            <Genres genres={genres}/>
        </div>
    )

}

export default CreatePlaylist