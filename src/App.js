import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main.js";
import PrintPage from "./PrintPage.js";

function App() {
  const sampleProduct = {
    batchNo: "B12345",
    codeNo: "C67890",
    curing: "24 15",
    manufacturingDate: "2025-07-01",
    productName: "SuperGrip Tyre Sealant",
  };

  const [product, setProduct] = useState({ ...sampleProduct });
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={<Main product={product} setProduct={setProduct} />}
      />
      <Route path="/printpage" exact element={<PrintPage value={product} />} />
    </Routes>
  );
}

export default App;
