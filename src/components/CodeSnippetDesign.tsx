import Prism from "prismjs";
import 'prismjs/themes/prism.css';
import Styles from './CssModuleComponent/CodeSnippetStyle.module.css';
import { useEffect } from "react";
import { motion } from "framer-motion";




export const CodeSnippetDesign = () => {

    useEffect(() => {
        Prism.highlightAll();
    })

    const codeString = `const coder = {
        name: 'Smart Coder',
        skills: ['React', 'Typescript', 'Java'...],
        hardwoker: true,
        problemSolver: true
      }`;


    return (
        <motion.pre className={Styles.pre}
            animate={{ y: -10 }} transition={{ duration: 1 }}>
            <code className={Styles.code}>
                {codeString}
            </code>
        </motion.pre>
    );
}

export default CodeSnippetDesign;