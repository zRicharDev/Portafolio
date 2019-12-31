import React from 'react';
import{elastic as Menu} from 'react-burger-menu';


const SideBar = props => {
  return (
    <Menu right {...props}>

    <a className="menu-item"href="/" > Home</a>
   
    <a className="menu-item"href="burger" >Burger</a>
    
    <a className="menu-item"href="pizza" >Pizza</a>
    
    <a className="menu-item"href="otros" >Otros</a>
    
    
    </Menu>
  );
};

export default SideBar;

