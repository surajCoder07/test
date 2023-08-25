import './App.css';
import React  from 'react';
import Home from './components/Home';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Gift from './components/Gift';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gifts/:relationship/:occasion/:age/:budget" element={<Gift />} />
      <Route path="*" element={<Error />} />
      {/* Add other routes as needed */}
    </Routes>
  </BrowserRouter>
  );
}




export default App;
