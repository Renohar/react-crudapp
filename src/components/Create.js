import React, {useState} from 'react';
import {API_URL} from "../constants/API";
import {Form, Button, Checkbox} from "semantic-ui-react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Create = () => {

    const [firstname,Setfirstname] = useState('');
    const [lastname,Setlastname] = useState('');
    const [checked,Setchecked] = useState(false);
    const navigate = useNavigate();

    const Posthandle = () => {
        axios.post(API_URL,{
            firstname,lastname,checked
        });
        navigate("/read");
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

            <Button onClick={Posthandle}>Submit</Button>


        </Form>
        </div>
    )
}

export default Create
