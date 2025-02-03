import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import './Header.scss'

export default function Header() {

    return (
        <Navbar className="px-3 bg-body-tertiary sticky-top">
            <NavbarBrand>Clément Eischen</NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="left">
                    <a href='#about' className='links header-link  '>
                        A propos
                    </a>
                    <a href='#products' className='links header-link '>
                        Services
                    </a>
                    <a href='#projects' className='links header-link '>
                        Projets
                    </a>
                    <a href='#contact' className='links header-link '>
                        Contact
                    </a>
                    <a href='/CV_Clement_Eischen.pdf' target="_blank" rel="noopener noreferrer" className='links header-link '>
                        CV
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}