import { Button } from ".";

import "./Dialog.scss";

function Dialog({ children, show, handleConfirm, handleAbort }) {
  return (
    <div style={{ display: show ? "block" : "none" }}>
      <div className="modalBack">
        <div className="modalWrapper">
          {children}
          <div>
            <Button handleClick={handleConfirm}>Confirm</Button>
            <Button handleClick={handleAbort}>Abort</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
