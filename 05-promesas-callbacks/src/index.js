import { buscarHeroe, promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
import { buscarHero, buscarHeroeAsync } from './js/promesas';
import {obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } from './js/await';

// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );


// Promise.race([ promesaLenta, promesaMedia, promesaRapida])
//     .then( console.log )
//     .catch( console.warn);


// buscarHeroe('capi2')
//     .then( heroe => console.log(heroe))
//     .catch( console.warn );
// buscarHeroeAsync('iron2')
//     .then( heroe => console.log(heroe))
//     .catch( console.warn );

// obtenerHeroesArr().then( console.table );

// obtenerHeroeAwait('capi2')
//     .then( heroe => {
//         console.log( heroe );
//         console.timeEnd('await');
//     }).catch( console.warn );

heroesCiclo();
heroeIfAwait('iron');









