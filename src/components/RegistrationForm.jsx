import styled from "styled-components"
import Button from './RegistrationButton'
import { useState } from 'react'
import Axios from 'axios'
import { Link } from "react-router-dom"
import { useHistory } from 'react-router'

/* i removed the field username from From */

const RegistrationForm = () => {
    const history = useHistory()
    const PF = "http://localhost:5000/vineyards/users/signup"
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        password: "",
        passwordConfirm: "",
        zipCode: "",
        phone: "",
        mobilePhone: "",
        email: "",
        dateOfBirth: "",
        country: ""
    })

    function submit(e) {
        console.log('inside');
        e.preventDefault()

        console.log(data, '1post')
        try {
            console.log('inside axios');
            Axios.post("http://localhost:5000/vineyards/users/signup", {
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                city: data.city,
                password: data.password,
                passwordConfirm: data.passwordConfirm,
                zipCode: data.zipCode,
                phone: data.phone,
                mobilePhone: data.mobilePhone,
                email: data.email,
                dateOfBirth: data.dateOfBirth,
                country: data.country
            })
            history.push('/login')
        } catch (error) {
            console.log(error, 'catch');
        }
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata, 'handle') //prints onChange
    }

    // I have given ID's to the elements below.
    return (
        <Container>
            <Form id="myForm" onSubmit={submit}>
                <FirstGroup>
                    {/* <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.userName} id="userName" type="text" placeholder="userName" />
                    </InputInfo> */}
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.email} id="email" type="email" placeholder="Email" />
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.firstName} id="firstName" type="text" placeholder="First Name" />
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.lastName} id="lastName" type="text" placeholder="Last Name" />
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.address} id="address" type="text" placeholder="Address" />
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.city} id="city" type="text" placeholder="City" />
                    </InputInfo>
                    <InputInfo>
                        {/* <Input onChange={(e) => handle(e)} type="text"  id="country" /> */}
                        {/* <Select>
                            <Option disabled>Countries</Option>
                            <Option onChange={(e) => handle(e)} value={data.country}>Greece</Option>
                            <Option onChange={(e) => handle(e)} value={data.country}>Italy</Option>
                            <Option onChange={(e) => handle(e)} value={data.country}>Spain</Option>
                        </Select> */}
                    </InputInfo>
                </FirstGroup>
                <Button value='sign up'>
                    <Link to="/login">Login</Link>
                </Button>
                <SecondGroup>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.password} id="password" type="password" placeholder="Password" />
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.passwordConfirm} id="passwordConfirm" type="password" placeholder="Confirm Password" />
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.zipCode} id="zipCode" type="number" placeholder="Zip Code" />
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.phone} id="phone" type="number" placeholder="Phone" />
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.mobilePhone} id="mobilePhone" type="number" placeholder="Mobile Phone" />
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.dateOfBirth} id="dateOfBirth" type="date" placeholder="Email" />
                    </InputInfo>
                </SecondGroup>
            </Form>
        </Container>
    )
}

const Container = styled.div``

const Form = styled.form`
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    position: relative;
`

const FirstGroup = styled.div`
    width: 40%;
`
const SecondGroup = styled.div`
    width: 40%;
`

const InputInfo = styled.div`
`

const Select = styled.select`
    height: 30px;
    outline: none;
    border: none;
    border-bottom: 3px solid var(--color-gray);
    font-family: 'Brandon Grotesque';
    font-size: 17px;
    letter-spacing: 1.2px;
    margin-bottom: 30px;
    width: 100%;
    color: var(--color-brown);
`

const Option = styled.option``

const Input = styled.input`
    height: 30px;
    outline: none;
    border: none;
    border-bottom: 3px solid var(--color-gray);
    font-family: 'Brandon Grotesque';
    font-size: 17px;
    letter-spacing: 1.2px;
    margin-bottom: 40px;
    width: 100%;
    color: var(--color-brown);
`

export default RegistrationForm

