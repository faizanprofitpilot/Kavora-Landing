'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
          Something went wrong!
        </h2>
        <p className="text-[var(--muted-foreground)] mb-6">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[#152030] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

