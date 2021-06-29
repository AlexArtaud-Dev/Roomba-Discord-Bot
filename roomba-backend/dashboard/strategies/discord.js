const { access } = require('fs');
const passport = require('passport');
const DiscordStrategy = require('passport-discord');
const config = require('../../config');
const User = require('../database/schemas/User')

passport.serializeUser((user, done) => {
    done(null, user.discordId)
});

passport.deserializeUser(async(discordId, done) => {
    try {
        const user = await User.findOne({ discordId });
        return user ? done(null, user) : done(null, null);
    } catch (error) {
        console.log(error);
        done(error, null);
    }
});
passport.use(
    new DiscordStrategy({
        clientID: config.DASHBOARD_CLIENT_ID,
        clientSecret: config.DASHBOARD_CLIENT_SECRET,
        callbackURL: config.DASHBOARD_CALLBACK_URL,
        scope: ['identify', 'guilds'],
    }, async(accessToken, refreshToken, profile, done) => {
        const { id, username, discriminator, avatar, guilds } = profile;


        try {
            const findUser = await User.findOneAndUpdate({ discordId: id }, {
                discordTag: `${username}#${discriminator}`,
                avatar,
                guilds
            });
            if (findUser) {
                console.log(`${username}#${discriminator} vient de se connecter au Dashboard ! `);
                return done(null, findUser);
            } else {
                const newUser = await User.create({
                    discordId: id,
                    discordTag: `${username}#${discriminator}`,
                    avatar,
                    guilds
                });
                return done(null, newUser);
            }
        } catch (error) {
            console.log(error);
            return done(error, null);
        }



    }));