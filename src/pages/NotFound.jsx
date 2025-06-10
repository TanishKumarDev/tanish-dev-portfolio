function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-800">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-4">Oops! Looks like you're lost.</p>
      <a href="/" className="mt-6 bg-primary text-white px-6 py-3 rounded-lg font-semibold">
        Go Home
      </a>
    </div>
  );
}

export default NotFound;