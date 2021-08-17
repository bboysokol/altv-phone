import dayjs from 'dayjs';
import { selectors } from 'rdx/phone/dialler';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const CallingTimer = () => {
  const start = useSelector(selectors.selectStart);
  const [time, setTime] = useState('');
  const [intr, setIntr] = useState<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const timer = setInterval(() => {
      if (start) setTime(dayjs(dayjs(new Date()).diff(start)).format('mm:ss'));
    }, 1000);

    setIntr(timer);

    return () => {
      if (intr) clearInterval(intr);
    };
  }, [start]);

  return <>{time || '00:00'}</>;
};
