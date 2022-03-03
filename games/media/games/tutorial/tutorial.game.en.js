// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
       "<h1>LA DECISIÓN</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Eres jugador del Real Madrid que durante el entrenamiento previo a la final de la Champions League\
		sientes un pinchazo en el abductor, en ese momento decides <a href='entrenar'>seguir entrenando</a>\
		o <a href='hablar'>hablar con el mister</a></p>\
         \
        <p class='transient'></p>"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
   
	
	 entrenar: new undum.SimpleSituation(
        "<h1>Seguir entrenando</h1>\
		<p>A pesar del pinchazo, no quieres perderte un partido tan importante como es una final, por eso decides\
		no decirselo a nadie y seguir entrenando con la mayor precaución posible sin que agrave la lesión.\
		Una vez acabado el entrenamiento, <a href='irfisio'>vas al fisio</a> o <a href='aguafria'>mertete directamente\
		en baño de agua fria</a></p>\ ",
    ),

	 hablar: new undum.SimpleSituation(
	  "<h1>Hablar con el entrenador</h1>\
        <p>Consideras que si no estás al 100% parajugar, es perjudicial para el equipo, por ese motivo te\
		acercas al entrenador y le cuentas que has sentido un pinchazo en el abductor y no te encuentras\
		disponible para ayudar al equipo con tu máximo nivel.\
	    El entrenador no quiere correr riesgos en un partido tan importante y decide que no vas a jugar.\
	    Tú entiendes su decisión y aunque estes triste pero te encuentras un poco animado por proder ganar un torneo.\
		Desde la grada, ves como tu equipo se queda campeón y te vienes abajo sin importarte si habias jugado o no\
		tú ya eras un campeón de la Champions League y sabes que una vez llegar a casa, vas a celebrarlo por\
		todo lo alto con tu familia.</p>\
		<h1>FIN</h1>\ ",

    ),
	
	 irfisio: new undum.SimpleSituation(
	  "<h1>Ir al fisio</h1>\
        <p>Después de entrenar, decides ir al fisio a que te realizan la descarga posterior al entrenamiento.\
		Durante el masaje el fisio nota algo raro en tu abductor y se da cuenta que no está en las condiciones que \
		debería estar. En ese momento <a href='pedir'>le pides que no diga nada</a> o <a href='aguafria'>\
		que considere hablar con el entrenador</a> por si puede aumentar la lesion</p>\ ",

    ),
   

};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */

