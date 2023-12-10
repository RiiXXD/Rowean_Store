import React from 'react'
import { Box, Flex, Heading,Stack,Text,Image ,InputGroup,Input,IconButton,InputRightElement} from '@chakra-ui/react'
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'
import { ArrowForwardIcon } from '@chakra-ui/icons'
// import Background from './Background'

export default function HomePage(){

return <Box  bg="#e2ddd3" color="##1c1c1c">
    <Navbar/>

<Box padding="3em">
<Flex justifyContent="center" align="center" height="70vh">
<Heading as="h1"  fontSize="4em">ROWEAM</Heading>


</Flex>
<Flex justifyContent="space-around" gap="5EM" fontWeight="bold">
<Stack lineHeight="0.55em" align="center"  >
<Text fontSize="0.7em">NEW</Text>
<Text fontSize="0.7em">VINTAGE</Text>
<Text fontSize="0.7em">TRUE</Text>
<Text fontSize="0.7em">VINTAGE</Text>
</Stack>
<Stack lineHeight="0.75em">
<Flex align="end" >
<Text>M</Text>
<Heading as="h1">R</Heading>
<Text>D</Text>
</Flex>
<Text align="center">H</Text>
</Stack>
<Stack lineHeight="0.55em" align="center"  >
<Text fontSize="0.7em">NEW</Text>
<Text fontSize="0.7em">VINTAGE</Text>
<Text fontSize="0.7em">TRUE</Text>
<Text fontSize="0.7em">VINTAGE</Text>
</Stack>
</Flex>
</Box>
{/* <Background/> */}
<Box p="1em 3em">
    <Box py="2em" bg="#ecece4">
        <Flex justifyContent="space-around">
            <Box p="2em 0em">
            <Image
                    w="auto"
                    h="auto"
                    maxH="100%"
                    maxW="100%"
                    objectFit="cover"
                    src="https://images.pexels.com/photos/17436721/pexels-photo-17436721/free-photo-of-mirror-over-couch-with-pillows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    // alt="hero1"https://images.pexels.com/photos/1366877/pexels-photo-1366877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
                  />
            </Box>
            <Box w="50%"><Flex justifyContent="flex-end" >
            <Image w="40%" h="60%"  objectFit="cover" src="https://images.pexels.com/photos/1366877/pexels-photo-1366877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </Flex>
            <Flex   flexDir="column" align="flex-start">
                <Text w="60%" fontSize="4em" fontWeight="bold">The Roweam Method</Text>
                <Text fontSize="1.25em">Part true vinatage,part new vintage, our method takes a gathered,
                authentic approach using well-constructed pieces completewith endless character, no matter their age.</Text>
                <Text w="60%" fontSize="1.30em" fontWeight="bold">Read more</Text>

                </Flex></Box>
        </Flex>
    </Box>
</Box>
<Box p="3em">
<Flex align="center" justify="space-around">
<Image w="50%" src="https://roweam.com/cdn/shop/articles/20230809-In_Situ-Living_01_0241-MAIN1.jpg?v=1695061972&width=800"></Image>
<Box p="1em" w="40%">
    <Heading as="h5" fontSize="1.25em" color="#64341c">Join The R List</Heading>
    <Text fontSize="1.25em">Sign Up to be the first person to know about new product collections, antiquities and more!</Text>
    <InputGroup>
   <Input variant='flushed' borderBottomColor="#64341c" />
    <InputRightElement pointerEvents="none">
    <IconButton color="#64341c" bg="none" size="lg" aria-label='Send request' icon={<ArrowForwardIcon/>}/>
    </InputRightElement>
  </InputGroup>
</Box>
</Flex>
</Box>
<Footer/>
</Box>
}