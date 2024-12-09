import styled from '@emotion/styled';
import { Link } from 'react-router';

export const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  animation: fadeIn 0.6s ease-out 0.6s both;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.06);
  }

  &:active {
    transform: translateY(0);
  }
`;
