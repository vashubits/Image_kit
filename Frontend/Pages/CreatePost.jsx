import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreatePost = () => {
    const navigate = useNavigate()

    const createPost = async(e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', e.target.image.files[0])
        formData.append('caption', e.target.caption.value)
        await axios.post('http://localhost:3000/create-post',formData)
        e.target.reset()
        navigate('/feed')


       
        
     
    } 
  return (
    <div className="flex justify-center flex-col items-center">
      <div>
        <form onSubmit={createPost}>
        <input className="bg-white rounded font-semibold text-black py-2 px-5 m-3"name="image" type="file"/>
        <input className="bg-white rounded font-semibold text-black py-2 px-5 m-3" name="caption" type="text" placeholder="enter caption" />
      <button type="submit"  className="rounded py-3 px-6 bg-blue-400 text-white font-semibold">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default CreatePost
