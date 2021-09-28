import axios from 'axios'
import styled from 'styled-components'
import Button from '../../components/RegistrationButton'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { Context } from "../../context/Context";
import { useState } from 'react'
import { useHistory } from 'react-router'

const PF = "http://localhost:5000/vineyards/users/updateMe"

const Settings = () => {
    const { user, dispatch } = useContext(Context)
    const history = useHistory()
    // const { updateUser, setUpdateUser } = useState(user)
    const [success, setSuccess] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    const [mobilePhone, setMobilePhone] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [country, setCountry] = useState('');


    const handleSubmit = async e => {
        e.preventDefault()
        dispatch({ type: "UPDATE_START" })
        const updatedUser = {
            firstName,
            lastName,
            address,
            city,
            password,
            passwordConfirm,
            zipCode,
            phone,
            mobilePhone,
            email,
            dateOfBirth,
            country,
        }
        console.log(updatedUser)
        console.log(dispatch({ type: "UPDATE_START" }))
        try {
            console.log('inside');
            const res = await axios.post(PF, updatedUser)
            console.log(res)
            setSuccess(true)
            console.log(res.data.data.data);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
        } catch (err) {
            console.log(err, 'mine')
            console.log(dispatch({ type: "UPDATE_FAILURE" }))
        }
        // try {
        //     fetch(`${PF}`, {
        //         method: 'PATCH',
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(updatedUser)
        //     }).then(() => {
        //         console.log('update')
        //         // history.push('/shop')
        //     })
        // } catch (error) {
        //     console.log(error, ' from edit')
        // }
    }

    return (
        <BackImage>
            <Container>
                {/* <WindowSettings>
                    <Link>EDIT</Link>
                </WindowSettings> */}
                <Infos>
                    <Title>edit profile</Title>
                    <Desc>Change the information below to edit your profile.</Desc>
                </Infos>
                <PersonInfo>personal information</PersonInfo>
                <Form id="myForm" onSubmit={handleSubmit}>
                    <FirstGroup>
                        {/* <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.userName} id="userName" type="text" placeholder="userName" />
                    </InputInfo> */}
                        <InputInfo>
                            <Input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={user.email}
                            />
                        </InputInfo>
                        <InputInfo>
                            <Input
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                placeholder={user.firstName}
                            />
                        </InputInfo>
                        <InputInfo>
                            <Input
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                placeholder={user.lastName}
                            />
                        </InputInfo>
                        <InputInfo>
                            <Input
                                onChange={(e) => setAddress(e.target.value)}
                                type="text"
                                placeholder={user.address}
                            />
                        </InputInfo>
                        <InputInfo>
                            <Input
                                onChange={(e) => setCity(e.target.value)}
                                type="text"
                                placeholder={user.city}
                            />
                        </InputInfo>
                        <InputInfo>
                            <Input
                                onChange={(e) => setCountry(e.target.value)}
                                type="text"
                                id={user.country}
                            />
                            {/* <Select>
                            <Option disabled>Countries</Option>
                            <Option onChange={(e) => handle(e)} value={data.country}>Greece</Option>
                            <Option onChange={(e) => handle(e)} value={data.country}>Italy</Option>
                            <Option onChange={(e) => handle(e)} value={data.country}>Spain</Option>
                        </Select> */}
                        </InputInfo>
                    </FirstGroup>
                    <button type='submit'>Update</button>
                    {/* <Button type='submit' value='Update'></Button> */}
                    <SecondGroup>
                        <InputInfo>
                            <Input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                            />
                        </InputInfo>
                        <InputInfo>
                            <Input
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </InputInfo>
                        <InputInfo>
                            <Input
                                onChange={(e) => setZipCode(e.target.value)}
                                type="string"
                                placeholder={user.zipCode}
                            />
                        </InputInfo>
                        <InputInfo>
                            <Input
                                onChange={(e) => setPhone(e.target.value)}
                                type="string"
                                placeholder={user.phone}
                            />
                        </InputInfo>
                        <InputInfo>
                            <Input
                                onChange={(e) => setMobilePhone(e.target.value)}
                                type="string"
                                placeholder={user.mobilePhone}
                            />
                        </InputInfo>
                        <InputInfo>
                            <Input
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                type="date"
                                placeholder={user.dateOfBirth}
                            />
                        </InputInfo>
                    </SecondGroup>
                </Form>
            </Container>
        </BackImage>
    )
}

const BackImage = styled.div`
    background-image: url("https://dob3qj4mreqzz.cloudfront.net/lines.png");
    margin-top: 100px;
    margin-bottom: 150px;
`

const Container = styled.div`
    width: 70%;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

const Infos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`

const Title = styled.h1`
    color: var(--color-title);
    font-size: 45px;
    font-weight: 500;
    font-family: 'Requiem';
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
`

const Desc = styled.p`
    color: var(--color-para);
    font-size: 14px;
    font-weight: 500;
    font-family: 'Brandon Grotesque';
    width: 50%;
    margin: 0 auto;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 20px;
    line-height: 20px;
`

const PersonInfo = styled.span`
    color: var(--color-title);
    font-size: 25px;
    font-weight: 100;
    font-family: 'Brandon Grotesque';
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0 ,0, 0.4);
    margin-top: 50px;
    padding: 10px;
`

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

export default Settings