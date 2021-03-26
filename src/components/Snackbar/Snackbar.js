import React, { useEffect } from "react";

import "./Snackbar.scss";

function Snackbar({ type = "success", show, timeout = 5000, onClose, position = "center-bottom", children }) {

  useEffect(() => {
    let timeoutId;

    if (show) {
      timeoutId = setTimeout(() => {
        onClose && onClose();
      }, timeout);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [show, timeout, onClose]);

    const getStyle = () => {
        let [horizontal, vertical] = position.split("-");

        const result = {};
        switch (vertical) {
          case "top":
            result.top = 5;
            break;
          case "bottom":
            result.bottom = 5;
            break;
          default:
            result.top = '50%';
            result.transform = "translateY(-50%)";
        }

        switch (horizontal) {
          case "left":
            result.left = 5;
            break;
          case "right":
            result.right = 5;
            break;
          default:
            result.left = '50%' ;
            result.transform = "translateX(-50%)";
        }

        return result;
    };
  return (
    <React.Fragment>
      {show && (
        <div style={getStyle()} className={`snackbarContent ${type}`}>
          {children}
        </div>
      )}
    </React.Fragment>
  );
}

export default Snackbar;
