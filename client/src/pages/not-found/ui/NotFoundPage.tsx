import { Link } from 'react-router-dom';
function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold text-gray-900">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page not found
        </h2>

        <p className="mt-3 text-gray-500">
          The page you are looking for does not exist or was moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
export default NotFoundPage;
