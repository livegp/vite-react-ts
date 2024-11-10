import type { FC, ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
}

export const Link: FC<LinkProps> = ({ href, children }) => (
  <a href={href} target='_blank' rel='noreferrer'>
    {children}
  </a>
);
