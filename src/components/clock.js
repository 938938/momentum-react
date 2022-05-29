import { cleanup } from '@testing-library/react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'
import { useEffect, useRef, useState } from 'react';

const Clock = () => {

  const [time, setTime] = useState(dayjs());
  const clock = useRef(null);

  useEffect(()=>{
    clock.current = setInterval(()=>{
      setTime(dayjs())
    }, 1000)
    return ()=>{cleanup(clock.current)}
  })

  return(
    <div className='Clock'>
      {time.format('YYYY년 MM월 DD일 HH:mm:ss')}
    </div>
  )
}

export default Clock;