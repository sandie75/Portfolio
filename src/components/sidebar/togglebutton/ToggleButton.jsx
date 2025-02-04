import { motion } from 'framer-motion';

//Closed: en burger. Open: menu déroulé, en croix.
//paramètre d en svg: définit les instructions de dessin.
const Togglebutton = ({setOpen}) => {
    return (
        <button onClick={() => setOpen((prev) => !prev)}>
            <svg width="30" viewBox="0 0 30 30">
                <motion.path 
                strokeWidth="2" 
                stroke="grey" 
                strokeLinecap="round" 
                variants={{
                    closed:{d:"M 2 5 L 28 5"} , 
                    open:{d: "M 5 25 L 25 5"},
                }} 
                />
                <motion.path 
                strokeWidth="2" 
                stroke="grey" 
                strokeLinecap="round" 
                d="M 9 15 L 28 15"
                variants={{
                    closed: {opacity: 1},
                    open: {opacity: 0},
                }}
                />
                <motion.path 
                strokeWidth="2" stroke="grey" 
                strokeLinecap="round" 
                variants={{
                    closed:{d:"M 2 25 L 28 25"} , 
                    open:{d: "M 5 5 L 25 25"},
                }}
                />
            </svg>
        </button>
    );
};

export default Togglebutton
