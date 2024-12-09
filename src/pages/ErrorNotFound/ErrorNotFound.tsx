import type { JSX } from 'react';
import { useNavigate } from 'react-router';

const ErrorNotFound = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ whiteSpace: 'pre-wrap', color: 'red' }}>
        <strong>404</strong>
      </h1>
      <p style={{ whiteSpace: 'pre-wrap', fontSize: '0.9em' }}>
        Oops! The page you're looking for seems to have gone on vacation. Don't
        worry, you can always return to our homepage.
      </p>
      {/* <StyledLink to='/'>Return to Homepage</StyledLink> */}
      <div style={{ marginTop: '1rem' }}>
        <button
          style={{ padding: '0.5rem 1rem', marginRight: '0.5rem' }}
          type='button'
          onClick={(): void | Promise<void> => navigate(-1)}
        >
          Go Back
        </button>
        <button
          style={{ padding: '0.5rem 1rem' }}
          type='button'
          onClick={(): void | Promise<void> => navigate('/')}
        >
          Go Home
        </button>
      </div>
    </>
  );
};

export default ErrorNotFound;
