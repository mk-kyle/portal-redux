import { useState } from "react";

export default function MinuseTime() {
  const [time, setTime] = useState(60)

  if (time > 0) {
    setTimeout(() => {
      setTime(time - 1)
      if (time < 11) {
        setTime(`0${time - 1}`)
      }
    }, 1000)
  }

  const resetTimeHandler = () => {
    if (time == 0) {
      setTime(60)
    }
  }

  return (
    <div className="flex justify-end mb-5">
      <div className="shadow-inner" onClick={resetTimeHandler}>Have Time To Pay: <span className="bg-slate-500 rounded-sm p-1 text-white">{time}</span></div>
    </div>
  )
}
