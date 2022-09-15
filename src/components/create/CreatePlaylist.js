import React, { useState, useEffect } from "react"
import Genres from "./Genres"
import CreatedPlaylist from "./CreatedPlaylist"
import {Form, Button} from "semantic-ui-react"


function CreatePlaylist( {token} ) {

    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [username, setUsername] = useState("")
    const [playlist, setPlaylist] = useState("")
    const [songs, setSongs] = useState([])

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
                'Authorization': `Bearer ${token}`
            }
        })
        .then(r => r.json())
        .then(genres => setGenres(genres.genres))
      },[token])

      function handleUsernameChange(e) {
        e.preventDefault();
        setUsername(e.target.value)
      }
      function handlePlaylistChange(e) {
        e.preventDefault();
        setPlaylist(e.target.value)
      }
      function handleSubmit(e) {
        e.preventDefault();
        let newPlaylist = {Username: username, Playlist: playlist, Songs: songs}
        console.log(newPlaylist)
      }

    return (
        <div id="create-playlist">
            <div id="genre-buttons">
                <Genres genres={genres} handleClick={handleClick} selectedGenres={selectedGenres}/>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group id="name-title-form">
                    <Form.Input
                        onChange={handleUsernameChange}
                        value={username}
                        type="text"
                        name="username"
                        placeholder="Your name..."
                    /> 
                    <Form.Input
                        onChange={handlePlaylistChange}
                        value={playlist}
                        type="text"
                        name="playlist"
                        placeholder="Playlist name..."
                    /> 
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
            
            <div id='created-playlist'>
                <CreatedPlaylist selectedGenres={selectedGenres} token={token} songs={songs} setSongs={setSongs}/>
            </div>
        </div>
        
    )

}

export default CreatePlaylist