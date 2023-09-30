import React from 'react'
import { addUser } from './Servers/Api';
import { useState } from 'react'
import { FormControl, FormGroup, Input, InputLabel,Typography, styled, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';
const Container= styled(FormGroup)` 
width:50%;
margin: 5% 0 0 25%;
& >div{
     margin-top: 20px
`;

const defaultValue={
    name:'',
    email:'',
    product:'',
    phone:'',
  }

const Create = () => {

    const [user, setUser]=useState(defaultValue)

    const nevigate=useNavigate();

    const onValueChange =(e)=>{
        
        setUser({ ...user, [e.target.name]:e.target.value});
       
    }
    const addUserDetails= async()=>{
       await addUser(user);
       nevigate('/all');

    }
  return (
    <div>
<Container>
            <Typography variant="h5" > Add Products</Typography>
               <FormControl>
                <InputLabel>Product Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name'/>
               
                </FormControl> 
                <FormControl>
                <InputLabel>Rs.</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='product'/>
                </FormControl> 
                <FormControl>
                <InputLabel>Company</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email'/>
                </FormControl> 
                <FormControl>
                <InputLabel>Color</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone'/>
                </FormControl> 
                <FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()}>Add</Button>
                </FormControl>
            </Container>
      
    </div>
  )
}

export default Create
