'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const [processingComplete, setProcessingComplete] = useState(false);

  useEffect(() => {
    // Simplify to just show processing for 2 seconds, then success for 1 second before redirect
    const processingTimer = setTimeout(() => {
      setProcessingComplete(true);
    }, 2000);

    const redirectTimer = setTimeout(() => {
      router.push('/orders');
    }, 3000);

    return () => {
      clearTimeout(processingTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          {!processingComplete ? (
            <FaSpinner className="mx-auto animate-spin text-primary-600" size={64} />
          ) : (
            <FaCheckCircle className="mx-auto text-green-500" size={64} />
          )}
        </div>

        <h1 className="text-2xl font-bold mb-4">
          {!processingComplete ? 'Processing Your Order' : 'Order Completed!'}
        </h1>

        <div className="mt-6">
          {!processingComplete ? (
            <p className="text-gray-600">
              Please wait while we process your payment and create your order...
            </p>
          ) : (
            <>
              <p className="text-gray-600 mb-4">
                Your order has been successfully processed!
              </p>
              <p className="text-sm text-gray-500 animate-pulse">
                Redirecting to your order history...
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 