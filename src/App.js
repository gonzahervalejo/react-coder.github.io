import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from "./components/ItemListContainer/Itemlistcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import React, {useState, createContext} from "react";


function App() {

  const [darkMode, setDarkMode]=useState("Gon");

  const ThemeContext = createContext(darkMode);

  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={ <ThemeContext.Provider value={darkMode}> <ItemListContainer/> </ThemeContext.Provider>}/>  
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

