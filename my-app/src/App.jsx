import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Enter from './Views/Enter';
import Menu from './Views/Menu';
import './index.css';
import {Provider} from './contexts/Context';

function App() {
  
  
  return (

    
    <BrowserRouter>
<Provider>
<Routes>
<Route path="/" element={<Enter />} />
<Route path="/Menu" element={<Menu />} />
</Routes>
</Provider>
</BrowserRouter>

  );
}

export default App;



    