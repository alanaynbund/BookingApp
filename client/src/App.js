import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Home from "./views/home/Home"
import List from  "./views/list/List"
import OneHotel from "./views/hotel/OneHotel";
import Login from "./views/login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotel/:id" element={<OneHotel/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
