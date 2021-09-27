import styled from "styled-components"

const PaymentSuccessMessage = () => {
    return (
        <WrapperMessage>
            <Message>Your payment has been received</Message>
        </WrapperMessage>
    )
}

const WrapperMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    margin: 0 auto;
    background-color: brown;
`

const Message = styled.p``

export default PaymentSuccessMessage
