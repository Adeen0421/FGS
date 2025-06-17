'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ApplicationSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          <div className="mb-4">
            <CheckCircle className="mx-auto h-12 w-12 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Application Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying to FGS School. We will review your application and contact you soon regarding the next steps.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              You will receive a confirmation email shortly with your application details.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 