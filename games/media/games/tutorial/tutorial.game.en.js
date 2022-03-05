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
        <img src='media/games/tutorial/futbol1.png' class='float_right'>\
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
	  	<img src='media/games/tutorial/fisio.jpg' class='float_right'>\
        <p>Decides ir al fisio a que te realizan la descarga posterior al entrenamiento.\
		Durante el masaje el fisio nota algo raro en tu abductor y se da cuenta que no está en las condiciones que \
		debería estar. En ese momento <a href='pedir'>le pides que no diga nada</a> o <a href='decir'>\
		que considere hablar con el entrenador</a> por si puede aumentar la lesion</p>\ ",

    ),
	
		aguafria: new undum.SimpleSituation(
	  "<h1>BAÑO DE AGUA FRIA</h1>\
	  <img src='media/games/tutorial/aguafria.jpg' class='float_right'>\
		<p>Consideras que nadie debería saber que te has lesionado en el entrenamiento, por lo que decides ir directo\
		al baño de agua fria y esperar que se te alivie la lesión en el medio dia que queda, pero piensas que sin sesiones\
		de fisio no vas a llegar ni rezando, por lo que sin más remedio <a href='irfisio'> vas al fisio</a></p>\ ",

    ),
   
   	 pedir: new undum.SimpleSituation(
	  "<h1>PEDIR QUE NO DIGA NADA</h1>\
		<p>Llegó la hora de dormir y nadie se ha enterado excepto el fisio que estás con molestias el dia anterior al partido.\
		 Pero sientes que no es lo mejor para el equipo por eso se lo dices a tu compañero de habitación.\
		Él te comprende, a pesar de que pueda suponer quedarse  él en el banquillo. Por eso le dices que esté\
		preparado en todo momento por si tú no decides continuar.</p>\
		<br/>\
		<p>Son las 18.00h, momento en el que cogeis el autobus para ir al estadio.Durante el trayecto <a href='musica'>te pones\
		música</a> o <a href='concentracion'>	no escuchar nada y concentarte lo máximo posibler</a></p>\ ",

    ),
	
	  musica: new undum.SimpleSituation(
	  "<h1>MÚSICA</h1>\
		<p>Decides ponerte música para entrar en el estadio con la mayor motivación posible y olvidarte del pinchazo\
		que te dió en el último entrenamiento.</p>\
		<br/>\
		<p>Son las 19.00 y bajas del autobus para entar en el estadio con tu música motivadora.  Antes de entrar en el \
		estadio decides <a href='cortar'> cortar la música para escuchar a los aficionados </a> o <a href='seguir'> sigues con la\
		música para no distraerte </a></p>\ ",
		
    ),
	
	concentracion: new undum.SimpleSituation(
	  "<h1>CONCENTRACIÓN</h1>\
		<p>Decides no ponerte múcia y dejar tu mente en blanco, olvidarte de tu pinchazo y visualizar las posibles\
		acciones que podrías realizar en el partido..</p>\
		<br/>\
		<p>Son las 19.00 y bajas del autobus para entar en el estadio. Antes de entrar en el estadio escuchas \
		como un un niño te llama, y <a href='acercar'> te acercas al pequeño </a> o <a href='seguir'> pasas sin pararte</a>\
		con la idea de desconcentrarte lo menos posibles</p>\ ",
		
    ),
	
	cortar: new undum.SimpleSituation(
	  "<h1>CORTAR LA MÚSICA</h1>\
		<p>Has decidido quitarte los auriculares y escuchar la animación de la grada, en ese momento escuchas que\
		te llama	una familia para hablar con un niño. En ese momento <a href='acercar'> te acercas al pequeño </a> o <a href='seguir'> pasas sin pararte </a>\
		con la idea de desconcentrarte lo menos posibles</p>\ ",
		
    ),
	
	acercar: new undum.SimpleSituation(
	  "<h1>ACERCARSE AL PEQUEÑO</h1>\
		<p>Al observar que es un niño pequeño, decides acercarte aunque puedas perder un poco la concentración.\
		Mientras hablas con él y te haces algunas fotografías, el niño en cuestión te pide que si marcas le dediques\
		el gol realizando el gesto que el niño dice\
		Una vez acabado decides <a href='entrar'> entrar en el estadio..</a></p>\ ",
		
    ),
	
	seguir: new undum.SimpleSituation(
	  "<h1>NO PERDER LA CONCENTRACIÓN</h1>\
		<p>No quieres perder la concentración del partido, por ello, y aunque algunos compañeros tuyos \
		se paren con los aficionados, tú has decidido <a href='entrar'> entrar al estadio</a> con la máxima concentracIón</p>\ ",
		
    ),
	
	entrar: new undum.SimpleSituation(
	  "<h1>ENTRADA AL ESTADIO</h1>\
		<p>Te encuentras ya en el estadio realizando el calentamiento.\
		A pesar del medio dia de descanso y de la sesiones de fisio sigues con la molesta en el abductor, las cuales\
		no te van a dejar rendir al 100%, pero sigues pensando que en un partido tan grande no puedes permitir perderlo\
		por una pequeña lesión.</p>\
		<br/>\
		<p>En ese momento tienes las opciones de: <a href='decir'> acercarte y decírselo al entrenador </a> o <a href='confiar'>\
		ir al fisio que confiastes y que te dé una última sesión </a></p>\ " ,
		
    ),
	
		
	confiar: new undum.SimpleSituation(
	  "<h1>ÚLTIMA SESIÓN FISIO</h1>\
		<p>Termina el calentamiento y te diriges al fisio a que te de un último masaje para poder aliviar un poco el dolor\
		y que te realice un vendaje de compresión lo más eficaz posible.\
		Una vez acabado el masaje express, te proprone que si marcas te acerques a él y se lo dediques. Tú aceptas la propuesta.</p>\
		<br/>\
		<p>Te diriges de la zona de fisios al vestuario pra recibir la última charla del entrenador y salir a jugar al campo.</p>\
		<br/>\
		<p><a href='partido'>Salir a jugar... </a></p>\ " ,
		
    ),
	
	decir: new undum.SimpleSituation(
	  "<h1>DECISIÓN DEL ENTRENADOR</h1>\
		<p>El entrenador te comunica su decisión consesuada por el cuerpo técnico y los fisios, la cuál es dejarte sin jugar\
		para no aumentar el riesgo de tener una lesión de gravedad.\
		Tú entiendes su decisión y aunque estes triste pero te encuentras un poco animado por proder ganar un torneo.</p>\
		<br/>\
		<p>Desde la grada, ves como tu equipo se queda campeón y empiezas a llores sin importarte si habias jugado o no,\
		tú ya eras un campeón de la Champions League y sabes que una vez llegar a casa, vas a celebrarlo por\
		todo lo alto con tu familia.</p>\
		<h1>FIN</h1>\ " ,
    ),
	
	
	
	partido: new undum.SimpleSituation(
	  "<h1>ENTRADA AL ESTADIO</h1>\
		<p>Ronda el minuto 66, cuando te cae un balón en el área y sin pensartelo dos veces le pegas para poner el 1-0 en el marcador.\
		En ese momento tienes las opciones de: <a href='fisio'>	te diriges al banquillo y te abrazas con el fisio </a> o \
		<a href='fisioo'> te vas al corner y haces la celebración del niño </a></p>\ " ,
		
    ),

	fisioo: new undum.SimpleSituation(
	  "<h1>GOL</h1>\
		<p>Con la emoción del gol se te olvida dedicarselo al fisio pero se te viene a la cabeza el momento en el que el pequeño\
	     te dijo como celebralo y sin pensartelo dos veces te vas en bucar de una cámara y se lo dedicas con su gesto.</p>\
		<br/>\
		<p>Con ese gol termina el prtido y sois CAMPEONES de la Champions 30 años después.\
		Durante la celebración le pides perdón al fisio y le das las gracias por lo que hizo por tí y le prometes que al siguiente\
		año el gol va para él..</p>\
		<h1>FIN</h1>\ " ,
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

