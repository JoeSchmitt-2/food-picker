import { Box, Text, Heading, ChakraProvider } from '@chakra-ui/react';

export function Header() {
    return (
        <ChakraProvider>
            <Box pb='112px' as='section'>
                <Box 
                color='#F7FAFC' 
                bg='hsl(149, 20%, 32%);'
                pt='90px' 
                pb='198px' 
                px='8px'
                textAlign={['left', 'left', 'center']}
                >
                    <Heading fontWeight='800' fontSize={['3xl', '3xl', '5xl']} color='#F7FAFC'>
                        Food Picker
                    </Heading>
                    <Text fontWeight='500' fontSize={['lg', 'lg', '2xl']} pt='16px'>
                        Enter a query and get a random food from the results!
                    </Text>
                </Box>
            </Box>
            
        </ChakraProvider>
        
    )
}