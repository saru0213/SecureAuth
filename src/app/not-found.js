import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-base sm:text-lg max-w-md">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
