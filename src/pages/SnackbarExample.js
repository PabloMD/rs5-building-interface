import { useCallback, useState } from "react";
import { Button } from "../components/Layout";
import Snackbar from "../components/Snackbar/Snackbar";

function useSnackbar(initial) {
  const [show, setShow] = useState(initial);

  const showIt = () => {
    setShow(true);
  };

  const hideIt = useCallback(() => {
    setShow(false);
  }, []);

  return [show, showIt, hideIt];
}

function SnackbarExample() {
  const [goodShow, showGood, hideGood] = useSnackbar(false);
  const [badShow, showBad, hideBad] = useSnackbar(false);
  const [rightShow, showRightBad, hideRight] = useSnackbar(false);


  return (
    <div>
      <div>
        <Button handleClick={showGood}>Show good</Button>
        <Snackbar show={goodShow} timeout="3000" onClose={hideGood}>
          Good snackbar
        </Snackbar>
      </div>
      <div>
        <Button handleClick={showBad}>Show bad</Button>
        <Snackbar
          position="left-center"
          type="error"
          show={badShow}
          timeout="3000"
          onClose={hideBad}
        >
          Bad snackbar
        </Snackbar>
      </div>

      <div>
        <Button handleClick={showRightBad}>Show top right</Button>
        <Snackbar
          position="right-top"
          show={rightShow}
          timeout="5000"
          onClose={hideRight}
        >
          Bar
        </Snackbar>
      </div>
    </div>
  );
}

export default SnackbarExample;
