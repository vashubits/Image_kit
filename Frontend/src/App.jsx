import { Route, Routes } from "react-router-dom"
import CreatePost from "../Pages/CreatePost"
import Feed from "../Pages/Feed"

const App = () => {
  return (
    <div className="bg-slate-600  text-gray-200 h-screen flex justify-center  items-center ">
      <Routes>
       <Route path="/feed" element={<Feed />}  />
       <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  )
}

export default App
