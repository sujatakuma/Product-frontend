import { AppBar, Toolbar, styled } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header=styled(AppBar)`
background: #111111
`
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;
const Navbar = () => {
  return (
    <div>
      <Header>
        <Toolbar>

       
        <Tabs to='/'></Tabs>
        <Tabs to='/all'>All Products</Tabs>
        <Tabs to='/add'>Add Product</Tabs>
        </Toolbar>
      </Header>
      
    </div>
  )
}

export default Navbar
