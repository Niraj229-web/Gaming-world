import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
  const videoarr = [
      'https://vimeo.com/504865443',
      'https://vimeo.com/504865443',
      'https://vimeo.com/504865443',
      'https://vimeo.com/504865443',
      'https://vimeo.com/504865443',
      'https://vimeo.com/504865443',
      'https://vimeo.com/504865443',
      'https://vimeo.com/504865443',
  ];

  const [videoSrc, setvideoSrc] = useState(videoarr[0]);
  return (
    <Stack direction={['column','row']} h={'100vh'}>
      
      <VStack w={'full'}>
        <video
        controls
        controlsList='nodownload'
        width={'100%'} 
        src={videoSrc }
        >
        </video>

        <VStack alignItems={'flex-start'} overflowY={'auto'} w={'full'} p={'4'}>
          <Heading>
            Gaming Video 1
          </Heading>
          <Text>
            This is First video on Gaming world.Hear some kind of Discription provide for more information about gaming world.
          </Text>
        </VStack>
      </VStack>
      
      <VStack width={['full','xl']} overflowY={'auto'} p={'8'} alignItems={'stretch'}> 
      
        {videoarr.map ((item,index) => (
          <Button variant={'ghost'} colorScheme={'telegram'} onClick={()=>setvideoSrc(item)}>
          Video {index+1}
        </Button>
        ))}

      </VStack>

    </Stack>
  )
}

export default Videos