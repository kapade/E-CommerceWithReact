import styled from "styled-components"
import AddIcon from '@material-ui/icons/Add';
import { useEffect, useState } from "react";
import axios from "axios";
// import WineRouge from '../../public/images/home_wine_1_compressed.jpg'

const URL = 'http://localhost:8000/blogs'

const AddProduct = () => {

    return (
        <BackgroundPhoto>
            <Container>
                <WineImage src="https://chamisalvineyards.com/wp-content/uploads/2018/06/CV-morrito-pinot-WP_705x214.png" />
                <Form onSubmit="">
                    <WriteFormGroup>
                        <LabelPlus htmlFor="fileInput">
                            <BackgroundCircle>
                                <AddIcon />
                            </BackgroundCircle>
                            <Text>Add product photo</Text>
                        </LabelPlus>
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <InputFile type="file" id="fileInput" />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input type="text" placeholder="Title" autoFocus={true} />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input type="date" placeholder="Date" autoFocus={true} />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input type="number" placeholder="Price" autoFocus={true} />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input type="number" placeholder="Alcohol" autoFocus={true} />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input type="text" placeholder="Aroma" autoFocus={true} />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input type="text" placeholder="Flavor" autoFocus={true} />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input type="text" placeholder="Finish" autoFocus={true} />
                    </WriteFormGroup>

                    <Button type="submit">Publish</Button>
                </Form>
            </Container>
        </BackgroundPhoto>
    )
}

const BackgroundPhoto = styled.div`
    background-image: url('https://dob3qj4mreqzz.cloudfront.net/lines.png');
    margin-top: 80px;
    margin-bottom: 100px;
`

const Container = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const WineImage = styled.img`
    width: 200px;
    margin-right: 200px;
    transition: all 0.4s ease;

    &:hover {
        cursor: pointer;
    transform: translateY(-10px);
    }
`

const Form = styled.form`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const LabelPlus = styled.label`
    display: flex;
    justify-content: left;
    align-items: center;
    font-family: 'Brandon Grotesque';
    letter-spacing: 1.2px;
    margin-bottom: 20px;
`

const BackgroundCircle = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 30px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
`

const Text = styled.span`
    color: var(--color-brown);
`

const WriteFormGroup = styled.div`
    
`

const InputFile = styled.input`
    display: none;
    height: 200px;
    width: 200px;
`

const Input = styled.input`
    outline: none;
    border: none;
    border-bottom: 3px solid var(--color-gray);
    font-family: 'Brandon Grotesque';
    font-size: 20px;
    letter-spacing: 1.2px;
    margin-bottom: 40px;
    width: 100%;
    color: var(--color-brown);
`

const Button = styled.button`
    padding: 15px;
    border-radius: 10px;
    border: 3px solid var(--color-brown);
    background-color: #fff;
    color: gray;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;

    &:hover{
        cursor: pointer;
        color: #fff;
        background-color: var(--color-brown);
    }
`

export default AddProduct
