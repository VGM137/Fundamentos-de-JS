/* El asinconismo en JS consiste en que una vez que se lleven a cabo las funciones que está corriendo el programa se llame a la o las funsioines que están en cola por medio de setTimeout*/
console.log('a')
setTimeout(() => console.log('b'), 2000) /* El tiempo en JavaScript se mide en milisegundo */
console.log('c')