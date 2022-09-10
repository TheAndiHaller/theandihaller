import { Route } from "react-router";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import FullCV from "./components/FullCV";
import "./App.css";

import { Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/projects"} element={<Projects />} />
        <Route exact path={"/blog"} element={<Blog />} />
        <Route exact path={"/fullcv"} element={<FullCV />} />
      </Routes>
    </div>
  );
}

export default App;
