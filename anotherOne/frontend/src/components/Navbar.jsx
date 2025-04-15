import { Container, Flex, Text, HStack, Button, useColorMode } from '@chakra-ui/react'
// import {  } from './ui/color-mode'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { LuSun } from 'react-icons/lu'
import { IoMoon } from 'react-icons/io5'

function Navbar() {
    
    const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Container maxW={'1140px'} px={4}>
        <Flex h={'16px'} alignItems='centered' justifyContent={'space-between'}
        flexDir={{base: 'column',sm:'row'}}>
        
            <Text fontSize={{base: '22', sm: '28'}}
            fontWeight={'bold'}
            textTransform={'uppercase'}
            textAlign={'center'}    
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={'text'}
            color={'red'}>
                <Link to={'/'}>Product Store 🛒</Link>
            </Text>

            <HStack spacing={2} alignItems={'center'}>
                <Link to={'/create'}>
                    <Button>
                        <CiSquarePlus fontSize={20}/>
                    </Button>
                </Link>
                <Link>
                    <Button to={'/'} onClick={toggleColorMode}>
                        {colorMode == 'light' ? <IoMoon /> : <LuSun />}
                    </Button>
                </Link>
            </HStack>

        </Flex>
    </Container>
  )
}

export default Navbar