import React, { useState, useEffect } from "react"

export const Timer = () => {

  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {

        if (second >= 59) {

          setSecond(0)
          setMinute(minute + 1)

        } else {
          setSecond(second + 1)
        }

      }, 1000)
    }

    //what does this line of code do? https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
    return () => clearInterval(intervalId);

  }, [isActive, second])

  return (
    <>
      <div>Time: {minute < 10 ? `0${minute}` : minute} : {second < 10 ? `0${second}` : second}</div>
      <button onClick={() => setIsActive(!isActive)}>Start/Pause</button>
    </>
  )
}