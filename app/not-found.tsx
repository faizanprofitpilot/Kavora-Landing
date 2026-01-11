export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-[var(--muted-foreground)] mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[#152030] transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

