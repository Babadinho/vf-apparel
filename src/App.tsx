import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import layouts
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';

//import screens
import Home from './screens/Home/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
