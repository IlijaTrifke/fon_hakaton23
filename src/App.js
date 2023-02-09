import { Route, Routes } from "react-router-dom";
import Prijava from "./components/prijava/Prijava";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/prijava" exact element={<Prijava />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
