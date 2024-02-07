import { motion } from 'framer-motion';
import Styles from "../components/CssModuleComponent/SectionHeadingStyle.module.css";

interface Props {
    children: string;
}

const SectionHeading = ({ children }: Props) => {
    return (
        <>
            <motion.p
                className={Styles.paragraph}
                initial={{ opacity: 0.5, scale: 0.5 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, scale: 1.3 }}>
                {/* <div className={Styles.animation}></div> */}
                {children}</motion.p>
        </>
    );
}

export default SectionHeading