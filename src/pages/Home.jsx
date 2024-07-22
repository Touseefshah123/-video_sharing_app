import React, { useEffect, useState } from 'react'
import AddCard from '../component/AddCard';

import axios from 'axios';
const Home = ({type}) => {
const[video,setVideo]=useState([]);


useEffect(()=>{
const fetchVideos=async()=>{
const res=await axios.get(`http://localhost:8080/api/users/${type}`);
console.warn(res.data)
setVideo(res.data);


}
fetchVideos();

},[type])

  return (
    <>

<div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
{

video.map((video,index)=>{

return <AddCard key={index} video={video}/>
})


}

    
</div>
    </>
  )
}

export default Home