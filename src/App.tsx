import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import layouts
import Navbar from './layouts/Navbar/Navbar';

//import screens
import Home from './screens/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
