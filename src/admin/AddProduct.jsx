import styled from "styled-components"
import AddIcon from '@material-ui/icons/Add';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { Context } from "../context/Context";

const PF = "http://localhost:5000/vineyards/products"

const AddProduct = () => {

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [price, setPrice] = useState("")
    const [alcohol, setAlcohol] = useState("")
    const [aroma, setAroma] = useState("")
    const [flavor, setFlavor] = useState("")
    const [finish, setFinish] = useState("")
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)
    // const location = useLocation()
    // const path = location.pathname.split("/")[2]
    const history = useHistory()




    const handleSubmit = async e => {
        e.preventDefault()
        const newWine = { title, year, price, alcohol, aroma, flavor, finish }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newWine.photo = filename
            try {
                await axios.post(PF, data)
            } catch (error) {
                console.log(error, ' from add')
            }
        }
        try {
            const res = await axios.post(PF, newWine);
            console.log(res)
            history.push('/shop')
            // window.location.replace("/shop");
        } catch (err) {
            console.log(err, ' from add')
        }
    }
    // try {
    //     fetch(PF, {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(newWine)
    //     }).then(() => {
    //         console.log('new wine added')
    //         history.push('/shop')
    //     })
    // } catch (error) {
    //     console.log(error)
    // }




    return (
        <BackgroundPhoto>
            <Container>
                {file && (
                    <WineImage src={URL.createObjectURL(file)} alt='wine' />
                )}
                <Form onSubmit={handleSubmit}>
                    <WriteFormGroup>
                        <LabelPlus htmlFor="fileInput">
                            <BackgroundCircle>
                                <AddIcon />
                            </BackgroundCircle>
                            <Text>Add product photo</Text>
                        </LabelPlus>
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <InputFile
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}
                            required
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input
                            type="text"
                            placeholder="Title"
                            autoFocus={true}
                            required
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input
                            type="number"
                            placeholder="Year"
                            autoFocus={true}
                            required
                            value={year}
                            onChange={e => setYear(e.target.value)}
                        />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input
                            type="number"
                            placeholder="Price"
                            autoFocus={true}
                            required
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input
                            type="text"
                            placeholder="Alcohol"
                            autoFocus={true}
                            required
                            value={alcohol}
                            onChange={e => setAlcohol(e.target.value)}
                        />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input
                            type="text"
                            placeholder="Aroma"
                            autoFocus={true}
                            required
                            value={aroma}
                            onChange={e => setAroma(e.target.value)}
                        />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input
                            type="text"
                            placeholder="Flavor"
                            autoFocus={true}
                            value={flavor}
                            onChange={e => setFlavor(e.target.value)}
                        />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input
                            type="text"
                            placeholder="Finish"
                            autoFocus={true}
                            value={finish}
                            onChange={e => setFinish(e.target.value)}
                        />
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
