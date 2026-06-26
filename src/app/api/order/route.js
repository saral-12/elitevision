import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request) {
  try {
    const { amount, currency } = await request.json();
    
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Fallback: If Razorpay keys are not configured in Vercel/env, return a mock order
    if (!keyId || !keySecret) {
      console.warn("Razorpay environment variables are missing. Running in simulated demo mode.");
      return NextResponse.json({
        id: "order_demo_" + Math.random().toString(36).substring(2, 11),
        amount: Math.round(amount * 100), // In paise
        currency: currency || "INR",
        demoMode: true,
        key: "rzp_test_placeholder"
      });
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const options = {
      amount: Math.round(amount * 100), // Amount in paise
      currency: currency || "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(2, 9),
    };

    const order = await razorpay.orders.create(options);
    
    // Add public key to payload so client knows which key to use
    return NextResponse.json({
      ...order,
      key: keyId,
      demoMode: false
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Failed to create order", details: error.message },
      { status: 500 }
    );
  }
}
