import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
export default function Navbar(){
return <Flex justifyContent="space-between" bg="#e2ddd3" p="1em">
    <Text>ROWEAN</Text>
    <Flex justifyContent="space-between" w="45%">
    <Text>SHOP</Text>
    <Text>COLLECTION</Text>
    <Text>ABOUT</Text>
    <Text>IN SITU</Text>
    <Text>SEARCH</Text>
    <Text>LOGIN</Text>
    <Text>CART</Text>
   
    
    </Flex>

</Flex>
}