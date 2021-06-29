const MESSAGES = {
    COMMANDS: {
        ADMIN: {
            BDDSHOW: {
                name: "bddshow",
                aliases: ['bddshow', 'bdd', 'bdds', 'show'],
                category: 'admin',
                description: "Montre les variables de la BDD : \n ```prefix, accesChannel, auditlogChannel, logChannel, musicChannel, reportChannel, roleChannel, welcomeChannel, welcomeMessage```",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: true,
                isUserAdmin: false
            },
            CONFIG: {
                name: "config",
                aliases: ['config'],
                category: 'admin',
                description: "Modifier les variables de la BDD : \n ```prefix, accesChannel, auditlogChannel, logChannel, musicChannel, reportChannel, roleChannel, welcomeChannel, welcomeMessage```",
                usage: '<key> <value>',
                cooldowns: 3,
                args: true,
                permissions: true,
                isUserAdmin: false
            },

            EVAL: {
                name: "eval",
                aliases: ['eval'],
                category: 'admin',
                description: "Renvoi un code javascript testé",
                usage: '<code_to_test>',
                cooldowns: 3,
                args: true,
                permissions: true,
                isUserAdmin: false
            },

            RELOAD: {
                name: "reload",
                aliases: ['reload'],
                category: 'admin',
                description: "Relancer le bot",
                usage: '',
                cooldowns: 10,
                args: false,
                permissions: true,
                isUserAdmin: false
            }
        },
        BOTINFOS: {
            DASHBOARD: {
                name: "dashboard",
                aliases: ['dash', 'board', 'dshb'],
                category: 'botinfos',
                description: "Donne le lien du dashboard",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            BOTINFO: {
                name: "botinfo",
                aliases: ['botinfo', 'bot'],
                category: 'botinfos',
                description: "Renvoi des informations concernant le bot",
                usage: '',
                cooldowns: 4,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
        },
        ANIME: {
            ANIMESCRAP: {
                name: "animescrap",
                aliases: ['animescrap'],
                category: 'anime',
                description: "Permet de trouver un lien de streaming/download d'un animé",
                usage: '<nom_anime>',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
        },
        ADMIN: {
            BDDSHOW: {
                name: "bddshow",
                aliases: ['bddshow', 'bdd', 'bdds', 'show'],
                category: 'admin',
                description: "Montre les variables de la BDD : \n ```prefix, accesChannel, auditlogChannel, logChannel, musicChannel, reportChannel, roleChannel, welcomeChannel, welcomeMessage```",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: true,
                isUserAdmin: false
            },
            CONFIG: {
                name: "config",
                aliases: ['config'],
                category: 'admin',
                description: "Modifier les variables de la BDD : \n ```prefix, accesChannel, auditlogChannel, logChannel, musicChannel, reportChannel, roleChannel, welcomeChannel, welcomeMessage```",
                usage: '<key> <value>',
                cooldowns: 3,
                args: true,
                permissions: true,
                isUserAdmin: false
            },

            EVAL: {
                name: "eval",
                aliases: ['eval'],
                category: 'admin',
                description: "Renvoi un code javascript testé",
                usage: '<code_to_test>',
                cooldowns: 3,
                args: true,
                permissions: true,
                isUserAdmin: false
            },

            RELOAD: {
                name: "reload",
                aliases: ['reload'],
                category: 'admin',
                description: "Relancer le bot",
                usage: '',
                cooldowns: 10,
                args: false,
                permissions: true,
                isUserAdmin: false
            }
        },
        DISTUBE: {
            DHELP: {
                name: "dhelp",
                aliases: ['dhelp', 'd', 'helpd'],
                category: 'distube',
                description: "Donne les commandes liées à distube",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
        },
        NSFW: {
            BOUNCE: {
                name: "bounce",
                aliases: ['bounce'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            BTB: {
                name: "btb",
                aliases: ['btb'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            BTG: {
                name: "btg",
                aliases: ['btg'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            CLRD: {
                name: "clrd",
                aliases: ['clrd'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            DANGEROUS: {
                name: "dangerous",
                aliases: ['dangerous'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            GIF: {
                name: "gif",
                aliases: ['gif'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            GP: {
                name: "gp",
                aliases: ['gp'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            HENTAI: {
                name: "hentai",
                aliases: ['hentai'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            HRY: {
                name: "hry",
                aliases: ['hry'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            LGRY: {
                name: "lgry",
                aliases: ['lgry'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            NEKO: {
                name: "neko",
                aliases: ['neko'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            OIL: {
                name: "oil",
                aliases: ['oil'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            SWR: {
                name: "swr",
                aliases: ['swr'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            TIGHT: {
                name: "tight",
                aliases: ['tight'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            TRAP: {
                name: "trap",
                aliases: ['trap'],
                category: 'nsfw',
                description: "NSFW CONTENT",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },


        },

        PICTURES: {
            CAT: {
                name: "cat",
                aliases: ['cat', 'chat'],
                category: 'pictures',
                description: "Renvoie une image de chat",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            DOG: {
                name: "dog",
                aliases: ['dog', 'chien'],
                category: 'pictures',
                description: "Renvoie une image de chien",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            FOX: {
                name: "fox",
                aliases: ['fox', 'renard'],
                category: 'pictures',
                description: "Renvoie une image de renard",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            ANIME: {
                name: "anime",
                aliases: ['anime', 'meme'],
                category: 'pictures',
                description: "Renvoie des mêmes de type anime",
                usage: '',
                cooldowns: 3,
                args: false,
                permissions: false,
                isUserAdmin: false
            },

        },

        COLLECTORS: {
            MSGCOLLECTOR: {
                name: "msgcollector",
                aliases: ['msgcollector', 'msgcol'],
                category: 'collectors',
                description: "Message Collector",
                usage: '<msg to collector>',
                cooldowns: 3,
                args: true,
                permissions: true,
                isUserAdmin: false
            },

            REACTCOLLECTOR: {
                name: "reactcollector",
                aliases: ['reactcollector', 'reacol'],
                category: 'collectors',
                description: "React Collector",
                usage: '<msg to collector>',
                cooldowns: 3,
                args: false,
                permissions: true,
                isUserAdmin: false
            },
        },

        EXPERIENCE: {
            ADDEXPERIENCE: {
                name: "addexperience",
                aliases: ['addexperience', 'addexp', 'addxp'],
                category: 'experience',
                description: "Ajouter de l'expérience à l'utilisateur",
                usage: '<@user> <exp to add>',
                cooldowns: 10,
                args: true,
                permissions: true,
                isUserAdmin: false
            },
            LEADERBOARD: {
                name: "leaderboard",
                aliases: ['leaderboard', 'leader', 'lb'],
                category: 'experience',
                description: "Affiche le leaderboard (top 10) de l'expérience du serveur",
                usage: '',
                cooldowns: 10,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            REMOVEEXPERIENCE: {
                name: "removeexperience",
                aliases: ['removeexperience', 'rmexp', 'rmxp'],
                category: 'experience',
                description: "Enlever de l'expérience à l'utilisateur",
                usage: '<@user> <exp to remove>',
                cooldowns: 10,
                args: true,
                permissions: true,
                isUserAdmin: false
            },
            USEREXPERIENCE: {
                name: "userexperience",
                aliases: ['userexperience', 'exp', 'xp'],
                category: 'experience',
                description: "Renvoi l'expérience de l'utilisateur",
                usage: '',
                cooldowns: 10,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
        },

        MISC: {
            AGENDA: {
                name: "agenda",
                aliases: ['agenda', 'calendrier'],
                category: 'misc',
                description: "Donne l'agenda",
                usage: '',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            ATTESTATION: {
                name: "attestation",
                aliases: ['attestation', 'attest'],
                category: 'misc',
                description: "Génère une attestation de déplacement pour le confinement",
                usage: '<prénom> | <nom> | <dd/mm/yyyy> | <ville de naissance> | <Votre Ville> | <adresse postale> | <code postal> | <sport_animaux/travail/achats/sante/famille/handicap/convocation/enfants> | <private/public>',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },

            ENCRYPT: {
                name: "encrypt",
                aliases: ['encrypt', 'enc'],
                category: 'misc',
                description: "Encrypte un message",
                usage: '<message> | <clé encryptage>',
                cooldowns: 5,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            DECRYPT: {
                name: "decrypt",
                aliases: ['decrypt', 'dec'],
                category: 'misc',
                description: "Decrypte un message",
                usage: '<message> | <clé décryptage>',
                cooldowns: 5,
                args: false,
                permissions: false,
                isUserAdmin: false
            },

            FIRE: {
                name: "fire",
                aliases: ['fire', 'feu'],
                category: 'misc',
                description: "Met le feu au serveur",
                usage: '<on/off>',
                cooldowns: 5,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            TRANSLATE: {
                name: "translate",
                aliases: ['translate', 'trad'],
                category: 'misc',
                description: "Donne la traduction d'un mot ou d'une phrase en anglais",
                usage: '<mot/phrase>',
                cooldowns: 5,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            REFRESH: {
                name: "refresh",
                aliases: ['refresh'],
                category: 'misc',
                description: "Actualise les données du serveur (DEV)",
                usage: '',
                cooldowns: 1,
                args: false,
                permissions: true,
                isUserAdmin: false
            },
            DICE: {
                name: "dice",
                aliases: ['dice', 'dé'],
                category: 'misc',
                description: "Renvoi la valeur de plusieurs dés!",
                usage: '',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            EIGHTBALL: {
                name: "8ball",
                aliases: ['8ball', 'ball'],
                category: 'misc',
                description: "Renvoi une réponse à une question",
                usage: '<question>',
                cooldowns: 4,
                args: true,
                permissions: false,
                isUserAdmin: false
            },
            AMAZON: {
                name: "amazon",
                aliases: ['amazon', 'ama'],
                category: 'misc',
                description: "Affiche les détails d'un lien amazon",
                usage: '<url>',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            HELP: {
                name: "help",
                aliases: ['help', 'aide'],
                category: 'misc',
                description: "Renvoie une liste de commande ou les information sur une commande précise",
                usage: '<nom commande>',
                cooldowns: 5,
                args: false,
                permissions: false,
                isUserAdmin: false
            },

            PING: {
                name: "ping",
                aliases: ['ping', 'pg'],
                category: 'misc',
                description: "Donne le ping du serveur",
                usage: '',
                cooldowns: 10,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            POLL: {
                name: "poll",
                aliases: ['poll', 'pll'],
                category: 'misc',
                description: "Renvoi un sondage",
                usage: '<sondage>',
                cooldowns: 10,
                args: true,
                permissions: false,
                isUserAdmin: false
            },
            SAY: {
                name: "say",
                aliases: ['tell', 'repeat'],
                category: 'misc',
                description: "Répète le message d'un utilisateur",
                usage: '<votre message>',
                cooldowns: 20,
                args: true,
                permissions: false,
                isUserAdmin: false
            },
            SERVERINFO: {
                name: "serverinfo",
                aliases: ['serverinfo', 'info', 'server'],
                category: 'misc',
                description: "Renvoi des informations concernant le serveur",
                usage: '',
                cooldowns: 4,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            SPAM: {
                name: "spam",
                aliases: ['spam', 'blackeagle1739'],
                category: 'misc',
                description: "Une commande a utilisé à vos risques et périls",
                usage: '',
                cooldowns: 0,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            STATS: {
                name: "stats",
                aliases: ['stats'],
                category: 'misc',
                description: "Renvoi des statistiques",
                usage: '',
                cooldowns: 4,
                args: false,
                permissions: false,
                isUserAdmin: false
            },

            UPTIME: {
                name: "uptime",
                aliases: ['up', 'time'],
                category: 'misc',
                description: "Donne la durée depuis laquelle le bot a été lancé",
                usage: '',
                cooldowns: 0,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            USERINFO: {
                name: "userinfo",
                aliases: ['userinfo', 'user'],
                category: 'misc',
                description: "Renvoi des informations concernant un utilisateur (ou vous même)!",
                usage: '[<utilisateur mentionné>]',
                cooldowns: 4,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            WEATHER: {
                name: "weather",
                aliases: ['weather', 'météo', 'meteo', 'méteo', 'metéo'],
                category: 'misc',
                description: "Renvoi des informations concernant la météo !",
                usage: '<lieu pour la météo>',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
        },


        MODERATION: {
            BAN: {
                name: "ban",
                aliases: ['ban', 'bn', 'poutre'],
                category: 'moderation',
                description: "Ban un utilisateur",
                usage: '<@utilisateur> <raison du ban>',
                cooldowns: 0,
                args: true,
                permissions: true,
                isUserAdmin: true
            },
            BANWORD: {
                name: "banword",
                aliases: ['banword', 'bwl', 'banwordactivation'],
                category: 'moderation',
                description: "Permet d'activer la liste de mot bannis (Setup sur dashboard)",
                usage: '',
                cooldowns: 5,
                args: false,
                permissions: true,
                isUserAdmin: false
            },
            BRING: {
                name: "bring",
                aliases: ['bring','Bring', 'bg'],
                category: 'moderation',
                description: "Déplace un utilisateur dans votre channel vocal",
                usage: '<@Utilisateur>',
                cooldowns: 0,
                args: true,
                permissions: true,
                isUserAdmin: false
            },
            FOLLOW: {
                name: "follow",
                aliases: ['follow','Follow', 'folw'],
                category: 'moderation',
                description: "Te permet de suivre un utilisateur quand il change de channel vocal ou inversement",
                usage: '<@utilisateur> <GOTO/BRING>',
                cooldowns: 0,
                args: true,
                permissions: true,
                isUserAdmin: false
            },
            GOTO: {
                name: "goto",
                aliases: ['goto','gotto', 'gto'],
                category: 'moderation',
                description: "Vous déplace dans le channel vocal d'un utilisateur",
                usage: '<@Utilisateur>',
                cooldowns: 0,
                args: true,
                permissions: true,
                isUserAdmin: false
            },
            KICK: {
                name: "kick",
                aliases: ['kick', 'kck', 'bye'],
                category: 'moderation',
                description: "Expulse un utilisateur",
                usage: '<@utilisateur> <raison du kick>',
                cooldowns: 0,
                args: true,
                permissions: true,
                isUserAdmin: true
            },

            MUTE: {
                name: "mute",
                aliases: ['mute', 'mut', 'chut'],
                category: 'moderation',
                description: "Mute un utilisateur",
                usage: '<@utilisateur> <temps>',
                cooldowns: 0,
                args: true,
                permissions: true,
                isUserAdmin: true
            },
            MUTEALL: {
                name: "muteAll",
                aliases: ['muteAll','muteall', 'allmute'],
                category: 'moderation',
                description: "Mute tous les utilisateurs d'un serveur",
                usage: '<temps>',
                cooldowns: 0,
                args: true,
                permissions: true,
                isUserAdmin: false
            },
            REPORT: {
                name: "report",
                aliases: ['report', 'rep', 'signaler'],
                category: 'moderation',
                description: "Reporter un utilisateur",
                usage: '<@utilisateur> <id du message> <raison>',
                cooldowns: 10,
                args: true,
                permissions: false,
                isUserAdmin: true
            },
            UNBAN: {
                name: "unban",
                aliases: ['unban', 'unbn', 'deban'],
                category: 'moderation',
                description: "Unban un utilisateur",
                usage: '<user_id>',
                cooldowns: 0,
                args: true,
                permissions: true,
                isUserAdmin: false
            },
            UNFOLLOW: {
                name: "unfollow",
                aliases: ['unfollow','unFollow', 'unfolw'],
                category: 'moderation',
                description: "Te permet d'arrêter de suivre quelqu'un",
                usage: '',
                cooldowns: 0,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            UNMUTE: {
                name: "unmute",
                aliases: ['unmute', 'umte'],
                category: 'moderation',
                description: "Unmute un utilisateur",
                usage: '<@utilisateur>',
                cooldowns: 0,
                args: true,
                permissions: true,
                isUserAdmin: true
            },
            UNMUTEALL: {
                name: "unmuteAll",
                aliases: ['unmuteAll','unmuteall', 'umteAll'],
                category: 'moderation',
                description: "Unmute tous les utilisateurs",
                usage: '',
                cooldowns: 0,
                args: false,
                permissions: true,
                isUserAdmin: false
            },
            DEWARN: {
                name: "dewarn",
                aliases: ['dewarn', 'unwarn'],
                category: 'moderation',
                description: "Dewarn un utilisateur",
                usage: '<@utilisateur>',
                cooldowns: 0,
                args: true,
                permissions: true,
                isUserAdmin: true
            },
            WARN: {
                name: "warn",
                aliases: ['warn', 'wrn'],
                category: 'moderation',
                description: "Warn un utilisateur",
                usage: '<@utilisateur>',
                cooldowns: 0,
                args: true,
                permissions: true,
                isUserAdmin: true
            },
            WARNLIST: {
                name: "warnlist",
                aliases: ['warnlist', 'wl'],
                category: 'moderation',
                description: "Donne les warn d'un utilisateur",
                usage: '<@utilisateur>',
                cooldowns: 0,
                args: true,
                permissions: false,
                isUserAdmin: false
            }
        },
        MUSIC: {
            FORCESKIP: {
                name: "forceskip",
                aliases: ['forceskip', 'fskip'],
                category: 'music',
                description: "Permet de forcer le skip",
                usage: '',
                cooldowns: 1,
                args: false,
                permissions: true,
                isUserAdmin: false
            },
            JOIN: {
                name: "join",
                aliases: ['join', 'j'],
                category: 'music',
                description: "Fait que le bot rejoint le salon vocal",
                usage: '',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            LEAVE: {
                name: "leave",
                aliases: ['leave', 'l', 'stop'],
                category: 'music',
                description: "Fait que le bot quitte le salon vocal",
                usage: '',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            PAUSE: {
                name: "pause",
                aliases: ['pause'],
                category: 'music',
                description: "Met en pause la musique",
                usage: '',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            PLAY: {
                name: "play",
                aliases: ['play', 'p'],
                category: 'music',
                description: "Joue de la musique",
                usage: '<nom de la musique>',
                cooldowns: 1,
                args: true,
                permissions: false,
                isUserAdmin: false
            },
            QUEUE: {
                name: "queue",
                aliases: ['queue', 'q'],
                category: 'music',
                description: "Permet de voir les musiques en queue",
                usage: '',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            QUEUEREPEAT: {
                name: "queuerepeat",
                aliases: ['loop', 'queuerepeat', 'qtrack', 'qt', 'repeatqueue'],
                category: 'music',
                description: "Met la queue en boucle",
                usage: '',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            RESUME: {
                name: "resume",
                aliases: ['resume'],
                category: 'music',
                description: "Remet la musique en route",
                usage: '',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            SKIP: {
                name: "skip",
                aliases: ['skip', 's'],
                category: 'music',
                description: "Permet de passer la musique actuellement jouée",
                usage: '',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            TRACKREPEAT: {
                name: "trackrepeat",
                aliases: ['trackrepeat', 'rtrack', 'rt', 'repeattrack'],
                category: 'music',
                description: "Met la track en boucle",
                usage: '',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },
            VOLUME: {
                name: "volume",
                aliases: ['volume', 'v'],
                category: 'music',
                description: "Permet de modifier le volume",
                usage: '<volume>',
                cooldowns: 1,
                args: false,
                permissions: false,
                isUserAdmin: false
            },

        },

        ROLES: {
            ACCESS: {
                name: "access",
                aliases: ['access','joinRole'],
                category: 'roles',
                description: "Envoie un embed dans le channel \"AccesChannel\" avec une emote pour donner accès au serveur en attribuant le role \"AccesRole\"",
                usage: '<Titre Embed> | <Description Embed> | <Embed Color (hexa)> | <emoteID>',
                cooldowns: 5,
                args: false,
                permissions: true,
                isUserAdmin: false
            },
            ROLEEMBED: {
                name: "roleembed",
                aliases: ['roleembed', 'rolescreate'],
                category: 'roles',
                description: "Créer un embed permettant d'ajouter des roles par emojis",
                usage: '',
                cooldowns: 5,
                args: false,
                permissions: true,
                isUserAdmin: false
            },
        },

        UTILS: {
            CLEAR: {
                name: "clear",
                aliases: ['clear', 'clr', 'clean', 'purge'],
                category: 'utils',
                description: "Supprime un nombre de message donné",
                usage: '<nombre de message>',
                cooldowns: 0,
                args: true,
                permissions: true,
                isUserAdmin: false
            },

            PRUNE: {
                name: "prune",
                aliases: ['prune', 'prn', 'idclear', 'idclean', 'idcln', 'idclr'],
                category: 'utils',
                description: "Supprime un nombre de message donné pour un personne donnée",
                usage: '<@utilisateur> <nombre de message>',
                cooldowns: 5,
                args: true,
                permissions: true,
                isUserAdmin: true
            }
        }
    }
}

exports.MESSAGES = MESSAGES;