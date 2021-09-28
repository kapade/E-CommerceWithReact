import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
// import { useEffect } from "react"  
import { useState } from "react"
import styled from "styled-components"
import PaymentSuccessMessage from "./PaymentSuccessMessage"

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

const PaymentForm = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:8000/wines", {
                    amount: 1000,
                    id
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ?
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormRow>
                            <CardElement style={styles} options={CARD_OPTIONS} />
                        </FormRow>
                    </FormGroup>
                    <ButtonForCart type='submit'>Pay</ButtonForCart>
                </Form>
                :
                <PaymentSuccessMessage />
            }
        </>
    )
}

const Form = styled.form`
	margin-top: 5%;
`

const styles = {
    backgroundColor: 'red',
}

const FormGroup = styled.div`
    margin: 0 15px 20px;
	padding: 0;
	border-style: none;
	background-color: #fff;
	will-change: opacity, transform;
	box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 lightgray;
	border-radius: 4px;
`

const FormRow = styled.div`
    display: -ms-flexbox;
	display: flex;
	align-items: center;
    color: red;
	margin-left: 15px;
`

const ButtonForCart = styled.button`
    display: block;
	font-size: 16px;
	width: calc(100% - 30px);
	height: 40px;
	margin: 40px 15px 0;
	background-color: var(--color-brown);
	box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 brown;
	border-radius: 4px;
	color: #fff;
	font-weight: 600;
	cursor: pointer;
	transition: all 100ms ease-in-out;
	will-change: transform, background-color, box-shadow;
	border: none;

    &:active{
        background-color: #b6865c;
	    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #b6865c;
	    transform: scale(0.99);
    }
`


export default PaymentForm
