import React from 'react';
import { Box, Heading, Text, Center} from '@chakra-ui/react';

const RichText= ( {heading, text} ) => {
    
    
    return( 
        <Box p="2.5rem">
        <Center display="flex" flexDir="column" textAlign="center">
            <Heading pb="2.5rem">
                {heading && heading}
            </Heading>
            <Text pb="2rem">
                {text && text}
            </Text>
        </Center>
        </Box>
    )
}

export default RichText;