import React from "react";
import { Link, Outlet } from "react-router-dom";

function Main({ product, setProduct }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="main-container">
      <h2>Enter Product Details</h2>
      <form className="product-form">
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
          />
        </label>
        <label>
          Batch No:
          <input
            type="text"
            name="batchNo"
            value={product.batchNo}
            onChange={handleChange}
          />
        </label>

        <label>
          Code No:
          <input
            type="text"
            name="codeNo"
            value={product.codeNo}
            onChange={handleChange}
          />
        </label>

        <label>
          Curing: (in °C, min) eg: "20 15"
          <input
            type="text"
            name="curing"
            value={product.curing}
            onChange={handleChange}
          />
        </label>

        <label>
          Manufacturing Date:
          <input
            type="text"
            name="manufacturingDate"
            value={product.manufacturingDate}
            onChange={handleChange}
          />
        </label>
      </form>

      <Link to="/printpage" className="submit-link">
        Submit
      </Link>
      <Outlet />
    </div>
  );
}

export default Main;
