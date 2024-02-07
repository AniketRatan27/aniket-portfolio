import { HStack, Link } from "@chakra-ui/react"
import MobileMenuResize from "./MobileMenuResize"
import ListMobileResponsive from "./ListMobileResponsive"

const Navbar = () => {
    return (
        <>
            <HStack padding='10px' justifyContent="space-between" backgroundColor="blueviolet">
                <Link
                    color='whitesmoke'
                    fontWeight='extrabold'
                    fontSize='27px'
                    ms={20}
                    mt={3}
                >
                    Aniket.
                </Link>
                <HStack marginEnd={1} mt={3}>
                    <ListMobileResponsive />
                    <MobileMenuResize />
                </HStack>
            </HStack >
        </>
    )
}

export default Navbar