import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Get the backend URL from environment or use a fallback for development
const getBackendUrl = () => {
  return process.env.BACKEND_URL || 'http://localhost:3001';
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { email, book_isbn, total_price, qty, checkout_date_and_time } = data;
    
    if (!email || !book_isbn || total_price === undefined || qty === undefined || !checkout_date_and_time) {
      console.error('Missing required fields in checkout history request:', data);
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const backendUrl = getBackendUrl();
    const endpoint = `${backendUrl}/checkout-history`;
    
    console.log(`Sending checkout history to backend at: ${endpoint}`);
    console.log('Checkout data:', data);
    
    // Forward the request to our backend
    const response = await axios.post(endpoint, data);
    console.log('Backend response:', response.data);
    
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Error creating checkout history:', error);
    
    // Log more detailed error information
    if (error.response) {
      console.error('Backend error response:', {
        status: error.response.status,
        data: error.response.data,
      });
    } else if (error.request) {
      console.error('No response received from backend. Request:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    
    return NextResponse.json(
      { 
        message: error.response?.data?.error || 'Failed to create checkout history' 
      },
      { status: error.response?.status || 500 }
    );
  }
} 