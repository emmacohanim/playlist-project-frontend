import CreatePlaylist from "./create/CreatePlaylist"
import Homepage from "./home/Homepage"
import BrowsePlaylists from "./browse/BrowsePlaylists"
import React, {useState, useEffect} from "react"
import { Routes, Route } from "react-router-dom"
// import "./DynamicContainer.css"

export default function DynamicContainer({token}) {
  const [playlists, setPlaylists] = useState([])

  const addPlaylist = (playlist)=> {
    setPlaylists((playlists)=> [...playlists, playlist])
  }

  const editPlaylist = (playlist)=> {
    setPlaylists((playlists)=> playlists.map(p=> {
      if(p.id === playlist.id){
        return playlist
      }else {
        return p
      }
    }))
  }

 


  const deletePlaylist = (id)=> {
    setPlaylists((playlists)=> playlists.filter(p=> {
      return p.id !== id
    }))
  }

  useEffect(()=>{
    fetch('http://localhost:9292/playlists')
  .then(r => r.json())
  .then(data => {setPlaylists(data)})
  },[])
  
  return (
    <div id="dynamic-container">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/create-playlist" element={<CreatePlaylist token={token} addPlaylist={addPlaylist}/>} />
        <Route path="/browse-playlists" element={<BrowsePlaylists playlists={playlists} editPlaylist={editPlaylist} deletePlaylist={deletePlaylist}/>} />
      </Routes>
    </div>
  )
}
