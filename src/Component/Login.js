import { Button, Container, Heading, Input, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={'stretch'}
                    spacing={'8'}
                    w={['full','100']}
                    m={'auto'}
                    marginY={'16'}>

                <Heading>Log in</Heading>

                <Input placeholder={'Email'} type='email' required focusBorderColor='telegram.500'/>

                <Input placeholder={'password'} type='password' required focusBorderColor='telegram.500'/>

                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to={'/forgotpassword'}>Forgot password?</Link>
                </Button>

                <Button  colorScheme={'telegram'} type={'submit'} required>
                    Log In
                </Button>
                
                <Text colorScheme={'telegram'} textAlign={'right'}>New user?{' '}
                <Button  colorScheme={'telegram'} variant={'link'}>
                    <Link to={'/signup'}>Sign up</Link>
                </Button>
                </Text>
                
            </VStack>
        </form>
    </Container>
  )
}

export default Login
