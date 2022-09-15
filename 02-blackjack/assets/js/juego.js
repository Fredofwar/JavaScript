/**
 * 2C = two of Clubs (tréboles)
 * 2D = two of Diamonds (diamantes)
 * 2H = two of Hearts (corazones)
 * 2S = two of Spades (espadas)
 */

//Patron modulo
const miModulo = (() => { //funcion anonima autoinvocada 
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];
    
    //Referencias de html
    const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosTag = document.querySelectorAll('small');


    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();

        puntosJugadores = [];
        for(let i=0; i<numJugadores; i++){
            puntosJugadores.push(0);
        }
        
        puntosTag.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;

        //location.reload();      
    }

    //Esta funcion crea un nuevo deck
    const crearDeck = () => { 
        deck = [];
        for( let i =2; i <= 10; i++ ){
            for(let tipo of tipos){
                deck.push(i + tipo); 
            }
        }

        for(let tipo of tipos){
            for(let esp of especiales){
                deck.push(esp + tipo); 
            }
        }
        return  _.shuffle( deck ); //libreria underscore
    }

    //Esta funcion me permite tomar una carta
    const pedirCarta = () => {
        if( deck.length === 0 ){
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1); 
        return ( isNaN( valor ) ) ? ( valor === 'A' ) ? 11 : 10 : valor * 1;
    }

    //Turno: 0 = primer jugador y ultimo sera la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosTag[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }
    
    const crearCarta = (carta, turno) => {
        const imgCarta =  document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append( imgCarta );
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora ] = puntosJugadores;
        setTimeout(() => {
            if( puntosComputadora === puntosMinimos ){
                alert('Nadie gana!!');
            }else if( puntosMinimos > 21 ){
                alert('Computadora gana!!');
            }else if(puntosComputadora > 21){
                alert('Jugador gana!!');
            }else{
                alert('Computadora gana!!');
            }
            }, 10);
    }

    //turno de la computadora
    const turnoComputadora = ( puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
        determinarGanador();
    }


    //Eventos
    btnPedir.addEventListener('click', () => { //function que se manda como argumento (callback)
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        
        crearCarta(carta, 0);

        if( puntosJugador > 21){
            console.warn('Lo siento, has perdido!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
        }else if ( puntosJugador === 21){
            console.warn('Genial 21');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugadores[0] );
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();

    });

    return {
        nuevoJuego: inicializarJuego
    };

})();


//( function() {
//})();

