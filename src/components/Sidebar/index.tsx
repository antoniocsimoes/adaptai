import { Box, Center, Flex } from '@chakra-ui/react';
import { AiFillHome, AiFillBook } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { RiAccountCircleFill } from 'react-icons/ri';

const Sidebar: React.FC = () => {
  return (
    <Box
      w="35px"
      h="100vh"
      bg="#004ba0"
      p="4"
      position="fixed"
      left="0"
      top="0"
    >       
        <Flex 
            direction={'column'}
            alignItems={'center'}
            justifyContent="space-between"
            height="100%"
        >
            <Box >
                <AiFillHome color={"#fff"} />
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <AiFillBook color={"#fff"} style={{ marginBottom: '10px' }} />
                <MdOutlineEmail color={"#fff"} size={22} style={{ marginBottom: '10px' }} />
                <RiAccountCircleFill color={"#fff"} size={22} style={{ marginBottom: '10px' }} />
            </Box>
        </Flex>
    </Box>
  );
}

export default Sidebar;
