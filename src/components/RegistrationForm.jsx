import styled from "styled-components"
import Button from './RegistrationButton'
import { useState } from 'react'
import Axios from 'axios'
import { Link } from "react-router-dom"


const RegistrationForm = () => {
    const PF = "http://localhost:5000/vineyards/users/signup"
    const [data, setData] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        password: "",
        confirmPassword: "",
        zipCode: "",
        phone: "",
        mobile: "",
        email: "",
        date: ""
    })

    function submit(e) {
        console.log('inside');
        e.preventDefault()

        console.log(data, '1post')
        try {
            console.log('inside axios');
            // Axios.get(PF, {
            //     userName: data.userName,
            //     firstName: data.firstName,
            //     lastName: data.lastName,
            //     address: data.address,
            //     city: data.city,
            //     password: data.password,
            //     confirmPassword: data.confirmPassword,
            //     zipCode: data.zipCode,
            //     phone: data.phone,
            //     mobile: data.mobile,
            //     email: data.email,
            //     date: data.date
            // })
            Axios.post(PF, {
                firstName: data.firstName,
                lastName: data.lastName,
            }).then(res => {
                console.log(res)
            })
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
            <Form id="myForm" onSubmit={(e) => submit(e)}>
                <FirstGroup>
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
                    {/* <InputInfo>
                        <Select>
                            <Option>Greece</Option>
                            <Option>Italy</Option>
                            <Option>Spain</Option>
                        </Select>
                    </InputInfo> */}
                </FirstGroup>
                <Button>
                    <Link to="/login">Login</Link>
                </Button>
                <SecondGroup>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.password} id="password" type="password" placeholder="Password" />
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.confirmPassword} id="confirmPassword" type="password" placeholder="Confirm Password" />
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.zipCode} id="zipCode" type="number" placeholder="Zip Code" />
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.phone} id="phone" type="number" placeholder="Phone" />
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.mobile} id="mobile" type="number" placeholder="Mobile Phone" />
                    </InputInfo>
                    <InputInfo>
                    </InputInfo>
                    <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.date} id="date" type="date" placeholder="Email" />
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

