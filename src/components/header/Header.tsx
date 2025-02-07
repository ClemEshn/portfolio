import { Button, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { useLanguage } from '../../context/LanguageContext';
import './Header.scss'
import { about, aPropos, projets, projects, cv, resume } from "./HeaderText";
import Socials from "../socials/Socials";

export default function Header() {
    const { language, toggleLanguage } = useLanguage();
    return (
        <Navbar className="px-3 bg-body-tertiary sticky-top">
            <NavbarBrand>Clément Eischen</NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="left">
                    <a href='#about' className='links header-link hideMobile'>
                        {language === "fr" ? aPropos : about}
                    </a>
                    <a href='#products' className='links header-link hideMobile'>
                        Services
                    </a>
                    <a href='#projects' className='links header-link hideMobile'>
                        {language === "fr" ? projets : projects}
                    </a>
                    <a href='#contact' className='links header-link hideMobile'>
                        Contact
                    </a>
                    <a href={language === "fr" ? '/CV_Clement_Eischen.pdf' : '/Resume_Clement_Eischen.pdf'} target="_blank" rel="noopener noreferrer" className='links header-link hideMobile'>
                        {language === "fr" ? cv : resume}
                    </a>
                    <Socials forMobile={true}/>
                    <Button className="primary-color" onClick={toggleLanguage}>
                        {language === "fr" ? "FR" : "EN"}
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}