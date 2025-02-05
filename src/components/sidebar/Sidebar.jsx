import React from 'react';
import "./sidebar.scss";
import Togglebutton from "./togglebutton/ToggleButton";
import Links from "./links/Links";
import {motion} from "framer-motion";
import {useState} from "react";

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const variants = {
        open:{
            x: 0,
            transition:{
                delay: 0.2,
                type: "spring",
                stiffness: 50,
            },
        },
        closed: {
            x: "-100%", //masque complètement la sidebar
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400, //force et rapidité de l'animation spring.
                damping: 40, //amortissement de l'animation. plus faible, plus de rebond.
            },
        },
    };

    return (
        <motion.div className='sidebar' initial='closed' 
        animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links setOpen={setOpen}/> 
            </motion.div>
            <Togglebutton setOpen={setOpen}/>
        </motion.div>
    )
};

export default Sidebar;

/*On a passé setOpen en prop au composant Links pour pouvoir refermer la sidebar au clic sur un lien. */