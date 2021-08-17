import { ObjectParam, useQueryParam, useQueryParams } from 'use-query-params';

export const useQueryRouterNav = () => {
  const [query, setQuery] = useQueryParams({});

  const close = (path: string) => {
    const [root] = path.split('~~');
    setQuery({ [root]: undefined });
  };

  const navigate = (path: string, params?: { [key: string]: string }) => {
    const [root, ...nested] = path.split('~~');

    setQuery({
      [root]: ObjectParam.encode({
        nested: nested.join('~~'),
        ...params,
      }),
    });
  };

  const isActive = (path: string) => {
    const [root, nested = ''] = path.split('~~');
    const [param] = useQueryParam(root, ObjectParam);

    return param && param['nested']?.includes(nested);
  };

  return {
    close,
    navigate,
    isActive,
  };
};
