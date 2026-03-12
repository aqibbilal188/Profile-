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

    // Using Web3Forms - Free email service
    // Get your access key from: https://web3forms.com
    // For now, using a placeholder - you need to get your own key
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';

    if (web3formsAccessKey === 'YOUR_ACCESS_KEY_HERE') {
      // Fallback: Just log for now until access key is set
      console.log('Contact Form Submission (Email not sent - need access key):', {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });
      
      return NextResponse.json({ 
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.' 
      });
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

