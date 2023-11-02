import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import MainLeft from "./MainLeft";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "../../routes";

const Main = () => {
    const [isSmallerThan800] = useMediaQuery('(max-width: 800px)')
    return (
        <>
            <Box
                pl={65}
                pt={30}
            >
                <Text fontWeight={'700'} fontSize={30} lineHeight={isSmallerThan800 ? undefined : 0} pr={isSmallerThan800 ? 5 : 0}>Design thinking e inovacao dos modelos de negocios</Text>
                <Text fontSize={12} color={'#6c757d'} pt={5} pr={isSmallerThan800 ? 5 : 0}>Professor(a): Cláudia Regina Benedetti (Mestrado acadêmico)</Text>
                <Flex>
                    {!isSmallerThan800 && <Box width='40%'>
                        <MainLeft />
                    </Box>}
                    <Box width={isSmallerThan800 ? '100%' : '60%'}>
                        <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Main;