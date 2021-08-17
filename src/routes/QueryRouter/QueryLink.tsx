import styled from '@emotion/styled';
import React from 'react';
import { useQueryRouterNav } from './useQueryRouterNav';

type QueryLinkProps = {
  to: string;
  className?: string;
};

const QueryNavLink = styled.a`
  display: block;

  &.active {
    background: red;
  }
`;

export const QueryLink: React.FC<QueryLinkProps> = ({ to, children, className }) => {
  const { navigate, isActive } = useQueryRouterNav();

  return (
    <QueryNavLink
      className={`${className} ${isActive(to) ? 'active' : ''}`}
      onClick={() => navigate(to)}
    >
      {children}
    </QueryNavLink>
  );
};
