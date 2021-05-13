import React from "react";
import Pdf from "../doc/bellaSantiago.pdf"

function Callout() {
  return (
    <div className="callout">
      <div className="container text-center">
        <h2 className="mx-auto mb-5">Click below to <em>download</em> <br></br>
          the full resume
          </h2>
        <a className="btn btn-primary btn-xl" href="/doc/bellaSantiago.pdf" target="_blank" >Download Now!</a>
      </div>
    </div>


  );
};

export default Callout;