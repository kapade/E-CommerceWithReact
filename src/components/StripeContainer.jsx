import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = 'pk_test_51JddNpDwqxNQKhKw4cuD5VS72INsMEJ6pQhHRXsBpQeOihwoqRRdfDjvLx6fH8wKhpzrAKCyQix45QlmiLendhwF00kzslGeXZ '

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer
