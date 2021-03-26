import React from "react";
import { Button } from "../Layout";

import "./Dialog.scss";

function Dialog({ children, show, handleConfirm, handleAbort }) {
  return (
    <React.Fragment>
      { show &&
      <div className="modalBack">
        <div className="modalWrapper">
          {children}
          <div>
            <Button handleClick={handleConfirm}>Confirm</Button>
            <Button handleClick={handleAbort}>Abort</Button>
          </div>
        </div>
      </div> }
    </React.Fragment>
  );
}

export default Dialog;
