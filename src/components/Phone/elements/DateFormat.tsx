import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

export const DateFormat = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000 * 60 * 60);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {dayjs(date)
        .format('dddd, D MMMM')
        .replace(/^\w/, (c) => c.toUpperCase())}
    </>
  );
};
