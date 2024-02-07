import photo from "../assets/AkNewPhoto.jpg";
import photo2 from "../assets/AKAnimaePhoto.avif";
import photo3 from "../assets/AKAnime2Photo.avif";
import Styles from "./CssModuleComponent/AboutComponent.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutComponent = () => {
    const photos = [photo, photo2, photo3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (currentIndex < photos.length - 1) {
                setCurrentIndex(next => next + 1);
            }
            if (currentIndex == photos.length - 1) {
                setCurrentIndex(0);
            }
        }, 3000)
        return () => clearTimeout(timeOut);
    }, [currentIndex, photos]);

    return (
        <>
            <motion.p
                className={Styles.paragraph}
                initial={{ opacity: 0.5, scale: 0.5 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, scale: 1.3 }}>
                <div className={Styles.animation}></div>
                About Me</motion.p>
            <div className={Styles.HStack}>
                <div className={Styles.Aboute}>
                    As an individual deeply dedicated to staying at the forefront of technological advancements, I have always thrived in environments that foster innovation and creativity. My journey into the world of coding traces back to my 11th grade, where my fascination with video games became the catalyst for my exploration of software development and technology. This initial curiosity quickly evolved into a deep-seated passion, driving me to constantly seek out new challenges and opportunities within the ever-evolving landscape of technology. I am continuously inspired by the potential for impactful and groundbreaking advancements in this field, and I am committed to bringing my unique perspective and fervent enthusiasm to every project I undertake.
                </div>
                <motion.img src={photos[currentIndex]}
                    key={photos[currentIndex]}
                    alt="aboutPicture" width={300}
                    className={Styles.AkPhoto}
                    animate={{ x: 20, opacity: 1, transition: { duration: 1 } }} />
            </div>
        </>
    );
}

export default AboutComponent