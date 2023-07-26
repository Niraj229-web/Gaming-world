import React from 'react'
import {Avatar, Button, Container, Heading, Input, VStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={'stretch'}
                    spacing={'8'}
                    w={['full','100']}
                    m={'auto'}
                    marginY={'auto'}>

                <Heading alignSelf={'center'}>Gaming World</Heading>
                <Avatar alignSelf={'center'} boxSize={'20'}/>

                <Input placeholder={'Name'} type='text'required />

                <Input placeholder={'Email'} type='email' required focusBorderColor='telegram.400'/>

                <Input placeholder={'password'} type='password' required focusBorderColor='telegram.400'/>

                <Button  colorScheme={'telegram'} type={'submit'} required>
                    Sign up
                </Button>
                
                <Text colorScheme={'telegram'} textAlign={'right'}>Already Signed up?{' '}
                <Button  colorScheme={'telegram'} variant={'link'}>
                    <Link to={'/login'}>Log in</Link>
                </Button>
                </Text>
                
            </VStack>
        </form>
    </Container>
  )
}

export default Signup
