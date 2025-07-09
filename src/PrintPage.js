import React from "react";
import "./index.css";

function Slip({ product }) {
  const organizationName = "JAINSON COATS";
  const curing = product.curing.split(" ");
  return (
    <div className="slip-main">
      <div className="center fs-13px underline">{organizationName}</div>
      <div className="center fs-18px">{product.productName}</div>

      <div className="field-line">
        <strong>Batch No:</strong> {product.batchNo}
      </div>
      <div className="field-line">
        <strong>Code No:</strong> {product.codeNo}
      </div>
      <div className="field-line">
        <strong>Curing:</strong> {curing[0]} °C for {curing[1]} MIN
      </div>
      <div className="field-line">
        <strong>D.O.M:</strong> {product.manufacturingDate}
      </div>
    </div>
  );
}

function PrintPage({ value }) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="print-page-main">
        {arr.map((elem) => {
          return <Slip product={value} key={elem} />;
        })}
      </div>
    </>
  );
}

export default PrintPage;
