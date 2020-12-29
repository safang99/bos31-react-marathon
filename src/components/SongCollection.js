import React from "react"
import Song from "./Song"

const SongCollection = (props)=>{
 
  const allSongs = props.data.map(song=> {
    return <Song key={song.id} songData={song}/>
  })

  return(
      <div className="cell small-6">
        <h1>Songs</h1>
       {allSongs}
      </div>
    
  )
}

export default SongCollection