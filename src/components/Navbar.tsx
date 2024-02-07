import { HStack, Link } from "@chakra-ui/react"
import ListMobileResponsive from "./ListMobileResponsive"


const Navbar = () => {
    return (
        <>
            <HStack padding='10px' justifyContent="space-around" backgroundColor="blueviolet">
                <Link
                    color='whitesmoke'
                    fontWeight='extrabold'
                    fontSize='27px'
                    ms={28}
                    mt={3}
                >
                    Aniket.
                </Link>
                <HStack marginEnd={1} mt={3}>
                    <ListMobileResponsive />
                </HStack>
            </HStack >
        </>
    )
}

export default Navbar