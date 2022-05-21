import dayjs from 'dayjs';
import 'dayjs/locale/ko'
import { useEffect, useRef, useState } from 'react';

const Clock = () => {

  let nowClock = dayjs().format('YYYY년 MM월 DD일 / HH:mm:ss');
  const [time, setTime] = useState(nowClock);
  const interval = useRef(null);

  useEffect(()=>{
    interval.current = setInterval(()=>{
      setTime(nowClock);
    },1000)
    return () => clearInterval(interval.current);
  })

  return(
    <div>
      {time}
    </div>
  )
}

export default Clock;