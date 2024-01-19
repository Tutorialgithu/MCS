import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Membership from './pages/Membership';
import Home from './pages/Home';


function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path ="/membership" element={<Membership/>}></Route>
  <Route path ="/contact" element={<Contact/>}></Route>
  <Route path ="/header" element={<Header/>}></Route>
  <Route path ="/footer" element={<Footer/>}></Route>
  <Route path ="/" element={<Home/>}></Route>

</Routes>
</BrowserRouter>
</>
  );
}

export default App;
