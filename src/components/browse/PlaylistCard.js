import { Card, Form } from "semantic-ui-react";
import React, {useState} from "react"

function PlaylistCard({title, songs, id, editPlaylist, deletePlaylist}) {
    const [newPlaylistName, setNewPlaylistName] = useState("")

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    function handleNewPlaylistName(e){
        e.preventDefault()
        setNewPlaylistName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/playlists/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: newPlaylistName,
            }),
        })
        .then(r => r.json())
        .then(data => editPlaylist(data))
    }

    function handleDelete(e) {

        fetch(`http://localhost:9292/playlists/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(data => deletePlaylist(id))
    }

    const displaySongs = songs.map((s) => {
        return  (
            <div>
                <p>Title: {s["title"]} Artist: {s["artist"]} Album: {s["album"]} Duration: {millisToMinutesAndSeconds(s['duration'])}</p>
            </div>
        )
    })
    return (
        <Card>
            <Form onSubmit={handleSubmit}>
                <Form.Input 
                    id="frm"
                    onChange={handleNewPlaylistName}
                    value={newPlaylistName}
                    type="text"
                    name="newPlaylistName"
                    placeholder="New playlist name..."
                />
                <button type='submit'>Update Playlist Name</button>
            </Form>
            <h4>{title}</h4>
            <p>{displaySongs}</p>
            <button onClick={handleDelete}>Delete</button>
        </Card>
      );
    }
    
    export default PlaylistCard;