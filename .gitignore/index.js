const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);
var parler = true;
var nbplayermin = 5; //nombre minimum de joueurs pour commencer une partie
var nbjoueurs = 0;
var partielance = false; //pour savoir si une partie est lancée ou non
var nuit = false; //Fait il nuit ou jour.
var nbVillageois = 0;
var nbLg = 0;

function BootGame(){
    bot.channels.get('674912426872799252').bulkDelete(100);
    bot.channels.get('674912426872799252').send('Partie prête ! Pour jouer cette partie, vous devez réagir avec l\'emoji ✅. Vous devez être au minimum **5 joueurs** pour que la partie puisse se lancer.');

    nbjoueurs = 0;
    nbLg = 0;
    nbVillageois = 0;
    bot.user.setActivity("Loup Garou v1.0 | En développement");
}



bot.on('ready', () => {
    bot.user.setActivity("Loup Garou v1.0 | En développement");
    console.log('Le bot est prêt pour être utilisé !');
    RebootGame();
});
/**bot.on('messageReactionAdd', message => {

        nbjoueurs++;
        message.channel.send('**' + react.author+'** à rejoint la partie !')

    
}
)**/

bot.on('message', message => {

    if (message.channel.id == "674912426872799252") {
        if (partielance === false) {
            if (message.author.id == "674909463026860042") {

        
                message.react("✅");

            }
        }
    }
});
bot.on('message', message => {

    if (!partielance) {
        if (message.channel.id == "674912426872799252" || message.channel.id == "674910769426726922" || message.channel.id == "674910821251416068" || message.channel.id == "674910917728927754" || message.channel.id == "674912450000322560" || message.channel.id == "674920254727782411" || message.channel.id == "674957051402911796") {
            if (message.author.id != "674909463026860042") {
                message.channel.bulkDelete(1);
                message.author.send('La partie n\'a pas encore commencé, vous ne pouvez pas parler dans les channels pour l\'instant');
            }
        }
    }
});
//infos
bot.on('message', message => {

    if (message.content === '_info') {
        message.react("🐺")
        message.channel.send('```Mon créateur : Wukimos#0762\n Ma version ! 1.0 \n Je suis actuellement en développement !```');

    }
});
bot.on('message', message => {

    if (message.content === '_reboot') {
        message.react("🐺")
        message.channel.send('La partie se reboot dans quelques instants ...');
        RebootGame();

    }
});
//pour savoir les roles
bot.on('message', message => {

    if (message.content === '_help roles') {
        if (message.channel.id == "674911264480428055") {
            message.react("🐺")
            message.channel.send('Voici les rôles : \n **Fou** : Si il se fait tuer par le vote des villageois, il gagne la partie !\n\n**Villageois** : Le rôle du villageois est de éliminer tout les loups garous.\n\n**Tireur** : Il a 1 balle dans son pistolet et doit tirer sur un loup garou. Il doit gagner avec les villageois. \n\n **La petite fille** : Elle doit aider les villageois et peut entendre la discussion des loups garous. \n\n**Cupidon**: Au début de la partie, il doit marier 2 personnes de son choix. Si une de ses personnes meurt, l\'autre aussi ! \n\n**Voyante** : chaque nuit, elle peut regarder le role d\'un joueur, ellle doit aider le village à gagner. \n\n**Chaman** : il peut parler avec les morts. Une fois par partie, il peut réanimer quelqu\'un.\n\n Au début d\'une partie, votre role sera révélé en DM.');
        }
        else {
            message.channel.bulkDelete(1);
            message.author.send('Cette commande doit-être utilisé dans le channel **#commande-bot** de la catégorie **Loup-Garou**')
        }
    }
});
//pour savoir les règles
bot.on('message', message => {

    if (message.content === '_help règles') {
        if (message.channel.id == "674911264480428055") {
            message.react("🐺")
            message.reply('Le but du jeu est que les villageois doivent tuer les loups garous. Chaque nuit, les loups garous vote une personne à tuer. Pour connaitres les roles, tapez **_help roles**');
        }
        else {
            message.channel.bulkDelete(1);
            message.author.send('Cette commande doit-être utilisé dans le channel **#commande-bot** de la catégorie **Loup-Garou**')
        }
    }

});


function RebootGame(){
    bot.user.setActivity('Reboot de la partie en cours ...')
    //Efface les messages dans village
    bot.channels.get('674912426872799252').bulkDelete(100);
    bot.channels.get('674912426872799252').bulkDelete(100);
    //Efface les messages dans voyante
    bot.channels.get('674910769426726922').bulkDelete(100);
    bot.channels.get('674910769426726922').bulkDelete(100);
    //Efface les messages dans sorciere
    bot.channels.get('674912450000322560').bulkDelete(100);
    bot.channels.get('674912450000322560').bulkDelete(100);
    //Efface les messages dans loups garous
    bot.channels.get('674910917728927754').bulkDelete(100);
    bot.channels.get('674910917728927754').bulkDelete(100);
    //Efface les messages dans tireur
    bot.channels.get('674957051402911796').bulkDelete(100);
    bot.channels.get('674957051402911796').bulkDelete(100);
    //Efface les messages dans médium
    bot.channels.get('674920254727782411').bulkDelete(100);
    bot.channels.get('674920254727782411').bulkDelete(100);
    //Efface les messages dans cupidon
    bot.channels.get('674910821251416068').bulkDelete(100);
    bot.channels.get('674910821251416068').bulkDelete(100);
    BootGame();
}
