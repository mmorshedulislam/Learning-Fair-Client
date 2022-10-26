import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ReactPdfPrint = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Try it!",
    onAfterPrint: () => alert("print success"),
  });
  return (
    <div>
      <div
        ref={componentRef}
        style={{ width: "100%" }}
      >
        <h1 className="text-center text-3xl">Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          distinctio at aspernatur suscipit nisi quia quidem reiciendis soluta
          ipsa temporibus?
        </p>
      </div>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default ReactPdfPrint;
