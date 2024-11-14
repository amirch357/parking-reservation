import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Dropdown

} from 'reactstrap';
import "../../layout.css"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [dropDownOpen,setDropDownOpen] = useState(false)
    const toggleDropdown = () => setDropDownOpen(!dropDownOpen);
    return (
        <React.Fragment>
            <Navbar expand="lg" style={{ backgroundColor: "#0d3072", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >
                <NavbarBrand href="/">
                    <img src="/assets/img/Sirius_logo_blau.jpg" style={{ width: 89, height: 58 }} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar  >
                        <NavItem>
                            <Link className='nav-link mx-4' href="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link mx-4' href="/">
                                Parking
                            </Link>
                        </NavItem>

                    </Nav>
                    <NavbarText className='user-name mx-2' >Zepter</NavbarText>
                    <Dropdown toggle={toggleDropdown} isOpen={dropDownOpen}  >
                        <DropdownToggle className='avatar-container'  >
                           <img src='/assets/icons/user.svg' style={{width:"100%",height:"100%"}} />
                        </DropdownToggle>
                        <DropdownMenu container="body">
                            <DropdownItem >
                                Action 1
                            </DropdownItem>
                            <DropdownItem >
                                Action 2
                            </DropdownItem>
                            <DropdownItem >
                                Action 3
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default Header