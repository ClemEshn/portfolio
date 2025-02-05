export default function Projects() {
    return (
        <div id="projects" className="my-container">
            <div className="box-container">
                <h2 className="center">Projets</h2>
                <div className="jukebar flex gapFlex unflexMobile mb20">
                    <img src="/illustration/jukebar.png" className="illu-project" width="400px" height="250" alt="Jukebar project" />
                    <div>
                        <h3>Pricing dynamique - Jukebar</h3>
                        <p style={{ marginBottom: 0 }} className="justify nocenter">
                            Développement d'une plateforme innovante pour la gestion de soirées thématiques basées sur le principe de la bourse. 
                            Les utilisateurs peuvent sélectionner des boissons, influençant ainsi un pricing dynamique en fonction de la demande. 
                            Les données sont visualisées en temps réel via des graphiques interactifs, offrant une expérience immersive et engageante.
                        </p>
                        <p className="techno">Node, React, TypeScript</p>
                    </div>
                </div>
                <div className="vertical flex gapFlex unflexMobile mb20">
                    <img className="illu-project" src="/logo/stripe.svg" width="400px" height="250" alt="E-commerce Payment System" />
                    <div>
                        <h3>Refonte du système de paiement - e-commerce</h3>
                        <p style={{ marginBottom: 0 }} className="justify nocenter">
                            Refonte complète du système de paiement Stripe pour un site e-commerce, incluant l'intégration de nouvelles fonctionnalités 
                            telles que les abonnements récurrents, les remboursements automatisés et une interface utilisateur simplifiée pour une meilleure expérience client.
                        </p>
                        <p className="techno">Javascript, PHP, Stripe</p>
                    </div>
                </div>
                <div className="wordpress-proj gapFlex unflexMobile flex">
                    <img src="/illustration/ToggleInterface.gif" className="illu-project" alt="Data Management and Reporting" />
                    <div>
                        <h3>Gestion de données et reporting</h3>
                        <p style={{ marginBottom: 0 }} className="justify nocenter">
                            Conception et mise en œuvre d'une solution de gestion de données et de reporting pour l'industrie aéronautique. 
                            Le projet inclut le développement d'API sur mesure, la mise en place de tableaux de bord interactifs, 
                            et un système de monitoring en temps réel pour optimiser les opérations et la prise de décision.
                        </p>
                        <p className="techno">Node, React, Typescript</p>
                    </div>
                </div>
            </div>
        </div>
    );
}