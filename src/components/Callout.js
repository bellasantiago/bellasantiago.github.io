import React from "react";

function Callout() {
    return (
        <div className="callout">
        <div className="container text-center">
          <h2 className="mx-auto mb-5">Click below to <em>download</em> <br></br>
          the full resume
          </h2>
          <button className="btn btn-primary btn-xl" href="./doc/Bella Santiago.pdf" target="_blank">Download Now!</button>
        </div>
      </div>
    );
};

export default Callout;