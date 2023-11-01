import { Box, Flex, Text } from "@chakra-ui/react";
import MainLeft from "./MainLeft";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "../../routes";

const Main = () => {
    return (
        <>
            <Box
                pl={65}
                pt={30}
            >
                <Text fontWeight={'700'} fontSize={30} lineHeight={0}>Design thinking e inovacao dos modelos de negocios</Text>
                <Text fontSize={12} color={'#6c757d'} pt={5}>Professor(a): Cláudia Regina Benedetti (Mestrado acadêmico)</Text>
                <Flex>
                    <Box width='40%'>
                        <MainLeft />
                    </Box>
                    <Box width='60%'>
                        <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Main;