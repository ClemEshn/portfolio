import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import './Header.scss'

export default function Header() {

    return (
        <Navbar className="px-3 bg-body-tertiary">
            <NavbarBrand>Clément Eischen</NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="left">
                    <a href={'#Moi'} className='links header-link text-secondary'>
                        A propos
                    </a>
                    <a href={'#Competences'} className='links header-link text-secondary'>
                        Compétences
                    </a>
                    <a href={'#Projets'} className='links header-link text-secondary'>
                        Projets
                    </a>
                    <a href={'#Contact'} className='links header-link text-secondary'>
                        Contact
                    </a>
                    <a href={'#CV'} className='links header-link text-secondary'>
                        CV
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}