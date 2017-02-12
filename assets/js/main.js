$(function(){
    var character_types = ['scout', 'strategy', 'art', 'craft', 'magic'];
    window.character_types = character_types;
    widnow.characters = {
       scout: {
           type: character_types[0],
           description: "Scouter here will be your go to guy to all things new in the world of web development. With his help we will be able to find out about new and upcoming technologies which we will than leverage to create up to date proof of concepts for you."
           stats: { front_end: 2.5, back_end: 2.5, client_side: 2.5, server_side: 2.5, ux_mana: 2.5, ui_mana: 2.5}
       },
       strategy: {
           type: character_types[1],
           description: "Captain rick, our stratigest will make sure your site reaches as much people computerly possible by creating epic advertisement campaigns for your company."
           stats: { front_end: 2.5, back_end: 2.5, client_side: 2.5, server_side: 2.5, ux_mana: 2.5, ui_mana: 2.5}
       },
       art: {
           type: character_types[2],
           description: "A leader of his own, our designer and 'arteest' Dhruvil knows how to bring even the dullest of blades to a fiery beautifull sword of epic poportions."
           stats: { front_end: 2.5, back_end: 2.5, client_side: 2.5, server_side: 2.5, ux_mana: 2.5, ui_mana: 2.5}
       },
       craft: {
           type: character_types[3],
           description: "Dont let his silence fool you! Danny our developer knows how to take any schematic whether its how to bake bread to building the hadron collider he will make it happen."
           stats: { front_end: 2.5, back_end: 2.5, client_side: 2.5, server_side: 2.5, ux_mana: 2.5, ui_mana: 2.5}
       },
       magic: {
           type: character_types[4],
           description: "No one knows how he does it, but Paul our systems admin will make sure your servers are up and running fortefied and ready to be tested agaisnt the harshes of forces."
           stats: { front_end: 2.5, back_end: 2.5, client_side: 2.5, server_side: 2.5, ux_mana: 2.5, ui_mana: 2.5}
       }
    }
});