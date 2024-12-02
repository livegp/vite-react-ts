import type { JSX } from 'react';
import {
  ErrorContainer,
  ErrorText,
  ErrorTitle,
  StyledLink,
} from './ErrorNotFound.styled.ts';

const ErrorNotFound = (): JSX.Element => {
  return (
    <ErrorContainer>
      <ErrorTitle>404</ErrorTitle>
      <ErrorText>Page Not Found</ErrorText>
      <StyledLink to='/'>Go Back Home</StyledLink>
    </ErrorContainer>
  );
};

export default ErrorNotFound;
