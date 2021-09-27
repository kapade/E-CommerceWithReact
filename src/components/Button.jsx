import styled from "styled-components"

const Button = ({ value,onClick }) => {
    return (
        <div>
            <PrimaryButton onClick={onClick}>{value}</PrimaryButton>
        </div>
    )
}

const PrimaryButton = styled.button`
    color: var(--color-para);
    border-radius: 30px;
    padding-right: 20px;
    padding-left: 20px;
    height: 35px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.7px;
    border: 3px solid var(--color-brown);
    background-color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
    background-color: var(--color-brown);
    color: #fff;
    transition: all 0.2s ease-in-out;
}
`

export default Button
