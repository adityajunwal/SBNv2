
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './Home/Home';
// import Availablebuses from './Home/Availablebuses';
// import Busdetails from './Home/Busdetails';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/availablebuses" element={<Availablebuses/>} />
//         <Route path="/busdetails" element={<Busdetails/>} />
//       </Routes>
//     </Router>
//   )
// }

// export default App


// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Busdetails from "./components/Home/Busdetails";
import Availablebuses from "./components/Home/Availablebuses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="busdetails" element={<Busdetails />} />
          <Route path="availablebuses" element={<Availablebuses />} />
      
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
