import './styles.css'
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home'
import Auth from './components/Auth'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import PostPage from './components/PostPage/PostPage'
import ProfilePage from './components/ProfilePage/ProfilePage'

function App() {
  const posts = useSelector(state => state.posts)
  return (
  <>
   
    <Router>
    <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/auth' element={<Auth/>}/>
            <Route path='/post/:id' element={<PostPage/>}/>
            <Route path='/user/:id' element={<ProfilePage/>}/>
            
        </Routes>
    </Router>
  </>
  );
}

export default App;
