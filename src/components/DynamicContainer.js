import CreatePlaylist from "./create/CreatePlaylist"
import Homepage from "./home/Homepage"
import BrowsePlaylists from "./browse/BrowsePlaylists"
import React from "react"
import { Routes, Route } from "react-router-dom"
// import "./DynamicContainer.css"

export default function DynamicContainer() {
  return (
    <div id="dynamic-container">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/create-playlist" element={<CreatePlaylist/>} />
        <Route path="/browse-playlists" element={<BrowsePlaylists/>} />
      </Routes>
    </div>
  )
}
