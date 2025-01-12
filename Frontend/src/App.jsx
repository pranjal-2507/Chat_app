import React from 'react';
import Home from "./Components/Home"
import ChatPage from './Components/ChatPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";  

function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chats" element={<ChatPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
