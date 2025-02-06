import { useLanguage } from "../../context/LanguageContext";
import { jukeBody, jukeCorps, jukeTitle, jukeTitre, stripeBody, stripeCorps, stripeTitle, stripeTitre, supinfoBody, supinfoCorps, supinfoTitle, supinfoTitre } from "./ProjectsText";

export default function Projects() {
    const {language} = useLanguage();
    return (
        <div id="projects" className="my-container">
            <div className="box-container">
                <h2 className="center">Projets</h2>
                <div className="jukebar flex gapFlex unflexMobile mb20">
                    <img src="/illustration/jukebar.png" className="illu-project" width="400px" height="250" alt="Jukebar project" />
                    <div>
                        <h3>{language === "fr" ? jukeTitre : jukeTitle}</h3>
                        <p style={{ marginBottom: 0 }} className="justify nocenter">
                            {language === "fr" ? jukeCorps : jukeBody}
                        </p>
                        <p className="techno">Node, React, TypeScript</p>
                    </div>
                </div>
                <div className="vertical flex gapFlex unflexMobile mb20">
                    <img className="illu-project" src="/logo/stripe.svg" width="400px" height="250" alt="E-commerce Payment System" />
                    <div>
                        <h3>{language === "fr" ? stripeTitre : stripeTitle}e</h3>
                        <p style={{ marginBottom: 0 }} className="justify nocenter">
                            {language === "fr" ? stripeCorps : stripeBody}
                        </p>
                        <p className="techno">Javascript, PHP, Stripe</p>
                    </div>
                </div>
                <div className="wordpress-proj gapFlex unflexMobile flex">
                    <img src="/illustration/ToggleInterface.gif" className="illu-project" alt="Data Management and Reporting" />
                    <div>
                        <h3>{language === "fr" ? supinfoTitre : supinfoTitle}</h3>
                        <p style={{ marginBottom: 0 }} className="justify nocenter">
                            {language === "fr" ? supinfoCorps : supinfoBody}
                        </p>
                        <p className="techno">Node, React, Typescript</p>
                    </div>
                </div>
            </div>
        </div>
    );
}