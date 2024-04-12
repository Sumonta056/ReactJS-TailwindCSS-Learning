import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home1 = lazy(() => import("./Background/Home.jsx"));
const PasswordGenerator = lazy(() =>
  import("./React-Hooks/Project/passwordGenerator.jsx")
);
const UseContext = lazy(() =>
  import("./React-Hooks/useContext/useContext.jsx")
);
const UseEffect = lazy(() => import("./React-Hooks/useEffect/useEffect.jsx"));
const SearchFilter = lazy(() =>
  import("./React-Hooks/Project/searchfilter.jsx")
);
const Ref = lazy(() => import("./React-Hooks/useRef/useRef.jsx"));
const Memo = lazy(() => import("./React-Hooks/useMemo/app.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen text-4xl text-white bg-black">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/password" element={<PasswordGenerator />} />
          <Route path="/search" element={<SearchFilter />} />
          <Route path="/useContext" element={<UseContext />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/useRef" element={<Ref />} />
          <Route path="/useMemo" element={<Memo />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
