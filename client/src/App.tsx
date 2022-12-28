import './App.scss';
import {Home} from "./pages/Home";
import React from "react";
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
