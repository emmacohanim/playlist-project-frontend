import React, { useState, useEffect } from "react"
import Genres from "./Genres"
import CreatedPlaylist from "./CreatedPlaylist"
import {Form, Button} from "semantic-ui-react"
import Header from "../Header"


function CreatePlaylist( {token, addPlaylist} ) {

    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [username, setUsername] = useState("")
    const [title, setTitle] = useState("")
    const [songs, setSongs] = useState([])


    const handleClick = (genre) => {
        if (selectedGenres.includes(genre)) {
        setSelectedGenres((genres) => genres.filter((g) => g !== genre));
        } else {
        setSelectedGenres((genres) => [...genres, genre]);
        }
  };

    useEffect(() => {
        if(token){
        fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(r => r.json())
        .then(genres => setGenres(genres.genres))
    }
      },[token])

      function handleUsernameChange(e) {
        e.preventDefault();
        setUsername(e.target.value)
      }
      function handleTitleChange(e) {
        e.preventDefault();
        setTitle(e.target.value)
      }
      function handleSubmit(e) {
        e.preventDefault();
      
        let newPlaylist = {
          username,
          title,
          songs
        };

        console.log(newPlaylist)

        fetch("http://localhost:9292/playlists", {
          method: "POST",
          headers: {
            Accept: 'application.json',
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPlaylist),
        })
          .then((response) => response.json())
          .then((data) => {
            addPlaylist(data);
          })
        }
    return (
        <div id="create-playlist">
            <Header />
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
                        onChange={handleTitleChange}
                        value={title}
                        type="text"
                        name="title"
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