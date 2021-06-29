import React from 'react';
import {Box, Button, Center, Link} from '@chakra-ui/react';
import { Avatar, AvatarBadge } from "@chakra-ui/react"
import { Flex, Spacer, Text } from "@chakra-ui/react"

export function MenuComponent({
    guilds,
}) {
    const login = () => window.location.href = window.location.href;
    const add = () => window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=727865198333132860&permissions=8&redirect_uri=http%3A%2F%2F90.112.182.166%3A3000%2Fapi%2Fauth%2Fdiscord%2Fredirect&scope=bot';
    return (
        <div > 
            <Flex w="100%" bg="#222436">
                <Text pt="2%" pl="3%" pb="1%"  color="white" fontFamily="Poppins"><Link href={`http://90.112.182.166:3001/`} style={{ textDecoration: 'none' }}>Login</Link>{' >'} Menu </Text>
                <Spacer/>
                <Box pt="2%" pr="3%">
                    <Box
                        as="button"
                        height="35px"
                        lineHeight="1.2"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        border="1px"
                        px="40px"
                        onClick={login}
                        borderRadius="10px"
                        fontSize="14px"
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
                            Reload
                    </Box>
                </Box>
            </Flex>
            <Box bg="#222436" pt="2%" pb="20%" align="center">
            <Box >
            <Text  color="white" fontSize="150%" fontFamily="Poppins" fontWeight="bold" pr="3%">Your Servers With Roomba</Text>
            
            {guilds.included.map( (guild) => (
                <Box bg="#222436" pb="1%" pt="1%">
                    <Box color="white"  fontFamily= "Poppins">
                    <Flex boxShadow="xl" bg="#2C2F33" pt="0.5%" pb="0.5%" pl="1.5%" pr="0.5%" borderRadius="3%"  border="2px" borderColor="#232629" w="80%">
                        <Box pr="2%" border>
                            <Avatar size="md" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg`} />
                        </Box>
                        <Box centerContent w="80%" pt="0.9%" >
                            <p>{guild.name }</p>
                            </Box>
                        <Box centerContent pt="0.5%">

                            <Box
                                as="button"
                                height="35px"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                border="1px"
                                px="15px"
                                borderRadius="10px"
                                fontSize="14px"
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
                                <Link href={`/dashboard/${guild.id}/`} style={{ textDecoration: 'none' }}>View Dashboard</Link>
                                </Box>
                        </Box>
                    </Flex>
                    </Box>
                </Box>
            ))}
            </Box>
            <Text  color="white" fontSize="150%" fontFamily="Poppins" fontWeight="bold" pt="2%" pr="3%">Your Servers Without Roomba</Text>

            {guilds.excluded.map( (guild) => (
                
                <div>
                    <Box bg="#222436" pb="1%" pt="1%" fontFamily="Poppins">
                        
                        <Box color="white">
                            <Flex boxShadow="xl" bg="#2C2F33" pt="0.5%" pb="0.5%" pl="1.5%" pr="0.5%" borderRadius="3%"  border="2px" borderColor="#232629" w="80%">
                                <Box pr="2%" border>
                                    <Avatar size="md" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg`} />
                                </Box>
                                <Box centerContent w="81.2%" pt="0.8%" >
                                    <p>{guild.name }</p>
                                    </Box>
                                <Box centerContent pt="0.5%" >
                                    <Box
                                        as="button"
                                        height="35px"
                                        lineHeight="1.2"
                                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                        border="1px"
                                        px="15px"
                                        onClick={add}
                                        borderRadius="10px"
                                        fontSize="14px"
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
                                        Add to Server
                                    </Box>
                                </Box>
                            </Flex>   
                        </Box>
                    </Box>
                </div>
            ))}
            </Box>

        </div>
    );
}