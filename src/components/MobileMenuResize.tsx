import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const MobileMenuResize = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleRisize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
            }
        }

        window.addEventListener('resize', handleRisize);

        return () => window.removeEventListener('resize', handleRisize);
    }, []);

    return (
        <>
            {isMobile && <FaBars size="27px" />}
        </>
    );
}

export default MobileMenuResize