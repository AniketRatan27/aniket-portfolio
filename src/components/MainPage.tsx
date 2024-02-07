import { useEffect, useState } from "react";
import { CodeSnippetDesign } from "./CodeSnippetDesign";
import styles from "./CssModuleComponent/MainPage.module.css";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import resume from "../assets/Aniket Ratan..pdf";

const textVariants = {
    initial: {
        x: -500, opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 1,
        x: 15,
        y: 0
    },
}



const MainPage = () => {
    const arrayOfString = [" Aniket Ratan", " a FrontEnd-Developer", " a ByteSage"];
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (currentIndex < arrayOfString.length - 1) {
                setCurrentIndex(prevIndex => prevIndex + 1);
            }

            if (currentIndex === arrayOfString.length - 1) {
                setCurrentIndex(0);
            }
        }, 2000);

        return () => clearTimeout(timeOut);
    }, [currentIndex, arrayOfString]);


    return (
        <div className={styles.MainHStack}>

            <motion.div
                className={styles.divText}
                initial="initial"
                animate="animate"
                variants={textVariants}>
                Hello ,I am<br />
                <motion.span className={styles.arrayText}
                    key={arrayOfString[currentIndex]}>
                    {arrayOfString[currentIndex]}.
                </motion.span><br />
                <motion.span className={styles.Proficient} variants={textVariants}>Proficient</motion.span> in a range of technologies.<br />


                <a href={resume} download ><motion.button className={styles.mainButton}
                    variants={textVariants}
                    animate="scrollButton"
                    transition={{ duration: 1, }}>Download Resume <BsDownload className={styles.icons} /></motion.button></a>
            </motion.div>

            <CodeSnippetDesign />
        </div >
    );
}

export default MainPage