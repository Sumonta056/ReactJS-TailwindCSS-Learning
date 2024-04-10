import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home1 = lazy(() => import("./Background/Home.jsx"));
const PasswordGenerator = lazy(() =>
  import("./React-Hooks/Project/passwordGenerator.jsx")
);
const UseContext = lazy(() =>
  import("./React-Hooks/useContext/useContext.jsx")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen bg-black text-white text-4xl">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/password" element={<PasswordGenerator />} />
          <Route path="/useContext" element={<UseContext />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
