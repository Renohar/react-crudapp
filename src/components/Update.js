import React ,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {API_URL} from "../constants/API";
import {Form, Button, Checkbox} from "semantic-ui-react";
import axios from 'axios';

const Update = () => {

    const [firstname,Setfirstname] = useState('');
    const [lastname,Setlastname] = useState('');
    const [checked,Setchecked] = useState(false);
    const [id,Setid] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        Setid(localStorage.getItem('id'))
        Setfirstname(localStorage.getItem('firstname'))
        Setlastname(localStorage.getItem('lastname'))
        Setchecked(localStorage.getItem('checked'))
    },[])

    const postUpdate = async () => {
        await axios.put(API_URL + id, {
            firstname,lastname,checked
        });
        navigate('/read');
    }

    return (
        <div className="create">
        <Form>

            <Form.Field>
                <label>First Name</label>
                <input 
                placeholder="Enter your First Name"
                value = {firstname}
                onChange = {(e) =>Setfirstname(e.target.value)}/>
            </Form.Field>

            <Form.Field>
                <label>Last Name</label>
                <input 
                placeholder="Enter your Last Name"
                value = {lastname}
                onChange = {(e) =>Setlastname(e.target.value)}/>
            </Form.Field>

            <Form.Field>
                <Checkbox 
                label="Agree the Terms & Conditions"
                value = {checked}
                onChange = {(e) =>Setchecked(!checked)}
                />
            </Form.Field>

            <Button onClick= { postUpdate} >Update</Button>


        </Form>
        </div>
    )
}

export default Update
