import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

export const Time = () => {
  const [date, setDate] = useState(dayjs(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs(new Date()));
    }, 1000 * 30);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{dayjs(date).format('HH:mm')}</>;
};
