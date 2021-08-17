import React from 'react';
import { useEventNavigation } from '../hooks/useEventNavigation';

export const NavHandler = () => {
  useEventNavigation('client-cef.phone.show', 'phone~~locked', 'CEF_PHONE');
  return <></>;
};
