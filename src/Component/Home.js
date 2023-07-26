import React from 'react'
import { Box, Container, Heading, Stack, Image, Text} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../Assets/1.jpg'
import img2 from '../Assets/2.jpg'
import img3 from '../Assets/3.jpg'
import img4 from '../Assets/4.jpg'
import img5 from '../Assets/5.png'

const Home = () => {
  return (
    <Box>
        <MyCarousel/>

        <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
          <Heading
           textTransform={'uppercase'}
           py={'2'}
           w={'fit-content'}
           borderBottom={'2px solid'}
           m={'auto'}
           >
            Services
          </Heading>

          <Stack 
          h={'full'} 
          p={'4'} 
          alignItems={'center'}
          direction={['column','row']}
          >
            <Image src={img5} alt='image5'
             h={['40','400']}
            />
            <Text lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

            </Text>

          </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel = () =>(
    <Carousel  infiniteLoop 
               autoPlay 
               showThumbs={false} 
               showStatus={false} 
               showArrows={false} 
               interval={1000}>
        <Box w={'full'} h={'100vh'}>
            <img src={img1} alt='image1'/>
            <Heading bgColor={'blackAlpha.600'} color={'white'}
            pos={'absolute'}
            left={'50%'}
            top={'50%'}
            transform={'translate(-50%,-50%)'}
            textTransform={'uppercase'}
            p={'4'}
            size={'2xl'}
            borderRadius={'2xl'}
            >
                Watch the Future
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <img src={img2} alt='image2'/>
            <Heading bgColor={'whiteAlpha.600'} color={'balck'} 
             pos={'absolute'}
             left={'50%'}
             top={'50%'}
             transform={'translate(-50%,-50%)'}
             textTransform={'uppercase'}
             p={'4'}
             borderRadius={'2xl'}
            >
                Future is Gaming
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <img src={img3} alt='image3'/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} 
            pos={'absolute'}
            left={'50%'}
            top={'50%'}
            transform={'translate(-50%,-50%)'}
            textTransform={'uppercase'}
            p={'4'}
            borderRadius={'2xl'}
             >
                Gaming is Console
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <img src={img4} alt='image4'/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} 
            pos={'absolute'}
            left={'50%'}
            top={'50%'}
            transform={'translate(-50%,-50%)'}
            textTransform={'uppercase'}
            p={'4'}
            borderRadius={'2xl'}
            >
                Console is life
            </Heading>
        </Box>
       
    </Carousel>
)

export default Home