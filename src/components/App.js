import React from "react"
import PlayListCollection from './PlayListCollection.js'
import SongCollection from "./songCollection.js"

const App = (props) => {
  return (
    <div className="grid-container app">
      
        <h1 className="title">React Music Player</h1>
        <div className="grid-x grid-margin-x">
          <PlayListCollection data={props.data.playlists}/>
          <SongCollection data={props.data.songs}/>
        </div>
    </div>
  )
}

export default App
