import React from 'react';
import { HeaderComponent, MenuComponent } from '../../components';

import { getGuilds, getUserDetails } from '../../utils/api'


export function MenuPage({
   history,

}){

    const [user, setUser] = React.useState( null );
    const [loading, setLoading ] = React.useState( true );
    const [guilds, setGuilds ] = React.useState( {} );
    
    React.useEffect( ()=> {
        getUserDetails()
            .then( ({data}) => {
                setUser( data );
                return getGuilds();
            }).then( ( {data} ) =>{
                setGuilds( data );
                setLoading( false );
            } ).catch((err) => {
                history.push( '/' );
                setLoading( false );
            })
    }, [])

    return !loading && (
        <div>
            <HeaderComponent link={"https://media.discordapp.net/attachments/755128303660171384/792739656335884288/roombamenu.png?width=1440&height=157"}/>
            <MenuComponent guilds={ guilds }/>
        </div>
    )
}