export default function Products(){
    return (
        <div id="products" className="my-container">
            <h2 className="hidden">Services</h2>
            <div className="div-hr">
                <hr/>
            </div>
            <div className="sites center">
                <h3>Création de sites internet</h3>
                <div className="flex">
                    <div className="frontend">
                        <h4>Création du front-end <br/>(Interface utilisateur)</h4>
                        <p className="justify fixed-height">
                            Donnez vie à votre vision grâce à une interface utilisateur moderne et intuitive. 
                            Que ce soit pour un site web, une application ou un outil interactif, 
                            je conçois et développe des interfaces centrées sur l'expérience utilisateur. 
                            Utilisant les technologies en vogue comme React, 
                            je m’assure que vos projets soient esthétiques, performants et parfaitement adaptés à vos besoins.
                        </p>
                        <img className="icon-product" src="/illustration/frontend.svg"/>

                    </div>
                    <div className="backend">
                        <h4>Développement d’API et solutions sur mesure</h4>
                        <p className="justify fixed-height">
                            Connectez vos systèmes et automatisez vos processus grâce à des API robustes et sécurisées.
                            J’assure la conception et le développement d’API REST ou GraphQL, adaptées à vos flux de données.
                            Que vous ayez besoin d'une intégration complexe ou d'une solution personnalisée,
                            je m'engage à créer des architectures fiables et évolutives pour soutenir vos projets.
                        </p>
                        <img className="icon-product" src="/illustration/api.svg"/>
                    </div>
                    <div className="wordpress">
                        <h4>Développement WordPress : Création et personnalisation</h4>
                        <p className="justify fixed-height">
                            Offrez à votre site WordPress une solution unique. De la création complète à la mise à jour de votre site,
                            en passant par le développement de plugins sur mesure, je mets mon expertise au service de vos projets.
                            Que ce soit pour un blog, une boutique en ligne ou un site vitrine, 
                            je vous propose des solutions optimisées pour vos besoins et vos objectifs.
                        </p>
                        <img className="icon-product" src="/illustration/wordpress.svg"/>
                    </div>
                </div>
                <div className="enseignement center">
                    <h3>Enseignement</h3>
                    <div className="flex">
                        <div className="cours-dev">
                            <h4>Cours de développement</h4>
                            <p className="justify">
                                Transmettez votre passion pour le développement avec des cours dispensés dans de grandes écoles privées. 
                                Je propose des formations sur mesure, adaptées aux besoins spécifiques des étudiants et des professionnels. 
                                Que ce soit pour découvrir les bases ou approfondir des concepts avancés,
                                je peux enseigner n’importe quel domaine du développement web et logiciel,
                                toujours avec pédagogie et pragmatisme.
                            </p>
                            <img className="icon-product" src="/illustration/dev-class.svg"/>

                        </div>
                        <div className="cours-hyp">
                            <h4>Cours d'hypnose</h4>
                            <p className="justify">
                            Offrez à vos élèves des cours d'hypnose à travers des modules courts et dynamiques.
                             Ces formations offrent une initiation approfondie, suffisante pour que les étudiants puissent
                              hypnotiser leurs proches ou même des inconnus. Engagantes et interactives, 
                              elles permettent de développer des compétences professionnelles précieuses telles que la 
                              capacité à se mettre en valeur, l’aisance à l’oral, et la maîtrise de ses peurs, 
                              le tout dans un cadre ludique inspiré du spectacle de rue.
                            </p>
                            <img className="icon-product" src="/illustration/hyp-class.svg"/>
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