import React from "react";
import PlaylistCard from "./PlaylistCard"
import { Card } from "semantic-ui-react";

function BrowsePlaylists({playlists, editPlaylist, deletePlaylist}) {
    const playlist = playlists.map((p) => {
        return <PlaylistCard key={p.id} {...p} editPlaylist={editPlaylist} deletePlaylist={deletePlaylist}/>;
      });
      return <Card.Group itemsPerRow={2}>{playlist}</Card.Group>;
}
export default BrowsePlaylists