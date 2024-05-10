import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import ButtonAppBar from '../src/components/NavBar';
function App() {
  return (
    <>
      <ButtonAppBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
