import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { About, Contact, Home, Menu } from "./components/pages";


function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App;
