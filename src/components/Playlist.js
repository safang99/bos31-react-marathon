import React from "react"

const Playlist = (props) => {
  let styles = ""
  
  if(props.selectedStatus) {
    styles = "selected"
  }

  return (

    <div>
      
      <h4 onClick={props.handleClickWrapper} className={styles}>{props.name}</h4>
    
    </div>
  )
}

export default Playlist 