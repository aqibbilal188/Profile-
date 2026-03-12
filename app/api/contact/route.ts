import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Using Web3Forms - Free email service for contact form
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!web3formsAccessKey) {
      console.error('WEB3FORMS_ACCESS_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact me directly at aqibbilal188@gmail.com' },
        { status: 500 }
      );
    }

    // Send email via Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: web3formsAccessKey,
        subject: `New Contact Form Message from ${name} - mohammedbilalai.com`,
        from_name: name,
        from_email: email,
        message: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        to_email: 'aqibbilal188@gmail.com',
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ 
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.' 
      });
    } else {
      throw new Error(data.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email me directly at aqibbilal188@gmail.com' },
      { status: 500 }
    );
  }
}

