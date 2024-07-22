import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {format} from 'timeago.js'

const AddCard = ({video}) => {
  const[channel,setChannel]=useState({});
    useEffect(()=>{
     const fetchChannels=async()=>{
      const res=await axios.get(`http://localhost:8080/api/users/find/${video.userId}`);
console.warn(res.data)


setChannel(res.data);
}
fetchChannels();




     


    },[video.userId])



  return (

    <>
    <Link to="/Video" style={{textDecoration:"none"}}>
    <div class="card">
  <div class="thumbnail">
    <img src={video.imgUrl}/>
  </div>
  
  <div class="details">
    <h2 class="title">{video.title}</h2>
    <p class="description">{video.desc}</p>
    <span class="channel">{channel.name} </span>
    <span class="views">{video.views}</span>
    <span>{format(video.createdAt)}</span>
  </div>
</div>
</Link>
</>
  )
}

export default AddCard