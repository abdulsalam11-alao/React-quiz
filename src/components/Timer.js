import { useEffect } from "react";

function Timer({ dispatch, secondRemaining }) {
  const min = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 && 0}
      {min}: {seconds < 10 && 0}
      {seconds}
    </div>
  );
}

export default Timer;
