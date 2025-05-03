import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    const response = await fetch('http://localhost:5000/email-verificaltion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email
      }),
    });

    const data = await response.json();
    if(data.message == "Code set and sent"){
      return NextResponse.json({ 
        message: 'Email verified successfully'
      });
    }
    else{
      throw new Error('Error setting and sending code');
    }
  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 