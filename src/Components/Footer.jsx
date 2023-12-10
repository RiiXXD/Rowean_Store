import { Box, Flex,Stack,Text} from '@chakra-ui/react'
import { FaInstagram,FaFacebook } from "react-icons/fa";
export default function Footer(){
    return(
     <Box bg="#64341c" color="#e2ddd3">
        <Box padding="1em 3em">
            <Box>
            <Flex justifyContent="center" lineHeight="0.55em" fontSize="1em" gap="20%" my="1.5em">
                <Stack>
                    <Text fontWeight="bold" marginBottom="0.5em">SHOP</Text>
                    <Text>Furniture</Text>
                    <Text>Decor</Text>
                    <Text>Dining & Entertaining</Text>
                    <Text>Soft Goods</Text>
                    <Text>Lighting</Text>
                    <Text>Art</Text>
                </Stack>
                <Stack>
                    <Text fontWeight="bold" marginBottom="0.5em">Company</Text>
                    <Text>Our Story</Text>
                    <Text>Interior Design</Text>
                    <Text>Stay With Us</Text>
                    <Text>A Bit Moore Blog</Text>
                </Stack>
                <Stack>
                    <Text fontWeight="bold" marginBottom="0.5em">Customer</Text>
                    <Text>Contact Us</Text>
                    <Text>Legal</Text>
                    <Text>FAQ</Text>
                    <Text>Gift Card</Text>
                    <Text>Order Switch</Text>
                    <Text>Account</Text>
                </Stack>
                <Stack>
                    <Text fontWeight="bold" marginBottom="0.5em">CONNECT</Text>
                    <Text>rishitaa.m@gmail.com</Text>
                    <Flex align="center" > <FaFacebook /> <Text>Facebook</Text></Flex>
                     <Flex align="center"> <FaInstagram /> <Text> Instagram</Text></Flex>
                </Stack>
            </Flex>
        </Box>
        </Box>
        <Flex justifyContent="space-between" fontSize="0.8em" borderTop="1px solid #e2ddd3" p="0.45em"> <Text>2023 ROWEAM</Text>
        <Text>Made By Rishita M.</Text>
        </Flex>
    </Box>
    )
}