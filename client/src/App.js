import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Home from "./views/home/Home"
import List from  "./views/list/List"
import OneHotel from "./views/hotel/OneHotel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotel/:id" element={<OneHotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
