import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Togglebutton from "../sidebar/togglebutton/ToggleButton";

const items = [
    {
        id: 1,
        title: "Salle de concert",
        img: "concert.png",
        description: "Mon tout premier projet. Site d'une salle de concert en javascript vanilla et PHP, crud fonctionnel, maquette réalisée en figma. Ut enim ad minim veniam. Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    },
    {
        id: 2,
        title: "Quiz Game of Thrones",
        img: "quiz.png",
        description: "Un quiz sur les citations de Game of thrones réalisé en React. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
        id: 3,
        title: "Mastermind",
        img: "mastermind.png",
        description: "Un jeu mastermind réalisé en react. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    }
    
];

const Single = ({ item }) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        //offset: ["start start", "end start"]  
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return <section >
        <div className="container2">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="project picture"/> 
                </div>
                <motion.div className="textContainer" style={{y}}>
                        <h2 className="h2portfolio">{item.title}</h2>
                        <p>{item.description}</p>
                        <div className="seeProject">
                            <div className="smallBar"></div>
                            <button>Voir le projet</button>
                        </div>
                        
                </motion.div>
            </div>    
        </div>
    </section>
};

const Portfolio = () => {

    return (
        <div className="portfolioContainer">
            <div className="portfolioTitle">
                <h1 className="h1portfolio">Portfolio</h1>
                <div className="titleBar"></div>
            </div>
            {items.map((item) => 
                (<Single item={item} key={item.id}/>))
            }
        </div>
    )
};

export default Portfolio; 