import { useState } from "react";

const Clock = () => {

  const [date, setDate] = useState();

  const newDate = new Date();

  const getDate = () => {
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth()+1).padStart(2,"0");
    const day = String(newDate.getDate()).padStart(2,"0");
  
    const hours = String(newDate.getHours()).padStart(2,"0");
    const min = String(newDate.getMinutes()).padStart(2,"0");
    const sec = String(newDate.getSeconds()).padStart(2,"0");

    setDate(`${year}년 ${month}월 ${day}일 ${hours}:${min}:${sec}`)
  }
  const startClock = () => {
    setInterval(getDate, 1000)
  }

  startClock();

  return(
    <div>
      {date}
    </div>
  )
}

export default Clock;