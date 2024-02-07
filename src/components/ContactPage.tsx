import { SiCoffeescript } from "react-icons/si";
import Styles from "../components/CssModuleComponent/ContactComponent.module.css"


const ContactPage = () => {

    return (
        <>
            <p className={Styles.paragraph}>Contact Me</p>
            <div className={Styles.mainContact}>
                <div className={Styles.ContactMePara}>
                    <p className={Styles.para}>Are you ready to turn your coffee-fueled ideas into <span>elegant,functional code? </span><br /> Let's discuss your project over a cup of coffee .<SiCoffeescript className={Styles.icons} /><br /> Contact me, and let's bring your vision to life.<br />
                        <a href="mailto:ratan.aniket09@gmail.com"><input type="button" value="connect" /></a></p>
                </div>

            </div>
        </>
    );
}

export default ContactPage