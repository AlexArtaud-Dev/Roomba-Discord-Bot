import React from 'react';
import { Form, Formik } from 'formik';
import { 
    Input,
    InputGroup,
    InputLeftAddon,
    Button,
    Select,
    Box,
    Flex,
    Text,
    useDisclosure,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogBody,
    AlertDialogFooter,
    Avatar,
    Link,
    Spacer,
} from '@chakra-ui/react'


export function DashboardMenu ({
    history,
    guildId,
    guilds,
    user,
    roles,
    channels,
    config,
    updatePrefix,
    updateAccesChannel,
    updateAuditlogChannel,
    updateLogChannel,
    updateMemberCountChannel,
    updateMusicChan,
    updateReportChannel,
    updateRoleChannel,
    updateWelcomeChannel,
    updateToDelete, 
    updateBannedWords,
    updateRole,
}){
    const defaultRoleId = config.defaultRole ? config.defaultRole : 'null';
    const accesChannelId = config.accesChannel ? config.accesChannel : 'null';
    const auditlogChannelId = config.auditlogChannel ? config.auditlogChannel : 'null';
    const logChannelId = config.logChannel ? config.logChannel : 'null';
    const memberCountChannelId = config.memberCountChannel ? config.memberCountChannel : 'null';
    const musicChannelId = config.musicChannel ? config.musicChannel : 'null';
    const reportChannelId = config.reportChannel ? config.reportChannel : 'null';
    const roleChannelId = config.roleChannel ? config.roleChannel : 'null';
    const welcomeChannelId = config.welcomeChannel ? config.welcomeChannel : 'null';
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const login = () => window.location.href = window.location.href;



    function deleted(){
        setTimeout(() => {
            window.location.href = 'http://90.112.182.166:3001/menu'
        }, 5000);
    }
    const guildid = window.location.href.split("/");
    console.log(guildid[4]);
    console.log(guilds)
    
return(
    
    <div>
        <Flex w="100%" bg="#222436">
            
                <Text pt="2%" pl="3%" pb="1%"  color="white" fontFamily="Poppins"><Link href={`http://90.112.182.166:3001/`} style={{ textDecoration: 'none' }}>Login</Link>{' >'} <Link href={`http://90.112.182.166:3001/menu`} style={{ textDecoration: 'none' }}>Menu</Link>{' >'} Dashboard </Text>
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
                            Refresh
                    </Box>
                </Box>
            </Flex>
        <Box align="center" bg="#222436"  pt="2%">
                <Box color="white" pr="2%" fontFamily="Poppins">
                    {guilds.included.filter((guild) => guild.id === guildid[4]).map((guild) => (
                        <Text pb="1%" fontSize="170%" fontWeight="bold">{guild.name}</Text>
                    ))}
                    {guilds.included.filter((guild) => guild.id === guildid[4]).map((guild) => (
                        <Avatar size="xl" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg`} />
                    ))}
                </Box>

                <Box bg="#222436" pb="1%" pt="4%">
                <Text  color="white" fontSize="170%" fontFamily="Poppins" fontWeight="bold" pb="1%" pr="3%">SETUP MAIN</Text>

                    <Box boxShadow="xl" bg="#2C2F33" pt="0.5%" pb="0.5%" pl="1.5%" pr="0.5%" borderRadius="3%"  border="2px" borderColor="#232629" w="80%">
               
                     <Box>
                        <Formik 
                                
                                initialValues={{prefix: config.prefix}} 
                                onSubmit={({ prefix }) => {
                                    updatePrefix(prefix);
                                }}
                                >
                                    
                                {
                                    (props)=> (
                                        <form onSubmit={props.handleSubmit}>
                                            <Flex align="center" w="100%" pb="0.5%" pt="0.5%">
                                            <Box w="20%">
                                            <Text color="white" fontSize="120%" pt="0.5%"  align="center" fontFamily="Poppins ">Prefix :</Text>
                                            </Box>
                                            <Input color="white" fontFamily="Poppins" fontSize="100%" w="60%" type="text" pt="0.5%" name="prefix" onChange={props.handleChange} defaultValue={config.prefix}/>
                                            <Box w="20%" >
                                                <Box  as="button" type="submit" height="40px" lineHeight="1.2" transition="all 0.2s cubic-bezier(.08,.52,.52,1)" border="1px" px="12%" borderRadius="10px" fontSize="14px" fontWeight="bold" bg="#AD91FF" borderColor="#AD91FF" color="white"
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
                                                UPDATE
                                            </Box>
                                            </Box>
                                            </Flex>
                                        </form>
                                    )
                                }
                        </Formik>
                    </Box>   
                    <Box pt="1%">
                        <Formik 
                                
                            initialValues={{banWordList: config.banWordList}} 
                            onSubmit={({ banWordList }) => {
                                if(banWordList === ''){
                                    updateBannedWords("¤Delete this and add your words¤")
                                }else {
                                    updateBannedWords(banWordList);
                                }
                            
                            }}
                            >
                                    
                                {
                                    (props)=> (
                                        <form onSubmit={props.handleSubmit}>
                                            <Flex align="center" w="100%" pb="0.5%" pt="0.5%">
                                            <Box w="20%">
                                            <Text color="white" fontSize="120%" pt="0.5%"  align="center" fontFamily="Poppins ">Banned Words :</Text>
                                            </Box>
                                            <Input placeholder="word0, word1, word2 ..." color="white" fontFamily="Poppins" fontSize="100%" w="60%" type="text" pt="0.5%" name="banWordList" onChange={props.handleChange} defaultValue={config.banWordList}/>
                                            <Box w="20%" >
                                                <Box  as="button" type="submit" height="40px" lineHeight="1.2" transition="all 0.2s cubic-bezier(.08,.52,.52,1)" border="1px" px="12%" borderRadius="10px" fontSize="14px" fontWeight="bold" bg="#AD91FF" borderColor="#AD91FF" color="white"
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
                                                UPDATE
                                            </Box>
                                            </Box>
                                            </Flex>
                                        </form>
                                    )
                                }
                        </Formik>
                    </Box>
                    <Box pt="1%">
                        <Formik 
                                
                                initialValues={{ defaultRole: defaultRoleId }}
                                onSubmit= {({ defaultRole }) => { 
                                    if(defaultRole === ''){
                                        updateRole('null')
                                    }else{
                                        updateRole(defaultRole)
                                    }
                                     }}
                                >
                                    
                                {
                                    (props)=> (
                                        <form onSubmit={props.handleSubmit}>
                                            <Flex align="center" w="100%" pb="0.5%" pt="0.5%">
                                            <Box w="20%">
                                            <Text color="white" fontSize="120%" pt="0.5%"  align="center" fontFamily="Poppins ">Default Role :</Text>
                                            </Box>
                                            <Select placeholder="Choose a default role" color="white" fontFamily="Poppins" fontSize="100%" w="60%" pt="0.5%" name="defaultRole" onChange={props.handleChange}>
                                                {roles.filter((role) => role.name !== "@everyone" && role.name !== "Server Booster" && role.name !=="Roomba" && role.name !=="Warn LVL 1" && role.name !=="Warn LVL 2" && role.name !=="Warn LVL 3").map((role)=> (
                                                    <option selected={role.id === defaultRoleId} value={role.id}>{role.name}</option>
                                                ))}
                                            </Select>
                                            <Box w="20%" >
                                                <Box  as="button" type="submit" height="40px" lineHeight="1.2" transition="all 0.2s cubic-bezier(.08,.52,.52,1)" border="1px" px="12%" borderRadius="10px" fontSize="14px" fontWeight="bold" bg="#AD91FF" borderColor="#AD91FF" color="white"
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
                                                UPDATE
                                            </Box>
                                            </Box>
                                            </Flex>
                                        </form>
                                    )
                                }
                        </Formik>
                    </Box>   
                    </Box>
                    <Text  color="white" fontSize="170%" fontFamily="Poppins" fontWeight="bold" pt="3%" pb="1%" pr="3%">SETUP CHANNELS</Text>

                    <Box boxShadow="xl" bg="#2C2F33" pt="0.5%" pb="0.5%" pl="1.5%" pr="0.5%" borderRadius="3%"  border="2px" borderColor="#232629" w="80%">
               
                    <Box>
                        <Formik 
                                
                                initialValues={{ accesChannel: accesChannelId }}
                                onSubmit= {({ accesChannel }) => { 
                                    if (accesChannel === ''){
                                        updateAccesChannel("null")
                                    }else{
                                        updateAccesChannel(accesChannel)
                                    }
                                     }}
                                >
                                    
                                {
                                    (props)=> (
                                        <form onSubmit={props.handleSubmit}>
                                            <Flex align="center" w="100%" pb="0.5%" pt="0.5%">
                                            <Box w="20%">
                                            <Text color="white" fontSize="120%" pt="0.5%"  align="center" fontFamily="Poppins ">Access Channel :</Text>
                                            </Box>
                                            <Select placeholder="Choose a Channel" color="white" fontFamily="Poppins" fontSize="100%" w="60%" pt="0.5%" name="accesChannel" onChange={props.handleChange}>
                                                {channels.filter((channels) => channels.type !== 4).map((channel)=> (
                                                <option selected={channel.id === accesChannelId} value={channel.id}>{channel.name}</option>
                                                ))}
                                            </Select>
                                            <Box w="20%" >
                                                <Box  as="button" type="submit" height="40px" lineHeight="1.2" transition="all 0.2s cubic-bezier(.08,.52,.52,1)" border="1px" px="12%" borderRadius="10px" fontSize="14px" fontWeight="bold" bg="#AD91FF" borderColor="#AD91FF" color="white"
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
                                                UPDATE
                                            </Box>
                                            </Box>
                                            </Flex>
                                        </form>
                                    )
                                }
                        </Formik>
                    </Box>  
                    <Box pt="1%">
                        <Formik 
                                
                                initialValues={{ auditlogChannel: auditlogChannelId }}
                                onSubmit= {({ auditlogChannel }) => { 
                                    if (auditlogChannel === ''){
                                        updateAuditlogChannel("null")
                                    }else{
                                        updateAuditlogChannel(auditlogChannel)
                                    }
                                     }}
                                >
                                    
                                {
                                    (props)=> (
                                        <form onSubmit={props.handleSubmit}>
                                            <Flex align="center" w="100%" pb="0.5%" pt="0.5%">
                                            <Box w="20%">
                                            <Text color="white" fontSize="120%" pt="0.5%"  align="center" fontFamily="Poppins ">Audit Log Channel :</Text>
                                            </Box>
                                            <Select placeholder="Choose a Channel" color="white" fontFamily="Poppins" fontSize="100%" w="60%" pt="0.5%" name="auditlogChannel" onChange={props.handleChange}>
                                                {channels.filter((channels) => channels.type !== 4).map((channel)=> (
                                                <option selected={channel.id === auditlogChannelId} value={channel.id}>{channel.name}</option>
                                                ))}
                                            </Select>
                                            <Box w="20%" >
                                                <Box  as="button" type="submit" height="40px" lineHeight="1.2" transition="all 0.2s cubic-bezier(.08,.52,.52,1)" border="1px" px="12%" borderRadius="10px" fontSize="14px" fontWeight="bold" bg="#AD91FF" borderColor="#AD91FF" color="white"
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
                                                UPDATE
                                            </Box>
                                            </Box>
                                            </Flex>
                                        </form>
                                    )
                                }
                        </Formik>
                    </Box>  
                    <Box pt="1%">
                        <Formik 
                                
                                initialValues={{ logChannel: logChannelId }}
                                onSubmit= {({ logChannel }) => { 
                                    if (logChannel === ''){
                                        updateLogChannel("null")
                                    }else{
                                        updateLogChannel(logChannel)
                                    }
                                     }}
                                >
                                    
                                {
                                    (props)=> (
                                        <form onSubmit={props.handleSubmit}>
                                            <Flex align="center" w="100%" pb="0.5%" pt="0.5%">
                                            <Box w="20%">
                                            <Text color="white" fontSize="120%" pt="0.5%"  align="center" fontFamily="Poppins ">Log Channel :</Text>
                                            </Box>
                                            <Select placeholder="Choose a Channel" color="white" fontFamily="Poppins" fontSize="100%" w="60%" pt="0.5%" name="logChannel" onChange={props.handleChange}>
                                                {channels.filter((channels) => channels.type !== 4).map((channel)=> (
                                                <option selected={channel.id === logChannelId} value={channel.id}>{channel.name}</option>
                                                ))}
                                            </Select>
                                            <Box w="20%" >
                                                <Box  as="button" type="submit" height="40px" lineHeight="1.2" transition="all 0.2s cubic-bezier(.08,.52,.52,1)" border="1px" px="12%" borderRadius="10px" fontSize="14px" fontWeight="bold" bg="#AD91FF" borderColor="#AD91FF" color="white"
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
                                                UPDATE
                                            </Box>
                                            </Box>
                                            </Flex>
                                        </form>
                                    )
                                }
                        </Formik>
                    </Box>  
                    <Box pt="1%">
                        <Formik 
                                
                                initialValues={{ memberCountChannel: memberCountChannelId }}
                                onSubmit= {({ memberCountChannel }) => { 
                                    if (memberCountChannel === ''){
                                        updateMemberCountChannel("null")
                                    }else{
                                        updateMemberCountChannel(memberCountChannel)
                                    }
                                     }}
                                >
                                    
                                {
                                    (props)=> (
                                        <form onSubmit={props.handleSubmit}>
                                            <Flex align="center" w="100%" pb="0.5%" pt="0.5%">
                                            <Box w="20%">
                                            <Text color="white" fontSize="120%" pt="0.5%"  align="center" fontFamily="Poppins ">Member Count Channel :</Text>
                                            </Box>
                                            <Select placeholder="Choose a Channel" color="white" fontFamily="Poppins" fontSize="100%" w="60%" pt="0.5%" name="memberCountChannel" onChange={props.handleChange}>
                                                {channels.filter((channels) => channels.type !== 4).map((channel)=> (
                                                <option selected={channel.id === memberCountChannelId} value={channel.id}>{channel.name}</option>
                                                ))}
                                            </Select>
                                            <Box w="20%" >
                                                <Box  as="button" type="submit" height="40px" lineHeight="1.2" transition="all 0.2s cubic-bezier(.08,.52,.52,1)" border="1px" px="12%" borderRadius="10px" fontSize="14px" fontWeight="bold" bg="#AD91FF" borderColor="#AD91FF" color="white"
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
                                                UPDATE
                                            </Box>
                                            </Box>
                                            </Flex>
                                        </form>
                                    )
                                }
                        </Formik>
                    </Box>  
                    <Box pt="1%">
                        <Formik 
                                
                                initialValues={{ musicChannel: musicChannelId }}
                                onSubmit= {({ musicChannel }) => { 
                                    if (musicChannel === ''){
                                        updateMusicChan("null")
                                    }else{
                                        updateMusicChan(musicChannel)
                                    }
                                     }}
                                >
                                    
                                {
                                    (props)=> (
                                        <form onSubmit={props.handleSubmit}>
                                            <Flex align="center" w="100%" pb="0.5%" pt="0.5%">
                                            <Box w="20%">
                                            <Text color="white" fontSize="120%" pt="0.5%"  align="center" fontFamily="Poppins ">Music Channel :</Text>
                                            </Box>
                                            <Select placeholder="Choose a Channel" color="white" fontFamily="Poppins" fontSize="100%" w="60%" pt="0.5%" name="musicChannel" onChange={props.handleChange}>
                                                {channels.filter((channels) => channels.type !== 4).map((channel)=> (
                                                <option selected={channel.id === musicChannelId} value={channel.id}>{channel.name}</option>
                                                ))}
                                            </Select>
                                            <Box w="20%" >
                                                <Box  as="button" type="submit" height="40px" lineHeight="1.2" transition="all 0.2s cubic-bezier(.08,.52,.52,1)" border="1px" px="12%" borderRadius="10px" fontSize="14px" fontWeight="bold" bg="#AD91FF" borderColor="#AD91FF" color="white"
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
                                                UPDATE
                                            </Box>
                                            </Box>
                                            </Flex>
                                        </form>
                                    )
                                }
                        </Formik>
                    </Box>
                    <Box pt="1%">
                        <Formik 
                                
                                initialValues={{ reportChannel: reportChannelId }}
                                onSubmit= {({ reportChannel }) => { 
                                    if (reportChannel === ''){
                                        updateReportChannel("null")
                                    }else{
                                        updateReportChannel(reportChannel)
                                    }
                                     }}
                                >
                                    
                                {
                                    (props)=> (
                                        <form onSubmit={props.handleSubmit}>
                                            <Flex align="center" w="100%" pb="0.5%" pt="0.5%">
                                            <Box w="20%">
                                            <Text color="white" fontSize="120%" pt="0.5%"  align="center" fontFamily="Poppins ">Report Channel :</Text>
                                            </Box>
                                            <Select placeholder="Choose a Channel" color="white" fontFamily="Poppins" fontSize="100%" w="60%" pt="0.5%" name="reportChannel" onChange={props.handleChange}>
                                                {channels.filter((channels) => channels.type !== 4).map((channel)=> (
                                                <option selected={channel.id === reportChannelId} value={channel.id}>{channel.name}</option>
                                                ))}
                                            </Select>
                                            <Box w="20%" >
                                                <Box  as="button" type="submit" height="40px" lineHeight="1.2" transition="all 0.2s cubic-bezier(.08,.52,.52,1)" border="1px" px="12%" borderRadius="10px" fontSize="14px" fontWeight="bold" bg="#AD91FF" borderColor="#AD91FF" color="white"
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
                                                UPDATE
                                            </Box>
                                            </Box>
                                            </Flex>
                                        </form>
                                    )
                                }
                        </Formik>
                    </Box> 
                    <Box pt="1%">
                        <Formik 
                                
                                initialValues={{ roleChannel: roleChannelId }}
                                onSubmit= {({ roleChannel }) => { 
                                    if (roleChannel === ''){
                                        updateRoleChannel("null")
                                    }else{
                                        updateRoleChannel(roleChannel)
                                    }
                                     }}
                                >
                                    
                                {
                                    (props)=> (
                                        <form onSubmit={props.handleSubmit}>
                                            <Flex align="center" w="100%" pb="0.5%" pt="0.5%">
                                            <Box w="20%">
                                            <Text color="white" fontSize="120%" pt="0.5%"  align="center" fontFamily="Poppins ">Role Channel :</Text>
                                            </Box>
                                            <Select placeholder="Choose a Channel" color="white" fontFamily="Poppins" fontSize="100%" w="60%" pt="0.5%" name="roleChannel" onChange={props.handleChange}>
                                                {channels.filter((channels) => channels.type !== 4).map((channel)=> (
                                                <option selected={channel.id === roleChannelId} value={channel.id}>{channel.name}</option>
                                                ))}
                                            </Select>
                                            <Box w="20%" >
                                                <Box  as="button" type="submit" height="40px" lineHeight="1.2" transition="all 0.2s cubic-bezier(.08,.52,.52,1)" border="1px" px="12%" borderRadius="10px" fontSize="14px" fontWeight="bold" bg="#AD91FF" borderColor="#AD91FF" color="white"
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
                                                UPDATE
                                            </Box>
                                            </Box>
                                            </Flex>
                                        </form>
                                    )
                                }
                        </Formik>
                    </Box> 
                    <Box pt="1%">
                        <Formik 
                                
                                initialValues={{ welcomeChannel: welcomeChannelId }}
                                onSubmit= {({ welcomeChannel }) => { 
                                    if (welcomeChannel === ''){
                                        updateWelcomeChannel("null")
                                    }else{
                                        updateWelcomeChannel(welcomeChannel)
                                    }
                                     }}
                                >
                                    
                                {
                                    (props)=> (
                                        <form onSubmit={props.handleSubmit}>
                                            <Flex align="center" w="100%" pb="0.5%" pt="0.5%">
                                            <Box w="20%">
                                            <Text color="white" fontSize="120%" pt="0.5%"  align="center" fontFamily="Poppins ">Welcome Channel :</Text>
                                            </Box>
                                            <Select placeholder="Choose a Channel" color="white" fontFamily="Poppins" fontSize="100%" w="60%" pt="0.5%" name="welcomeChannel" onChange={props.handleChange}>
                                                {channels.filter((channels) => channels.type !== 4).map((channel)=> (
                                                <option selected={channel.id === welcomeChannelId} value={channel.id}>{channel.name}</option>
                                                ))}
                                            </Select>
                                            <Box w="20%" >
                                                <Box  as="button" type="submit" height="40px" lineHeight="1.2" transition="all 0.2s cubic-bezier(.08,.52,.52,1)" border="1px" px="12%" borderRadius="10px" fontSize="14px" fontWeight="bold" bg="#AD91FF" borderColor="#AD91FF" color="white"
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
                                                UPDATE
                                            </Box>
                                            </Box>
                                            </Flex>
                                        </form>
                                    )
                                }
                        </Formik>
                    </Box> 
                    </Box>
                </Box>
            </Box>

            <Box bg="#222436" >
                <Box pt="2%" pb="2%" w="90%" align="right">
                    
                    <Formik
                        initialValues={{ toDelete: false }}
                        onSubmit= {() => { updateToDelete(true) }}
                    
                    >
                    {
                        (props) => (
                            <form onSubmit={props.handleSubmit}>
                                <Button colorScheme="orange" onClick={onOpen} children="Remove Server"/>
        
                                    <AlertDialog
                                        motionPreset="slideInBottom"
                                        leastDestructiveRef={cancelRef}
                                        onClose={onClose}
                                        isOpen={isOpen}
                                        isCentered
                                    >
                                        <AlertDialogOverlay />

                                        <AlertDialogContent>
                                        <AlertDialogHeader>Server Removing</AlertDialogHeader>
                                        <AlertDialogCloseButton />
                                        <AlertDialogBody>
                                            You're about to remove : <b>{config.guildName}</b><br/>
                                            Are you sure you want to remove the server ? It will delete all database informations and remove Roomba from it.
                                            You can't go back after removing the server. <br/>
                                            (The operation may take up to 30 seconds to take effect!)
                                        </AlertDialogBody>
                                        <AlertDialogFooter>
                                        <Button ref={cancelRef} onClick={onClose}>
                                            Abort
                                            </Button>
                                            <Button onClick= {() => { updateToDelete(true);deleted() }} colorScheme="red" ml={3}>
                                            REMOVE
                                            </Button>

                                        </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                            </form>
                        )
                    }

                    </Formik>
                    </Box>
                </Box>
    </div>


    
)
    
}