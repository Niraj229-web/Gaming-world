import React from 'react'
import { Box, Button, HStack, Heading, Stack, VStack, Input, Text } from '@chakra-ui/react'
import{AiOutlineSend} from 'react-icons/ai'


const Footer = () => {
  return (

    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>

        <Stack direction={['column','row']}>

            <VStack w={'full'} alignItems={'center'}>

                <Heading size={'md'} textTransform={'uppercase'}  textAlign={['center','left']} marginBottom={'4'}>
                    Use more PRODUCTIVE Feature
                </Heading>

                <HStack>
                    <Input color={'telegram.100'}
                    placeholder='Enter the Email..'/>
                    <Button type={'submit'}> 
                        <AiOutlineSend/>
                    </Button>
                </HStack>

            </VStack>

            <VStack w={'full'} borderLeft={['none','1px solid white']}
                               borderRight={['none','1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'} size={'md'}>
                     Gaming World
                </Heading>
                <Text>@2023 Gaming World</Text>
                <Text>All right reserved</Text>
            </VStack>

            <VStack w={'full'}>
                <Heading size={'md'}>Social Media</Heading>
                <Button variant={'link'} colorScheme={'telegram'}>
                    <a href="https://www.facebook.com/niraj.goyani.3" target={'blank'}> Facebook</a>
                </Button>
                <Button variant={'link'} colorScheme={'telegram'}>
                    <a href="https://www.instagram.com/niraj_goyani_229/" target={'blank'}>Instagram</a>
                </Button>
                <Button variant={'link'} colorScheme={'telegram'}>
                    <a href="https://twitter.com/niraj_goyani" target={'blank'}>Twitter</a>
                </Button>
                <Button variant={'link'} colorScheme={'telegram'}>
                    <a href="https://www.linkedin.com/in/niraj-goyani-bb5a2a214/" target={'blank'}>Telegram</a>
                </Button>

            </VStack>

        </Stack>
    </Box>
  )
}

export default Footer
