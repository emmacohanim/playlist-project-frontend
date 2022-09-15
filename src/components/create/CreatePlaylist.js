import React, { useState, useEffect } from "react";
import Genres from "./Genres";
import CreatedPlaylist from "./CreatedPlaylist";
import { Form, Button } from "semantic-ui-react";

function CreatePlaylist({ token }) {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [songs, setSongs] = useState([]); // array of all spotify info
  const [songsArray, setSongsArray] = useState([]); // array of info we want

  const handleClick = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres((genres) => genres.filter((g) => g !== genre));
    } else {
      setSelectedGenres((genres) => [...genres, genre]);
    }
  };

  useEffect(() => {
    fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((genres) => setGenres(genres.genres));
  }, [token]);

  function handleUsernameChange(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }
  function handleTitleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    songs.map((s) => {
      let newSong = {
        title: s["name"],
        artist: s["artists"][0]["name"],
        album: s["album"]["name"],
        duration: s["duration_ms"],
      };

      setSongsArray(songsArray.push(newSong));
    });
    let newPlaylist = {
      username: username,
      title: title,
      songsArray: songsArray,
    };
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(username),
    }).then();
    fetch("/playlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlaylist),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div id="create-playlist">
      <div id="genre-buttons">
        <Genres
          genres={genres}
          handleClick={handleClick}
          selectedGenres={selectedGenres}
        />
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
            placeholder="Playlist title..."
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>

      <div id="created-playlist">
        <CreatedPlaylist
          selectedGenres={selectedGenres}
          token={token}
          songs={songs}
          setSongs={setSongs}
        />
      </div>
    </div>
  );
}

export default CreatePlaylist;
