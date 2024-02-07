import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skillData } from '../data';
import React from 'react';
import Styles from "../components/CssModuleComponent/timeLineComponent.module.css";
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <>
            <motion.p
                className={Styles.paragraph}
                initial={{ opacity: 0.5, scale: 0.5 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, scale: 1.3 }}>
                Skills
            </motion.p>
            <div className={Styles.verticalTimeLinePosition}>
                <VerticalTimeline lineColor="white">
                    {
                        skillData.map((skill, index) =>
                            <React.Fragment key={index}>
                                <VerticalTimelineElement
                                    contentStyle={{
                                        boxShadow: "none",
                                        textAlign: "left",
                                        color: "darkslategray",
                                        fontWeight: "bolder",
                                        fontSize: "14px"
                                    }}
                                    icon={skill.icon}
                                    iconStyle={{
                                        color: "black",
                                        fontSize: "10px",
                                        backgroundColor: "white"
                                    }}>
                                    <h3 className='font-semibold capitalize'>{skill.title}</h3>
                                </VerticalTimelineElement>
                            </React.Fragment>)
                    }
                </VerticalTimeline>
            </div>
        </>
    );
}

export default Skills