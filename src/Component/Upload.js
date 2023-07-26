import { Button, Container, Input, VStack, HStack} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

      <VStack color={'telegram.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'}/>

      <form>
        <HStack>
          <Input required type={'file'}/>
          <Button colorScheme='telegram' type='Submit'>Upload</Button>
        </HStack>
      </form>
      </VStack>

    </Container>
  )
}

export default Upload