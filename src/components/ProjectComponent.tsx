import React from 'react'
import { projectDetail } from '../data';
import Card from './Card';
import { motion } from 'framer-motion';
import Styles from "../components/CssModuleComponent/CardComponent.module.css";

const ProjectComponent = () => {
    return (
        <>
            <motion.p
                className={Styles.paragraph}
                initial={{ opacity: 0.5, scale: 0.5 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, scale: 1.3 }}>
                Projects
            </motion.p>
            {projectDetail.map((projects, index) =>
                <React.Fragment key={index}>
                    <Card {...projects} />
                </React.Fragment>)}
        </>
    );
}

export default ProjectComponent