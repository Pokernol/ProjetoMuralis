import React, { useState } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import { Button} from 'reactstrap';
import Modals from '../Modals/Modals';
import './SideBar.css';
import home from './img/icons8-home.svg';

function SideBar(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className='side_size bg_color_nav'>
      <Nav pills vertical className='p-3'>
        <NavItem className='mb-1 center'>
          <img className='image_size' src='https://via.placeholder.com/150' alt=''/>
        </NavItem>
        <NavItem className='mb-1 item_nav_color'>
          <b className='text-light text_size'>Silva Junior</b>
        </NavItem>
        <NavItem className='mb-2 item_nav_color '>
          <b className='text-light hidden'>silvia.junior@empresa.com</b>
        </NavItem>
        <NavItem className='mb-4 mt-4'>
          <Button className='button_size item_nav_color d-flex' href="#"><img className='me-2' src={home} alt=''/><span className='hidden'>Home</span></Button> 
        </NavItem>
        <NavItem>
          <Modals to="/pagina" active className="active"/>
        </NavItem>
      </Nav>
    </div>
  );
}

export default SideBar;

