import React from 'react';
import "./hero.scss";
import {motion} from "framer-motion";

//animation text hero
const textVariants = {
    initial: {
        x: -500, //élément positionné en dehors de l'écran.
        opacity: 0, //transparent, invisible.
    },
    animate: {
        x: 0, //revient à sa position normale, là où il devrait ê affiché.
        opacity: 1, //opaque, visible.
        transition:{
            duration: 1, // l'animation dure une seconde.
            staggerChildren: 0.1 //Si cet élément contient des éléments enfants également animés, leurs animations commenceront avec un décalage de 0,1 seconde entre chaque.
        },
    },
}

const Hero = () => {
    return(
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial"
                animate="animate">
                    <motion.h2 variants={textVariants}>SANDIE EMONTS</motion.h2>
                    <motion.h1 variants={textVariants}>Développeuse web</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>Voir mes derniers projets</motion.button>
                        <motion.button variants={textVariants}>Me contacter</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} src="scroll.png" alt="scroll"/>
                </motion.div>
                <div className="imageContainer">
                    <img src="hero.png" alt="portrait"/>
                </div>
            </div>
        </div>
    )
};

export default Hero;