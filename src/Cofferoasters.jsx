import { Routes, Route } from "react-router-dom";
import { Navbar } from "./componentes/Navbar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

export const Cofferoasters = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        {/* <Route path="/*" element={<Navigate to="/" />}></Route> */}
      </Routes>
    </>
  );
};
