import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/prijava" exact element={<Prijava />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
