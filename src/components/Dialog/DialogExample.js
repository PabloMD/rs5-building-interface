import React, { useState } from "react";
import Dialog from "./Dialog";

import { Button, DialogTitle } from ".";

function DialogExample() {
  const [show, setShow] = useState(false);

  const handleConfirm = () => {
    console.log("Confirm");
    setShow(false);
  };

  const handleAbort = () => {
    console.log("Abort");
    setShow(false);
  };

  return (
    <React.Fragment>
      <Button handleClick={() => setShow(true)}>Open</Button>
      <Dialog
        show={show}
        handleConfirm={handleConfirm}
        handleAbort={handleAbort}
      >
        <DialogTitle>
          <h2>Modal title here</h2>
          <button className="close" onClick={() => setShow(false)}>
            X
          </button>
        </DialogTitle>
        <div className="modalBody">
          <h3>Some Dialog content data</h3>
          <p>Lorum ipsum asd asd sa .d.</p>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

export default DialogExample;
