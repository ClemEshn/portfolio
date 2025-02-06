import { Button, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { useLanguage } from '../../context/LanguageContext';
import './Header.scss'
import { about, aPropos, projets, projects, cv, resume } from "./HeaderText";

export default function Header() {
    const { language, toggleLanguage } = useLanguage();
    return (
        <Navbar className="px-3 bg-body-tertiary sticky-top">
            <NavbarBrand>Clément Eischen</NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="left">
                    <a href='#about' className='links header-link  '>
                        {language === "fr" ? aPropos : about}
                    </a>
                    <a href='#products' className='links header-link '>
                        Services
                    </a>
                    <a href='#projects' className='links header-link '>
                        {language === "fr" ? projets : projects}
                    </a>
                    <a href='#contact' className='links header-link '>
                        Contact
                    </a>
                    <a href='/CV_Clement_Eischen.pdf' target="_blank" rel="noopener noreferrer" className='links header-link '>
                        {language === "fr" ? cv : resume}
                    </a>
                    <Button className="primary-color" onClick={toggleLanguage}>
                        {language === "fr" ? "FR" : "EN"}
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}