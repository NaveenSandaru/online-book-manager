import { NextResponse } from 'next/server';

// Get the backend URL from environment or use a fallback for development
const getBackendUrl = () => {
  return process.env.BACKEND_URL || 'http://localhost:5000';
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const backendUrl = getBackendUrl();
    // Forward the request to the backend
    const response = await fetch(`${backendUrl}/books/${params.id}`);
    
    if (!response.ok) {
      return new NextResponse(
        JSON.stringify({ message: 'Failed to fetch book details' }),
        {
          status: response.status,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    const book = await response.json();
    return NextResponse.json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    return new NextResponse(
      JSON.stringify({ message: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
} 