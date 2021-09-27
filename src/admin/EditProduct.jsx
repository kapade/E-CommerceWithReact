import styled from "styled-components"
import AddIcon from '@material-ui/icons/Add';
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";

const EditProduct = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const id = location.state?.wineId
    const [wine, setWine] = useState([])
    const PF = "http://localhost:5000/vineyards/products"
    // const { user } = useContext(Context)
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [price, setPrice] = useState("")
    const [alcohol, setAlcohol] = useState("")
    const [aroma, setAroma] = useState("")
    const [flavor, setFlavor] = useState("")
    const [finish, setFinish] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
    const history = useHistory()


    // fix error with message!!!!!!!


    useEffect(() => {
        const fetchWine = async () => {
            const res = await axios.get(`${PF}/${path}`)
            console.log(res)
            setWine(res.data.data.data)
            setTitle(res.data.data.data.title)
            setYear(res.data.data.data.year)
            setPrice(res.data.data.data.price)
            setAlcohol(res.data.data.data.alcohol)
            setAroma(res.data.data.data.aroma)
            setFlavor(res.data.data.data.flavor)
            setFinish(res.data.data.data.finish)
        }
        fetchWine()
    }, [path])


    // const handleDelete = async () => {
    //     try {
    //         await axios.delete('/blogs/' + path)
    //         window.location.replace('/')
    //     } catch (error) {
    //         console.log("You didn't delete! Try again")
    //     }
    // }

    // const handleUpdate = async () => {
    //     try {
    //         await axios.put('/blogs/' + path) &
    //             setUpdateMode(false)
    //     } catch (error) {
    //         console.log("You didn't delete! Try again")
    //     }
    // }

    const handleUpdate = e => {
        e.preventDefault()
        const wine = { title, year, price, alcohol, aroma, flavor, finish }

        fetch(`${PF}/${path}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(wine)
        }).then(() => {
            console.log('new wine added')
            history.push('/shop')
        })
    }

    return (
        <BackgroundPhoto>
            <Container>
                {wine.photo && (
                    <WineImage src={PF + wine.photo} />
                )} {

                }
                <Form onSubmit={handleUpdate}>
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
                        <Input
                            type="text"
                            placeholder="Title"
                            autoFocus={true}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input
                            type="number"
                            placeholder="Year"
                            autoFocus={true}
                            value={year}
                            onChange={e => setYear(e.target.value)}
                        />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input
                            type="number"
                            placeholder="Price"
                            autoFocus={true}
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input
                            type="number"
                            placeholder="Alcohol"
                            autoFocus={true}
                            value={alcohol}
                            onChange={e => setAlcohol(e.target.value)}
                        />
                    </WriteFormGroup>
                    <WriteFormGroup>
                        <Input
                            type="text"
                            placeholder="Aroma"
                            autoFocus={true}
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
                    <WriteFormGroup>
                        <Button type="submit">Update</Button>
                        {/* <Button type="submit">Delete</Button> */}
                    </WriteFormGroup>
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
    &:nth-last-child(1){
        display: flex;
        justify-content: space-between;
    }
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
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: lightblue;


    &:hover{
        cursor: pointer;
        color: lightblue;
        background-color: #fff;
        border: 3px solid lightblue;
    }

    &:nth-last-child(1){
        border: 3px solid coral;
        background-color: #fff;
        color: coral;

        &:hover{
        cursor: pointer;
        color: lightblue;
        background-color: coral;
        color: #fff;
    }
    }
`

export default EditProduct
