import React from 'react';
import {Box, Button, Center, Image, Img, Link} from '@chakra-ui/react';
import { Avatar, AvatarBadge } from "@chakra-ui/react"
import { Flex, Spacer, Text } from "@chakra-ui/react"

export function LandingComponent() {
    const login = () => window.location.href = 'http://90.112.182.166:3000/api/auth/discord';
    
    return (
        <div > 
            <Box  pt="8%" align="center" bg="#17182b" height="1000px">
                    <Box height="500px" pt="2%" pb="2%" align="center" w="70%" bg="#1c1d1f" boxShadow="dark-lg" borderRadius="10px">
                        <Image  pt="2%" w="80%" src={"https://media.discordapp.net/attachments/755128303660171384/792754755776151552/roomba.png"}/>
                        <Text pt="3%" w="75%" color="white" fontFamily="Poppins"> This Dashboard is only for server owners and only them. Even if you have administrator permissions, you won't be able to access server dashboard. On this dashboard you can change Roomba variables for your server and add the Roomba to the servers you own.</Text>
                        <Box pt="5%">
                            <Box
                            as="button"
                            height="50px"
                            lineHeight="1.2"
                            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                            border="1px"
                            px="80px"
                            onClick={login}
                            borderRadius="10px"
                            fontSize="20px"
                            fontWeight="bold"
                            bg="#AD91FF"
                            borderColor="#AD91FF"
                            color="white"
                            _hover={{
                                bg: "#ebedf0",
                                borderColor:"#ebedf0",
                                color:"black",
                            }}
                            _active={{
                                bg: "#dddfe2",
                                transform: "scale(0.98)",
                                borderColor: "#bec3c9",
                            }}
                            _focus={{
                                boxShadow:
                                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                            }}
                            >
                                LOGIN
                            </Box>
                        </Box>
                    </Box>
                </Box>
           
        </div>
    );
}