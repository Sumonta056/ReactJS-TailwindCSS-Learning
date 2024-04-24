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

const BrokenImage = lazy(() =>
  import("./Error Handling/Broken Image/Image.jsx")
);

const Loadng = lazy(() => import("./Error Handling/Loading/index.jsx"));

function App() {
  const routes = [
    { path: "/", element: <Home1 /> },
    { path: "/password", element: <PasswordGenerator /> },
    { path: "/search", element: <SearchFilter /> },
    { path: "/useContext", element: <UseContext /> },
    { path: "/useEffect", element: <UseEffect /> },
    { path: "/useRef", element: <Ref /> },
    { path: "/useMemo", element: <Memo /> },
    { path: "/brokenImage", element: <BrokenImage /> },
    { path: "/loading", element: <Loadng /> },
  ];
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
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
