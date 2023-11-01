import { Box, Flex, Text } from '@chakra-ui/react';
import { TbArrowsVertical } from 'react-icons/tb';
import { MdOutlineFormatSize, MdBrightnessHigh } from 'react-icons/md';


const Header: React.FC = () => {
    return (
        <>
            <Box
                bg="#fff"
                borderBottom="1px solid #dee2e6"
                pl={65}
            >
                <Flex
                    lineHeight={0}
                    // pl={20}
                    alignItems={'center'}
                    pb={3}
                    pt={3}
                >
                    <Text color={"#6c757d"} fontSize={14} fontWeight={700}>Cosmos</Text>
                    <Text color={"#6c757d"} fontSize={14} fontWeight={700} pl={3}>• </Text>
                    <Text color={"#000"} fontSize={14} fontWeight={700} pl={3}> AVA</Text>
                    <Box width={850}></Box>
                    <Flex
                        bg={'#f8f9fa'}
                        borderRadius={5}
                        width={500}
                        alignItems={'center'}
                        height={35}
                        justifyContent={'space-between'}
                    >
                        <Text fontSize={12} pl={5} >Design thinking e inovacao dos modelos de negocios</Text>
                        <TbArrowsVertical size={12} />
                    </Flex>
                    <Flex
                        pl={2}
                        pr={5}
                    >
                        <Box
                            border='1px solid #000'
                            width={10}
                            height={10}
                            borderLeftRadius={3}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <MdOutlineFormatSize color={'#6c757d'} />
                        </Box>
                        <Box
                            border='1px solid #000'
                            width={10}
                            height={10}
                            borderRightRadius={3}
                            borderLeft={0}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <MdBrightnessHigh color={'#6c757d'} />

                        </Box>
                    </Flex>

                </Flex>
            </Box>
        </>
    );
}

export default Header;
