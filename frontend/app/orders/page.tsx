'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { FaBook, FaCalendarAlt, FaDollarSign, FaSpinner, FaShoppingCart } from 'react-icons/fa';

interface OrderHistoryItem {
  email: string;
  book_isbn: string;
  total_price: number;
  qty: number;
  checkout_date_and_time: string;
}

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState<OrderHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchOrderHistory = async () => {
      if (!isAuthenticated || !user) {
        router.push('/auth/login');
        return;
      }

      try {
        setIsLoading(true);
        const { data } = await axios.get(`/api/checkout-history/${user.email}`);
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch order history:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderHistory();
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Order History</h1>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <FaSpinner className="animate-spin text-primary-600 mr-2" size={24} />
          <span>Loading your orders...</span>
        </div>
      ) : orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <FaShoppingCart className="mx-auto text-gray-400 mb-4" size={48} />
          <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
          <p className="text-gray-600 mb-6">
            You haven't made any purchases yet. Start shopping to see your order history.
          </p>
          <button 
            onClick={() => router.push('/books')}
            className="btn-primary px-6"
          >
            Browse Books
          </button>
        </div>
      ) : (
        <div className="grid gap-6">
          {orders.map((order, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <FaBook className="text-primary-600 mr-2" />
                  Order #{index + 1}
                </h3>
                <span className="text-sm text-gray-500 flex items-center">
                  <FaCalendarAlt className="mr-1" />
                  {new Date(order.checkout_date_and_time).toLocaleDateString()}
                </span>
              </div>
              
              <div className="border-t border-b py-4 my-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">ISBN</p>
                    <p className="font-medium">{order.book_isbn}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Quantity</p>
                    <p className="font-medium">{order.qty}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="font-medium flex items-center">
                      <FaDollarSign className="text-green-600" size={14} />
                      {order.total_price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 