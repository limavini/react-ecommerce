import React from "react";
import StripeCheckout from "react-stripe-checkout";

// https://github.com/azmenak/react-stripe-checkout

// Cartao para testar
// 4242 4242 4242 4242
// 01/21 - 123

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_LPArUhNfsbytO1FcwvjQnqi800cQszunox";

    const onToken = (token) => {
        alert("Payment successfull!")
    }

    return (
        <StripeCheckout 
        amount={priceForStripe}
        label="Pay Now"
        // TODO: Modify name
        name="CRWN Clothing Ltd." 
        shippingAddress
        billingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;