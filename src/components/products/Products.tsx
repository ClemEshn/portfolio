import { useLanguage } from "../../context/LanguageContext"
import { apiBody, apiCorps, apiTitle, apiTitre, creationSites, devBody, devCorps, devTitle, devTitre, frontBody, frontCorps, frontTitle, frontTitle2, frontTitre, frontTitre2, hypBody, hypCorps, hypTitle, hypTitre, webSiteCreation, wpBody, wpCorps, wpTitle, wpTitre } from "./ProductsText";

export default function Products(){
    const {language} = useLanguage();
    return (
        <div id="products" className="my-container">
            <div className="box-container">
                <h2 className="hidden">Services</h2>
                <div className="sites center">
                    <h3>{language === "fr" ? creationSites : webSiteCreation}</h3>
                    <div className="flex unflexMobile">
                        <div className="frontend">
                            <h4>{language === "fr" ? frontTitre : frontTitle} <br/> {language === "fr" ? frontTitre2 : frontTitle2}</h4>
                            <p className="justify fixed-height">
                                {language === "fr" ? frontCorps : frontBody}
                            </p>
                            <img className="icon-product" src="/illustration/frontend.svg"/>

                        </div>
                        <div className="backend">
                            <h4>{language === "fr" ? apiTitre : apiTitle}</h4>
                            <p className="justify fixed-height">
                                {language === "fr" ? apiCorps : apiBody}
                            </p>
                            <img className="icon-product" src="/illustration/api.svg"/>
                        </div>
                        <div className="wordpress">
                            <h4>{language === "fr" ? wpTitre : wpTitle}</h4>
                            <p className="justify fixed-height">
                                {language === "fr" ? wpCorps : wpBody}
                            </p>
                            <img className="icon-product" src="/illustration/wordpress.svg"/>
                        </div>
                    </div>
                    <div className="enseignement center ">
                        <h3>Enseignement</h3>
                        <div className="flex unflexMobile">
                            <div className="cours-dev">
                                <h4>{language === "fr" ? devTitre : devTitle}</h4>
                                <p className="justify">
                                    {language === "fr" ? devCorps : devBody}
                                </p>
                                <img className="icon-product" src="/illustration/dev-class.svg"/>

                            </div>
                            <div className="cours-hyp">
                                <h4>{language === "fr" ? hypTitre : hypTitle}</h4>
                                <p className="justify">
                                    {language === "fr" ? hypCorps : hypBody}
                                </p>
                                <img className="icon-product" src="/illustration/hyp-class.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//Créations de sites internet
//  - Création du front end (Interface utilisateur)
//  - Développement d'une ou plusieurs API
//  - Développement Wordpress : Création, mise à jour, developpement de plugins

//Formation 
//  - Cours d'informatique 

// Et même des cours d'hypnoses! 