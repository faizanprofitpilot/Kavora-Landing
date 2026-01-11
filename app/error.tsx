'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-text mb-4">
          Something went wrong!
        </h2>
        <p className="text-text-muted mb-6">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors shadow-sm"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

