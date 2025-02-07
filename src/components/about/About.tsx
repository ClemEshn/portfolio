import { Button } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";
import {title, titre, texte, text, MeContacter, ContactMe, monCV, getResume} from "./AboutText";
export default function About(){
    const { language } = useLanguage();
    return (
        <div id="about" className="my-container">
            <div className="flex unflexMobile">
                <div>
                    <h1>Clément Eischen</h1>
                    <h2>{language === "fr" ? titre : title}</h2>
                    <p className="justify-mob">{language === "fr" ? texte : text}</p>
                </div>
                <div className="center fullwidth">
                    <img className="img-me" src="/img.jpg"/>
                </div>
            </div>
            <div className="center">
                <a href="#contact"><Button className="primary-color">{language === "fr" ? MeContacter : ContactMe}</Button></a>
            </div>
            <div className="center hideDesktop">
                <a href={language === "fr" ? '/CV_Clement_Eischen.pdf' : '/Resume_Clement_Eischen.pdf'}><Button className="primary-color">{language === "fr" ? monCV : getResume}</Button></a>
            </div>
        </div>
    )
}