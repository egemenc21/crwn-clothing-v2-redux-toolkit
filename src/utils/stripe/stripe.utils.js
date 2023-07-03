import {loadStripe} from "@stripe/stripe-js";
//stripe instance
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
