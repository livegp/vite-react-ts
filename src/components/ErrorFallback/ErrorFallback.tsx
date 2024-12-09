import type { ReactElement } from 'react';
import type { FallbackProps } from 'react-error-boundary';

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps): ReactElement => {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ whiteSpace: 'pre-wrap', color: 'red' }}>
        <strong>Error: </strong>
        {error.message}
      </pre>
      <pre style={{ whiteSpace: 'pre-wrap', fontSize: '0.9em' }}>
        <strong>Stack trace: </strong>
        {error.stack}
      </pre>
      <button
        type='button'
        onClick={resetErrorBoundary}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}
      >
        Try again
      </button>
    </div>
  );
};
