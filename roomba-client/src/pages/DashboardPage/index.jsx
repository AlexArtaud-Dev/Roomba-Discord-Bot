import React from 'react';
import { getUserDetails, getGuildConfig, getGuildRoles, getGuildChannels } from '../../utils/api'
import { DashboardMenu, HeaderComponent } from '../../components';
import { getGuilds, updateGuildPrefix, updateToDelete, updateDefaultRole, updateGuildBannedWordList, updateMusicChannel, updateAccesChannel, updateAuditlogChannel, updateLogChannel, updateMemberCountChannel, updateReportChannel, updateRoleChannel, updateWelcomeChannel } from '../../utils/api';


export function DashboardPage({
    history,
    match
}){
    const [user, setUser] = React.useState( null );
    const [loading, setLoading ] = React.useState( true );
    const [config, setConfig ] = React.useState( { } );
    const [roles, setRoles ] = React.useState([]);
    const [channels, setChannel] = React.useState([]);
    const [guilds, setGuilds ] = React.useState( {} );

    React.useEffect( ()=> {
        getUserDetails()
            .then( ({data}) => {
                console.log(data);
                setUser( data );
                return getGuildConfig(match.params.id);
            })
            .then(( { data } ) => {
                console.log(data);
                setConfig(data);
                return getGuildRoles(match.params.id);
            })
            .then(( {data} ) => {
                console.log(data);
                setRoles(data);
                return getGuildChannels(match.params.id);
            })
            .then(( {data} ) => {
                console.log(data);          
                setChannel(data);
                return getGuilds();
            })
            .then(( { data } ) => {
                console.log(data);
                setGuilds( data );
                setLoading( false );
            })
            .catch((err) => {
                history.push( '/' );
                setLoading( false );
            })
    }, [])

    const updateGuildPrefixParent = async (prefix) => {
        
        try {
            const update = await updateGuildPrefix(match.params.id, prefix);
            console.log(update);
        } catch (error) {
            console.log(error);
        }
    }
    const updateToDeleteParent = async (toDelete) => {
        
        try {
            const update = await updateToDelete(match.params.id, toDelete);
            console.log(update);
        } catch (error) {
            console.log(error);
        }
    }
    const updateBannedWordsParent = async (banWordList) => {
        
        try {
            const update = await updateGuildBannedWordList(match.params.id, banWordList);
            console.log(update);
        } catch (error) {
            console.log(error);
        }
    }
    
    const updateDefaultRoleParent = async (roleId) => {
        console.log(roleId);
        updateDefaultRole(match.params.id, roleId)
    }

    
    const updateAccesChannelParent = async (accesChannel) => {
        console.log(accesChannel);
        updateAccesChannel(match.params.id, accesChannel)
    }

    const updateAuditlogChannelParent = async (auditlogChannel) => {
        console.log(auditlogChannel);
        updateAuditlogChannel(match.params.id, auditlogChannel)
    }
    const updateLogChannelParent = async (logChannel) => {
        console.log(logChannel);
        updateLogChannel(match.params.id, logChannel)
    }
    const updateMemberCountChannelParent = async (memberCountChannel) => {
        console.log(memberCountChannel);
        updateMemberCountChannel(match.params.id, memberCountChannel)
    }
    const updateMusicChannelParent = async (musicChannel) => {
        console.log(musicChannel);
        updateMusicChannel(match.params.id, musicChannel)
    }
    const updateReportChannelParent = async (reportChannel) => {
        console.log(reportChannel);
        updateReportChannel(match.params.id, reportChannel)
    }
    const updateRoleChannelParent = async (roleChannel) => {
        console.log(roleChannel);
        updateRoleChannel(match.params.id, roleChannel)
    }
    const updateWelcomeChannelParent = async (welcomeChannel) => {
        console.log(welcomeChannel);
        updateWelcomeChannel(match.params.id, welcomeChannel)
    }
    


    return (
        !loading && (
        <div>

            <DashboardMenu 
                user={user} 
                config={config} 
                roles={roles}
                guilds={ guilds }
                channels={channels}
                updateToDelete={updateToDeleteParent}
                updateAccesChannel={updateAccesChannelParent}
                updateAuditlogChannel={updateAuditlogChannelParent}
                updateLogChannel={updateLogChannelParent}
                updateMemberCountChannel={updateMemberCountChannelParent}
                updateMusicChan ={updateMusicChannelParent}
                updateReportChannel={updateReportChannelParent}
                updateRoleChannel={updateRoleChannelParent}
                updateWelcomeChannel={updateWelcomeChannelParent}
                updateBannedWords={updateBannedWordsParent}
                updatePrefix={updateGuildPrefixParent} 
                updateRole={updateDefaultRoleParent}
            />
        </div>
    )
    )
}
