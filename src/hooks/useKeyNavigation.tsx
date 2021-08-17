import { useEffect, useState } from 'react';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';
import { hideCursor, showCursor } from '../services/AltService';

export const useKeyNavigation = (
  keyCode: string,
  path: string,
  enableCursor?: string,
  onlyOpen?: boolean,
  onOpen?: () => void,
  onClose?: () => void,
) => {
  const { navigate, close, isActive } = useQueryRouterNav();
  const active = isActive(path);
  const [root] = path.split('~~');

  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    if (keyPressed) {
      if (active && !onlyOpen) {
        onClose && onClose();
        enableCursor && hideCursor(enableCursor);
        close(root);
      } else {
        enableCursor && showCursor(enableCursor);
        onOpen && onOpen();
        navigate(path);
      }
    }
  }, [keyPressed]);

  const isRequiredKey = (key: string) => key.toLowerCase() === keyCode.toLowerCase();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (isRequiredKey(event.key)) {
      setKeyPressed(true);
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (isRequiredKey(event.key)) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
};
