import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="max-w-3xl text-center py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to SecureAuth
        </h1>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6">
          Your trusted platform for secure authentication and seamless user
          management. Protect your applications with enterprise-grade security
          solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link
            href="/signupform"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/loginform"
            className="text-blue-600 px-6 py-3 rounded-md text-sm sm:text-base font-medium border border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="mt-8 max-w-4xl text-center px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Why Choose SecureAuth?
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          We provide fast, reliable, and highly secure authentication solutions
          tailored for developers, startups, and enterprises. Whether you&poas;re
          building a small app or a large-scale platform, SecureAuth ensures
          your users stay protected with ease.
        </p>
      </div>
    </main>
  );
}
