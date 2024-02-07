import { motion, useScroll } from "framer-motion";
import Styles from "../components/CssModuleComponent/CardComponent.module.css";
import { projectDetail } from "../data";
import { useRef } from "react";

type ProjectProps = (typeof projectDetail)[number]

const Card = ({ name, techUsed, description, link }: ProjectProps) => {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.2 3", "1.22 1"],
    })
    return (
        <motion.div className={Styles.mainBox}
            ref={ref}
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress
            }}>
            <div className={Styles.Box}>
                <div className={Styles.box2}>
                    <h3>{name}</h3>
                    <p className={Styles.description}>{description}</p>
                    <ul className={Styles.underList}>
                        {techUsed.map((tags, index) => <li className={Styles.listStyle} key={index}>{tags}</li>)}
                    </ul>
                    <a className={Styles.projectLink} href={link}>Link</a>
                </div>
            </div >
        </motion.div>
    );
}

export default Card