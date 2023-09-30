import React from 'react'
import { editUser, getUser } from '../Servers/Api.js';
import { useState, useEffect} from 'react'
import { FormControl, FormGroup, Input, InputLabel,Typography, styled, Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';


const Container= styled(FormGroup)` 
width:50%;
margin: 9% 0 0 25%;
& > div{
      margin-top: 20px;
`;

const defaultValue={
    name:'',
    email:'',
    product:'',
    phone:''
  }

const EditUser = () => {

    const [user, setUser]=useState(defaultValue)

    const nevigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
loadUserDetails();
    },[])

    const loadUserDetails= async()=>{
      const response=await getUser(id);
      console.log('hello', response.data)
      setUser(response.data[0]);
    }

    const onValueChange =(e)=>{
      //console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
       }
    const editUserDetails= async()=>{
     await editUser(user, id);
       nevigate('/all')

    }
  return (
    <div>
<Container>
            <Typography variant="h5" >Edit User</Typography>
               <FormControl>
                <InputLabel> Product Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name' value={user.name}/>
               
                </FormControl> 
                <FormControl>
                <InputLabel>Rs.</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='product' value={user.product} />
                </FormControl> 
                <FormControl>
                <InputLabel>Company</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email' value={user.email}/>
                </FormControl> 
                <FormControl>
                <InputLabel>Color</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={user.phone}/>
                </FormControl> 
                <FormControl>
                <Button variant="contained" onClick={()=>editUserDetails()}>Edit Product</Button>
                </FormControl>
            </Container>
      
    </div>
  )
}

export default EditUser