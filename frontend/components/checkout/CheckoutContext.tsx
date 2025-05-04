'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-toastify';
import axios from 'axios';

interface ShippingInfo {
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface PaymentInfo {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

interface CheckoutContextType {
  step: number;
  shippingInfo: ShippingInfo;
  paymentInfo: PaymentInfo;
  updateShippingInfo: (info: ShippingInfo) => void;
  updatePaymentInfo: (info: PaymentInfo) => void;
  nextStep: () => void;
  prevStep: () => void;
  placeOrder: () => Promise<boolean>;
  isSubmitting: boolean;
}

const defaultShippingInfo: ShippingInfo = {
  address: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
};

const defaultPaymentInfo: PaymentInfo = {
  cardNumber: '',
  cardHolder: '',
  expiryDate: '',
  cvv: '',
};

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>(defaultShippingInfo);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>(defaultPaymentInfo);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const router = useRouter();
  const { cartItems, totalPrice, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();

  const updateShippingInfo = (info: ShippingInfo) => {
    setShippingInfo(info);
  };

  const updatePaymentInfo = (info: PaymentInfo) => {
    setPaymentInfo(info);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const placeOrder = async (): Promise<boolean> => {
    try {
      setIsSubmitting(true);
      
      if (!isAuthenticated || !user) {
        toast.error('You must be logged in to place an order');
        router.push('/auth/login');
        return false;
      }
      
      // Simulating API call to create an order
      const orderData = {
        items: cartItems,
        totalAmount: totalPrice,
        shipping: shippingInfo,
        payment: {
          // Omit sensitive data
          cardHolder: paymentInfo.cardHolder,
          // Include only last 4 digits of card
          cardLast4: paymentInfo.cardNumber.slice(-4),
          expiryDate: paymentInfo.expiryDate,
        },
      };
      
      console.log('Placing order with items:', cartItems);
      
      // Add checkout history entries to backend
      let savedOrdersCount = 0;
      for (const item of cartItems) {
        try {
          console.log(`Saving order for book ${item.id} to checkout history...`);
          const orderHistoryData = {
            email: user.email,
            book_isbn: item.id,
            total_price: item.price * item.quantity,
            qty: item.quantity,
            checkout_date_and_time: new Date().toISOString(),
          };
          
          console.log('Order history data:', orderHistoryData);
          
          const response = await axios.post('/api/checkout-history', orderHistoryData);
          console.log('Checkout history response:', response.data);
          savedOrdersCount++;
        } catch (error: any) {
          console.error('Error saving checkout history:', error);
          console.error('Error response:', error.response?.data);
          // Continue the checkout process even if history saving fails
        }
      }
      
      // Show a specific message if no orders were saved
      if (cartItems.length > 0 && savedOrdersCount === 0) {
        toast.warning('Order was processed but could not save to history. Your items will still be delivered.');
      } else if (savedOrdersCount > 0) {
        console.log(`Successfully saved ${savedOrdersCount} orders to history`);
      }
      
      // In a real app, we would make an API call to process payment
      // For now, we'll simulate a successful order
      
      // Clear the cart after successful order
      clearCart();
      
      // Redirect to processing/success page
      router.push('/checkout/success');
      
      return true;
    } catch (error: any) {
      console.error('Error placing order:', error);
      console.error('Error details:', error.response?.data || error.message);
      toast.error('Failed to place your order. Please try again.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        step,
        shippingInfo,
        paymentInfo,
        updateShippingInfo,
        updatePaymentInfo,
        nextStep,
        prevStep,
        placeOrder,
        isSubmitting,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (context === undefined) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
} 