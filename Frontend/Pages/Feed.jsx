import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";

const Feed = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        const getData = async()=>{
            const res = await  axios.get('http://localhost:3000/api/post/feed')
            setCard(res.data)

        }
        getData()
    
    }, [])
    
    
  return (
    <div className="flex gap-5">
      {card.map((e)=>{
        return <div key={e._id} className="bg-gray-300 w-60 h-65 py-3 px-5 rounded ">
             <img className="object-contain h-51 object-cover w-55 rounded overflow-hidden " src={e.url} alt="image" />
             <div className="text-black mt-3 font-bold font-mono">{e.caption}</div>
             </div>
      })}
    </div>
  )
}

export default Feed
