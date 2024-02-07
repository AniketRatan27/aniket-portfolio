import { useEffect, useState } from "react"
import Styles from "../components/CssModuleComponent/NavBar.module.css";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const ListMobileResponsive = () => {
    const [islist, setIsList] = useState(true);

    useEffect(() => {
        const handleRisize = () => {
            if (window.innerWidth <= 768) {
                setIsList(false);
            }
            else {
                setIsList(true);
            }
        }
        window.addEventListener('resize', handleRisize);
        return () => window.removeEventListener('resize', handleRisize);
    }, []);

    return (
        <>{islist && <ul className={Styles.platformLinks}>
            <a href="https://github.com/AniketRatan27"><FaGithub className={Styles.icons} /></a>
            <a href="https://www.linkedin.com/in/aniket-ratan-49b62b221/"><BsLinkedin className={Styles.icons} /></a>
            <a href="https://twitter.com/ani_ket_27"><BsTwitterX className={Styles.icons} /></a>
            <a href="https://twitter.com/ani_ket_27"><SiLeetcode className={Styles.icons} /></a>
        </ul>}</>
    )
}

export default ListMobileResponsive;