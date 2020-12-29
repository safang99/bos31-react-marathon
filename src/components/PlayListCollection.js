import React, { useState } from 'react';
import Playlist from './Playlist.js'

const PlayListCollection = (props) => {
  const [selectedId, setSelectedId] = useState(null)
  
  const playlists = props.data.map(playlist => {

    const handleClickWrapper = () => {
      setSelectedId(playlist.id)
    }
    let selectedStatus = false

    if (selectedId === playlist.id) {
      selectedStatus = true
    }

    return(
      <Playlist handleClickWrapper={handleClickWrapper}
        selectedStatus={selectedStatus}
        key={playlist.id}
        name={playlist.name}
      />
    )
  })

return(
    <div className="cell small-6">
      <h1>Playlists</h1>
      {playlists}
    </div>
)

}

export default PlayListCollection