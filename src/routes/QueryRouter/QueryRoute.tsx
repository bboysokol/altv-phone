import React, { useEffect, useMemo, useState } from 'react';
import { ObjectParam, useQueryParam } from 'use-query-params';
import { QueryRouteContext } from './QueryRouteContext';
import { useQueryRouterNav } from './useQueryRouterNav';

type QueryRouteParams = {
  path: string;
  component: React.ComponentType;
  params?: { [key: string]: string };
  exact?: boolean;
};

export const QueryRoute: React.FC<QueryRouteParams> = ({ path, component, children, exact }) => {
  const Component = component;
  const { isActive } = useQueryRouterNav();
  const [root, ...nested] = path.split('~~');
  const [, subs] = nested.join('').split('~') || '';
  const [query] = useQueryParam(root, ObjectParam);
  const content = useMemo(() => <Component />, [!!isActive(path)]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!query) {
      setIsOpen(false);
      return;
    }

    if (subs) {
      const [, ...subPath] = query?.nested?.split('~') || '';
      setIsOpen(subs === subPath.join(''));
    } else {
      if (exact) {
        setIsOpen(`${query.nested ?? ''}` === nested.join(''));
      } else {
        setIsOpen(`${query.nested ?? ''}`.includes(nested.join('')));
      }
    }
  }, [root, nested, query, isActive]);

  if (Component && isOpen) {
    return (
      <QueryRouteContext.Provider
        value={{
          root,
          nested: (query && query['nested']) ?? '',
          ...query,
        }}
      >
        {content} {children}
      </QueryRouteContext.Provider>
    );
  }

  return null;
};
