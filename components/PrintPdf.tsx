import React from "react";
import Printer from "react-pdf-print";
import print from "react-pdf-print";
const ids = ["1"];

export default function PrintPdf() {
  return (
    <div>
      <div className="App">
        <Printer>
          <div id={ids[0]} style={{ width: "210mm", height: "297mm" }}>
            Hello World!
          </div>
        </Printer>
        <input type="button" onClick={() => print(ids)} value="Stampa" />
      </div>
    </div>
  );
}
