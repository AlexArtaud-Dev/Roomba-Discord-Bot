import React from 'react';
import {Box, Button, Center, Image, Img, Link} from '@chakra-ui/react';
import { Avatar, AvatarBadge } from "@chakra-ui/react"
import { Flex, Spacer, Text } from "@chakra-ui/react"

export function HeaderComponent({
    link,
}) {

    return (
        <div > 
            
            <Box color="white" bg="#181a26"  pt="3%" pb="3%" >
            <Flex w="100%" align="center">
                <Box align="center" w="100%" >
                    <Image  pr="3%" w="40%" src={link}/>
                </Box>
            </Flex>    
            </Box>
        </div>
    );
}