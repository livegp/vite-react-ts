import type { JSX } from 'react';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router';

interface ErrorLayoutProps {
  title: string;
  message: string;
  details?: string | undefined;
}

const ErrorLayout = ({
  title,
  message,
  details,
}: ErrorLayoutProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{message}</p>
        {details && (
          <details>
            <summary>Technical Details</summary>
            <pre>{details}</pre>
          </details>
        )}
        <div>
          <button
            type='button'
            onClick={(): void | Promise<void> => navigate(-1)}
          >
            Go Back
          </button>
          <button
            type='button'
            onClick={(): void | Promise<void> => navigate('/')}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export function ErrorBoundaryRoute(): JSX.Element {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorLayout
        title={`${error.status} ${error.statusText}`}
        message={
          error.data?.message || 'An error occurred while loading this page'
        }
        details={error.data?.stack}
      />
    );
  }

  if (error instanceof Error) {
    return (
      <ErrorLayout
        title='Application Error'
        message={error.message}
        details={error.stack}
      />
    );
  }

  return (
    <ErrorLayout title='Unknown Error' message='An unexpected error occurred' />
  );
}
