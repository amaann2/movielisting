import "./App.css";
import Navbar from "./component/Navbar";
import Series from "./component/Series";
import Container from "./component/Container";
import { useState } from "react";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://demo.tech2edge.co/samples/data-sg")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Series data={data} />} />
        <Route exact path="/character" element={<Container />} />
      </Routes>
    </div>
  );
}

export default App;
