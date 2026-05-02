"use client";

import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

export default function PaymentPage() {

    const config = {
        public_key: "YOUR_PUBLIC_KEY",
        tx_ref: Date.now().toString(),
        amount: 10000,
        currency: "UGX",
        payment_options: "mobilemoneyuganda,card",
        customer: {
            email: "user@example.com",
            name: "User",
        },
        customizations: {
            title: "Premium Access",
            description: "Upgrade your account",
        },
    };

    const fwConfig = {
        ...config,
        text: "Pay Now",
        callback: (response: any) => {
            console.log(response);
            closePaymentModal();
            alert("Payment successful!");
        },
        onClose: () => {
            console.log("Payment closed");
        },
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Payment Page</h1>
            <FlutterWaveButton {...fwConfig} />
        </div>
    );
}