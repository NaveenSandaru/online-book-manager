'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCheckout } from './CheckoutContext';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { FaHistory } from 'react-icons/fa';

const shippingSchema = z.object({
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  postalCode: z.string().min(1, 'Postal code is required'),
  country: z.string().min(1, 'Country is required'),
});

type ShippingFormValues = z.infer<typeof shippingSchema>;

export default function ShippingForm() {
  const { 
    shippingInfo, 
    updateShippingInfo, 
    savedShippingInfo, 
    loadSavedShippingInfo
  } = useCheckout();
  const { isAuthenticated, user } = useAuth();
  const [dataLoaded, setDataLoaded] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    reset,
  } = useForm<ShippingFormValues>({
    resolver: zodResolver(shippingSchema),
    defaultValues: shippingInfo,
    mode: 'onBlur', // Only validate on blur, not while typing
  });

  // Load saved shipping info when component mounts
  useEffect(() => {
    const autoLoadSavedInfo = async () => {
      if (isAuthenticated && user && !dataLoaded) {
        try {
          await loadSavedShippingInfo();
          setDataLoaded(true);
        } catch (error) {
          console.error('Failed to auto-load shipping info:', error);
        }
      }
    };

    autoLoadSavedInfo();
  }, [isAuthenticated, user, loadSavedShippingInfo, dataLoaded]);

  // Reset form when shipping info changes (e.g., when saved info is loaded)
  useEffect(() => {
    reset(shippingInfo);
  }, [shippingInfo, reset]);

  // Auto-save form values on change
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name && value[name] !== undefined) {
        // Use timeout to avoid calling too frequently during typing
        const timeoutId = setTimeout(() => {
          updateShippingInfo(getValues() as ShippingFormValues);
        }, 500);
        
        return () => clearTimeout(timeoutId);
      }
    });
    
    return () => subscription.unsubscribe();
  }, [watch, updateShippingInfo, getValues]);

  const handleLoadSavedInfo = async () => {
    await loadSavedShippingInfo();
  };

  return (
    <form className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Shipping Information</h2>
        {isAuthenticated && savedShippingInfo && (
          <button 
            type="button"
            onClick={handleLoadSavedInfo}
            className="text-primary-600 flex items-center text-sm"
          >
            <FaHistory className="mr-1" /> Load Saved
          </button>
        )}
      </div>
      
      <div>
        <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
          Street Address
        </label>
        <input
          id="address"
          type="text"
          className="input-field"
          {...register('address')}
        />
        {errors.address && <p className="form-error">{errors.address.message}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-gray-700 font-medium mb-1">
            City
          </label>
          <input
            id="city"
            type="text"
            className="input-field"
            {...register('city')}
          />
          {errors.city && <p className="form-error">{errors.city.message}</p>}
        </div>
        
        <div>
          <label htmlFor="state" className="block text-gray-700 font-medium mb-1">
            State/Province
          </label>
          <input
            id="state"
            type="text"
            className="input-field"
            {...register('state')}
          />
          {errors.state && <p className="form-error">{errors.state.message}</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="postalCode" className="block text-gray-700 font-medium mb-1">
            Postal/Zip Code
          </label>
          <input
            id="postalCode"
            type="text"
            className="input-field"
            {...register('postalCode')}
          />
          {errors.postalCode && <p className="form-error">{errors.postalCode.message}</p>}
        </div>
        
        <div>
          <label htmlFor="country" className="block text-gray-700 font-medium mb-1">
            Country
          </label>
          <select
            id="country"
            className="input-field"
            {...register('country')}
          >
            <option value="">Select country</option>
            <option value="LK">Sri Lanka</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="AU">Australia</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="JP">Japan</option>
            <option value="IN">India</option>
          </select>
          {errors.country && <p className="form-error">{errors.country.message}</p>}
        </div>
      </div>
    </form>
  );
} 