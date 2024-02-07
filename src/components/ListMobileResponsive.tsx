import { Link } from "@chakra-ui/react";
import { useEffect, useState } from "react"

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
        <>{islist && <div><Link href="AboutSection" color='whitesmoke' paddingX={3}>AboutMe</Link>
            <Link href="SkillSection" color='whitesmoke' paddingX={3}>Project</Link>
            <Link color='whitesmoke' paddingX={3}>Links</Link>
            <Link href="SkillSection" color='whitesmoke' paddingX={5}>Skills</Link></div>}</>
    )
}

export default ListMobileResponsive;