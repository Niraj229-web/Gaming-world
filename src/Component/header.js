import { Button, 
        Drawer, 
        DrawerBody, 
        DrawerCloseButton, 
        DrawerContent, 
        DrawerHeader, 
        DrawerOverlay, 
        HStack, 
        VStack,  
        useDisclosure} from '@chakra-ui/react';
import React from 'react'
import {Link} from 'react-router-dom';
import{BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {
  const {isOpen,onOpen,onClose} = useDisclosure()
  return (
    <>
    <Button
    pos={'fixed'}
    top={'4'}
    left={'4'}
    colorScheme={'telegram'}
    p={'0'}
    h={'10'}
    w={'10'}
    borderRadius={'full'}
    onClick={onOpen}
    zIndex={'overlay'}
    >
      <BiMenuAltLeft size={'20'}/>
    </Button>

    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay/>

      <DrawerContent>
        <DrawerCloseButton/>

        <DrawerHeader>Gaming World</DrawerHeader>

        <DrawerBody>

          <VStack alignItems={'flex-start'}>{/* It is use put a body content in colume. 
                         heare align by defult center  */}

            <Button colorScheme={'telegram'} variant={'ghost'} onClick={onClose}>
              <Link to={'/'}>Home</Link>
            </Button>
            <Button colorScheme={'telegram'} variant={'ghost'} onClick={onClose}>
              <Link to={'/videos'}>Videos</Link>
            </Button>
            <Button colorScheme={'telegram'} variant={'ghost'} onClick={onClose}>
              <Link to={'/videos?category=free'}>Free Videos</Link>
            </Button>
            <Button colorScheme={'telegram'} variant={'ghost'} onClick={onClose}>
              <Link to={'/upload'}>Upload</Link>
            </Button>

          </VStack>

          <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>

            <Button colorScheme={'telegram'} variant={'solid'} bgColor={'#0088cc'}  onClick={onClose}> 
              <Link to={'/login'}>Log In</Link>
            </Button>
            <Button colorScheme={'telegram'} variant={'outline'} onClick={onClose}>
              <Link to={'/signup'}>Sign up</Link>
            </Button>

          </HStack>
        </DrawerBody>
      </DrawerContent>

    </Drawer>
    </>
    
  )
}

export default Header