import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';
import { hideCursor, showCursor } from '../services/AltService';
import { useEventListener } from './useEventListener';

export const useEventNavigation = (eventName: string, path: string, enableCursor?: string) => {
  const [root] = path.split('~~');
  const { navigate, close } = useQueryRouterNav();

  useEventListener(eventName, (data: any) => {
    if (data.detail) {
      navigate(path);
      enableCursor && showCursor(enableCursor);
    } else {
      close(root);
      enableCursor && hideCursor(enableCursor);
    }
  });
};
