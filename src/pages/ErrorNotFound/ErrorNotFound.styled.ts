import styled from '@emotion/styled';
import { Link } from 'react-router';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

export const ErrorTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const ErrorText = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
`;

export const StyledLink = styled(Link)`
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;
