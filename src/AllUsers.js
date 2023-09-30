import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material'
import React from 'react'
import { getUsers, deleteUsre } from './Servers/Api.js'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import styled from '@emotion/styled'

const StyledTable=styled(Table)`
width:90%;
margin: 50px 0 0 50px;
`
const THead=styled(TableRow)`

& > th{
  color:#fff;
  font-size:20px;
  background: #000000;


`
const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;
const AllUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  },[])

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
    //console.log(response.data);
  }
  const deleteUsreDetails=async (id)=>{
    await deleteUsre(id);
    getAllUsers();
  }



  return (
    <div>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Rs.</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>

            </TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {
            users.map(user => (
              <TRow key={user._id}>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.product}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                  <Button color="secondary" variant="contained"  style={{marginRight:10}} onClick={()=>deleteUsreDetails(user._id)}>Delete</Button>
                </TableCell>
              </TRow>
            ))
          }
        </TableBody>
      </StyledTable>
    </div>
  )
}

export default AllUsers
