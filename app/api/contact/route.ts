import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the payload server-side
    console.log('Contact form submission:', JSON.stringify(body, null, 2));
    
    // Return success response
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

