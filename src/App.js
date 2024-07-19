import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
    import { Home, About, Products, Privacy ,Contactus,Pricing, Login, Signup} from './pages';


const App = () => (
    <>
   <Navbar/>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route exact path='/products' element={<Products />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/contact-us' element={<Contactus />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
    </Routes>
   <Footer/>
   </>
  );

export default App