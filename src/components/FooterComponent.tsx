import { FaGithub } from "react-icons/fa";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import Styles from "../components/CssModuleComponent/FooterStyle.module.css";

const FooterComponent = () => {

    return (
        <div className={Styles.footerStyle}>
            <div>
                <p className={Styles.paragraph}>&copy; {new Date().getFullYear()} Aniket. All Rights Reserved. </p>
            </div>
            <div className={Styles.Links}>
                <ul className={Styles.platformLinks}>
                    <a href="https://github.com/AniketRatan27"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/aniket-ratan-49b62b221/"><BsLinkedin /></a>
                    <a href="https://twitter.com/ani_ket_27"><BsTwitterX /></a>
                    <a href="https://twitter.com/ani_ket_27"><SiLeetcode /></a>
                </ul>
            </div>
        </div>
    )
}

export default FooterComponent