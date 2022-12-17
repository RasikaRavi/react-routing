import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
// import Layout from './components/Layout'

function RouterDisplay() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="blogs" element={<Blog/>} />
          <Route path="contact" element={<Contact/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterDisplay;

