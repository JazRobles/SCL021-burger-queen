import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Enter from './Views/Enter';
import Menu from './Views/Menu';
import './index.css';


function App() {
  
  
  return (

    
    <BrowserRouter>

<Routes>
<Route path="/" element={<Enter />} />
<Route path="/Menu" element={<Menu />} />
</Routes>
</BrowserRouter>

  );
}

export default App;

    