import React from "react";
import PlaylistCard from "./PlaylistCard"
import { Card } from "semantic-ui-react";
import Header from "../Header"

function BrowsePlaylists({playlists, editPlaylist, deletePlaylist}) {
    const playlist = playlists.map((p) => {
        return <PlaylistCard key={p.id} {...p} editPlaylist={editPlaylist} deletePlaylist={deletePlaylist}/>;
      });
      return (
      <div>
        <Header/>
        <Card.Group itemsPerRow={2}>{playlist}</Card.Group>;
      </div>
      )
}
export default BrowsePlaylists