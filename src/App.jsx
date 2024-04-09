import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home1 = lazy(() => import("./Background/Home.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
