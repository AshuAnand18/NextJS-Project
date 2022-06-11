import Link from 'next/link'; 
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });
    const handleScroll = () => {
        if (window.scrollY > 90) {
            setSticky(true);
        } else if (window.scrollY < 90) {
            setSticky(false);
        }
    }
    return ( <div className = { `header${sticky ? ' sticky' : ''}` } >
        <Navbar light expand = "md" >
        <Container>
        <NavbarBrand className="lg">ZENITH AIRWAYS
        <Image src = "https://www.freeiconspng.com/thumbs/airplane-icon-png/plane-icon-png-images--pictures--becuo-8.png"
        alt = ""
        width = { 50 }
        height = { 50 }
        />
    </NavbarBrand>
        <NavbarToggler onClick = { toggle }/> 
        <Collapse isOpen = { isOpen } navbar >
        <Nav className = "m-auto" navbar >
        <NavItem>
        <Link href = "/"><button>Home</button></Link> </NavItem> 
        <NavItem>
        <Link href = "#feature"><button className="but1">Features</button></Link></NavItem>  
        <NavItem >
        <Link href = "#about"><button className="but3">About</button></Link> 
        </NavItem>
        </Nav> 
        </Collapse> 
        </Container> 
        </Navbar>
        </div>
    );
}

export default Header;