import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {Table, Button} from "semantic-ui-react";
import { API_URL } from '../constants/API';
import {useNavigate} from 'react-router-dom';

const Read = () => {

    const [urldata, Seturldata ] = useState([]);
    const navigate = useNavigate();

    const urldataget = async() =>{
       const resp =  await axios.get(API_URL);
       Seturldata(resp.data);
    }

    const handleDelete = async (id) => {
        await axios.delete(API_URL + id);
        urldataget()
    } 

    const createpage = () => {
        navigate('/create');
    }

    const handleUpdate = ({firstname,lastname,checked,id}) => {
        localStorage.setItem('id',id)
        localStorage.setItem('firstname',firstname)
        localStorage.setItem('lastname',lastname)
        localStorage.setItem('checked',checked)
        navigate('/update');
    }

    useEffect(() =>{
        urldataget();
    },[])

    return (
        <div className="table">
        <Table singleLine>

            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Checked</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    urldata.map(data => (
                        <Table.Row key ={data.id}> 
                        <Table.Cell>{data.firstname}</Table.Cell>
                        <Table.Cell>{data.lastname}</Table.Cell>
                        <Table.Cell>{data.checked ? "Checked" : "Not Checked"}</Table.Cell>
                        <Table.Cell><Button onClick= { () => handleDelete(data.id)}>Delete</Button></Table.Cell>
                        <Table.Cell><Button onClick= { () => handleUpdate(data)}>Update</Button></Table.Cell>
                        </Table.Row>
                    ))
                }
                
            </Table.Body>
        </Table>
        <div>
            <Button onClick={createpage}> Create New User</Button>
        </div>
        </div>
    )
}

export default Read
