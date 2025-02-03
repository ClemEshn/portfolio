import { Button } from "react-bootstrap";

export default function About(){
    return (
        <div id="about" className="my-container">
            <div className="flex">
                <div>
                    <h1>Clément Eischen</h1>
                    <h2>Développeur web et formateur</h2>
                    <p>👋 Bienvenue sur mon portfolio ! Je suis un développeur web passionné 
                        Diplômé en ingénierie informatique, j'ai à cœur de créer des solutions sur mesure et innovantes. 
                        Avec une expertise en PHP, JavaScript, React, Node.js et bien d'autres, j'ai travaillé sur des 
                        projets variés allant de sites web à des outils complexes de gestion et de reporting. En dehors du code, je partage mes 
                        connaissances en enseignant et l'informatique ou l'hypnose. Découvrez ici 
                        mon univers, mes projets et mon savoir-faire.
                    </p>
                </div>
                <img src="/img.jpg"/>
            </div>
            <div className="center">
                <a href="#contact"><Button className="btn btn-primary">Me contacter</Button></a>
            </div>
        </div>
    )
}