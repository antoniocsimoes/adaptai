import { Box, Flex, Progress, Text } from '@chakra-ui/react';
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { TbArrowsVertical } from 'react-icons/tb';

const MainLeft = () => {
    return (
        <>
            <Box
                pt={10}
                pr={5}
            >
                <Flex>
                    <Box
                        border='1px solid #000'
                        width={8}
                        height={8}
                        borderLeftRadius={3}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <HiArrowNarrowLeft color={'#6c757d'} />
                    </Box>
                    <Box
                        border='1px solid #000'
                        width={8}
                        height={8}
                        borderRightRadius={3}
                        borderLeft={0}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <MdClose color={'#6c757d'} />

                    </Box>
                </Flex>
                <Text pt={5} pb={2}>Alterar Disciplina</Text>
                <Flex
                    border={'1px solid #ced4da'}
                    borderRadius={3}
                    width={450}
                    alignItems={'center'}
                    height={35}
                    justifyContent={'space-between'}
                >
                    <Text fontSize={14} pl={5}>Design thinking e inovacao dos modelos de negocios</Text>
                    <TbArrowsVertical size={12} />
                </Flex>
                <Text pt={5} pb={2}>Progresso da Disciplina</Text>
                <Box position="relative">
                    <Progress
                        colorScheme='blue'
                        value={80}
                        height='18px'
                        borderRadius={5}
                        style={{ width: '450px' }}
                    />
                    <Text
                        position="absolute"
                        top="50%"
                        left="5%"
                        transform="translate(-50%, -50%)"
                        color="white"
                    >
                        80%
                    </Text>
                </Box>
                <Flex 
                    flexDirection={'column'}
                >
                    <Box 
                        border={'1px solid #ced4da'} 
                        width={450}
                        mt={5}
                    >
                        <Flex 
                            flexDirection={'column'} 
                            color={'#6c757d'} 
                            m={5}
                        >
                            <Text fontSize={12}>25/04/2023 a 14/05/2023</Text>
                            <Text fontSize={14} fontWeight={'bold'}>Web aula</Text>
                            <Text fontSize={14}>Conteúdo</Text>
                        </Flex>
                    </Box>
                    <Box 
                        border={'1px solid #007bff'} 
                        width={450}
                        bg={'#007bff'}
                    >
                        <Flex 
                            flexDirection={'column'} 
                            color={'#fff'} 
                            m={5}
                        >
                            <Text fontSize={12}>25/04/2023 a 14/05/2023 23:59 (Hora de Brasília)</Text>
                            <Text fontSize={14} fontWeight={'bold'}>Avaliação Virtual</Text>
                            <Text fontSize={14}>Avaliação Virtual</Text>
                        </Flex>
                    </Box>
                    <Box 
                        border={'1px solid #ced4da'} 
                        width={450}
                    >
                        <Flex 
                            flexDirection={'column'} 
                            color={'#6c757d'} 
                            m={5}
                        >
                            <Text fontSize={12}>25/04/2023 a 14/05/2023 23:59 (Hora de Brasília)</Text>
                            <Text fontSize={14} fontWeight={'bold'}>PDR</Text>
                            <Text fontSize={14}>Avaliação Virtual</Text>
                        </Flex>
                    </Box>
                    <Box 
                        border={'1px solid #ced4da'} 
                        width={450}
                        mt={5}
                    >                        
                        <img src="/src/assets/board.png" alt="Board" width={450} />                       
                    </Box>
                    
                    
                </Flex>
            </Box>
        </>
    )
}

export default MainLeft;